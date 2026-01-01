import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Goal {
  id: number;
  title: string;
  target: string;
  deadline: string;
  progress: number;
  current: string;
  progressValue: string;
  remaining: string;
  created: string;
  duration: string;
  type: 'active' | 'achieved';
}

export const Goals: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Achieved'>('All');
  const [showGoalModal, setShowGoalModal] = useState(false);
  const navigate = useNavigate();

  const activeGoals: Goal[] = [
    {
      id: 1,
      title: 'Lose Weight',
      target: '72 kg',
      deadline: 'Mar 30, 2025',
      progress: 65,
      current: '78 kg',
      progressValue: '6.5 kg',
      remaining: '6 kg',
      created: 'Dec 26, 2024',
      duration: '3 months remaining',
      type: 'active'
    },
    {
      id: 2,
      title: 'Build Muscle Mass',
      target: '90 kg (Muscle)',
      deadline: 'Jun 30, 2025',
      progress: 40,
      current: '78 kg',
      progressValue: '+4.8 kg',
      remaining: '+7.2 kg',
      created: 'Nov 15, 2024',
      duration: '6 months remaining',
      type: 'active'
    },
    {
      id: 3,
      title: 'Improve Endurance',
      target: 'Run 10 km',
      deadline: 'Feb 28, 2025',
      progress: 75,
      current: '7.5 km',
      progressValue: '+7.5 km',
      remaining: '+2.5 km',
      created: 'Oct 10, 2024',
      duration: '2 months remaining',
      type: 'active'
    }
  ];

  const achievedGoals: Goal[] = [
    {
      id: 4,
      title: 'Complete 100 Workouts',
      target: 'Achieved on Dec 10, 2024',
      deadline: '',
      progress: 100,
      current: '',
      progressValue: '',
      remaining: '',
      created: 'Aug 20, 2024',
      duration: 'Completed in 112 days',
      type: 'achieved'
    },
    {
      id: 5,
      title: 'Maintain 7-Day Streak',
      target: 'Achieved on Dec 15, 2024',
      deadline: '',
      progress: 100,
      current: '',
      progressValue: '',
      remaining: '',
      created: 'Dec 9, 2024',
      duration: 'Completed in 7 days',
      type: 'achieved'
    }
  ];

  const allGoals = [...activeGoals, ...achievedGoals];

  const filteredGoals = 
    filter === 'All' ? allGoals :
    filter === 'Active' ? activeGoals :
    achievedGoals;

  const allCount = allGoals.length;
  const activeCount = activeGoals.length;
  const achievedCount = achievedGoals.length;

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

  const openGoalModal = () => {
    setShowGoalModal(true);
  };

  const closeGoalModal = () => {
    setShowGoalModal(false);
  };

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 dark:opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        color: isDark ? '#ffffff' : '#000000'
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
            <a href="/bookings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all">
              <i className="bx bx-calendar text-2xl"></i>
              <span>Bookings</span>
            </a>
            <a href="/goals" className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium transition-all" style={{backgroundColor: 'rgba(57, 224, 30, 0.1)', borderLeft: '3px solid #39E01E', paddingLeft: 'calc(1rem - 3px)'}}>
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
                <h1 className="font-display font-bold text-2xl text-text-main-light dark:text-text-main-dark">Goals</h1>
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
                <a href="/bookings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10">
                  <i className="bx bx-calendar text-2xl"></i>
                  <span>Bookings</span>
                </a>
                <a href="/goals" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
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
                    Your Goals
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted-light dark:text-text-muted-dark">
                    Set and track your fitness objectives
                  </p>
                </div>
                <button
                  onClick={openGoalModal}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base whitespace-nowrap"
                >
                  <i className="bx bx-plus text-lg sm:text-xl"></i>
                  <span>Set New Goal</span>
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
                  All ({allCount})
                </button>
                <button
                  onClick={() => setFilter('Active')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Active'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Active ({activeCount})
                </button>
                <button
                  onClick={() => setFilter('Achieved')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'Achieved'
                      ? 'bg-primary text-white dark:text-black'
                      : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:bg-primary/10'
                  }`}
                >
                  Achieved ({achievedCount})
                </button>
              </div>
            </section>

            {/* Active Goals */}
            {(filter === 'All' || filter === 'Active') && (
              <section className="mb-12">
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Active Goals
                </h3>
                <div className="space-y-4">
                  {filteredGoals.filter(g => g.type === 'active').map((goal) => (
                    <div
                      key={goal.id}
                      className="goal-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">
                            {goal.title}
                          </h4>
                          <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                            Target: {goal.target} • Deadline: {goal.deadline}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-orange-500/20 rounded-lg transition-colors text-orange-500">
                            <i className="bx bx-edit text-xl"></i>
                          </button>
                          <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-500">
                            <i className="bx bx-trash text-xl"></i>
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-text-muted-light dark:text-text-muted-dark text-sm">Progress</span>
                          <span className="text-primary font-semibold">{goal.progress}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{width: `${goal.progress}%`}}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Current</p>
                          <p className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                            {goal.current}
                          </p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Progress</p>
                          <p className="font-display text-2xl font-bold text-primary">
                            {goal.progressValue}
                          </p>
                        </div>
                        <div className="text-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Remaining</p>
                          <p className="font-display text-2xl font-bold text-orange-500">
                            {goal.remaining}
                          </p>
                        </div>
                      </div>

                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                        Created {goal.created} • {goal.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achieved Goals */}
            {(filter === 'All' || filter === 'Achieved') && (
              <section>
                <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                  Achieved Goals
                </h3>
                <div className="space-y-4">
                  {filteredGoals.filter(g => g.type === 'achieved').map((goal) => (
                    <div
                      key={goal.id}
                      className="goal-card bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up border-l-4 border-green-500"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="bx bx-check text-green-500 text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">
                              {goal.title}
                            </h4>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                              {goal.target}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                        Started {goal.created} • {goal.duration}
                      </p>
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

      {/* Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                Set New Goal
              </h3>
              <button
                onClick={closeGoalModal}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <i className="bx bx-x text-2xl text-text-main-light dark:text-text-main-dark"></i>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-text-muted-light dark:text-text-muted-dark text-sm font-medium mb-2">
                  Goal Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Run a 5K"
                  className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-text-muted-light dark:text-text-muted-dark text-sm font-medium mb-2">
                  Target
                </label>
                <input
                  type="text"
                  placeholder="e.g., 5K"
                  className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-text-muted-light dark:text-text-muted-dark text-sm font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold py-2.5 rounded-lg transition-all"
              >
                Create Goal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;
                    <h3 className="text-2xl font-display font-bold">{goal.title}</h3>
                    <p className="text-gray-600">Target: {goal.target}</p>
                  </div>
                  {goal.status === 'Achieved' && (
                    <span className="text-3xl">🏆</span>
                  )}
                </div>

                {/* Progress Bar */}
                {goal.status === 'Active' && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body font-semibold">Progress</span>
                      <span className="text-primary font-bold">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-primary h-4 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Current</p>
                    <p className="font-body font-bold text-sm">{goal.current}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Progress</p>
                    <p className="font-body font-bold text-sm">{goal.progress}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Remaining</p>
                    <p className="font-body font-bold text-sm">{goal.remaining}</p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">📅 Deadline</p>
                  <p className="font-body font-semibold">{goal.deadline}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {goal.status === 'Active' ? (
                    <>
                      <button className="flex-1 py-2 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 text-sm">
                        Update
                      </button>
                      <button className="flex-1 py-2 border-2 border-gray-300 text-gray-800 rounded-lg font-body font-semibold hover:bg-gray-50 text-sm">
                        Edit
                      </button>
                      <button className="py-2 px-4 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                        🗑️
                      </button>
                    </>
                  ) : (
                    <button className="w-full py-2 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 text-sm">
                      Set Similar Goal
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredGoals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No {filter.toLowerCase()} goals</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Goals;
