import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight, Shield, FileText, Cookie } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Legal <span className="text-gradient-primary">Information</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transparency and trust are core to our values. Here you'll find all our legal policies and terms.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Privacy Policy */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-muted-foreground mb-6">
                Learn how we collect, use, and protect your personal information when you use our services.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>• Data collection practices</p>
                <p>• Information usage and sharing</p>
                <p>• Your rights and choices</p>
                <p>• Security measures</p>
                <p>• Contact information</p>
              </div>
              <Button variant="outline" className="w-full">
                Read Privacy Policy <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Terms of Service */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <p className="text-muted-foreground mb-6">
                The terms and conditions that govern your use of our AI automation services and platform.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>• Service terms and conditions</p>
                <p>• User responsibilities</p>
                <p>• Payment and billing terms</p>
                <p>• Intellectual property rights</p>
                <p>• Limitation of liability</p>
              </div>
              <Button variant="outline" className="w-full">
                Read Terms of Service <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Cookie Policy */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Cookie className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
              <p className="text-muted-foreground mb-6">
                Information about how we use cookies and similar technologies on our website.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>• Types of cookies we use</p>
                <p>• Purpose of data collection</p>
                <p>• Third-party cookies</p>
                <p>• Cookie management</p>
                <p>• Opt-out options</p>
              </div>
              <Button variant="outline" className="w-full">
                Read Cookie Policy <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Company information and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Service usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>Provide and personalize our AI automation services</li>
                  <li>Process payments and manage billing</li>
                  <li>Send service-related communications</li>
                  <li>Respond to your questions and support requests</li>
                  <li>Analyze usage patterns to improve our services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Information Sharing</h3>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4 mt-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, please contact us at privacy@agenticforge.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Policies?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to transparency and are happy to answer any questions about our legal policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Contact Legal Team <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Download PDF Versions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal; 