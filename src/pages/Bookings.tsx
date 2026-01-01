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
        color: isDark ? '#ffffff' : '#000000',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
      }}></div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col fixed h-screen z-40">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <a href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <i className="bx bxs-globe text-text-main-light dark:text-text-main-dark text-2xl"></i>
              <span className="font-display font-bold text-lg text-text-main-light dark:text-text-main-dark">Corporalis</span>
            </a>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-home text-2xl"></i>
              <span>Dashboard</span>
            </a>
            <a href="/my-programs" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-dumbbell text-2xl"></i>
              <span>My Programs</span>
            </a>
            <a href="/progress" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-bar-chart-alt-2 text-2xl"></i>
              <span>Progress</span>
            </a>
            <a href="/bookings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium transition-all" style={{backgroundColor: 'rgba(57, 224, 30, 0.1)', borderLeft: '3px solid #39E01E', paddingLeft: 'calc(1rem - 3px)'}}>
              <i className="bx bx-calendar text-2xl"></i>
              <span>Bookings</span>
            </a>
            <a href="/goals" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-heart text-2xl"></i>
              <span>Goals</span>
            </a>
            <a href="/messages" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-message-rounded text-2xl"></i>
              <span>Messages</span>
            </a>
            <a href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-cog text-2xl"></i>
              <span>Settings</span>
            </a>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-red-500/10 hover:text-red-500 transition-all"
            >
              <i className="bx bx-log-out text-2xl"></i>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Mobile Top Bar & Main Content */}
        <div className="w-full lg:ml-64 flex flex-col min-h-screen">
          {/* Top Navigation */}
          <nav className="relative z-30 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMobileSidebar}
                  className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <i className="bx bx-menu text-2xl text-text-main-light dark:text-text-main-dark"></i>
                </button>
                <h1 className="font-display font-bold text-2xl text-text-main-light dark:text-text-main-dark">Bookings</h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark"
                >
                  <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'} text-2xl`}></i>
                </button>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          {sidebarOpen && (
            <div className="lg:hidden bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
              <nav className="px-4 py-4 space-y-2">
                <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-home text-2xl"></i>
                  <span>Dashboard</span>
                </a>
                <a href="/my-programs" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-dumbbell text-2xl"></i>
                  <span>My Programs</span>
                </a>
                <a href="/progress" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-bar-chart-alt-2 text-2xl"></i>
                  <span>Progress</span>
                </a>
                <a href="/bookings" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
                  <i className="bx bx-calendar text-2xl"></i>
                  <span>Bookings</span>
                </a>
                <a href="/goals" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-heart text-2xl"></i>
                  <span>Goals</span>
                </a>
                <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-home-alt text-2xl"></i>
                  <span>Back to Home</span>
                </a>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
            {/* Header */}
            <section className="mb-8 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    Your Bookings
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark">
                    Manage your scheduled workouts and consultations
                  </p>
                </div>
                <a href="/consultation" className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base whitespace-nowrap">
                  <i className="bx bx-plus text-lg sm:text-xl"></i>
                  <span>Book Consultation</span>
                </a>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setFilter('All')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'All'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  All ({allCount})
                </button>
                <button
                  onClick={() => setFilter('Upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Upcoming'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
                <button
                  onClick={() => setFilter('Completed')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Completed'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Completed ({completedCount})
                </button>
              </div>
            </section>

            {/* Upcoming Bookings */}
            {(filter === 'All' || filter === 'Upcoming') && (
              <section className="mb-12">
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Upcoming Bookings
                </h3>
                <div className="space-y-4">
                  {filteredBookings.filter(b => b.actionType === 'upcoming').map((booking) => (
                    <div
                      key={booking.id}
                      className="booking-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
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
                              with {booking.coach}
                            </p>
                          </div>
                        </div>
                        <span className={`${booking.statusClass} px-4 py-2 rounded-full text-sm font-semibold`}>
                          {booking.statusLabel}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                          <i className="bx bx-time text-primary text-lg"></i>
                          <span className="text-sm">{booking.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                          <i className="bx bx-map text-primary text-lg"></i>
                          <span className="text-sm">{booking.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                          <i className="bx bx-hourglass text-primary text-lg"></i>
                          <span className="text-sm">{booking.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                          <i className="bx bx-badge text-primary text-lg"></i>
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

            {/* Completed Bookings */}
            {(filter === 'All' || filter === 'Completed') && (
              <section>
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Completed Bookings
                </h3>
                <div className="space-y-4">
                  {filteredBookings.filter(b => b.actionType === 'completed').map((booking) => (
                    <div
                      key={booking.id}
                      className="booking-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg opacity-75 hover:shadow-xl transition-shadow"
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
                          <i className="bx bx-time text-primary text-lg"></i>
                          <span className="text-sm">{booking.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
                          <i className="bx bx-hourglass text-primary text-lg"></i>
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
