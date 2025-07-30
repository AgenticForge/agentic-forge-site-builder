import { Button } from "@/components/ui/button";
import { Cog, Menu, ArrowRight, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-background p-2 rounded-lg">
                <Cog className="w-7 h-7 text-primary animate-spin" style={{ animationDuration: '10s' }} />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-secondary animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gradient-primary tracking-tight">AgenticForge</span>
              <div className="text-xs text-muted-foreground font-medium">AI Automation Agency</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="relative text-muted-foreground hover:text-primary transition-colors font-medium group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#why-choose" className="relative text-muted-foreground hover:text-primary transition-colors font-medium group">
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#case-studies" className="relative text-muted-foreground hover:text-primary transition-colors font-medium group">
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="relative text-muted-foreground hover:text-primary transition-colors font-medium group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative text-muted-foreground hover:text-primary transition-colors font-medium group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40 text-muted-foreground hover:text-primary">
              Free Audit
            </Button>
            <Button size="sm" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              Schedule Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;