import React, { useState } from 'react';
import Header from '../components/Header';

export const BookSession: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<string | null>(null);
  const [sessionType, setSessionType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('');
  const [trainingFocus, setTrainingFocus] = useState<string[]>([]);
  const [goals, setGoals] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const coaches = [
    { 
      id: '1', 
      name: 'Alex Johnson', 
      specialty: 'Strength & Conditioning',
      rating: 4.9,
      reviews: 128,
      image: 'photos/Fit durch .jpg'
    },
    { 
      id: '2', 
      name: 'Sarah Williams', 
      specialty: 'Nutrition & Weight Loss',
      rating: 4.8,
      reviews: 95,
      image: 'photos/Akalia Souza.jpg'
    },
    { 
      id: '3', 
      name: 'Marcus Thompson', 
      specialty: 'Cardio & Endurance',
      rating: 4.7,
      reviews: 112,
      image: 'photos/Biggest Loser Trainer.jpg'
    },
  ];

  const sessionTypes = [
    { id: 'one-on-one', label: 'One-on-One Session', description: 'Personalized training focused on your specific goals', price: 60 },
    { id: 'group', label: 'Group Session', description: 'Train with 3-5 others and get group motivation', price: 30 },
    { id: 'consultation', label: 'Consultation Only', description: 'Get advice and create your personalized plan', price: 30 },
  ];

  const focusOptions = [
    { id: 'strength', label: 'Strength Training' },
    { id: 'cardio', label: 'Cardio & Endurance' },
    { id: 'flexibility', label: 'Flexibility & Mobility' },
    { id: 'nutrition', label: 'Nutrition Planning' },
    { id: 'weight-loss', label: 'Weight Loss' },
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const currentCoach = coaches.find(c => c.id === selectedCoach);
  const currentSessionType = sessionTypes.find(s => s.id === sessionType);
  const currentPrice = currentSessionType?.price || 0;

  const handleTrainingFocusChange = (focusId: string) => {
    setTrainingFocus(prev => 
      prev.includes(focusId) 
        ? prev.filter(f => f !== focusId)
        : [...prev, focusId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCoach || !sessionType || !selectedDate || !selectedTime || !duration || goals.length < 20) {
      alert('Please fill in all required fields and provide at least 20 characters for your goals.');
      return;
    }

    setShowSuccessModal(true);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-3 sm:mb-4 animate-fade-in-up">
              Book Your <span className="text-primary">Perfect Session</span>
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
              Schedule a personalized training session with one of our expert coaches. Choose your preferred coach, time, and training focus.
            </p>
          </div>
        </div>

        {/* Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form id="bookingForm" onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Coach */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    Select Your Coach
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coaches.map(coach => (
                    <label
                      key={coach.id}
                      onClick={() => setSelectedCoach(coach.id)}
                      className={`coach-selector relative bg-surface-light dark:bg-surface-dark border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        selectedCoach === coach.id 
                          ? 'border-primary' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary'
                      }`}
                    >
                      {selectedCoach === coach.id && (
                        <div className="selected-badge absolute -top-3 -right-3 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                          <i className="bx bx-check text-lg"></i>
                        </div>
                      )}
                      <div className="flex gap-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-bold text-text-main-light dark:text-text-main-dark">{coach.name}</h3>
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{coach.specialty}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <i className="bx bxs-star text-yellow-400 text-sm"></i>
                            <span className="text-xs text-text-muted-light dark:text-text-muted-dark">{coach.rating} ({coach.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Session Type */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    Session Type
                  </h2>
                </div>

                <div className="space-y-3">
                  {sessionTypes.map(type => (
                    <label
                      key={type.id}
                      className={`session-type flex items-center gap-4 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer transition-all ${
                        sessionType === type.id 
                          ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                          : 'hover:border-primary'
                      }`}
                      onClick={() => setSessionType(type.id)}
                    >
                      <input 
                        type="radio" 
                        name="sessionType" 
                        value={type.id}
                        checked={sessionType === type.id}
                        onChange={() => setSessionType(type.id)}
                        className="w-5 h-5 text-primary cursor-pointer"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-main-light dark:text-text-main-dark">{type.label}</h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{type.description}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">${type.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Date and Time */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    Date & Time
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-3">
                      <i className="bx bx-calendar text-primary mr-2"></i>Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="form-input w-full bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-3">
                      <i className="bx bx-time text-primary mr-2"></i>Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="duration-select w-full bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark"
                      required
                    >
                      <option value="">Choose duration</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                      <option value="90">90 minutes</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-4">
                    <i className="bx bx-alarm text-primary mr-2"></i>Available Times
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`time-slot bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg py-2 px-3 text-sm font-medium text-text-main-light dark:text-text-main-dark transition-all cursor-pointer ${
                          selectedTime === time 
                            ? 'bg-gradient-to-br from-primary to-green-500 text-white border-primary' 
                            : 'hover:border-primary'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Training Focus */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    Training Focus
                  </h2>
                </div>

                <div className="space-y-3">
                  {focusOptions.map(option => (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={trainingFocus.includes(option.id)}
                        onChange={() => handleTrainingFocusChange(option.id)}
                        className="w-5 h-5 text-primary rounded cursor-pointer"
                      />
                      <span className="text-text-main-light dark:text-text-main-dark font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 5: Additional Info */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-400">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    Tell Us About Your Goals
                  </h2>
                </div>

                <textarea
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Describe your fitness goals, any injuries or limitations, and what you'd like to achieve with this session..."
                  className="form-input w-full bg-surface-light dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark min-h-[120px] resize-none"
                  required
                ></textarea>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">Min 20 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-white dark:text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all transform hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 animate-fade-in-up delay-500"
              >
                <i className="bx bx-check text-xl"></i>
                Complete Booking
              </button>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="booking-summary rounded-2xl p-6 sm:p-8 sticky top-24 bg-gradient-to-br from-primary/5 to-primary/2 dark:from-primary/10 dark:to-primary/5 border-l-4 border-primary">
              <h3 className="text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                <i className="bx bx-receipt text-primary mr-2"></i>Booking Summary
              </h3>

              <div className="space-y-4">
                {/* Coach */}
                <div className="pb-4 border-b border-gray-300 dark:border-gray-600">
                  <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase">Coach</p>
                  <p className="text-sm sm:text-base font-semibold text-text-main-light dark:text-text-main-dark mt-1">
                    {currentCoach?.name || 'Not selected'}
                  </p>
                </div>

                {/* Session Type */}
                <div className="pb-4 border-b border-gray-300 dark:border-gray-600">
                  <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase">Session Type</p>
                  <p className="text-sm sm:text-base font-semibold text-text-main-light dark:text-text-main-dark mt-1">
                    {currentSessionType?.label || 'Not selected'}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="pb-4 border-b border-gray-300 dark:border-gray-600">
                  <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase">Date & Time</p>
                  <p className="text-sm sm:text-base font-semibold text-text-main-light dark:text-text-main-dark mt-1">
                    {selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : 'Not selected'}
                  </p>
                </div>

                {/* Duration */}
                <div className="pb-4 border-b border-gray-300 dark:border-gray-600">
                  <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase">Duration</p>
                  <p className="text-sm sm:text-base font-semibold text-text-main-light dark:text-text-main-dark mt-1">
                    {duration ? `${duration} minutes` : 'Not selected'}
                  </p>
                </div>

                {/* Price */}
                <div className="pt-4">
                  <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase">Total Price</p>
                  <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">${currentPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 mb-16 sm:mb-24">
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Ready to Transform Your <span className="text-primary">Fitness?</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Take the first step towards your fitness goals. Book your session today and start your transformation journey with our expert coaches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 animate-fade-in-up delay-200">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-text-main-light dark:text-text-main-dark font-semibold">Successful Sessions</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">Completed by our clients</p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-text-main-light dark:text-text-main-dark font-semibold">Client Rating</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">Based on 300+ reviews</p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-text-main-light dark:text-text-main-dark font-semibold">Satisfaction Rate</p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">From our community</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button
              onClick={() => document.getElementById('bookingForm')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30"
            >
              Book Your Session
            </button>
            <a
              href="/pricing"
              className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all text-center"
            >
              View All Plans
            </a>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-10 max-w-md w-11/12 text-center shadow-2xl animate-scale-in">
            <div className="success-icon w-20 h-20 bg-gradient-to-br from-primary to-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
              <i className="bx bx-check"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base mb-6">
              Your session has been successfully booked. You'll receive a confirmation email shortly with all the details.
            </p>
            <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-text-main-light dark:text-text-main-dark">
                <strong>Confirmation sent to:</strong><br />
                Check your email for session details and coach contact information.
              </p>
            </div>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                window.location.href = '/';
              }}
              className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 px-6 rounded-lg transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 mt-20 sm:mt-32 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
              © 2025 Corporalis. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Facebook">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="LinkedIn">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left">
            <a href="/privacy-policy" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/contact" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookSession;
