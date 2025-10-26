import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Custom hook for better active section detection
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'why-choose', 'case-studies', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for fixed header

      // Find the current section
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 10);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return activeSection;
};

const Header = () => {
  const activeSection = useActiveSection();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Navigation items configuration
  const navigationItems = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#why-choose', label: 'Solutions', id: 'why-choose' },
    { href: '#case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  const handleNavigation = (path: string) => {
    if (path === '/about' || path === '/contact') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleSectionNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerHeight = 120;
          const elementPosition = section.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 120;
        const elementPosition = section.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/10 dark:bg-black/10 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Properly sized for 500x191 dimensions */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <a href="/" onClick={handleLogoClick}>
              <img 
                src="/logo-landscape.png" 
                alt="AgenticForge Logo" 
                className="h-16"
              />
            </a>
          </div>

          {/* Enhanced Desktop Navigation with Persistent Active Underline */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <a 
                  key={item.id}
                  href={item.href} 
                  className={`relative transition-all duration-300 font-medium group pb-3 block ${
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavigation(item.id);
                  }}
                >
                  {item.label}
                  
                  {/* Enhanced Persistent Active Underline */}
                  <span 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                      isActive 
                        ? 'w-full opacity-100 scale-100' 
                        : 'w-0 opacity-0 scale-75 group-hover:w-full group-hover:opacity-100 group-hover:scale-100'
                    }`}
                  />
                  
                  {/* Additional glow effect for active state */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-primary/30 rounded-full blur-sm" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons with Glass Effect */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-foreground/80 hover:text-primary backdrop-blur-sm transition-all duration-300"
              // onClick={() => window.location.href = '/demo'}
              onClick={() => handleNavigation('/demo')}
            >
              Try Demo
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-foreground/80 hover:text-primary backdrop-blur-sm transition-all duration-300"
              onClick={() => handleNavigation('/consultation')}
            >
              Free Audit
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border-0"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item.id)}
                  className="text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-foreground/80 hover:text-primary backdrop-blur-sm transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation('/demo');
                  }}
                >
                  Try Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-foreground/80 hover:text-primary backdrop-blur-sm transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation('/consultation');
                  }}
                >
                  Free Audit
                </Button>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  Schedule Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>

    {/* Cal.com Scheduling Modal - Rendered outside header to avoid z-index stacking context issues */}
    {isModalOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-2xl w-full max-w-4xl h-[600px] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <X className="h-4 w-4" />
          </button>
          <iframe
            src="https://cal.com/agenticforge/30min"
            className="w-full h-full rounded-2xl border-none"
            allow="camera; microphone; fullscreen; display-capture"
            title="Schedule Discovery Call"
          />
        </motion.div>
      </motion.div>
    )}
    </>
  );
};

export default Header;
