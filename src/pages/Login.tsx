import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (emailValue: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      localStorage.setItem('userLoggedIn', 'true');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    }
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email' }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordBlur = () => {
    if (password && password.length < 6) {
      setErrors((prev) => ({ ...prev, password: 'Password too short' }));
    } else {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
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
    @keyframes scale-in {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
    }
    .animate-scale-in {
      animation: scale-in 0.5s ease-out forwards;
    }
    .animate-shake {
      animation: shake 0.5s ease-in-out;
    }
    .delay-100 { animation-delay: 100ms; }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }
    .delay-400 { animation-delay: 400ms; }
    
    .input-field {
      transition: all 0.3s ease;
    }
    
    .input-field:focus {
      box-shadow: 0 0 0 3px rgba(57, 224, 30, 0.1);
    }
    
    .error-input {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
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

      {/* Navigation Bar */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <i className="bx bxs-globe text-text-main-light dark:text-text-main-dark text-2xl sm:text-3xl"></i>
          <span className="font-display font-bold text-lg sm:text-xl text-text-main-light dark:text-text-main-dark">
            Corporalis
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            }}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark" 
            title="Toggle dark mode"
          >
            <i id="themeIcon" className="bx bx-moon text-2xl"></i>
          </button>
          <Link to="/" className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark" title="Back to home">
            <i className="bx bx-arrow-back text-2xl"></i>
          </Link>
        </div>
      </nav>

      {/* Main Login Container */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl p-6 sm:p-8 animate-scale-in">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
                Welcome Back
              </h1>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base">
                Sign in to your account to continue
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 animate-fade-in-up delay-100">
              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <i className="bx bx-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark text-xl pointer-events-none"></i>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    className={`input-field w-full pl-10 pr-4 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:border-primary transition-all ${
                      errors.email ? 'error-input' : ''
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark mb-2">
                  Password
                </label>
                <div className="relative">
                  <i className="bx bx-lock-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark text-xl pointer-events-none"></i>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    className={`input-field w-full pl-10 pr-12 py-3 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg text-text-main-light dark:text-text-main-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:border-primary transition-all ${
                      errors.password ? 'error-input' : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  >
                    <i className={`bx ${showPassword ? 'bx-hide' : 'bx-show'} text-xl`}></i>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded border border-gray-300 dark:border-gray-600 text-primary bg-background-light dark:bg-background-dark cursor-pointer accent-primary"
                  />
                  <span className="text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-primary hover:text-opacity-80 font-medium transition-opacity">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold text-base sm:text-lg py-3 sm:py-3.5 rounded-lg transition-all active:scale-95 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 mt-6 flex items-center justify-center gap-2"
              >
                <i className="bx bx-log-in text-xl"></i>
                Sign In
              </button>

              {/* Success Message */}
              {showSuccess && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in-up">
                  <i className="bx bx-check-circle text-xl"></i>
                  <span>Login successful! Redirecting...</span>
                </div>
              )}
            </form>

            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-200">
              <button className="flex items-center justify-center py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-primary/10 transition-all hover:border-primary group">
                <i className="fab fa-google text-xl text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors"></i>
              </button>
              <button className="flex items-center justify-center py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-primary/10 transition-all hover:border-primary group">
                <i className="fab fa-facebook text-xl text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors"></i>
              </button>
              <button className="flex items-center justify-center py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-primary/10 transition-all hover:border-primary group">
                <i className="fab fa-apple text-xl text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors"></i>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-text-muted-light dark:text-text-muted-dark text-sm mt-6 sm:mt-8 animate-fade-in-up delay-300">
              Don't have an account?
              <a href="#" className="text-primary hover:text-opacity-80 font-bold transition-opacity">
                {' '}Sign up now
              </a>
            </p>
          </div>

          {/* Features Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12">
            <div className="text-center p-4 animate-fade-in-up delay-300">
              <i className="bx bx-shield-alt text-3xl text-primary mb-2"></i>
              <h3 className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Secure</h3>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">256-bit encryption</p>
            </div>
            <div className="text-center p-4 animate-fade-in-up delay-400">
              <i className="bx bx-zap text-3xl text-primary mb-2"></i>
              <h3 className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Fast</h3>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Instant access</p>
            </div>
            <div className="text-center p-4 animate-fade-in-up delay-400">
              <i className="bx bx-check-double text-3xl text-primary mb-2"></i>
              <h3 className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Verified</h3>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">2FA support</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

