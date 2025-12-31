import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const MyPrograms: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const programs = [
    {
      id: 1,
      name: 'Strength Builder',
      progress: 65,
      weeks: '8 weeks',
      completed: 5,
      total: 8,
      status: 'Active',
      nextSession: 'Tomorrow 10:00 AM',
    },
    {
      id: 2,
      name: 'Cardio Blast',
      progress: 45,
      weeks: '6 weeks',
      completed: 3,
      total: 6,
      status: 'Active',
      nextSession: 'Dec 31 2:00 PM',
    },
    {
      id: 3,
      name: 'Weight Loss Journey',
      progress: 100,
      weeks: '12 weeks',
      completed: 12,
      total: 12,
      status: 'Completed',
    },
  ];

  const activePrograms = programs.filter(p => p.status === 'Active');
  const completedPrograms = programs.filter(p => p.status === 'Completed');
  const displayPrograms = filter === 'All' ? programs : filter === 'Active' ? activePrograms : completedPrograms;

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-display font-bold mb-2">My Programs</h1>
              <p className="text-xl text-gray-700">Your enrolled fitness programs</p>
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600">
              + Add Program
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            {['All', 'Active', 'Completed'].map(tab => (
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

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold">{program.name}</h3>
                    <p className="text-gray-600">{program.weeks}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-body font-semibold ${
                    program.status === 'Active'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {program.status}
                  </span>
                </div>

                {/* Progress Bar */}
                {program.status === 'Active' && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body font-semibold">Progress</span>
                      <span className="text-primary font-bold">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-primary h-4 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Workouts</p>
                    <p className="text-2xl font-display font-bold">{program.completed}/{program.total}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Completion</p>
                    <p className="text-2xl font-display font-bold">{program.progress}%</p>
                  </div>
                </div>

                {/* Next Session */}
                {program.status === 'Active' && (
                  <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">📅 Next Session</p>
                    <p className="font-body font-semibold">{program.nextSession}</p>
                  </div>
                )}

                {/* Action Button */}
                <button className={`w-full py-3 rounded-lg font-body font-semibold transition ${
                  program.status === 'Active'
                    ? 'bg-primary text-white hover:bg-green-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  {program.status === 'Active' ? '▶️ Continue' : '🔄 Restart'}
                </button>
              </div>
            ))}
          </div>

          {displayPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No {filter.toLowerCase()} programs</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyPrograms;
