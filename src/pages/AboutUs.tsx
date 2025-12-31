import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function AboutUs() {

  const coreValues = [
    {
      icon: 'bx-dumbbell',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do - from program design to customer service. Your success is our standard.'
    },
    {
      icon: 'bx-group',
      title: 'Community',
      description: 'We believe in the power of community. Together, we inspire, support, and celebrate each other\'s achievements.'
    },
    {
      icon: 'bx-test-tube',
      title: 'Science-Based',
      description: 'Every program is backed by science and proven methodologies. We trust data, not trends.'
    },
    {
      icon: 'bx-leaf',
      title: 'Sustainability',
      description: 'We focus on long-term transformation, not quick fixes. Your health is a journey, and we\'re here for the long run.'
    },
    {
      icon: 'bx-accessibility',
      title: 'Inclusivity',
      description: 'Fitness is for everyone. We\'re committed to creating an inclusive environment where all bodies and abilities are welcome.'
    },
    {
      icon: 'bx-target-lock',
      title: 'Results-Driven',
      description: 'We measure success by the results you achieve. Your goals are our goals, and we\'re committed to helping you reach them.'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Corporalis Founded',
      description: 'Started with a vision to make fitness accessible and effective for everyone. Launched with 5 foundational programs.'
    },
    {
      year: '2018',
      title: 'Reached 10K Members',
      description: 'Expanded our team to 20 coaches and launched our mobile app for better accessibility.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pivoted to online training during global pandemic. Expanded to 200+ programs and built a thriving virtual community.'
    },
    {
      year: '2022',
      title: 'Reached 30K Members',
      description: 'Launched advanced analytics and personalized coaching. Received "Best Fitness Platform" award.'
    },
    {
      year: '2024',
      title: 'Milestone: 50K+ Members & Counting',
      description: 'Celebrating success with 500+ programs, 100+ expert coaches, and a global community of fitness enthusiasts.'
    }
  ];

  const stats = [
    {
      number: '50K+',
      label: 'Active Members',
      description: 'Training and transforming their bodies'
    },
    {
      number: '100+',
      label: 'Expert Coaches',
      description: 'Certified and dedicated to your success'
    },
    {
      number: '500+',
      label: 'Training Programs',
      description: 'For all fitness levels and goals'
    },
    {
      number: '8+',
      label: 'Years of Excellence',
      description: 'Helping people reach their goals'
    }
  ];

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
    
    .value-card {
      transition: all 0.3s ease;
    }
    .value-card:hover {
      transform: translateY(-8px);
    }
    .timeline-item {
      transition: all 0.3s ease;
    }
    .timeline-item:hover {
      transform: translateX(5px);
    }
    .stat-card {
      transition: all 0.3s ease;
    }
    .stat-card:hover {
      transform: scale(1.05);
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
            About <span className="text-primary">Corporalis</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            We're on a mission to transform lives through fitness, science-backed training, and a supportive community that believes in your potential.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-20 sm:mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Mission */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-10 shadow-lg animate-fade-in-up delay-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20">
                <i className="bx bx-target-lock text-primary text-3xl"></i>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark">
                Our Mission
              </h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              To empower individuals worldwide to achieve their fitness goals through personalized training programs, expert coaching, and a thriving community. We believe fitness is for everyone, and we're committed to making it accessible, enjoyable, and sustainable.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-10 shadow-lg animate-fade-in-up delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20">
                <i className="bx bx-bulb text-primary text-3xl"></i>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark">
                Our Vision
              </h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              To become the world's most trusted fitness platform, known for transforming lives, inspiring confidence, and building a global community where health and wellness are accessible to everyone, regardless of their starting point.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            By The <span className="text-primary">Numbers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-surface-light dark:bg-surface-dark rounded-xl p-8 text-center shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                  {stat.label}
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${((index % 2) + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <i className={`bx ${value.icon} text-4xl text-primary`}></i>
                  <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                    {value.title}
                  </h3>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item flex gap-6 mb-12 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white dark:text-black font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 flex-grow shadow-lg">
                  <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Why Choose <span className="text-primary">Corporalis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 'bx-check-circle',
                title: 'Science-Backed Programs',
                description: 'Every program is designed by certified experts using evidence-based methodologies proven to work.'
              },
              {
                icon: 'bx-check-circle',
                title: 'Personalized Approach',
                description: 'Your fitness journey is unique. We customize programs to fit your goals, abilities, and lifestyle.'
              },
              {
                icon: 'bx-check-circle',
                title: 'Expert Guidance',
                description: 'Access to certified coaches who are invested in your success and available to support your journey.'
              },
              {
                icon: 'bx-check-circle',
                title: 'Supportive Community',
                description: 'Join thousands of members who inspire, support, and celebrate each other\'s fitness journey.'
              }
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
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
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Be part of a global movement dedicated to health, wellness, and personal transformation. Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30">
              Start Your Free Trial
            </button>
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
