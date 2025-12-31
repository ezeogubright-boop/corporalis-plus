import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Coach from './pages/Coach';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Dashboard from './pages/Dashboard';
import BookSession from './pages/BookSession';
import Bookings from './pages/Bookings';
import Enroll from './pages/Enroll';
import Goals from './pages/Goals';
import MyPrograms from './pages/MyPrograms';
import Progress from './pages/Progress';
import Consultation from './pages/Consultation';
import Checkout from './pages/Checkout';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 relative min-h-screen">
        {/* Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:4rem_4rem] pointer-events-none opacity-40 z-0"></div>
        
        {/* Blur Effects */}
        <div className="fixed top-20 left-[15%] w-10 h-10 bg-primary/20 blur-sm dark:bg-primary/10 z-0"></div>
        <div className="fixed top-40 right-[35%] w-8 h-8 bg-primary/15 blur-sm dark:bg-primary/10 z-0"></div>
        <div className="fixed bottom-32 left-[40%] w-16 h-16 bg-primary/10 blur-xl rounded-full z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/my-programs" element={<MyPrograms />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            {/* Fallback for undefined routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
