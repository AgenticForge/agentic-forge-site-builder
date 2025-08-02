import { Card, CardContent } from "@/components/ui/card";
import { Network, Plug, Shield, Wrench } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Intelligent AI Architecture",
    description:
      "We engineer AI agents that can handle complex decision-making, maintain context across interactions, and operate independently with precision.",
    badge: "Smart Agents",
  },
  {
    icon: Plug,
    title: "Smooth System Integration",
    description:
      "Our automation solutions plug seamlessly into your existing tools and processes, ensuring minimal disruption and maximum efficiency.",
    badge: "Seamless Fit",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Reliability",
    description:
      "Built for real-world use, our systems are secure, scalable, and ready for production — delivering consistent performance at any scale.",
    badge: "Production-Ready",
  },
  {
    icon: Wrench,
    title: "Tailored AI Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every automation we build is customized to your exact workflow, business rules, and long-term goals.",
    badge: "Custom-Built",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 gradient-hero circuit-pattern relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">AgenticForge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgenticForge helps modern businesses scale efficiently by designing intelligent, context-aware AI automation systems — fully customized for your unique operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description, badge }, index) => (
            <Card
              key={index}
              className="relative group bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/40 card-hover"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="gradient-primary p-4 rounded-xl glow-primary group-hover:animate-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                        {badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              </CardContent>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Card>
          ))}
        </div>

        {/* Decorative tech elements */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-primary/20 rounded-full opacity-20" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-secondary/20 rounded-full opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-accent/20 rounded-full blur-sm" />
      </div>
    </section>
  );
};

export default WhyChoose;