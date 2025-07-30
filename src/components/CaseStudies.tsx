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
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from <span className="text-gradient-primary">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed operations for businesses across industries with our AI automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <Card 
                key={index} 
                className="relative group card-hover border-border/50 hover:border-primary/30 overflow-hidden"
              >
                {/* Header with icon and industry */}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="gradient-tech p-3 rounded-lg group-hover:glow-secondary transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {caseStudy.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Challenge</h4>
                    <CardDescription className="text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </CardDescription>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Solution</h4>
                    <CardDescription className="text-sm leading-relaxed">
                      {caseStudy.solution}
                    </CardDescription>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient-accent">{caseStudy.metrics.primary}</div>
                      <div className="text-xs text-muted-foreground">{caseStudy.metrics.primaryLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient-accent">{caseStudy.metrics.secondary}</div>
                      <div className="text-xs text-muted-foreground">{caseStudy.metrics.secondaryLabel}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;