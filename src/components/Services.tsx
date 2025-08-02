import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, MessageSquare, Mail, Phone, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate data entry, invoice processing, and approval workflows",
    benefits: "Save 40+ hours weekly",
    features: ["Data entry automation", "Invoice processing", "Approval workflows"]
  },
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    description: "24/7 AI assistants for instant responses and ticket routing",
    benefits: "85% faster responses",
    features: ["24/7 AI chat assistants", "Smart ticket routing", "Sentiment analysis"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized campaigns with automated lead nurturing",
    benefits: "300% more conversions",
    features: ["Personalized sequences", "Lead nurturing", "Audience segmentation"]
  },
  {
    icon: Phone,
    title: "Voice AI Agents",
    description: "Appointment booking and automated reminder calls",
    benefits: "Handle 100+ calls daily",
    features: ["Appointment booking", "Call reminders", "Follow-up automation"]
  }
];

const Services = () => {
  // useScrollAnimation(); // Assuming this hook works as intended

  return (
    <section id="services" className="min-h-screen py-24 relative overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-primary/15 rounded-lg -rotate-6 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-secondary/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-animate>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Automation Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Smart AI Solutions
            </span>
            <br />
            <span className="text-foreground">for Modern Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform manual processes into intelligent automated systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative bg-background/50 border border-border shadow-lg transition-all duration-500 rounded-xl flex flex-col justify-between overflow-hidden
                         hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:scale-103 transform"
                data-animate
              >
                {/* Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardHeader className="text-center p-6 pb-2">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </CardTitle>
                  <div className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block">
                    {service.benefits}
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-2 px-4 pb-6">
                  <CardDescription className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-left max-w-xs mx-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button Section */}
        <div className="text-center" data-animate>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-xl scale-150 animate-pulse-light opacity-60 group-hover:opacity-100 transition-opacity" />
            <Button
              size="lg"
              className="relative z-10 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
            >
              Get Started with AI Automation
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Join 500+ companies already automating their workflows
          </p>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-slate-900\/\[0\.04\] {
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

        /* Using a scale transform on hover for the card */
        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default Services;  