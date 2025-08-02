import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Zap, TrendingUp, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Our <span className="text-gradient-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive AI automation solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Agent Development */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Agent Development</h3>
              <p className="text-muted-foreground mb-4">
                Custom AI agents that automate complex tasks, make intelligent decisions, and work 24/7 to optimize your business processes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Intelligent task automation</li>
                <li>• Natural language processing</li>
                <li>• Multi-platform integration</li>
                <li>• Continuous learning capabilities</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Workflow Automation */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-muted-foreground mb-4">
                Streamline your business workflows with intelligent automation that reduces manual work and eliminates errors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Process mapping & optimization</li>
                <li>• Cross-platform automation</li>
                <li>• Error handling & monitoring</li>
                <li>• Scalable architecture</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Process Optimization */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Analyze and optimize your existing processes using AI to identify bottlenecks and implement improvements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Process analysis & mapping</li>
                <li>• Performance optimization</li>
                <li>• ROI measurement</li>
                <li>• Continuous improvement</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* AI Consulting */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Strategic guidance on AI implementation, technology selection, and digital transformation strategies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• AI strategy development</li>
                <li>• Technology assessment</li>
                <li>• Implementation planning</li>
                <li>• Team training & support</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation to discover how AI automation can revolutionize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Free Consultation <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 