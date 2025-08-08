import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, MessageSquare, Mail, Phone, ArrowRight, CheckCircle, Sparkles, Star, Zap, TrendingUp, Shield, Clock, Users, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Services data array (your existing services data)
const services = [
  // ... your services data
];

// Premium floating elements data
const floatingElements = [
  { icon: Star, delay: 0, x: "10%", y: "20%" },
  { icon: Zap, delay: 1, x: "85%", y: "15%" },
  { icon: TrendingUp, delay: 2, x: "15%", y: "75%" },
  { icon: Shield, delay: 0.5, x: "90%", y: "80%" },
  { icon: Clock, delay: 1.5, x: "5%", y: "45%" },
  { icon: Users, delay: 2.5, x: "95%", y: "50%" },
];

// Demo Section Component
const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="py-24 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Video Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Decorative frame */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-2xl blur opacity-25" />
        <div className="relative bg-card border border-blue-200/30 rounded-xl p-2 backdrop-blur-sm">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&rel=0${isPlaying ? '&autoplay=1' : ''}`}
              title="AgenticForge AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero"
            size="lg" 
            className="group"
            onClick={() => window.location.href = '/demo'}
          >
            Try Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/consultation'}
          >
            Schedule Demo Call
          </Button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="services" className="min-h-[65vh] py-12 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50">
      {/* Your existing background elements */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Services Header */}
        <motion.div className="text-center mb-20">
          {/* Your existing header content */}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {/* Your existing services content */}
        </div>

        {/* Demo Section */}
        <DemoSection />

        {/* CTA Section */}
        <motion.div className="text-center relative">
          {/* Your existing CTA content */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;