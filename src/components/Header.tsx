import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

  // const navigate = useNavigate();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-lg">
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
                    // Smooth scroll to section
                    e.preventDefault();
                    const section = document.getElementById(item.id);
                    if (section) {
                      const headerHeight = 120; // Account for fixed header
                      const elementPosition = section.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
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
              onClick={() => handleNavigation('/legal')}
            >
              Free Audit
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border-0"
              /* {onClick={() => handleNavigation('/consultation')}}  
              Need to add a calendar modal here*/
              
            >
              Schedule Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden hover:bg-white/10 transition-colors duration-300">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
