import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <i className="bx bxs-globe text-text-main-light dark:text-text-main-dark text-2xl sm:text-3xl"></i>
          <span className="font-display font-bold text-lg sm:text-xl text-text-main-light dark:text-text-main-dark">
            Corporalis
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="Home"
          >
            <i className="bx bx-home text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              Home
            </span>
          </Link>

          <Link 
            to="/coach" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="Coach"
          >
            <i className="bx bx-user text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              Coach
            </span>
          </Link>

          <Link 
            to="/programs" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="Programs"
          >
            <i className="bx bx-dumbbell text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              Programs
            </span>
          </Link>

          <Link 
            to="/pricing" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="Pricing"
          >
            <i className="bx bx-money text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              Pricing
            </span>
          </Link>

          <Link 
            to="/aboutus" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="About us"
          >
            <i className="bx bx-info-circle text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              About us
            </span>
          </Link>

          <Link 
            to="/contact" 
            className="group relative text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors"
            title="Contact"
          >
            <i className="bx bx-envelope text-2xl"></i>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
              Contact
            </span>
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark"
            title="Toggle dark mode"
          >
            {darkMode ? (
              <i className="bx bx-sun text-2xl"></i>
            ) : (
              <i className="bx bx-moon text-2xl"></i>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="bx bx-menu text-2xl"></i>
          </button>

          <Link
            to="/login"
            className="bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden text-sm sm:text-base"
            title="Login"
          >
            <span className="relative z-10">Log in</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="relative z-40 md:hidden bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link 
              to="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-home text-2xl"></i>
              <span>Home</span>
            </Link>
            <Link 
              to="/coach" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-user text-2xl"></i>
              <span>Coach</span>
            </Link>
            <Link 
              to="/programs" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-dumbbell text-2xl"></i>
              <span>Programs</span>
            </Link>
            <Link 
              to="/pricing" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-money text-2xl"></i>
              <span>Pricing</span>
            </Link>
            <Link 
              to="/aboutus" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-info-circle text-2xl"></i>
              <span>About us</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-main-light dark:text-text-main-dark hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-envelope text-2xl"></i>
              <span>Contact</span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-medium hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bx bx-log-in text-2xl"></i>
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
