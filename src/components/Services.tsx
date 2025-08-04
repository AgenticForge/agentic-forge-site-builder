import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, MessageSquare, Mail, Phone, ArrowRight, CheckCircle, Sparkles, Star, Zap, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Workflow,
    title: "Intelligent Process Automation",
    description: "Transform complex workflows with AI-powered automation that learns and adapts to your business needs",
    benefits: "Save 40+ hours weekly",
    roi: "400% ROI increase",
    features: ["Smart data entry automation", "Intelligent invoice processing", "Dynamic approval workflows", "Predictive analytics"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50/80"
  },
  {
    icon: MessageSquare,
    title: "Advanced Customer Support AI",
    description: "Next-generation AI assistants that provide human-like interactions with 24/7 availability",
    benefits: "85% faster responses",
    roi: "300% satisfaction boost",
    features: ["Advanced NLP chat assistants", "Smart ticket routing & priority", "Real-time sentiment analysis", "Multi-language support"],
    color: "from-indigo-500 to-sky-600",
    bgColor: "bg-indigo-50/60"
  },
  {
    icon: Mail,
    title: "Hyper-Personalized Marketing",
    description: "AI-driven marketing campaigns that adapt in real-time based on customer behavior and preferences",
    benefits: "300% more conversions",
    roi: "500% revenue growth",
    features: ["AI-powered personalization", "Behavioral lead nurturing", "Advanced audience segmentation", "Predictive campaign optimization"],
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50/80"
  },
  {
    icon: Phone,
    title: "Enterprise Voice AI Agents",
    description: "Sophisticated voice AI that handles complex conversations with natural language understanding",
    benefits: "Handle 500+ calls daily",
    roi: "250% efficiency gain",
    features: ["Advanced appointment booking", "Intelligent call routing", "Automated follow-up sequences", "Voice sentiment analysis"],
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50/60"
  }
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
    <section id="services" className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50">
      {/* Ultra-Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 via-indigo-200/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-sky-100/40 via-blue-100/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-100/25 via-sky-100/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Interactive grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>

        {/* Floating premium elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute w-8 h-8 text-blue-300/30"
              style={{ left: element.x, top: element.y }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + element.delay,
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
          className="absolute w-96 h-96 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 25%, transparent 50%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Ultra-Premium Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50/80 via-white/60 to-blue-50/80 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 backdrop-blur-xl shadow-sm shadow-blue-100/20"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            Premium AI Automation Solutions
            <motion.div
              className="ml-3 w-2 h-2 bg-blue-500 rounded-full"
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
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent block">
              Revolutionary AI
            </span>
            <span className="text-foreground block mt-2">
              Business Solutions
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your enterprise with cutting-edge AI automation that delivers unprecedented results and scales with your ambitions
          </motion.p>
        </motion.div>

        {/* Ultra-Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <Card className="relative h-full bg-white/80 backdrop-blur-2xl border border-blue-100/30 shadow-lg transition-all duration-700 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 group">
                  {/* Premium hover overlay */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.04) 0%, transparent 50%, rgba(59,130,246,0.02) 100%)'
                    }}
                  />

                  <CardHeader className="text-center p-8 pb-4">
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className={`absolute inset-0 ${service.bgColor} rounded-2xl blur-xl transition-all duration-700 opacity-60`} />
                      <div className="relative w-full h-full bg-gradient-to-br from-white/90 to-blue-50/50 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-blue-100/30 transition-all duration-700">
                        <Icon className="w-10 h-10 text-blue-600 transition-all duration-700" />
                      </div>
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </CardTitle>
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <motion.div 
                        className="text-xs font-semibold text-blue-600 bg-blue-50/80 border border-blue-200/30 px-4 py-2 rounded-full backdrop-blur-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {service.benefits}
                      </motion.div>
                      <motion.div 
                        className="text-xs font-semibold text-indigo-600 bg-indigo-50/80 border border-indigo-200/30 px-4 py-2 rounded-full backdrop-blur-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {service.roi}
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center px-6 pb-8">
                    <CardDescription className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-3 text-sm">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-3 group/item opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.div
                            className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-shadow duration-500"
                            whileHover={{ 
                              scale: 1.3,
                              rotate: 360,
                              boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </motion.div>
                          <span className="text-foreground/90 leading-snug">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Premium hover overlay */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 50%, rgba(59,130,246,0.03) 100%)'
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Ultra-Premium CTA Section */}
        <motion.div 
          className="text-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Premium background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/30 to-indigo-50/50 rounded-3xl blur-3xl scale-110 -z-10" />
          
          <motion.div 
            className="relative bg-gradient-to-r from-white/80 via-blue-50/40 to-white/80 backdrop-blur-2xl border border-blue-100/50 rounded-3xl p-12 shadow-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Join 1,000+ enterprises already experiencing the power of AI automation
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                <Button
                  size="lg"
                  className="relative z-10 bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-600 hover:from-blue-600 hover:via-indigo-700 hover:to-sky-700 text-white px-12 py-6 text-lg font-bold shadow-lg transition-all duration-500 rounded-2xl border-0"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Start Your AI Journey
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Free consultation included
                </span>
              </motion.div>
            </motion.div>

            {/* Premium stats section */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {[
                { number: "500%", label: "Average ROI Increase" },
                { number: "72hrs", label: "Average Setup Time" },
                { number: "99.9%", label: "System Uptime" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .bg-grid-slate-900\\/\\[0\\.04\\] {
          background-image: radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.04) 1px, transparent 0);
        }

        @keyframes pulse-light {
          0%, 100% {
            transform: scale(1.5) translateZ(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.6) translateZ(0);
            opacity: 0.8;
          }
        }

        .animate-pulse-light {
          animation: pulse-light 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .hover\\:scale-103:hover {
          transform: scale(1.03);
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

export default Services;  