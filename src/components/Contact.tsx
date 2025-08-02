import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar, X } from "lucide-react";
import { toast } from "sonner"; // Optional: replace with alert if not using

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    project: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 🚀 Cal modal state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mblkagdn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          project: "",
        });
      } else {
        toast.error(data?.errors?.[0]?.message || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 gradient-hero circuit-pattern relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient-primary">Transform</span> Your
              Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with a free AI automation audit. We'll analyze your
              current processes and identify opportunities for intelligent
              automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Get Your Free AI Audit
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell us about your business and we'll show you how AI
                  automation can transform your operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="bg-background/50"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Inc."
                      className="bg-background/50"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Description</Label>
                    <Textarea
                      id="project"
                      placeholder="Tell us about your current processes and what you'd like to automate..."
                      className="bg-background/50 min-h-[120px]"
                      value={formData.project}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get Free AI Audit"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline-glow"
                      size="lg"
                      className="w-full justify-start"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Calendar className="mr-3" />
                      Schedule Discovery Call
                    </Button>
                    <Button variant="tech" size="lg" className="w-full justify-start">
                      <Mail className="mr-3" />
                      Email Us Directly
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="gradient-primary p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">
                          contact@agenticforge.tech
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="gradient-tech p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+91 70221 85683</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="gradient-primary p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">Remote & Global</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">What You Get</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Comprehensive process analysis
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Custom automation recommendations
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      ROI projections and timeline
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      No-obligation consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* 🚀 Modal for Cal.com scheduling */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-xl w-[90%] max-w-3xl h-[600px] shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-50 text-gray-600 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://cal.com/agenticforge/30min"
              className="w-full h-full rounded-xl border-none"
              allow="camera; microphone; fullscreen; display-capture"
              title="Schedule Discovery Call"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
