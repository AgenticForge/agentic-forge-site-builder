import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, FileText } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    title: "E-commerce Automation Revolution",
    industry: "E-commerce & Retail",
    challenge: "Manual order processing was creating bottlenecks during peak seasons",
    solution: "AI-powered fulfillment agents with intelligent inventory management and customer communication",
    results: [
      "300% increase in order processing speed",
      "95% reduction in manual errors",
      "24/7 automated customer updates"
    ],
    metrics: {
      primary: "300%",
      primaryLabel: "Speed Increase",
      secondary: "95%",
      secondaryLabel: "Error Reduction"
    }
  },
  {
    icon: Clock,
    title: "Customer Service Transformation",
    industry: "Professional Services",
    challenge: "Customer inquiries were taking hours to respond, impacting satisfaction",
    solution: "Intelligent chatbot deployment with context-aware responses and seamless handoff to human agents",
    results: [
      "Response time reduced from hours to seconds",
      "85% of inquiries resolved automatically",
      "40% increase in customer satisfaction"
    ],
    metrics: {
      primary: "85%",
      primaryLabel: "Auto-Resolved",
      secondary: "40%",
      secondaryLabel: "Satisfaction ↑"
    }
  },
  {
    icon: FileText,
    title: "Data Processing Transformation",
    industry: "Healthcare & Medical",
    challenge: "40 hours weekly spent on manual data entry and report generation",
    solution: "Automated data processing with AI validation and intelligent report generation",
    results: [
      "40 hours of weekly work automated",
      "5-minute processing time for complex reports",
      "99.8% data accuracy maintained"
    ],
    metrics: {
      primary: "40hrs",
      primaryLabel: "Time Saved",
      secondary: "5min",
      secondaryLabel: "Process Time"
    }
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Proven Results for <br />
            <span className="text-gradient-primary">Enterprise Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover how industry leaders have transformed their operations with our AI automation solutions, delivering measurable ROI and operational excellence.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="px-0 pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="gradient-tech p-4 rounded-xl">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-sm px-4 py-1.5">
                          {caseStudy.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold text-foreground leading-tight mb-4">
                        {caseStudy.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-0">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gradient-accent mb-2">{caseStudy.metrics.primary}</div>
                          <div className="text-sm text-muted-foreground font-medium">{caseStudy.metrics.primaryLabel}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gradient-accent mb-2">{caseStudy.metrics.secondary}</div>
                          <div className="text-sm text-muted-foreground font-medium">{caseStudy.metrics.secondaryLabel}</div>
                        </div>
                      </div>

                      {/* Solution & Results */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">AI Solution Implemented</h4>
                          <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">Key Outcomes</h4>
                          <div className="space-y-3">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Video/Demo Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Placeholder for demo video */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-background border border-border/50 rounded-2xl">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Watch Demo</h4>
                          <p className="text-sm text-muted-foreground">See the solution in action</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                    
                    {/* Floating metrics */}
                    <div className="absolute -bottom-6 -right-6 bg-background border border-border/50 rounded-xl p-4 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient-primary">
                          {index === 0 ? "3 weeks" : index === 1 ? "2 weeks" : "1 week"}
                        </div>
                        <div className="text-xs text-muted-foreground">Implementation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;