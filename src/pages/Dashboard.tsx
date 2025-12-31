import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Dashboard: React.FC = () => {
  const stats = [
    { label: 'This Week', value: '5', icon: '💪' },
    { label: 'Calories Burned', value: '2,450', icon: '🔥' },
    { label: 'Current Streak', value: '7 days', icon: '🔥' },
    { label: 'Weight', value: '72 kg', icon: '⚖️' },
  ];

  const currentProgram = {
    name: 'Strength Builder',
    progress: 65,
    weeksLeft: 3,
    nextSession: 'Tomorrow at 10:00 AM',
  };

  const upcomingEvents = [
    { title: 'Strength Training', time: 'Tomorrow 10:00 AM', coach: 'Alex Johnson' },
    { title: 'Nutrition Consultation', time: 'Dec 31, 2:00 PM', coach: 'Marcus Thompson' },
    { title: 'Progress Check-in', time: 'Jan 5, 3:00 PM', coach: 'Sarah Williams' },
  ];

  return (
    <div>
      <Header />

      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-700">You're on track with your fitness goals</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Program */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Current Program: {currentProgram.name}</h2>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body font-semibold">Progress</span>
                <span className="text-primary font-bold">{currentProgram.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-primary h-4 rounded-full transition-all duration-300" 
                  style={{ width: `${currentProgram.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Weeks Left</p>
                <p className="text-2xl font-display font-bold">{currentProgram.weeksLeft}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Next Session</p>
                <p className="text-sm font-body font-semibold">{currentProgram.nextSession}</p>
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
              Continue Program
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-display font-bold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-body font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                  <p className="text-xs text-gray-500">with {event.coach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
