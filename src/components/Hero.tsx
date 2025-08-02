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
    <div ref={counterRef} className="text-4xl font-bold text-gradient-accent mb-2">
      {prefix}{count}{suffix}
    </div>
  );
};

const Hero = () => {
  useScrollAnimation();

  const illustrationRef = useRef(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.02;
      const y = (clientY - window.innerHeight / 2) * 0.02;

      if (illustrationRef.current) {
        illustrationRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (

          <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-24">
      {/* Decorative Blurs */}
      <div className="absolute top-24 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-24 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000" />

      {/* Main Grid */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Scale Your Business with{" "}
            <span className="text-gradient-primary">AI Automation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Custom AI agents that eliminate manual tasks and accelerate growth for ambitious companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Get Free Consultation <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline-glow" size="lg" className="px-8 py-4 text-lg">
              <Play className="mr-2" /> See Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 w-full max-w-md">
            <div className="text-center">
              <AnimatedCounter end={500} suffix="+" duration={2500} />
              <p className="text-muted-foreground text-sm">AI Tools Mastered</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={85} suffix="%" duration={2000} />
              <p className="text-muted-foreground text-sm">Task Automation Rate</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={24} suffix="/7" duration={1800} />
              <p className="text-muted-foreground text-sm">AI Agents Working</p>
            </div>
          </div>

          {/* Pre-launch Promo */}
          <p className="text-sm text-muted-foreground pt-4">
            💡 <strong>Early Bird Special:</strong> First 10 clients get 50% off implementation
          </p>
        </div>

        {/* Right: Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Animate from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:flex justify-center items-center"
        >
          <img
            ref={illustrationRef}
            src={heroIllustration}
            alt="AI Automation Illustration"
            className="w-full max-w-xl h-auto transition-transform duration-300 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
