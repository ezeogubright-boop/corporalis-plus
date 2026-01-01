import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMobileSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeMobileSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('authToken');
    localStorage.removeItem('authProvider');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const stats = [
    {
      title: 'This Week',
      value: '4',
      icon: 'bx-dumbbell',
      color: 'primary',
      label: 'Workouts completed',
      progress: 80,
      bgColor: 'bg-primary/20',
      textColor: 'text-primary',
    },
    {
      title: 'Calories Burned',
      value: '2,450',
      icon: 'bx-zap',
      color: 'orange-500',
      label: 'of 3,500 kcal goal',
      progress: 70,
      bgColor: 'bg-orange-500/20',
      textColor: 'text-orange-500',
    },
    {
      title: 'Current Streak',
      value: '12',
      icon: 'bx-heart',
      color: 'red-500',
      label: 'days in a row',
      progress: 100,
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-500',
    },
    {
      title: 'Weight',
      value: '78',
      icon: 'bx-barbell',
      color: 'blue-500',
      label: '-2 kg this month',
      progressText: true,
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-500',
      target: 'Target: 72 kg',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Leg Day',
      time: 'Today • 6:00 PM',
      icon: 'bx-play',
      bgColor: 'bg-primary/20',
      textColor: 'text-primary',
    },
    {
      title: 'Consultation',
      time: 'Tomorrow • 2:00 PM',
      icon: 'bx-calendar',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-500',
    },
    {
      title: 'Nutrition Check',
      time: 'Dec 28 • 10:00 AM',
      icon: 'bx-apple',
      bgColor: 'bg-orange-500/20',
      textColor: 'text-orange-500',
    },
  ];

  const recentActivity = [
    {
      title: 'Upper Body Strength',
      time: 'Today • 45 min • 380 kcal',
      status: 'completed',
      icon: 'bx-check',
    },
    {
      title: 'Cardio Session',
      time: 'Yesterday • 30 min • 320 kcal',
      status: 'completed',
      icon: 'bx-check',
    },
    {
      title: 'Lower Body Strength',
      time: 'Dec 24 • 50 min • 420 kcal',
      status: 'completed',
      icon: 'bx-check',
    },
    {
      title: 'Yoga & Stretching',
      time: 'Dec 23 • 25 min • 80 kcal',
      status: 'pending',
      icon: 'bx-minus',
    },
  ];

  const achievements = [
    { title: 'First Workout', icon: 'bx-trophy', color: 'text-yellow-500', status: 'Completed' },
    { title: '7-Day Streak', icon: 'bx-flame', color: 'text-orange-500', status: 'Completed' },
    { title: '100 Workouts', icon: 'bx-dumbbell', color: 'text-primary', status: '50 Done' },
    { title: 'Goal Achieved', icon: 'bx-target-lock', color: 'text-purple-500', status: 'Locked', locked: true },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:4rem_4rem] pointer-events-none opacity-40 z-0"></div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col fixed h-screen z-40">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <i className="bx bxs-globe text-text-main-light dark:text-text-main-dark text-2xl"></i>
              <span className="font-display font-bold text-lg text-text-main-light dark:text-text-main-dark">Corporalis</span>
            </a>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <a href="/dashboard" className="sidebar-active flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium transition-all bg-primary/10 border-l-3 border-primary">
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
            <a href="/bookings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
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
                <h1 className="font-display font-bold text-2xl text-text-main-light dark:text-text-main-dark">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark"
                >
                  <i className={`bx text-2xl ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
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
                <a 
                  href="/dashboard" 
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
                >
                  <i className="bx bx-home text-2xl"></i>
                  <span>Dashboard</span>
                </a>
                <a 
                  href="/my-programs"
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
                >
                  <i className="bx bx-dumbbell text-2xl"></i>
                  <span>My Programs</span>
                </a>
                <a 
                  href="/progress"
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
                >
                  <i className="bx bx-bar-chart-alt-2 text-2xl"></i>
                  <span>Progress</span>
                </a>
                <a 
                  href="/bookings"
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
                >
                  <i className="bx bx-calendar text-2xl"></i>
                  <span>Bookings</span>
                </a>
                <a 
                  href="/goals"
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
                >
                  <i className="bx bx-heart text-2xl"></i>
                  <span>Goals</span>
                </a>
                <a 
                  href="/"
                  onClick={closeMobileSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
                >
                  <i className="bx bx-home-alt text-2xl"></i>
                  <span>Back to Home</span>
                </a>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
            {/* Welcome Section */}
            <section className="mb-8 animate-fade-in-up">
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                      Welcome back, <span className="text-primary">Alex!</span>
                    </h2>
                    <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark">
                      You're <span className="text-primary font-semibold">8 workouts</span> away from your monthly goal
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base">
                      <i className="bx bx-play text-lg sm:text-xl"></i>
                      <span>Start Workout</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base">
                      <i className="bx bx-book text-lg sm:text-xl"></i>
                      <span>View Plan</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Grid */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`stat-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">{stat.title}</h3>
                    <div className={`${stat.bgColor} p-2 rounded-lg`}>
                      <i className={`bx ${stat.icon} ${stat.textColor} text-xl`}></i>
                    </div>
                  </div>
                  <p className="font-display text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-1">
                    {stat.value}
                  </p>
                  <p className={`text-text-muted-light dark:text-text-muted-dark text-sm ${stat.progressText ? 'text-green-500' : ''}`}>
                    {stat.label}
                  </p>
                  {stat.progress !== undefined && !stat.progressText && (
                    <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${stat.color === 'primary' ? 'bg-primary' : `bg-${stat.color}`}`}
                        style={{ width: `${stat.progress}%` }}
                      ></div>
                    </div>
                  )}
                  {stat.progressText && (
                    <div className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                      {stat.target}
                    </div>
                  )}
                  {stat.progress === 100 && stat.color === 'red-500' && (
                    <div className="mt-4 flex gap-1">
                      <div className="h-2 flex-1 bg-primary rounded"></div>
                      <div className="h-2 flex-1 bg-primary rounded"></div>
                      <div className="h-2 flex-1 bg-primary rounded"></div>
                      <div className="h-2 flex-1 bg-primary rounded"></div>
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Current Program */}
              <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg animate-fade-in-up delay-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">
                      Current Program
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark">Strength Building - Week 6 of 12</p>
                  </div>
                  <i className="bx bx-dumbbell text-primary text-4xl opacity-20"></i>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Progress</span>
                    <span className="text-primary font-semibold">50%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '50%', transition: 'width 0.5s ease' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                    <p className="font-display text-2xl font-bold text-primary mb-1">6</p>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Weeks Done</p>
                  </div>
                  <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                    <p className="font-display text-2xl font-bold text-primary mb-1">6</p>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Weeks Left</p>
                  </div>
                  <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                    <p className="font-display text-2xl font-bold text-green-500 mb-1">24/24</p>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Workouts Done</p>
                  </div>
                  <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                    <p className="font-display text-2xl font-bold text-orange-500 mb-1">20</p>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Left</p>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base">
                  <i className="bx bx-play text-xl"></i>
                  <span>Continue Program</span>
                </button>
              </div>

              {/* Upcoming Schedule */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-200">
                <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Upcoming
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, idx) => (
                    <div 
                      key={idx}
                      className="flex gap-4 p-4 bg-background-light dark:bg-background-dark rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 ${event.bgColor} rounded-lg flex items-center justify-center`}>
                        <i className={`bx ${event.icon} ${event.textColor} text-xl`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text-main-light dark:text-text-main-dark truncate">{event.title}</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg animate-fade-in-up delay-100">
                <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div 
                      key={idx}
                      className={`flex gap-4 pb-4 ${idx !== recentActivity.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
                    >
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.status === 'completed'
                            ? 'bg-green-500/20'
                            : 'bg-yellow-500/20'
                        }`}
                      >
                        <i 
                          className={`bx ${activity.icon} text-xl ${
                            activity.status === 'completed'
                              ? 'text-green-500'
                              : 'text-yellow-500'
                          }`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-text-main-light dark:text-text-main-dark">{activity.title}</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-200">
                <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Achievements
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 bg-background-light dark:bg-background-dark rounded-lg text-center cursor-pointer transition-colors ${
                        achievement.locked
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-primary/10'
                      }`}
                    >
                      <i className={`bx ${achievement.icon} text-4xl ${achievement.color} mb-2 block`}></i>
                      <p className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">{achievement.title}</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{achievement.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${isDark ? 'bg-surface-dark' : 'bg-surface-light'} rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-scale-in`}>
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="bx bx-log-out text-white text-3xl"></i>
            </div>
            <h2 className={`text-2xl font-bold text-center mb-2 ${isDark ? 'text-text-main-dark' : 'text-text-main-light'}`}>
              Ready to go?
            </h2>
            <p className={`text-center mb-8 leading-relaxed ${isDark ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
              You'll be logged out of your Corporalis account. You can log back in anytime.
            </p>
            <div className="flex flex-col-reverse gap-3">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  isDark
                    ? 'bg-gray-700 text-text-main-dark hover:bg-gray-600'
                    : 'bg-gray-200 text-text-main-light hover:bg-gray-300'
                }`}
              >
                <i className="bx bx-x" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}></i>
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <i className="bx bx-check" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}></i>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
