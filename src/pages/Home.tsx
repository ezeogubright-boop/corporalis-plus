import React from 'react';
import Header from '../components/Header';

export const Home: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
      
      <Header />
      
      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center min-h-[calc(100vh-100px)]">
        <div className="flex flex-col justify-center space-y-8 relative">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-text-main-light dark:text-text-main-dark tracking-tight animate-fade-in-up">
            Push <span className="relative inline-block text-primary">
              yourself
              <svg className="absolute -top-2 -left-4 w-[120%] h-[130%] text-text-main-light dark:text-text-main-dark stroke-current fill-none" preserveAspectRatio="none" viewBox="0 0 200 80">
                <ellipse cx="100" cy="40" rx="98" ry="38" strokeWidth="2" transform="rotate(-5 100 40)"></ellipse>
              </svg>
            </span>
            <br/>
            <span className="text-primary">harder</span> to become
            <br/>
            better
            <span className="inline-flex align-middle ml-1 sm:ml-2 h-10 sm:h-14 md:h-16 w-24 sm:w-32 md:w-40 rounded-full overflow-hidden border-2 border-text-main-light dark:border-text-main-dark relative">
              <img alt="Gym workout closeup" className="w-full h-full object-cover grayscale opacity-80 hover:scale-110 transition-transform duration-500 animate-pulse-slow" src="/photos/Ultimate_Fitness_Motivation.png"/>
            </span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up delay-100">
            Welcome to the place where health and fitness is a way of life! Improve your quality of life, get ready to change your life and step into the amazing world of fitness!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center animate-fade-in-up delay-200">
            <button className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all active:scale-95 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 animate-pulse-cta relative overflow-hidden">
              <span className="relative z-10">Start now</span>
              <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-text-muted-light dark:border-text-muted-dark text-text-main-light dark:text-text-main-dark hover:border-primary hover:text-primary hover:bg-primary/5 font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all">
              Download App
            </button>
          </div>
          <div className="pt-2 sm:pt-4">
            <p className="text-xs sm:text-sm text-text-muted-light dark:text-text-muted-dark mb-2 sm:mb-3 font-medium">Support By :</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-infinite gap-8 sm:gap-16">
                {/* Nike */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-nike text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Nike</span>
                </a>
                {/* Puma */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-puma text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Puma</span>
                </a>
                {/* Adidas */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-stripe text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Adidas</span>
                </a>
                {/* Reebok */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-reebok text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Reebok</span>
                </a>
                {/* New Balance */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-square text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">New Balance</span>
                </a>
                {/* Nike Repeat */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-nike text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Nike</span>
                </a>
                {/* Puma Repeat */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-puma text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Puma</span>
                </a>
                {/* Adidas Repeat */}
                <a href="#" className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-stripe text-3xl sm:text-4xl md:text-5xl text-text-main-light dark:text-text-main-dark opacity-70 group-hover:opacity-100 transition-opacity"></i>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-white dark:text-black bg-text-main-light dark:bg-text-main-dark rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">Adidas</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full flex items-end justify-center lg:justify-end pt-8 lg:pt-0">
          {/* Spinning Star Animation */}
          <div className="absolute top-1/3 right-10 text-text-main-light dark:text-text-main-dark animate-spin-slow">
            <svg fill="currentColor" height="40" viewBox="0 0 24 24" width="40">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
            </svg>
          </div>

          {/* Static Star at Bottom Left */}
          <div className="absolute bottom-20 left-10 text-text-main-light dark:text-text-main-dark">
            <svg fill="currentColor" height="30" viewBox="0 0 24 24" width="30">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
            </svg>
          </div>

          {/* Energy Drink Card */}
          <div className="absolute top-0 right-0 z-20 float-animation">
            <div className="bg-surface-light dark:bg-surface-dark/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-center gap-3 pr-6">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center overflow-hidden">
                <img alt="Protein Drink" className="w-full h-full object-cover" src="/photos/Speed Energy .jpg"/>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xs leading-tight">Best</span>
                <span className="text-text-main-light dark:text-text-main-dark font-medium text-xs leading-tight">Protein<br/>Drink</span>
              </div>
            </div>
            <svg className="absolute top-full right-8 w-32 h-32 pointer-events-none text-gray-200 dark:text-gray-700" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M 20 0 Q 20 40, 80 80"></path>
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform translate-y-10 scale-90 z-[-1]"></div>
            <img alt="Muscular athlete shouting in triumph" className="w-full h-auto object-cover mask-image-b drop-shadow-2xl animate-slide-in" src="/photos/Ultimate_Fitness_Motivation.png"/>
          </div>
        </div>
      </main>

      <style>{`
        .mask-image-b {
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes pulse-cta {
          0% { box-shadow: 0 0 0 0 rgba(57, 224, 30, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(57, 224, 30, 0); }
          100% { box-shadow: 0 0 0 0 rgba(57, 224, 30, 0); }
        }
        .animate-pulse-cta {
          animation: pulse-cta 2s ease-in-out infinite;
        }
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-infinite {
          animation: slide-infinite 20s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .animate-slide-infinite {
            animation: slide-infinite 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
