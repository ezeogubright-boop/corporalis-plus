import React, { useState } from 'react';
import Header from '../components/Header';

export const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select a consultation type';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  const benefits = [
    {
      title: 'Personalized Plans',
      description: 'Customized fitness and nutrition guidance tailored to your goals'
    },
    {
      title: 'Expert Guidance',
      description: 'Direct access to certified coaches and fitness experts'
    },
    {
      title: 'Goal Setting',
      description: 'Help establish realistic and achievable fitness targets'
    },
    {
      title: 'Accountability',
      description: 'Stay motivated with ongoing support and progress tracking'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      program: 'Weight Loss Program',
      text: '"The consultation with Coach Alex was life-changing. He created a personalized plan that actually fits my lifestyle. I\'ve lost 15 pounds in 3 months!'
    },
    {
      name: 'Marcus J.',
      program: 'Fitness Assessment',
      text: '"I was intimidated about starting fitness, but the consultation made everything clear. The coaches are so supportive and knowledgeable!'
    },
    {
      name: 'Emily R.',
      program: 'Nutrition Planning',
      text: '"Best investment in my health! The nutrition plan is easy to follow and I\'ve never had more energy. Highly recommend booking a consultation!'
    }
  ];

  const faqs = [
    {
      question: 'How long is a consultation?',
      answer: 'Initial consultations typically last 45-60 minutes. This gives us enough time to understand your goals, assess your current fitness level, and create a customized plan for you.'
    },
    {
      question: 'Is the first consultation really free?',
      answer: 'Yes! Your first consultation is completely free. No credit card required. We offer this to help you get acquainted with our coaches and see if Corporalis is the right fit for you.'
    },
    {
      question: 'Can I do a virtual or in-person consultation?',
      answer: 'Both options are available! You can choose virtual consultation via video call or schedule an in-person meeting at our facility. Select your preference during booking.'
    },
    {
      question: 'What do I need to prepare for the consultation?',
      answer: 'Just come with an open mind! If you have fitness goals, past medical issues, or specific concerns, jotting those down beforehand can be helpful. Wear comfortable clothes for in-person consultations.'
    },
    {
      question: 'How do I reschedule or cancel my consultation?',
      answer: 'You can reschedule or cancel with 24 hours notice by contacting our support team. Just reply to the confirmation email or call us directly. No penalties for cancellations with proper notice.'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
      
      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 animate-fade-in-up">
            Schedule Your <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Get personalized guidance from our expert coaches. Book your free consultation today and start your transformation journey.
          </p>
        </section>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-20 sm:mb-32">
          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-10 shadow-lg animate-fade-in-up">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-8">
                Tell Us About You
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.consultationType ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a consultation type</option>
                    <option value="fitness-assessment">Fitness Assessment</option>
                    <option value="nutrition-plan">Nutrition Planning</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="weight-loss">Weight Loss Program</option>
                    <option value="muscle-building">Muscle Building</option>
                    <option value="general">General Consultation</option>
                  </select>
                  {errors.consultationType && <div className="text-red-600 text-sm mt-1">{errors.consultationType}</div>}
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.preferredDate ? 'border-red-500' : ''}`}
                  />
                  {errors.preferredDate && <div className="text-red-600 text-sm mt-1">{errors.preferredDate}</div>}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.preferredTime ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  {errors.preferredTime && <div className="text-red-600 text-sm mt-1">{errors.preferredTime}</div>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your fitness goals and any concerns..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  Schedule Consultation
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 p-6 bg-primary/20 border border-primary rounded-lg animate-fade-in-up">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="bx bx-check-circle text-primary text-2xl"></i>
                    <h3 className="font-bold text-text-main-light dark:text-text-main-dark">Consultation Scheduled!</h3>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    Thank you for booking with us. We'll contact you shortly to confirm your consultation details.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            {/* Why Book Section */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-lg animate-fade-in-up delay-200">
              <h3 className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                Why Book a <span className="text-primary">Consultation?</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <i className="bx bx-check-circle text-primary text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-main-light dark:text-text-main-dark mb-1">{benefit.title}</h4>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-6 border border-primary/30">
              <div className="flex items-start gap-3 mb-4">
                <i className="bx bx-info-circle text-primary text-2xl flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-text-main-light dark:text-text-main-dark mb-1">First Consultation</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Free for all new members</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                <p><strong>Duration:</strong> 45-60 minutes</p>
                <p><strong>Mode:</strong> Virtual or In-Person</p>
                <p><strong>No Credit Card Required</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-surface-light dark:bg-surface-dark rounded-xl p-8 shadow-lg animate-fade-in-up" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bx bxs-star text-primary"></i>
                  ))}
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <i className="bx bx-user text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main-light dark:text-text-main-dark">{testimonial.name}</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 sm:mb-32">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-12 text-center animate-fade-in-up">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-lg animate-fade-in-up" style={{animationDelay: `${((index % 3) + 1) * 100}ms`}}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="font-semibold text-text-main-light dark:text-text-main-dark pr-6">
                    {faq.question}
                  </h3>
                  <i className={`bx bx-chevron-down text-text-main-light dark:text-text-main-dark text-2xl flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-text-muted-light dark:text-text-muted-dark">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 sm:mb-24 bg-gradient-to-r from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Ready to Transform Your <span className="text-primary">Fitness?</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Take the first step towards your fitness goals. Book your free consultation with one of our expert coaches today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button
              onClick={() => document.getElementById('fullName')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/30"
            >
              Book Consultation
            </button>
            <a
              href="/pricing"
              className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all text-center"
            >
              View Pricing
            </a>
          </div>
        </section>
      </main>

      <style>{`
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
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
        .form-input {
          transition: all 0.3s ease;
        }
        .form-input:focus {
          transform: translateY(-2px);
        }
        .testimonial-card {
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Consultation;
