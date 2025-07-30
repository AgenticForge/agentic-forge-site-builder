import { Button } from "@/components/ui/button";
import { Cog, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Cog className="w-8 h-8 text-primary animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 text-secondary animate-spin" style={{ animationDuration: '8s' }}>
                <Cog className="w-8 h-8" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gradient-primary">AgenticForge</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#why-choose" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
            <a href="#industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline-glow" size="sm">Get Free Audit</Button>
            <Button variant="hero" size="sm">Schedule Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;