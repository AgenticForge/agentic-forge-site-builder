import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroIllustration from "@/assets/hero1.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const endValue = parseInt(end);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 drop-shadow-sm">
      {prefix}{count}{suffix}
    </div>
  );
};

const Hero = () => {
  useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 via-blue-500/15 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-bl from-blue-300/25 via-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-blue-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Subtle floating particles */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-40 left-1/5 w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300/80 rounded-full animate-bounce" style={{animationDelay: '2.5s'}} />
        
        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-200/40 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-blue-300/30 to-transparent" />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 py-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
            >
              Scale Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                AI Automation
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium"
            >
              Custom AI agents that eliminate manual tasks and accelerate growth for ambitious companies.
            </motion.p>
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-2"
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="group relative px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300" 
              onClick={() => window.location.href = '/consultation'}
            >
              <span className="relative z-10 flex items-center">
                Get Free Consultation 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative px-10 py-5 text-lg font-semibold border-2 border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" 
              onClick={() => window.location.href = '/demo'}
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" /> 
              See Demo
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 w-full max-w-lg"
          >
            <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <AnimatedCounter end={500} suffix="+" duration={2500} />
              <p className="text-slate-600 text-sm font-medium">AI Tools Mastered</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <AnimatedCounter end={85} suffix="%" duration={2000} />
              <p className="text-slate-600 text-sm font-medium">Task Automation Rate</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <AnimatedCounter end={24} suffix="/7" duration={1800} />
              <p className="text-slate-600 text-sm font-medium">AI Agents Working</p>
            </div>
          </motion.div>

          {/* Enhanced Promo Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/80 border border-blue-200/60 shadow-md backdrop-blur-sm max-w-lg mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-300/10 rounded-xl animate-pulse" />
            <p className="relative z-10 text-sm text-slate-700 font-medium text-center">
              💡 <strong className="text-blue-700">Early Bird Special:</strong> First 10 clients get 50% off implementation
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Enhanced Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }} // Animate from right with scale
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Illustration container with enhanced effects */}
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/15 to-blue-600/20 rounded-3xl blur-2xl scale-110 opacity-60 group-hover:opacity-80 transition-all duration-500" />
            
            {/* Floating ring animations */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-blue-300/40 rounded-full animate-ping" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border border-blue-400/30 rounded-full animate-pulse" />
            
            {/* Main illustration */}
            <div className="relative z-10 p-6 bg-white/40 backdrop-blur-sm rounded-3xl border border-blue-200/50 shadow-2xl shadow-blue-500/10 group-hover:shadow-3xl group-hover:shadow-blue-500/20 transition-all duration-500">
              <img
                src={heroIllustration}
                alt="AI Automation Illustration"
                className="w-full max-w-xl h-auto transition-transform duration-500 ease-out group-hover:scale-105"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-blue-50/20 rounded-3xl pointer-events-none" />
            </div>
            
            {/* Floating elements around illustration */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-white rounded-sm" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 -right-6 w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-md shadow-blue-400/40"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/3 -right-4 w-4 h-4 bg-blue-200 rounded-full"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
