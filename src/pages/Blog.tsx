import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              AI Automation <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, tips, and case studies from the forefront of AI automation and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tag className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
                  <p className="text-muted-foreground">Latest insights</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Featured</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 15, 2025</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Future of AI Automation: 5 Trends That Will Transform Business in 2025
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discover the key AI automation trends that are reshaping how businesses operate, from intelligent process automation to autonomous decision-making systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">By AgenticForge Team</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find content relevant to your interests and business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Tag className="w-6 h-6 mb-2" />
              <span>AI Trends</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Tag className="w-6 h-6 mb-2" />
              <span>Case Studies</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Tag className="w-6 h-6 mb-2" />
              <span>Implementation</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Tag className="w-6 h-6 mb-2" />
              <span>Industry Insights</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-primary" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AI Trends</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 10, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  How to Implement AI Agents in Your Customer Service
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A comprehensive guide to deploying AI agents for customer service, including best practices and common pitfalls to avoid.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Sarah Johnson</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-secondary" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Case Study</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 8, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  TechFlow Inc: 300% ROI with AI Sales Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How a mid-size tech company achieved remarkable results by automating their sales process with AI agents.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Mike Chen</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-accent" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Implementation</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 5, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Building Scalable AI Workflows: A Technical Deep Dive
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Technical insights into creating robust, scalable AI automation workflows that can handle enterprise-level demands.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Alex Rodriguez</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-primary" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Industry</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 3, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  AI Automation in Healthcare: Opportunities and Challenges
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Exploring how AI automation is transforming healthcare delivery while addressing regulatory and ethical considerations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Dr. Lisa Wang</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-secondary" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Tips</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 1, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  10 Common Mistakes When Implementing AI Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn from others' mistakes with this comprehensive guide to avoiding common pitfalls in AI automation projects.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Tom Martinez</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-accent" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Analysis</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>February 28, 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  ROI Analysis: Measuring the Success of AI Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A detailed framework for measuring and tracking the return on investment from AI automation initiatives.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Emma Thompson</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI automation delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero">
                Subscribe <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about how AI automation can revolutionize your operations by reading our case studies and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View Case Studies <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 