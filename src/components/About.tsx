import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Users, Sparkles, Star, TrendingUp, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Premium floating elements data
const floatingElements = [
  { icon: Star, delay: 0, x: "8%", y: "15%" },
  { icon: Sparkles, delay: 1, x: "92%", y: "20%" },
  { icon: TrendingUp, delay: 2, x: "12%", y: "80%" },
  { icon: Shield, delay: 0.5, x: "88%", y: "85%" },
  { icon: Clock, delay: 1.5, x: "5%", y: "50%" },
  { icon: Award, delay: 2.5, x: "95%", y: "45%" },
];

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50">
      {/* Ultra-Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 via-indigo-200/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-100/40 via-blue-100/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-50/40 via-sky-100/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Interactive grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />
        </div>

        {/* Floating premium elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute w-6 h-6 text-blue-300/30"
              style={{ left: element.x, top: element.y }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + element.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          );
        })}

        {/* Premium mouse follower glow */}
        <motion.div
          className="absolute w-80 h-80 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 25%, transparent 50%)',
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Ultra-Premium Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50/90 via-white/80 to-indigo-50/90 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 backdrop-blur-xl shadow-lg shadow-blue-100/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
              Meet AgenticForge
              <motion.div
                className="ml-3 w-2 h-2 bg-blue-600 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-foreground block">Pioneering the Future of</span>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent block mt-2">
                Intelligent Automation
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We don't just build automation—we craft intelligent ecosystems that transform how businesses operate, innovate, and scale in the digital age.
            </motion.p>

            {/* Premium stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-foreground font-semibold">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
                <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-foreground font-semibold">99.8% Success Rate</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
                <Award className="w-5 h-5 text-sky-600 mr-2" />
                <span className="text-foreground font-semibold">Industry Leaders</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.15)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  About AgenticForge
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  At AgenticForge, we build smart automation systems that help businesses run faster, smarter, and more efficiently. Our solutions simplify complex tasks, reduce manual work, and improve operations—tailored to your unique business needs.
                </motion.p>
                
                <motion.p 
                  className="text-base text-muted-foreground mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Whether you're a growing startup or a large enterprise, we create intelligent systems that adapt to your workflows and drive real-world results.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:via-indigo-700 hover:to-sky-700 text-white px-8 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn About Our Process
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Smart AI Systems Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative bg-white/30 backdrop-blur-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-300/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <Cpu className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          Smart AI Systems
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We create intelligent automation that understands logic, adapts to change, and enhances efficiency across your business operations with unprecedented precision.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fast Implementation Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative bg-white/30 backdrop-blur-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-300/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <Zap className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-300">
                          Fast Implementation
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our automation approach is quick to deploy, minimizing disruption and maximizing value from day one with seamless integration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dedicated Support Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative bg-white/30 backdrop-blur-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-600 shadow-lg shadow-indigo-300/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <Users className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                          Dedicated Support
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          From planning to deployment and beyond, our team offers ongoing support to ensure long-term success and continuous optimization.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Ultra-Premium Mission Statement */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 30px 60px rgba(99, 102, 241, 0.2)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Background decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sky-100/15 via-blue-50/8 to-transparent rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-50/6 via-blue-50/4 to-sky-50/6 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center">
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50/90 via-white/80 to-indigo-50/90 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 backdrop-blur-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Our Mission
                </motion.div>
                
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Democratizing Intelligence
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Our mission is to make intelligent automation accessible to every business—helping companies of all sizes unlock the power of AI to work smarter, not harder, and achieve extraordinary results.
                </motion.p>

                {/* Mission pillars */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <div className="flex items-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20 shadow-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-foreground font-semibold">Innovation First</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-500/20 shadow-lg">
                    <Shield className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-foreground font-semibold">Trust & Security</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-sky-500/10 to-sky-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-sky-500/20 shadow-lg">
                    <Users className="w-5 h-5 text-sky-600 mr-3" />
                    <span className="text-foreground font-semibold">Client Success</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Premium glass morphism effects */
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }

        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
      `}</style>
    </section>
  );
};

export default About;