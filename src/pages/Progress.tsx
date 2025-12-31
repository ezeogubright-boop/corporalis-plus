import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Progress: React.FC = () => {
  const metrics = [
    { label: 'Total Workouts', value: '45', icon: '💪' },
    { label: 'Total Hours', value: '67.5', icon: '⏱️' },
    { label: 'Calories Burned', value: '18,450', icon: '🔥' },
    { label: 'Weight Lost', value: '8.5 kg', icon: '⚖️' },
  ];

  const personalRecords = [
    { exercise: 'Bench Press', weight: '100 kg', date: 'Dec 15, 2024' },
    { exercise: 'Squat', weight: '150 kg', date: 'Dec 10, 2024' },
    { exercise: 'Deadlift', weight: '180 kg', date: 'Dec 8, 2024' },
    { exercise: 'Running 5K', time: '22:30', date: 'Dec 20, 2024' },
  ];

  const weightProgress = [
    { week: 'Week 1', weight: 85 },
    { week: 'Week 4', weight: 83 },
    { week: 'Week 8', weight: 79 },
    { week: 'Week 12', weight: 76.5 },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Your Progress</h1>
          <p className="text-xl text-gray-700">Track your fitness achievements</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-2">{metric.icon}</div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-3xl font-display font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Workouts Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-display font-bold mb-6">Weekly Workouts</h3>
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
                  const workouts = Math.floor(Math.random() * 3);
                  return (
                    <div key={day} className="flex items-center gap-4">
                      <span className="w-24 text-sm font-body">{day}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-6">
                        <div
                          className="bg-primary h-6 rounded-full transition-all"
                          style={{ width: `${(workouts / 3) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-gray-700 w-8">{workouts}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weight Progress Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-display font-bold mb-6">Weight Tracking</h3>
              <div className="h-64 flex items-end gap-4 justify-around">
                {weightProgress.map((item) => (
                  <div key={item.week} className="flex flex-col items-center">
                    <div className="relative h-full flex flex-col justify-end">
                      <div
                        className="w-12 bg-primary rounded-t"
                        style={{ height: `${(85 - item.weight) * 10}px` }}
                      ></div>
                    </div>
                    <p className="text-sm font-body font-semibold mt-4">{item.week}</p>
                    <p className="text-xs text-gray-600">{item.weight} kg</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-display font-bold mb-8">Weight Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Starting Weight</p>
              <p className="text-3xl font-display font-bold">85 kg</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Current Weight</p>
              <p className="text-3xl font-display font-bold text-primary">76.5 kg</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Goal Weight</p>
              <p className="text-3xl font-display font-bold">75 kg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Records */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-display font-bold mb-8">Personal Records</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalRecords.map((record, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{record.exercise}</h4>
                    <p className="text-gray-600 text-sm mb-4">{record.date}</p>
                  </div>
                  <span className="text-3xl font-display font-bold text-primary">{record.weight || record.time}</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">🏆 Personal Best</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Progress;
