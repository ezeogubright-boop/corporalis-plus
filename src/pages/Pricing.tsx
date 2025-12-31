import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState(false);

  const pricingPlans = [
    {
      name: 'Basic',
      subtitle: 'Perfect for beginners',
      price: 29,
      description: 'Get Started',
      featured: false,
      features: [
        { text: '1 Program Access', included: true },
        { text: 'Video Workouts', included: true },
        { text: 'Basic Nutrition Guide', included: true },
        { text: 'Progress Tracking', included: false },
        { text: 'Coach Support', included: false },
        { text: 'Community Access', included: false }
      ]
    },
    {
      name: 'Professional',
      subtitle: 'Most popular',
      price: 59,
      description: 'Get Started',
      featured: false,
      features: [
        { text: 'All Programs', included: true },
        { text: 'Advanced Workouts', included: true },
        { text: 'Custom Nutrition Plan', included: true },
        { text: 'Progress Tracking', included: true },
        { text: 'Monthly Coach Check-in', included: true },
        { text: 'Community Access', included: false }
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Best value',
      price: 99,
      description: 'Get Started',
      featured: true,
      badge: 'MOST POPULAR',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Weekly Coach Support', included: true },
        { text: 'Form Check Videos', included: true },
        { text: 'Advanced Metrics', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Community Access', included: true }
      ]
    },
    {
      name: 'Elite',
      subtitle: 'Premium experience',
      price: 199,
      description: 'Get Started',
      featured: false,
      features: [
        { text: 'Everything in Premium', included: true },
        { text: '1-on-1 Personal Coaching', included: true },
        { text: 'Custom Meal Plans', included: true },
        { text: 'Unlimited Check-ins', included: true },
        { text: '24/7 Coach Support', included: true },
        { text: 'VIP Community', included: true }
      ]
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
    
    .pricing-card {
      transition: all 0.3s ease;
      height: 100%;
    }
    .pricing-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 60px rgba(57, 224, 30, 0.2);
    }
    .pricing-card.featured {
      transform: scale(1.05);
    }
    .pricing-card.featured:hover {
      transform: scale(1.05) translateY(-12px);
    }
    .feature-check {
      transition: all 0.3s ease;
    }
    .feature-check:hover {
      transform: translateX(5px);
    }
    .toggle-switch {
      transition: all 0.3s ease;
    }
    .toggle-switch.active {
      background-color: #39E01E;
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
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Choose the perfect plan for your fitness journey. All plans include expert guidance and lifetime access to your program materials.
          </p>
        </section>

        {/* Billing Toggle */}
        <section className="mb-16 sm:mb-24 flex justify-center items-center gap-4 animate-fade-in-up delay-200">
          <span className="text-text-main-light dark:text-text-main-dark font-medium">Monthly</span>
          <button
            onClick={() => setBillingCycle(!billingCycle)}
            className={`toggle-switch w-14 h-8 rounded-full relative transition-all ${
              billingCycle ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
            }`}
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform"
              style={{
                transform: billingCycle ? 'translateX(1.5rem)' : 'translateX(0)'
              }}
            ></div>
          </button>
          <span className="text-text-main-light dark:text-text-main-dark font-medium">
            Yearly <span className="text-primary font-bold text-sm">(Save 20%)</span>
          </span>
        </section>

        {/* Pricing Cards */}
        <section className="mb-20 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-end">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${
                  plan.featured
                    ? 'featured bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 border-2 border-primary shadow-2xl'
                    : 'bg-surface-light dark:bg-surface-dark shadow-lg'
                } rounded-2xl overflow-hidden animate-fade-in-up`}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`
                }}
              >
                {plan.featured && (
                  <div className="bg-primary text-white dark:text-black text-center py-3 font-bold text-sm">
                    {plan.badge}
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-6">
                    {plan.subtitle}
                  </p>
                  <div className="mb-6">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-text-main-light dark:text-text-main-dark">
                      ${plan.price}
                    </span>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm">/month</span>
                  </div>
                  <Link
                    to="/checkout"
                    className={`w-full font-semibold py-3 rounded-lg transition-all mb-8 block text-center ${
                      plan.featured || plan.name === 'Professional' || plan.name === 'Premium'
                        ? 'bg-primary hover:bg-opacity-90 text-white dark:text-black'
                        : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    {plan.description}
                  </Link>
                  <div className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="feature-check flex items-start gap-3">
                        {feature.included ? (
                          <i className="bx bx-check text-primary text-xl flex-shrink-0 mt-1"></i>
                        ) : (
                          <i className="bx bx-x text-gray-400 text-xl flex-shrink-0 mt-1"></i>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? 'text-text-main-light dark:text-text-main-dark'
                              : 'text-text-muted-light dark:text-text-muted-dark'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Compare <span className="text-primary">Plans</span>
          </h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg overflow-x-auto animate-fade-in-up delay-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="px-4 sm:px-8 py-4 text-left text-sm sm:text-base font-bold text-text-main-light dark:text-text-main-dark">
                    Feature
                  </th>
                  <th className="px-4 sm:px-8 py-4 text-center text-sm sm:text-base font-bold text-text-main-light dark:text-text-main-dark">
                    Basic
                  </th>
                  <th className="px-4 sm:px-8 py-4 text-center text-sm sm:text-base font-bold text-text-main-light dark:text-text-main-dark">
                    Professional
                  </th>
                  <th className="px-4 sm:px-8 py-4 text-center text-sm sm:text-base font-bold text-primary">
                    Premium
                  </th>
                  <th className="px-4 sm:px-8 py-4 text-center text-sm sm:text-base font-bold text-text-main-light dark:text-text-main-dark">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Programs Access
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Video Workouts
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Nutrition Guidance
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center text-gray-400">Basic</td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Progress Tracking
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Coach Support
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">Monthly</td>
                  <td className="px-4 sm:px-8 py-4 text-center">Weekly</td>
                  <td className="px-4 sm:px-8 py-4 text-center">24/7</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Personal Training
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-8 py-4 text-sm sm:text-base text-text-main-light dark:text-text-main-dark">
                    Community Access
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-x text-gray-400 text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">
                    <i className="bx bx-check text-primary text-xl inline"></i>
                  </td>
                  <td className="px-4 sm:px-8 py-4 text-center">VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Why Choose <span className="text-primary">Corporalis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {[
              {
                icon: 'bx-award',
                title: 'Expert-Designed Programs',
                description: 'All our programs are created by certified fitness professionals with years of experience.'
              },
              {
                icon: 'bx-infinite',
                title: 'Lifetime Access',
                description: 'Once enrolled, you get lifetime access to all your program materials and updates.'
              },
              {
                icon: 'bx-traffic',
                title: 'Results-Driven Approach',
                description: 'Our methods are proven to deliver real results. See transformations in weeks, not months.'
              },
              {
                icon: 'bx-smile',
                title: 'Supportive Community',
                description: 'Join thousands who are on the same journey. Share experiences and celebrate wins together.'
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
            Ready to <span className="text-primary">Transform</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Get started today and join thousands of members achieving their fitness goals. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              to="/checkout"
              className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30"
            >
              Get Started Now
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
