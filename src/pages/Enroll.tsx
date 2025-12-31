import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Enroll: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    level: 'Beginner',
    goals: [] as string[],
    notes: '',
    trainingDays: '3-4 days',
  });

  const programs = [
    { id: 1, name: 'Strength Builder', duration: '8 weeks' },
    { id: 2, name: 'Cardio Blast', duration: '6 weeks' },
    { id: 3, name: 'Weight Loss Journey', duration: '12 weeks' },
    { id: 4, name: 'Muscle Hypertrophy', duration: '10 weeks' },
    { id: 5, name: 'Flexibility & Mobility', duration: '4 weeks' },
    { id: 6, name: 'Total Body Transformation', duration: '8 weeks' },
  ];

  const goals = ['Weight Loss', 'Build Muscle', 'Improve Fitness', 'Increase Flexibility', 'Better Health'];

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const selectedProgramData = programs.find(p => p.id.toString() === selectedProgram);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Enroll in a Program</h1>
          <p className="text-xl text-gray-700">Start your fitness transformation today</p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Step Indicator */}
              <div className="flex justify-between mb-12">
                {[1, 2, 3, 4].map(s => (
                  <div key={s} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 ${step >= s ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'}`}>
                      {s}
                    </div>
                    <span className="text-sm text-gray-600">
                      {s === 1 ? 'Program' : s === 2 ? 'Personal' : s === 3 ? 'Assessment' : 'Health'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Program Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold mb-6">Select a Program</h2>
                  {programs.map(program => (
                    <label key={program.id} className={`p-6 border-2 rounded-lg cursor-pointer transition flex items-center gap-4 ${selectedProgram === program.id.toString() ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary'}`}>
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id.toString()}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-display font-bold text-lg">{program.name}</p>
                        <p className="text-gray-600">{program.duration}</p>
                      </div>
                    </label>
                  ))}
                </div>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold mb-6">Your Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Age"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {/* Step 3: Fitness Assessment */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold mb-6">Fitness Assessment</h2>
                  
                  <div>
                    <p className="font-body font-semibold mb-3">Current Fitness Level</p>
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                      <label key={level} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2 cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="level"
                          value={level}
                          checked={formData.level === level}
                          onChange={(e) => setFormData({...formData, level: e.target.value})}
                        />
                        <span>{level}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <p className="font-body font-semibold mb-3">Your Goals</p>
                    {goals.map(goal => (
                      <label key={goal} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2 cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData.goals.includes(goal)}
                          onChange={() => handleGoalToggle(goal)}
                        />
                        <span>{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Health & Preferences */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold mb-6">Health & Preferences</h2>
                  
                  <div>
                    <label className="block text-sm font-body font-medium text-gray-700 mb-2">Any Health Notes?</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Tell us about any injuries, medications, or health conditions..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-gray-700 mb-2">Training Days Per Week</label>
                    <select
                      value={formData.trainingDays}
                      onChange={(e) => setFormData({...formData, trainingDays: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="1-2 days">1-2 days</option>
                      <option value="3-4 days">3-4 days</option>
                      <option value="5-6 days">5-6 days</option>
                      <option value="7 days">7 days</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" className="w-5 h-5 mt-1" />
                    <span className="text-sm text-gray-600">I agree to the terms and conditions</span>
                  </label>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-body font-semibold hover:border-primary disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(Math.min(4, step + 1))}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600"
                >
                  {step === 4 ? 'Complete Enrollment' : 'Next'}
                </button>
              </div>
            </div>

            {/* Enrollment Summary */}
            <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
              <h3 className="text-xl font-display font-bold mb-6">Summary</h3>
              
              {selectedProgramData && (
                <div className="mb-6 pb-6 border-b">
                  <p className="text-sm text-gray-600 mb-1">Program</p>
                  <p className="font-display font-bold text-lg">{selectedProgramData.name}</p>
                  <p className="text-sm text-gray-600">{selectedProgramData.duration}</p>
                </div>
              )}

              {formData.name && (
                <div className="mb-6 pb-6 border-b">
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="font-body font-semibold">{formData.name}</p>
                </div>
              )}

              {formData.goals.length > 0 && (
                <div className="mb-6 pb-6 border-b">
                  <p className="text-sm text-gray-600 mb-2">Goals</p>
                  <div className="space-y-1">
                    {formData.goals.map(goal => (
                      <p key={goal} className="text-sm font-body">✓ {goal}</p>
                    ))}
                  </div>
                </div>
              )}

              {selectedProgramData && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Get Started In</p>
                  <p className="text-2xl font-display font-bold text-primary">3 Steps</p>
                </div>
              )}

              <button className="w-full py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
                Confirm Enrollment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enroll;
