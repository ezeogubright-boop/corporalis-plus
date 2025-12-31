import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Goals: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const goals = [
    {
      id: 1,
      title: 'Lose 10 kg',
      target: '10 kg',
      deadline: 'Jan 31, 2025',
      progress: 30,
      current: '3 kg',
      remaining: '7 kg',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Run 5K',
      target: '5K',
      deadline: 'Feb 28, 2025',
      progress: 60,
      current: '3K',
      remaining: '2K',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Do 50 Push-ups',
      target: '50 Push-ups',
      deadline: 'Mar 31, 2025',
      progress: 40,
      current: '20 Push-ups',
      remaining: '30 Push-ups',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Complete 30-day Challenge',
      target: '30 workouts',
      deadline: 'Dec 28, 2024',
      progress: 100,
      current: '30 workouts',
      remaining: '0',
      status: 'Achieved',
    },
  ];

  const filteredGoals = filter === 'All' ? goals : goals.filter(g => g.status === (filter === 'Active' ? 'Active' : 'Achieved'));

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-display font-bold mb-2">Your Goals</h1>
              <p className="text-xl text-gray-700">Track your fitness goals and progress</p>
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600">
              + Set New Goal
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            {['All', 'Active', 'Achieved'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-lg font-body font-medium transition ${
                  filter === tab
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGoals.map((goal) => (
              <div key={goal.id} className={`bg-white rounded-lg shadow-lg p-8 ${goal.status === 'Achieved' ? 'border-t-4 border-primary' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
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
