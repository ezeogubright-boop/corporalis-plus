import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: 'bx-phone',
      title: 'Phone',
      description: 'Call us during business hours',
      contact: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      delay: '100ms',
    },
    {
      icon: 'bx-envelope',
      title: 'Email',
      description: 'Send us an email anytime',
      contact: 'support@corporalis.com',
      href: 'mailto:support@corporalis.com',
      delay: '200ms',
    },
    {
      icon: 'bx-map',
      title: 'Location',
      description: 'Visit us at our office',
      contact: '123 Fitness Street, Wellness City, WC 12345',
      delay: '300ms',
    },
    {
      icon: 'bx-time-five',
      title: 'Hours',
      description: 'Our business hours',
      contact: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed',
      delay: '400ms',
    },
  ];

  const faqs = [
    {
      question: 'How do I book a session?',
      answer: 'Visit our Book Session page, select your preferred coach, date, time, and session type. Complete the booking form and you\'ll receive a confirmation email.',
      delay: '100ms',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 48 hours in advance receive a full refund. Cancellations within 48 hours are subject to a 50% cancellation fee.',
      delay: '200ms',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer refunds for cancelled sessions following our cancellation policy. For other issues, please contact our support team.',
      delay: '300ms',
    },
    {
      question: 'Are sessions online or in-person?',
      answer: 'We offer both online and in-person sessions. You can choose your preferred format when booking.',
      delay: '400ms',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
  `;

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300">
      <style>{styles}</style>

      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:4rem_4rem] pointer-events-none opacity-40 z-0"></div>
      <div className="fixed top-20 left-[15%] w-10 h-10 bg-primary/20 blur-sm dark:bg-primary/10 z-0"></div>
      <div className="fixed top-40 right-[35%] w-8 h-8 bg-primary/15 blur-sm dark:bg-primary/10 z-0"></div>

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Have questions or feedback? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow"
                style={{ animationDelay: method.delay }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <i className={`bx ${method.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                  {method.title}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-3">
                  {method.description}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-primary font-semibold hover:opacity-80 transition-opacity break-all"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    {method.contact}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-10 shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-background-light dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background-light dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-background-light dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-light dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-background-light dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-white dark:text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <i className="bx bx-send text-lg"></i>
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in-up">
                    <i className="bx bx-check-circle text-xl"></i>
                    <span>Message sent successfully!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-8 text-center animate-fade-in-up">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow"
                style={{ animationDelay: faq.delay }}
              >
                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-3 flex items-center gap-2">
                  <i className="bx bx-question-mark text-primary text-2xl"></i>
                  {faq.question}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
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
