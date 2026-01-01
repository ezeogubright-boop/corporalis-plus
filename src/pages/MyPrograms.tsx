import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyPrograms: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState('All');
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

  const programs = [
    {
      id: 1,
      name: 'Strength Building',
      duration: '12-week program',
      progress: 50,
      week: '6 of 12',
      completed: 24,
      remaining: 20,
      skipped: 3,
      status: 'active',
      icon: 'bx-dumbbell',
      color: 'bg-yellow-500/20',
      textColor: 'text-yellow-500',
    },
    {
      id: 2,
      name: 'Cardio Blast',
      duration: '8-week program',
      progress: 37,
      week: '3 of 8',
      completed: 12,
      remaining: 20,
      skipped: 0,
      status: 'active',
      icon: 'bx-heart',
      color: 'bg-blue-500/20',
      textColor: 'text-blue-500',
    },
    {
      id: 3,
      name: 'Weight Loss Challenge',
      duration: '6-week program • Completed Dec 20, 2024',
      progress: 100,
      completed: 42,
      remaining: 0,
      weightLost: '-4.5 kg',
      status: 'completed',
      icon: 'bx-check-circle',
      color: 'bg-green-500/20',
      textColor: 'text-green-500',
    },
  ];

  const activePrograms = programs.filter(p => p.status === 'active');
  const completedPrograms = programs.filter(p => p.status === 'completed');

  const displayActive = filter === 'All' || filter === 'Active' ? activePrograms : [];
  const displayCompleted = filter === 'All' || filter === 'Completed' ? completedPrograms : [];

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
            <a href="/my-programs" className="sidebar-active flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium transition-all bg-primary/10 border-l-3 border-primary">
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
                <h1 className="font-display font-bold text-2xl text-text-main-light dark:text-text-main-dark">My Programs</h1>
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
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
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
            {/* Header Section */}
            <section className="mb-8 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    Your Programs
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark">
                    Track and manage your fitness programs
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base whitespace-nowrap">
                  <i className="bx bx-plus text-lg sm:text-xl"></i>
                  <span>Add Program</span>
                </button>
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
                  All (3)
                </button>
                <button 
                  onClick={() => setFilter('Active')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Active'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Active (2)
                </button>
                <button 
                  onClick={() => setFilter('Completed')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Completed'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Completed (1)
                </button>
              </div>
            </section>

            {/* Active Programs */}
            {displayActive.length > 0 && (
              <section className="mb-12">
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">Active Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  {displayActive.map((program, idx) => (
                    <div 
                      key={program.id}
                      className={`program-card bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 shadow-lg animate-fade-in-up delay-${(idx + 1) * 100}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">{program.name}</h4>
                          <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{program.duration}</p>
                        </div>
                        <div className={`${program.color} p-3 rounded-lg`}>
                          <i className={`bx ${program.icon} ${program.textColor} text-2xl`}></i>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Week {program.week}</span>
                          <span className="text-primary font-semibold">{program.progress}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${program.progress}%` }}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-primary">{program.completed}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Completed</p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-orange-500">{program.remaining}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Remaining</p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-red-500">{program.skipped}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Skipped</p>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold py-3 rounded-lg transition-all">
                        <i className="bx bx-play text-xl"></i>
                        <span>Continue</span>
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Completed Programs */}
            {displayCompleted.length > 0 && (
              <section>
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">Completed Programs</h3>
                <div className="program-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg animate-fade-in-up delay-300">
                  {displayCompleted.map((program) => (
                    <div key={program.id}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">{program.name}</h4>
                          <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{program.duration}</p>
                        </div>
                        <div className={`${program.color} p-3 rounded-lg`}>
                          <i className={`bx ${program.icon} ${program.textColor} text-2xl`}></i>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-text-muted-light dark:text-text-muted-dark text-sm">All weeks completed</span>
                          <span className="text-green-500 font-semibold">100%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-green-500">{program.completed}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Completed</p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-orange-500">{program.remaining}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Remaining</p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">{program.weightLost}</p>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Weight Lost</p>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-opacity-90 text-white dark:text-black font-semibold py-3 rounded-lg transition-all">
                        <i className="bx bx-redo text-xl"></i>
                        <span>Restart Program</span>
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
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

export default MyPrograms;
