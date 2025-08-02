import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, Target, CheckCircle } from "lucide-react";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Free <span className="text-gradient-primary">Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover how AI automation can transform your business. Get a personalized assessment and roadmap to success.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Get</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our 30-minute consultation is designed to give you actionable insights and a clear path forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Assessment</h3>
              <p className="text-muted-foreground text-sm">
                We'll analyze your current workflows and identify the highest-impact automation opportunities.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI Projection</h3>
              <p className="text-muted-foreground text-sm">
                Get detailed estimates of time savings, cost reduction, and expected return on investment.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation Roadmap</h3>
              <p className="text-muted-foreground text-sm">
                Receive a step-by-step plan with timelines, milestones, and resource requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Consultation Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Discovery Call</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll discuss your business challenges, current processes, and automation goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Process Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      Our experts will review your workflows and identify automation opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution Design</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll design a custom automation strategy tailored to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Proposal & Next Steps</h3>
                    <p className="text-muted-foreground text-sm">
                      Receive a detailed proposal with costs, timeline, and implementation plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Schedule Your Consultation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">30-minute session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Expert AI consultant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">No obligation</span>
                </div>
              </div>
              <Button variant="hero" className="w-full mt-6">
                Schedule Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Consultation?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've helped hundreds of businesses transform their operations with AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep expertise in AI automation across multiple industries and use cases.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Approach</h3>
              <p className="text-sm text-muted-foreground">
                Custom solutions tailored to your specific business needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Clear Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                Step-by-step implementation plan with realistic timelines and milestones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Track record of delivering measurable ROI and business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our consultation process and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">Is the consultation really free?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, our initial consultation is completely free with no obligation to purchase our services.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">What should I prepare for the call?</h3>
              <p className="text-sm text-muted-foreground">
                Just come ready to discuss your current processes and automation goals. We'll guide the conversation.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">How long does the consultation take?</h3>
              <p className="text-sm text-muted-foreground">
                The initial consultation typically takes 30 minutes, but we're flexible if you need more time.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3">What happens after the consultation?</h3>
              <p className="text-sm text-muted-foreground">
                We'll provide you with a detailed proposal and implementation plan within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how AI automation can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Free Consultation <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation; 