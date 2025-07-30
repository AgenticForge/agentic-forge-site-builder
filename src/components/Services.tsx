import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Lightbulb, ArrowRight } from "lucide-react";
import aiWorkflowIllustration from "@/assets/ai-workflow-illustration.jpg";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Build sophisticated AI agents with LangGraph that handle complex business processes, make intelligent decisions, and adapt to your workflows.",
    features: ["Multi-step reasoning", "Context awareness", "Custom business logic", "Enterprise scalability"],
    highlight: "Most Popular"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Deploy n8n-powered automations with 422+ integrations, connecting your entire tech stack for seamless end-to-end process automation.",
    features: ["422+ integrations", "Real-time sync", "Error handling", "Visual workflow builder"],
    highlight: null
  },
  {
    icon: Lightbulb,
    title: "Custom AI Solutions",
    description: "Enterprise-grade AI solutions tailored to your industry requirements, from data processing to intelligent customer interactions.",
    features: ["Custom algorithms", "Industry-specific", "Scalable architecture", "24/7 monitoring"],
    highlight: "Enterprise"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Workflow className="w-4 h-4 mr-2" />
            Enterprise AI Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transform Your Business with <br />
            <span className="text-gradient-primary">Intelligent Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge AI technologies like LangGraph and n8n to deliver enterprise-grade automation solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group card-hover border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 gradient-tech rounded-xl flex items-center justify-center mb-6 group-hover:glow-secondary transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
                
                {/* Enhanced Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </Card>
            );
          })}
        </div>

        {/* Illustration Section */}
        <div className="relative mt-20 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-primary">
                Built for Enterprise Scale
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our AI automation solutions are designed from the ground up to handle enterprise workloads, 
                ensuring reliability, security, and scalability that grows with your business.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">422+</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
              </div>
              <Button size="lg" className="gradient-primary text-white">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={aiWorkflowIllustration} 
                alt="AI Workflow Automation" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;