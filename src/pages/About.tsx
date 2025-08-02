import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              About <span className="text-gradient-primary">AgenticForge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're a team of AI experts, automation specialists, and business strategists dedicated to transforming how companies operate through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To democratize AI automation and make sophisticated business intelligence accessible to companies of all sizes. We believe that every business deserves the power of AI to scale efficiently and focus on what matters most.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by a team of AI researchers and business automation experts, AgenticForge combines cutting-edge technology with practical business solutions to deliver real results.
              </p>
              <Button variant="hero">
                Meet Our Team <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Results-Driven Approach</h4>
                    <p className="text-sm text-muted-foreground">We focus on measurable outcomes and ROI, not just technology implementation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Expertise</h4>
                    <p className="text-sm text-muted-foreground">Over 500+ AI tools mastered and 85% average automation rate across all projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Perspective</h4>
                    <p className="text-sm text-muted-foreground">Serving clients worldwide with diverse industry experience and cultural understanding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind AgenticForge - a diverse team of AI specialists, automation engineers, and business strategists.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-muted-foreground text-sm mb-4">
                PhDs and researchers specializing in machine learning, natural language processing, and AI agent development.
              </p>
              <p className="text-xs text-muted-foreground">15+ years combined experience</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation Engineers</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Experts in workflow automation, process optimization, and system integration across multiple platforms.
              </p>
              <p className="text-xs text-muted-foreground">200+ automation projects completed</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Strategists</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Consultants with deep industry knowledge helping businesses implement AI solutions strategically.
              </p>
              <p className="text-xs text-muted-foreground">50+ industries served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AgenticForge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">Pushing the boundaries of what's possible with AI and automation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">Working closely with clients to understand their unique needs and challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">Delivering the highest quality solutions with measurable results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-sm text-muted-foreground">Creating positive change through technology that serves humanity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule a Call <ArrowRight className="ml-2" />
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

export default About; 