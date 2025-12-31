import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Strength Builder',
      duration: '8 Weeks',
      difficulty: 'Beginner',
      subtitle: 'Build Muscle & Power',
      icon: 'bx-dumbbell',
      color: 'from-primary/30 to-primary/10',
      badgeColor: 'bg-yellow-400',
      checkColor: 'text-primary',
      description: 'A comprehensive 8-week strength training program designed to build lean muscle and increase overall power.',
      features: [
        '3-4 sessions per week',
        'Progressive overload training',
        'Nutrition guidance included'
      ]
    },
    {
      id: 2,
      title: 'Cardio Blast',
      duration: '6 Weeks',
      difficulty: 'Intermediate',
      subtitle: 'High Energy & Endurance',
      icon: 'bx-run',
      color: 'from-blue-300/30 to-blue-300/10',
      badgeColor: 'bg-orange-400',
      checkColor: 'text-blue-400',
      description: 'Intense 6-week cardio program to boost your stamina, burn calories, and improve cardiovascular health.',
      features: [
        '5-6 sessions per week',
        'HIIT & steady-state cardio',
        'Recovery routines'
      ]
    },
    {
      id: 3,
      title: 'Weight Loss Journey',
      duration: '12 Weeks',
      difficulty: 'All Levels',
      subtitle: 'Sustainable Fat Loss',
      icon: 'bx-wellness',
      color: 'from-red-300/30 to-red-300/10',
      badgeColor: 'bg-red-400',
      checkColor: 'text-red-400',
      description: 'Proven 12-week transformation program combining strength, cardio, and nutrition for lasting results.',
      features: [
        '4-5 sessions per week',
        'Full nutrition plan',
        'Weekly progress tracking'
      ]
    },
    {
      id: 4,
      title: 'Muscle Hypertrophy',
      duration: '10 Weeks',
      difficulty: 'Advanced',
      subtitle: 'Serious Muscle Growth',
      icon: 'bx-target-lock',
      color: 'from-purple-300/30 to-purple-300/10',
      badgeColor: 'bg-purple-400',
      checkColor: 'text-purple-400',
      description: 'Advanced 10-week bodybuilding program for maximizing muscle size and definition with expert techniques.',
      features: [
        '5-6 sessions per week',
        'Periodized training splits',
        'Supplement guide included'
      ]
    },
    {
      id: 5,
      title: 'Flexibility & Mobility',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      subtitle: 'Enhanced Range of Motion',
      icon: 'bx-leaf',
      color: 'from-green-300/30 to-green-300/10',
      badgeColor: 'bg-green-400',
      checkColor: 'text-green-400',
      description: 'Quick 4-week yoga and flexibility program to improve mobility, reduce tension, and prevent injuries.',
      features: [
        '4 sessions per week',
        'Guided yoga classes',
        'Stretching routines'
      ]
    },
    {
      id: 6,
      title: 'Total Body Transformation',
      duration: '8 Weeks',
      difficulty: 'Intermediate',
      subtitle: 'Complete Fitness Overhaul',
      icon: 'bx-zap',
      color: 'from-orange-300/30 to-orange-300/10',
      badgeColor: 'bg-orange-400',
      checkColor: 'text-orange-400',
      description: 'Balanced 8-week program combining strength, cardio, flexibility, and nutrition for total body changes.',
      features: [
        '4-5 sessions per week',
        'Complete nutrition plan',
        'Personalized coach support'
      ]
    }
  ];

  const filteredPrograms = programs.filter(program => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'beginner') return program.difficulty === 'Beginner';
    if (activeFilter === 'intermediate') return program.difficulty === 'Intermediate';
    if (activeFilter === 'advanced') return program.difficulty === 'Advanced';
    return true;
  });

  const styles = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
    }
    .delay-100 { animation-delay: 100ms; }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }
    .delay-400 { animation-delay: 400ms; }
    
    .program-card {
      transition: all 0.3s ease;
      height: 100%;
    }
    .program-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(57, 224, 30, 0.15);
    }
    .program-image {
      transition: transform 0.3s ease;
    }
    .program-card:hover .program-image {
      transform: scale(1.05);
    }
    .feature-item {
      transition: all 0.3s ease;
    }
    .feature-item:hover {
      transform: translateX(5px);
    }
  `;

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300">
      <style>{styles}</style>
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:4rem_4rem] pointer-events-none opacity-40 z-0"></div>
      <div className="fixed top-20 left-[15%] w-10 h-10 bg-primary/20 blur-sm dark:bg-primary/10 z-0"></div>
      <div className="fixed top-40 right-[35%] w-8 h-8 bg-primary/15 blur-sm dark:bg-primary/10 z-0"></div>
      <div className="fixed bottom-32 left-[40%] w-16 h-16 bg-primary/10 blur-xl rounded-full z-0"></div>

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 animate-fade-in-up">
            Choose Your <span className="text-primary">Fitness Program</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Find the perfect training program designed by experts to help you reach your fitness goals faster and safer.
          </p>
        </section>

        {/* Filter Section */}
        <section className="mb-16 sm:mb-24 flex flex-wrap gap-3 justify-center">
          {[
            { label: 'All Programs', value: 'all', delay: 100 },
            { label: 'Beginner', value: 'beginner', delay: 200 },
            { label: 'Intermediate', value: 'intermediate', delay: 300 },
            { label: 'Advanced', value: 'advanced', delay: 400 }
          ].map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all animate-fade-in-up ${
                activeFilter === filter.value
                  ? 'bg-primary text-white dark:text-black shadow-lg shadow-primary/30'
                  : 'bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark hover:text-primary hover:bg-primary/10'
              }`}
              style={{ animationDelay: `${filter.delay}ms` }}
            >
              {filter.label}
            </button>
          ))}
        </section>

        {/* Programs Grid */}
        <section className="mb-20 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className="program-card bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br ${program.color}`}>
                  <div className="program-image w-full h-full flex items-center justify-center">
                    <i className={`bx ${program.icon} text-6xl sm:text-8xl opacity-40`}></i>
                  </div>
                  <div className={`absolute top-4 left-4 ${program.badgeColor} px-4 py-2 rounded-full text-white dark:text-black font-bold text-sm`}>
                    {program.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <span className={`${program.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {program.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    {program.title}
                  </h3>
                  <p className={`${program.checkColor} font-semibold mb-4`}>
                    {program.subtitle}
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <i className={`bx bx-check ${program.checkColor} text-xl`}></i>
                        <span className="text-text-main-light dark:text-text-main-dark text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/enroll"
                    className={`w-full ${program.badgeColor} hover:opacity-90 text-white dark:text-black font-semibold py-3 rounded-lg transition-transform active:scale-95 block text-center`}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Features Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            What's Included in Each <span className="text-primary">Program</span>
          </h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'bx-video',
                  title: 'Video Demonstrations',
                  description: 'High-quality exercise videos with proper form guidance for every workout.'
                },
                {
                  icon: 'bx-spreadsheet',
                  title: 'Workout Plans',
                  description: 'Detailed weekly schedules with sets, reps, and rest periods included.'
                },
                {
                  icon: 'bx-leaf',
                  title: 'Nutrition Guidance',
                  description: 'Customized meal plans and macronutrient calculations for optimal results.'
                },
                {
                  icon: 'bx-chart',
                  title: 'Progress Tracking',
                  description: 'Monitor your progress with detailed metrics and performance analytics.'
                },
                {
                  icon: 'bx-user',
                  title: 'Coach Support',
                  description: 'Access to certified coaches for form checks, adjustments, and motivation.'
                },
                {
                  icon: 'bx-network-chart',
                  title: 'Community Access',
                  description: 'Connect with thousands of members for support, tips, and accountability.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="feature-item flex gap-4 animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                      <i className={`bx ${feature.icon} text-primary text-2xl`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 sm:mb-24 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Ready to <span className="text-primary">Begin</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Choose your program today and start your transformation journey. Expert guidance, proven results, supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              to="/pricing"
              className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30"
            >
              View Pricing
            </Link>
            <Link
              to="/consultation"
              className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>

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
            <Link to="/privacy-policy" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
