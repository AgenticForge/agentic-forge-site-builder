import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";
import circuitBoard from "@/assets/circuit-board.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  useScrollAnimation();
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero circuit-pattern overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Automation Technology" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-muted/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Advanced AI Automation Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-gradient-primary">Intelligent AI Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We build sophisticated AI agents and seamless workflow automations that scale your operations and eliminate manual tasks using cutting-edge LangGraph and n8n technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Get Free AI Audit
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline-glow" size="lg" className="px-8 py-4 text-lg">
              <Play className="mr-2" />
              View Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-accent mb-2">422+</div>
              <div className="text-muted-foreground">Pre-built Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-accent mb-2">300%</div>
              <div className="text-muted-foreground">Average Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-accent mb-2">40hrs</div>
              <div className="text-muted-foreground">Weekly Time Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;