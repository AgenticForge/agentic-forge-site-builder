import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">AgenticForge</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              At AgenticForge, we build smart automation systems that help businesses run faster, smarter, and more efficiently. Our solutions simplify complex tasks, reduce manual work, and improve operations—tailored to your unique business needs.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Whether you're a growing startup or a large enterprise, we create intelligent systems that adapt to your workflows and drive real-world results.
            </p>
            <Button variant="hero" size="lg">
              Learn About Our Process
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="group card-hover border-border/40 hover:border-primary/30 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-lg glow-primary group-hover:animate-glow">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Smart AI Systems</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We create intelligent automation that understands logic, adapts to change, and enhances efficiency across your business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group card-hover border-border/40 hover:border-primary/30 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-tech p-3 rounded-lg glow-secondary group-hover:animate-glow">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Fast Implementation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our automation approach is quick to deploy, minimizing disruption and maximizing value from day one.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group card-hover border-border/40 hover:border-primary/30 transition-all duration-200 sm:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-lg glow-primary group-hover:animate-glow">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">Dedicated Support</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      From planning to deployment and beyond, our team offers ongoing support to ensure long-term success and optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 relative overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our mission is to make intelligent automation accessible to every business—helping companies of all sizes unlock the power of AI to work smarter, not harder.
              </p>

              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-45" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;