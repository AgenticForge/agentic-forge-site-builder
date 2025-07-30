import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Target, Lightbulb, Link, Users } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Custom AI agents that handle complex, multi-step business processes with intelligent decision-making capabilities.",
    features: ["Multi-step reasoning", "Context awareness", "Custom business logic"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Seamless integrations connecting your existing tools and systems for end-to-end process automation.",
    features: ["422+ integrations", "Real-time sync", "Error handling"]
  },
  {
    icon: Target,
    title: "Process Optimization",
    description: "Identify and automate repetitive tasks across your organization to maximize efficiency and reduce costs.",
    features: ["Process analysis", "Bottleneck identification", "ROI tracking"]
  },
  {
    icon: Lightbulb,
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions designed specifically for your unique business challenges.",
    features: ["Custom algorithms", "Industry-specific", "Scalable architecture"]
  },
  {
    icon: Link,
    title: "System Integration",
    description: "Connect AI capabilities with your current tech stack without disrupting existing workflows.",
    features: ["API integrations", "Legacy system support", "Cloud-native"]
  },
  {
    icon: Users,
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI automation in your business for maximum impact and ROI.",
    features: ["Strategy development", "Implementation roadmap", "Change management"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient-primary">AI Automation</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple workflow automations to sophisticated AI agents, we deliver enterprise-grade solutions that transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group card-hover border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-tech rounded-lg flex items-center justify-center mb-4 group-hover:glow-secondary transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;