import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export const Coach: React.FC = () => {
  const coaches = [
    {
      id: 1,
      name: 'Alex Johnson',
      specialty: 'Strength & Conditioning Specialist',
      image: 'photos/Fit durch .jpg',
      badge: '#1 Coach',
      description: 'With 8+ years of experience, Alex specializes in powerlifting and muscle building programs designed for all fitness levels.',
      certifications: ['NASM Certified', 'ISSA Master Trainer'],
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'Nutrition & Weight Loss Expert',
      image: 'photos/Akalia Souza.jpg',
      badge: '#2 Coach',
      description: 'Sarah combines fitness training with nutritional guidance to help clients achieve sustainable weight loss and health goals.',
      certifications: ['ACE Certified', 'Nutrition Specialist'],
    },
    {
      id: 3,
      name: 'Marcus Thompson',
      specialty: 'Cardio & Endurance Coach',
      image: 'photos/Biggest Loser Trainer.jpg',
      badge: '#3 Coach',
      description: 'Marcus is passionate about helping athletes improve their cardio fitness and endurance through scientifically-proven methods.',
      certifications: ['NASM Certified', 'Running Coach'],
    },
  ];

  const specialties = [
    { name: 'Strength Training', icon: 'bx-dumbbell', description: 'Build muscle and increase your power with expert-designed strength programs.' },
    { name: 'Cardio & Endurance', icon: 'bx-run', description: 'Improve your cardiovascular fitness and stamina through proven training methods.' },
    { name: 'Nutrition Planning', icon: 'bx-leaf', description: 'Get personalized meal plans and nutritional advice tailored to your goals.' },
    { name: 'Flexibility & Mobility', icon: 'bx-wellness', description: 'Enhance your range of motion and prevent injuries with specialized programs.' },
  ];

  const certifications = [
    'NASM Certification',
    'ACE Certification',
    'ISSA Master Trainer',
    'Sports Nutrition',
    'CPR/First Aid',
    'Yoga Instructor',
  ];

  const whyChooseUs = [
    { title: 'Personalized Plans', icon: 'bx-target-lock', description: 'Each program is customized based on your fitness level, goals, and preferences.' },
    { title: 'Proven Results', icon: 'bx-trophy', description: 'Our clients consistently achieve their fitness goals with measurable progress.' },
    { title: 'Flexible Scheduling', icon: 'bx-time', description: 'Train at your convenience with flexible online and in-person session options.' },
    { title: 'Supportive Community', icon: 'bx-heart', description: 'Join a motivated community dedicated to health, wellness, and personal growth.' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
      
      <Header />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <section className="mb-16 sm:mb-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 animate-fade-in-up">
            Meet Our <span className="text-primary">Expert Coaches</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Our team of certified fitness professionals is dedicated to helping you achieve your goals with personalized training and expert guidance.
          </p>
        </section>

        {/* Coaches Grid */}
        <section className="mb-20 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coaches.map((coach, idx) => (
              <div 
                key={coach.id} 
                className="coach-card bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <img src={coach.image} alt={coach.name} className="coach-image w-full h-full object-cover"/>
                  <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full text-white dark:text-black font-bold text-sm">
                    {coach.badge}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{coach.specialty}</p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-6 leading-relaxed">
                    {coach.description}
                  </p>
                  {coach.certifications.map((cert, certIdx) => (
                    <div key={certIdx} className="flex gap-3 mb-6">
                      <i className="bx bx-medal text-primary text-xl"></i>
                      <span className="text-text-main-light dark:text-text-main-dark text-sm">{cert}</span>
                    </div>
                  ))}
                  <Link to="/book-session" className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold py-3 rounded-lg transition-transform active:scale-95 block text-center">
                    Book Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Our <span className="text-primary">Specialties</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, idx) => (
              <div 
                key={specialty.name}
                className="credential-badge bg-surface-light dark:bg-surface-dark rounded-xl p-6 sm:p-8 text-center shadow-md animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl text-primary mb-4">
                  <i className={`bx ${specialty.icon}`}></i>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                  {specialty.name}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20 sm:mb-32">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-12 shadow-lg">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-8 text-center animate-fade-in-up">
              Professional <span className="text-primary">Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg animate-fade-in-up"
                  style={{ animationDelay: `${(idx % 3) * 100}ms` }}
                >
                  <i className="bx bx-check-circle text-primary text-2xl flex-shrink-0"></i>
                  <span className="text-text-main-light dark:text-text-main-dark font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Why Choose <span className="text-primary">Our Coaches</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={reason.title}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${(idx % 2) * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/20">
                    <i className={`bx ${reason.icon} text-primary text-2xl`}></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 sm:mb-24 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Ready to <span className="text-primary">Transform?</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Get started with a free consultation from one of our expert coaches today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link to="/consultation" className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30 block text-center">
              Book Free Consultation
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all block text-center">
              View Pricing Plans
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

      <style>{`
        .coach-card {
          transition: all 0.3s ease;
        }
        .coach-card:hover {
          transform: translateY(-10px);
        }
        .coach-card:hover .coach-image {
          transform: scale(1.05);
        }
        .coach-image {
          transition: transform 0.3s ease;
        }
        .credential-badge {
          transition: all 0.3s ease;
        }
        .credential-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(57, 224, 30, 0.2);
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Coach;
