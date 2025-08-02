import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Database, Clock, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const cases = [
  {
    icon: Phone,
    title: "Intelligent Voice Appointment System",
    industry: "Healthcare & Professional Services",
    challenge: "Manual appointment scheduling was consuming 15+ hours weekly, with high no-show rates and poor customer experience due to delayed responses",
    solution: "AI-powered voice calling agent with natural language processing, automated scheduling, and multi-channel reminder system",
    results: [
      "15 hours of weekly admin work eliminated",
      "78% reduction in no-show appointments",
      "24/7 automated appointment booking capability",
      "Seamless integration with existing calendar systems"
    ],
    metrics: {
      primary: "78%",
      primaryLabel: "No-Show Reduction",
      secondary: "15hrs",
      secondaryLabel: "Weekly Time Saved"
    },
    techStack: ["Voice AI", "Calendar APIs", "Email/SMS Integration", "Natural Language Processing"],
    demoDescription: "Watch our AI agent handle appointment scheduling with natural conversation flow, automatic conflict resolution, and intelligent reminder scheduling."
  },
  {
    icon: Mail,
    title: "BandhanAI Marketing Campaign Engine",
    industry: "E-commerce & Retail",
    challenge: "Generic mass emails resulted in low engagement rates, manual campaign management was time-intensive, and no real-time performance tracking",
    solution: "Intelligent marketing automation platform with personalized email generation, PostgreSQL integration, and Slack-based campaign monitoring",
    results: [
      "340% increase in email engagement rates",
      "Automated personalized campaigns based on purchase history",
      "Real-time campaign performance tracking via Slack",
      "Dynamic customer segmentation and targeting"
    ],
    metrics: {
      primary: "340%",
      primaryLabel: "Engagement Increase",
      secondary: "100%",
      secondaryLabel: "Campaign Automation"
    },
    techStack: ["PostgreSQL", "Email Automation", "Slack Integration", "AI Content Generation"],
    demoDescription: "Experience how BandhanAI analyzes customer data, generates personalized campaigns, and provides real-time analytics through integrated dashboards.",
    githubUrl: "https://github.com/MohammedMusharraf11/BandhanAI"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200/50">
            <TrendingUp className="w-4 h-4 mr-2" />
            Case Studies
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Transforming Businesses with <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses automate complex workflows, enhance customer experiences, 
            and achieve measurable growth through intelligent AI solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <div key={index} className="relative">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  index === 0 
                    ? 'from-blue-500/5 via-transparent to-indigo-500/5' 
                    : 'from-indigo-500/5 via-transparent to-purple-500/5'
                } rounded-3xl -m-8`}></div>
                
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardHeader className="px-0 pb-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 rounded-2xl shadow-lg ${
                            index === 0 
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                              : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                          }`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-sm px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 font-medium hover:bg-gray-200 transition-colors">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                        <CardTitle className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                          {caseStudy.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 leading-relaxed">
                          <span className="font-semibold text-gray-800">Challenge:</span> {caseStudy.challenge}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-0 space-y-8">
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-6 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
                          <div className="text-center">
                            <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
                              index === 0 
                                ? 'from-blue-600 to-indigo-600' 
                                : 'from-indigo-600 to-purple-600'
                            } bg-clip-text text-transparent`}>
                              {caseStudy.metrics.primary}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">{caseStudy.metrics.primaryLabel}</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
                              index === 0 
                                ? 'from-blue-600 to-indigo-600' 
                                : 'from-indigo-600 to-purple-600'
                            } bg-clip-text text-transparent`}>
                              {caseStudy.metrics.secondary}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">{caseStudy.metrics.secondaryLabel}</div>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                            AI Solution Implemented
                          </h4>
                          <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.solution}</p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.techStack.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Results */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                            Key Outcomes
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/30">
                                <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-gradient-to-r ${
                                  index === 0 
                                    ? 'from-blue-500 to-indigo-500' 
                                    : 'from-indigo-500 to-purple-500'
                                }`}></div>
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* GitHub Link for BandhanAI */}
                        {caseStudy.githubUrl && (
                          <div className="pt-4">
                            <a 
                              href={caseStudy.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              <Database className="w-4 h-4 mr-2" />
                              View Source Code
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Demo/Visual Side */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative group">
                      <div className="aspect-video bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
                        {/* Demo Interface Mockup */}
                        <div className="w-full h-full p-8 flex flex-col justify-center items-center text-center">
                          <div className={`p-6 rounded-2xl mb-6 bg-gradient-to-br ${
                            index === 0 
                              ? 'from-blue-500 to-blue-600' 
                              : 'from-indigo-500 to-purple-600'
                          } shadow-lg`}>
                            <IconComponent className="w-16 h-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {index === 0 ? "Live Demo Available" : "Interactive Platform"}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                            {caseStudy.demoDescription}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            {index === 0 ? "2-week implementation" : "3-week development cycle"}
                          </div>
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      </div>
                      
                      {/* Floating success badge */}
                      <div className="absolute -bottom-6 -right-6 bg-white border border-gray-200/50 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${
                            index === 0 
                              ? 'from-green-600 to-emerald-600' 
                              : 'from-purple-600 to-pink-600'
                          } bg-clip-text text-transparent`}>
                            {index === 0 ? "24/7" : "Real-time"}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">
                            {index === 0 ? "Availability" : "Analytics"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Users className="w-5 h-5 mr-2" />
            Ready to Transform Your Business?
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;