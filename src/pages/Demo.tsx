import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Clock, Users, Target } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              See Our <span className="text-gradient-primary">Demo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the power of AI automation in action. Watch real examples of how our solutions transform business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Demo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our range of AI automation demos to see solutions relevant to your industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Service Automation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                See how AI agents handle customer inquiries, process requests, and provide instant support.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 5 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sales Process Automation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch AI agents qualify leads, schedule meetings, and manage the entire sales pipeline.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 7 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HR & Recruitment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                See automated candidate screening, interview scheduling, and onboarding processes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 6 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch AI extract, process, and analyze data from multiple sources automatically.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 8 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Automation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                See AI-powered content creation, campaign management, and performance tracking.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 6 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Operations</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch automated invoice processing, expense tracking, and financial reporting.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration: 7 min</span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Watch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Live Interactive Demo</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience our AI automation platform in real-time. Our experts will walk you through a customized demo based on your specific needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm">Personalized to your industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm">Real-time Q&A with experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm">See actual implementation examples</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm">Get immediate ROI estimates</span>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Schedule Live Demo <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Demo Request Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select your industry</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Demo Type</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select demo type</option>
                    <option>Customer Service Automation</option>
                    <option>Sales Process Automation</option>
                    <option>HR & Recruitment</option>
                    <option>Data Processing</option>
                    <option>Marketing Automation</option>
                    <option>Financial Operations</option>
                    <option>Custom Demo</option>
                  </select>
                </div>
                <Button variant="outline" className="w-full">
                  Request Demo <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See AI Automation in Action?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how our AI solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Live Demo <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Recorded Demos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo; 