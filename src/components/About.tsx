import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-primary">AgenticForge</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                At AgenticForge, we combine cutting-edge AI technology with practical business solutions. Our team specializes in building intelligent automation systems that don't just work—they transform how businesses operate.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We leverage advanced technologies like LangGraph for sophisticated AI agents and n8n for enterprise integrations, ensuring your automation solutions are both powerful and production-ready.
              </p>
              <Button variant="hero" size="lg">
                Learn About Our Process
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="group card-hover border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg glow-primary group-hover:animate-glow">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Technology</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Built on LangGraph and n8n, our solutions leverage the latest AI frameworks for enterprise-grade automation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group card-hover border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-tech p-3 rounded-lg glow-secondary group-hover:animate-glow">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Rapid Implementation</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our proven methodology gets your AI automation solutions deployed quickly without disrupting operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group card-hover border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg glow-primary group-hover:animate-glow">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Our team of AI specialists provides ongoing support and optimization to ensure continued success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 relative overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To democratize AI automation by making sophisticated, enterprise-grade intelligent agents accessible to businesses of all sizes. We believe every organization should have the power to transform their operations with AI, not just tech giants.
              </p>
              
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-45"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;