import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Bookings: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const bookings = [
    {
      id: 1,
      title: 'Strength Training Session',
      coach: 'Alex Johnson',
      date: 'Dec 30, 2024',
      time: '10:00 AM',
      duration: '1 hour',
      location: 'Studio A',
      status: 'Today',
      type: 'Upcoming',
    },
    {
      id: 2,
      title: 'Cardio Workout',
      coach: 'Sarah Williams',
      date: 'Dec 31, 2024',
      time: '02:00 PM',
      duration: '45 minutes',
      location: 'Studio B',
      status: 'Tomorrow',
      type: 'Upcoming',
    },
    {
      id: 3,
      title: 'Nutrition Consultation',
      coach: 'Marcus Thompson',
      date: 'Jan 5, 2025',
      time: '03:00 PM',
      duration: '30 minutes',
      location: 'Virtual',
      status: 'In 1 week',
      type: 'Upcoming',
    },
    {
      id: 4,
      title: 'Flexibility & Mobility',
      coach: 'Alex Johnson',
      date: 'Dec 25, 2024',
      time: '09:00 AM',
      duration: '1 hour',
      location: 'Studio A',
      status: 'Completed',
      type: 'Completed',
    },
  ];

  const filteredBookings = filter === 'All' ? bookings : bookings.filter(b => b.type === filter);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-display font-bold mb-2">Your Bookings</h1>
              <p className="text-xl text-gray-700">Manage your scheduled sessions</p>
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            {['All', 'Upcoming', 'Completed'].map(tab => (
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

      {/* Bookings List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">🏋️</span>
                      <div>
                        <h3 className="text-2xl font-display font-bold">{booking.title}</h3>
                        <p className="text-gray-600">with {booking.coach}</p>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-body font-semibold ${
                    booking.type === 'Upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">📅 Date</p>
                    <p className="font-body font-semibold">{booking.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">⏰ Time</p>
                    <p className="font-body font-semibold">{booking.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">⏱️ Duration</p>
                    <p className="font-body font-semibold">{booking.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">📍 Location</p>
                    <p className="font-body font-semibold">{booking.location}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {booking.type === 'Upcoming' ? (
                    <>
                      <button className="flex-1 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
                        🎥 Join Session
                      </button>
                      <button className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition">
                        ✏️ Edit
                      </button>
                      <button className="flex-1 py-3 border-2 border-red-300 text-red-600 rounded-lg font-body font-semibold hover:bg-red-50 transition">
                        ❌ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
                        ⭐ Leave Review
                      </button>
                      <button className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition">
                        📋 Details
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No {filter.toLowerCase()} bookings</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bookings;
