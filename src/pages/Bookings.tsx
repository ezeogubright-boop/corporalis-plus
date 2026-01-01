import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Booking {
  id: number;
  icon: string;
  iconBg: string;
  title: string;
  coach: string;
  statusLabel: string;
  statusClass: string;
  time: string;
  location: string;
  duration: string;
  level: string;
  actionType: 'upcoming' | 'completed';
}

export const Bookings: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const navigate = useNavigate();

  const upcomingBookings: Booking[] = [
    {
      id: 1,
      icon: 'bx bx-dumbbell',
      iconBg: 'bg-orange-500/20',
      title: 'Upper Body Strength Training',
      coach: 'Coach Sarah Williams',
      statusLabel: 'Today',
      statusClass: 'status-today',
      time: '6:00 PM',
      location: 'Gym A - Studio 1',
      duration: '60 min',
      level: 'Intermediate',
      actionType: 'upcoming'
    },
    {
      id: 2,
      icon: 'bx bx-run',
      iconBg: 'bg-blue-500/20',
      title: 'Cardio Blast HIIT Session',
      coach: 'Coach John Smith',
      statusLabel: 'Tomorrow',
      statusClass: 'status-upcoming',
      time: '7:00 AM',
      location: 'Gym B - Main Studio',
      duration: '45 min',
      level: 'Advanced',
      actionType: 'upcoming'
    },
    {
      id: 3,
      icon: 'bx bx-leaf',
      iconBg: 'bg-green-500/20',
      title: 'Yoga & Flexibility',
      coach: 'Coach Emma Davis',
      statusLabel: 'Dec 28',
      statusClass: 'status-upcoming',
      time: '5:00 PM',
      location: 'Studio A - Yoga Room',
      duration: '50 min',
      level: 'Beginner',
      actionType: 'upcoming'
    }
  ];

  const completedBookings: Booking[] = [
    {
      id: 4,
      icon: 'bx bx-check',
      iconBg: 'bg-green-500/20',
      title: 'Upper Body Strength',
      coach: 'Coach Sarah Williams',
      statusLabel: 'Dec 24',
      statusClass: 'status-completed',
      time: '6:00 PM',
      location: 'Gym A - Studio 1',
      duration: '50 min',
      level: '5/5 stars',
      actionType: 'completed'
    },
    {
      id: 5,
      icon: 'bx bx-check',
      iconBg: 'bg-green-500/20',
      title: 'Fitness Assessment',
      coach: 'Coach Alex',
      statusLabel: 'Dec 20',
      statusClass: 'status-completed',
      time: '2:00 PM',
      location: 'Gym B - Assessment Room',
      duration: '30 min',
      level: '5/5 stars',
      actionType: 'completed'
    }
  ];

  const allBookings = [...upcomingBookings, ...completedBookings];

  const filteredBookings = 
    filter === 'All' ? allBookings :
    filter === 'Upcoming' ? upcomingBookings :
    completedBookings;

  const upcomingCount = upcomingBookings.length;
  const completedCount = completedBookings.length;
  const allCount = allBookings.length;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authProvider');
    localStorage.removeItem('userData');
    setShowLogoutModal(false);
    navigate('/login');
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 dark:opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        color: isDark ? '#ffffff' : '#000000'
      }}></div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl font-display font-bold text-primary">Corporalis</h1>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {[
                { icon: 'bx bx-layout', label: 'Dashboard', path: '/dashboard' },
                { icon: 'bx bx-calendar', label: 'Bookings', path: '/bookings', active: true },
                { icon: 'bx bx-list-ul', label: 'My Programs', path: '/my-programs' },
                { icon: 'bx bx-trending-up', label: 'Progress', path: '/progress' },
                { icon: 'bx bx-message', label: 'Messages', path: '/messages' },
                { icon: 'bx bx-target-lock', label: 'Goals', path: '/goals' },
                { icon: 'bx bx-cog', label: 'Settings', path: '/settings' }
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-primary/20 text-primary font-semibold'
                      : 'text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-lg transition-colors"
            >
              <i className="bx bx-log-out text-xl"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <div className="bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 lg:hidden">
                <button
                  onClick={toggleMobileSidebar}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <i className="bx bx-menu text-2xl text-text-main-light dark:text-text-main-dark"></i>
                </button>
                <h2 className="text-xl font-display font-bold text-text-main-light dark:text-text-main-dark">Bookings</h2>
              </div>
              <div className="hidden lg:block">
                <h2 className="text-xl font-display font-bold text-text-main-light dark:text-text-main-dark">Bookings</h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'} text-xl text-text-main-light dark:text-text-main-dark`}></i>
                </button>
                <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="bx bx-user text-primary text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {sidebarOpen && (
            <div className="lg:hidden absolute left-0 top-16 w-64 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 z-50 max-h-[calc(100vh-64px)] overflow-y-auto">
              <nav className="p-4 space-y-2">
                {[
                  { icon: 'bx bx-layout', label: 'Dashboard', path: '/dashboard' },
                  { icon: 'bx bx-calendar', label: 'Bookings', path: '/bookings', active: true },
                  { icon: 'bx bx-list-ul', label: 'My Programs', path: '/my-programs' },
                  { icon: 'bx bx-trending-up', label: 'Progress', path: '/progress' },
                  { icon: 'bx bx-message', label: 'Messages', path: '/messages' },
                  { icon: 'bx bx-target-lock', label: 'Goals', path: '/goals' },
                  { icon: 'bx bx-cog', label: 'Settings', path: '/settings' }
                ].map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-primary/20 text-primary font-semibold'
                        : 'text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <i className="bx bx-log-out text-xl"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    Your Bookings
                  </h1>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-6 py-3 rounded-lg transition-all">
                  <i className="bx bx-plus text-lg"></i>
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-3 mb-8 flex-wrap">
                <button
                  onClick={() => setFilter('All')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm ${
                    filter === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-text-main-light dark:text-text-main-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All ({allCount})
                </button>
                <button
                  onClick={() => setFilter('Upcoming')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm ${
                    filter === 'Upcoming'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-text-main-light dark:text-text-main-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
                <button
                  onClick={() => setFilter('Completed')}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm ${
                    filter === 'Completed'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-text-main-light dark:text-text-main-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Completed ({completedCount})
                </button>
              </div>

              {/* Upcoming Bookings Section */}
              {(filter === 'All' || filter === 'Upcoming') && upcomingBookings.length > 0 && (
                <section className="mb-12">
                  <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                    Upcoming Bookings
                  </h3>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking, idx) => (
                      <div
                        key={booking.id}
                        className={`booking-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-${idx * 100} hover:shadow-xl transition-shadow`}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                          <div className="flex gap-4 flex-1">
                            <div className={`w-12 h-12 ${booking.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <i className={`${booking.icon} ${booking.iconBg.includes('orange') ? 'text-orange-500' : booking.iconBg.includes('blue') ? 'text-blue-500' : 'text-green-500'} text-2xl`}></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-display text-lg font-bold text-text-main-light dark:text-text-main-dark">
                                {booking.title}
                              </h4>
                              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                {booking.coach}
                              </p>
                            </div>
                          </div>
                          <span className={`${booking.statusClass} px-4 py-2 rounded-full text-sm font-semibold`}>
                            {booking.statusLabel}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-time text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-map text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-hourglass text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-badge text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.level}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold py-2 rounded-lg transition-all text-sm">
                            <i className="bx bx-play text-lg"></i>
                            <span>Start Workout</span>
                          </button>
                          <button className="flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 font-semibold px-4 py-2 rounded-lg transition-all">
                            <i className="bx bx-edit text-lg"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Completed Bookings Section */}
              {(filter === 'All' || filter === 'Completed') && completedBookings.length > 0 && (
                <section>
                  <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                    Completed Bookings
                  </h3>
                  <div className="space-y-4">
                    {completedBookings.map((booking, idx) => (
                      <div
                        key={booking.id}
                        className={`booking-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-${(upcomingBookings.length + idx) * 100} opacity-75 hover:shadow-xl transition-shadow`}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                          <div className="flex gap-4 flex-1">
                            <div className={`w-12 h-12 ${booking.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <i className={`${booking.icon} text-green-500 text-2xl`}></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-display text-lg font-bold text-text-main-light dark:text-text-main-dark">
                                {booking.title}
                              </h4>
                              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                Completed with {booking.coach}
                              </p>
                            </div>
                          </div>
                          <span className={`${booking.statusClass} px-4 py-2 rounded-full text-sm font-semibold`}>
                            {booking.statusLabel}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-time text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-hourglass text-gray-400 text-lg"></i>
                            <span className="text-sm">{booking.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-star text-yellow-500 text-lg"></i>
                            <span className="text-sm">{booking.level}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                            <i className="bx bx-check-circle text-green-500 text-lg"></i>
                            <span className="text-sm">Completed</span>
                          </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/30 text-text-main-light dark:text-text-main-dark font-semibold py-2 rounded-lg transition-all">
                          <i className="bx bx-redo text-lg"></i>
                          <span>Book Again</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bx bx-log-out text-white text-3xl"></i>
            </div>
            <h2 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-3">
              Ready to go?
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
              You'll be logged out of your Corporalis account. You can log back in anytime.
            </p>
            <div className="space-y-3">
              <button
                onClick={confirmLogout}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                <i className="bx bx-check text-lg"></i>
                <span>Yes, Logout</span>
              </button>
              <button
                onClick={closeLogoutModal}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-text-main-light dark:text-text-main-dark font-semibold py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <i className="bx bx-x text-lg"></i>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
