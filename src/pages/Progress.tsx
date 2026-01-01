import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Progress: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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

  const metrics = [
    {
      title: 'Total Workouts',
      value: '127',
      icon: 'bx-dumbbell',
      bgColor: 'bg-primary/20',
      textColor: 'text-primary',
      change: '+5 this week',
    },
    {
      title: 'Total Hours',
      value: '187',
      icon: 'bx-time',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-500',
      change: '+8.5 this week',
    },
    {
      title: 'Calories Burned',
      value: '45.2K',
      icon: 'bx-zap',
      bgColor: 'bg-orange-500/20',
      textColor: 'text-orange-500',
      change: '+2.1K this week',
    },
    {
      title: 'Weight Lost',
      value: '6.5 kg',
      icon: 'bx-trending-down',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-500',
      change: 'Target: 10 kg',
    },
  ];

  const personalRecords = [
    { title: 'Longest Streak', value: '12 days', color: 'border-primary', textColor: 'text-primary' },
    { title: 'Most Calories (1 Day)', value: '520 kcal', color: 'border-blue-500', textColor: 'text-blue-500' },
    { title: 'Longest Workout', value: '90 min', color: 'border-orange-500', textColor: 'text-orange-500' },
    { title: 'Best Week', value: '32.5 hours', color: 'border-green-500', textColor: 'text-green-500' },
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
            <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-home text-2xl"></i>
              <span>Dashboard</span>
            </a>
            <a href="/my-programs" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-dumbbell text-2xl"></i>
              <span>My Programs</span>
            </a>
            <a href="/progress" className="sidebar-active flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium transition-all bg-primary/10 border-l-3 border-primary">
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
                <h1 className="font-display font-bold text-2xl text-text-main-light dark:text-text-main-dark">Progress</h1>
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
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10"
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
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
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
            {/* Header Section */}
            <section className="mb-8 animate-fade-in-up">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                Your Progress
              </h2>
              <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark">
                Track your fitness journey and achievements
              </p>
            </section>

            {/* Key Metrics Grid */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className={`bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium">{metric.title}</h3>
                    <div className={`${metric.bgColor} p-2 rounded-lg`}>
                      <i className={`bx ${metric.icon} ${metric.textColor} text-xl`}></i>
                    </div>
                  </div>
                  <p className="font-display text-4xl font-bold text-text-main-light dark:text-text-main-dark">{metric.value}</p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-2">{metric.change}</p>
                </div>
              ))}
            </section>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-12">
              {/* Workout History Chart */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 shadow-lg animate-fade-in-up delay-100">
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Weekly Workouts</h3>
                <div className="space-y-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => {
                    const data = [2, 1, 2, 1, 2, 3, 1];
                    return (
                      <div key={day} className="flex items-center gap-4">
                        <span className="w-20 text-sm font-body text-text-main-light dark:text-text-main-dark">{day}</span>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
                          <div
                            className="bg-primary h-6 rounded-full transition-all"
                            style={{ width: `${(data[idx] / 3) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-text-main-light dark:text-text-main-dark w-8">{data[idx]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Calories Burned Chart */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 shadow-lg animate-fade-in-up delay-200">
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4">Weekly Calories</h3>
                <div className="h-64 flex items-end gap-2 sm:gap-4 justify-around px-2">
                  {[380, 290, 420, 310, 450, 520, 350].map((cal, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div className="w-full max-w-8 bg-orange-500 rounded-t" style={{ height: `${(cal / 520) * 100}%` }}></div>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weight Tracking Section */}
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 shadow-lg animate-fade-in-up delay-300 mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">Weight Tracking</h3>
              <div className="h-64 flex items-end gap-2 sm:gap-4 justify-around px-2 mb-6">
                {[84.5, 83.8, 83.2, 82.1, 81.5, 80.2, 79.1, 78].map((weight, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div className="w-full max-w-8 bg-primary rounded-t" style={{ height: `${((84.5 - weight) * 100) / 10}%` }}></div>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">W{idx + 1}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">Starting Weight</p>
                  <p className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark">84.5 kg</p>
                </div>
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">Current Weight</p>
                  <p className="font-display text-2xl font-bold text-primary">78 kg</p>
                </div>
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">Goal Weight</p>
                  <p className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark">72 kg</p>
                </div>
              </div>
            </section>

            {/* Personal Records */}
            <section className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-400">
              <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">Personal Records</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalRecords.map((record, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 bg-background-light dark:bg-background-dark rounded-lg border-l-4 ${record.color}`}
                  >
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{record.title}</p>
                    <p className={`font-display text-3xl font-bold mt-2 ${record.textColor}`}>{record.value}</p>
                  </div>
                ))}
              </div>
            </section>
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

export default Progress;
