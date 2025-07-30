import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Briefcase, Heart, Home, Factory, DollarSign } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Order processing, inventory management, customer support automation",
    useCases: ["Order fulfillment", "Inventory sync", "Customer communications"]
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Client onboarding, project management, billing automation",
    useCases: ["Client workflows", "Document generation", "Time tracking"]
  },
  {
    icon: Heart,
    name: "Healthcare & Medical",
    description: "Patient data processing, appointment scheduling, compliance reporting",
    useCases: ["Patient records", "Appointment systems", "Compliance reports"]
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Lead qualification, property management, transaction automation",
    useCases: ["Lead scoring", "Property listings", "Transaction tracking"]
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Supply chain optimization, quality control, production planning",
    useCases: ["Supply chain", "Quality assurance", "Production schedules"]
  },
  {
    icon: DollarSign,
    name: "Financial Services",
    description: "Risk assessment, compliance monitoring, customer onboarding",
    useCases: ["Risk analysis", "Compliance checks", "Account opening"]
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 gradient-hero circuit-pattern relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-gradient-primary">Transform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI automation solutions are tailored to meet the unique challenges and requirements of diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/40 card-hover relative overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="gradient-primary p-3 rounded-lg glow-primary group-hover:animate-glow transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Common Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <span 
                          key={useCaseIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-secondary/15 rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Industries;