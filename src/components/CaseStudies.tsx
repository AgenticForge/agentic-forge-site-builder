import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Phone, Mail, Database, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    demoDescription: "Watch our AI agent handle appointment scheduling with natural conversation flow and intelligent reminders."
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
    demoDescription: "Experience how BandhanAI analyzes customer data and generates personalized campaigns with real-time analytics.",
    githubUrl: "https://github.com/MohammedMusharraf11/BandhanAI"
  }
];

const CaseStudies = () => {
  // Add JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cases.map((caseStudy, index) => ({
      "@type": "Case",
      "position": index + 1,
      "name": caseStudy.title,
      "description": caseStudy.challenge,
      "result": caseStudy.results,
      "industry": caseStudy.industry,
      "provider": {
        "@type": "Organization",
        "name": "Agentic Forge",
        "url": "https://agenticforge.tech"
      }
    }))
  };

  return (
    <section 
      id="case-studies" 
      className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"
      aria-label="Case Studies Section"
    >
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200/50"
            role="doc-subtitle"
            aria-label="Section Category"
          >
            <TrendingUp className="w-4 h-4 mr-2" aria-hidden="true" />
            Case Studies
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
            itemProp="headline"
          >
            Transforming{" "}
            <span className="relative inline-block">
              Businesses
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300/0 via-indigo-400/50 to-blue-300/0 rounded-full" />
            </span>{" "}
            with{" "}
            <span 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2 sm:mt-4"
              itemProp="alternativeHeadline"
            >
              AI Automation
            </span>
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
            itemProp="description"
          >
            Discover how we've helped businesses automate complex workflows, enhance customer experiences, 
            and achieve measurable growth through intelligent AI solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 md:space-y-24">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <article 
                key={index} 
                className="relative px-2 sm:px-4"
                itemScope
                itemType="https://schema.org/Article"
              >
                {/* SEO Meta Tags */}
                <meta itemProp="datePublished" content="2025-08-04" />
                <meta itemProp="author" content="Agentic Forge" />
                <meta itemProp="keywords" content={`${caseStudy.techStack.join(', ')}, AI Solutions, Business Automation, ${caseStudy.industry}`} />
                <meta itemProp="image" content={`/ai-case-study-${index + 1}.jpg`} />
                
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
                      <CardHeader className="px-0 pb-6 sm:pb-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg ${
                            index === 0 
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                              : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                          }`}>
                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-800 border border-gray-300 font-medium hover:bg-gray-200 transition-colors">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                        <CardTitle 
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
                          id={`case-study-${index}`}
                          itemProp="headline"
                        >
                          {caseStudy.title}
                        </CardTitle>
                        <CardDescription 
                          className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
                          itemProp="description"
                        >
                          <span className="font-semibold text-gray-800">Challenge:</span> {caseStudy.challenge}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-0 space-y-8">
                        {/* Key Metrics */}
                        <div 
                          className="grid grid-cols-2 gap-3 sm:gap-6 p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-sm"
                          itemProp="aggregateRating"
                          itemScope
                          itemType="https://schema.org/AggregateRating"
                        >
                          <div className="text-center">
                            <div 
                              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${
                              index === 0 
                                ? 'from-blue-600 to-indigo-600' 
                                : 'from-indigo-600 to-purple-600'
                            } bg-clip-text text-transparent`}>
                              {caseStudy.metrics.primary}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-semibold">{caseStudy.metrics.primaryLabel}</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${
                              index === 0 
                                ? 'from-blue-600 to-indigo-600' 
                                : 'from-indigo-600 to-purple-600'
                            } bg-clip-text text-transparent`}>
                              {caseStudy.metrics.secondary}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-semibold">{caseStudy.metrics.secondaryLabel}</div>
                          </div>
                        </div>

                        {/* Solution */}
                        <div 
                          className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/30"
                          itemProp="articleBody"
                        >
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-green-600 flex-shrink-0" aria-hidden="true" />
                            <span itemProp="about">AI Solution Implemented</span>
                          </h4>
                          <p 
                            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4"
                            itemProp="text"
                          >{caseStudy.solution}</p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.techStack.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200 font-medium whitespace-nowrap">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Results */}
                        <div itemProp="articleBody">
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                            <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-green-600 flex-shrink-0" aria-hidden="true" />
                            <span itemProp="about">Key Outcomes</span>
                          </h4>
                          <div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                            itemProp="result"
                          >
                            {caseStudy.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/30">
                                <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0 bg-gradient-to-r ${
                                  index === 0 
                                    ? 'from-blue-500 to-indigo-500' 
                                    : 'from-indigo-500 to-purple-500'
                                }`}></div>
                                <span className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Demo/Visual Side */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative group mb-12 sm:mb-0">
                      <div className="aspect-video bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
                        {/* Demo Interface Mockup */}
                        <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center">
                          <div className={`p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br ${
                            index === 0 
                              ? 'from-blue-500 to-blue-600' 
                              : 'from-indigo-500 to-purple-600'
                          } shadow-lg`}>
                            <IconComponent 
                              className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-white" 
                              aria-label={`${caseStudy.title} icon`}
                            />
                          </div>
                          <h3 
                            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4"
                            itemProp="name"
                          >
                            {index === 0 ? "Live Demo Available" : "Interactive Platform"}
                          </h3>
                          <p 
                            className="text-xs sm:text-sm md:text-base text-gray-600 leading-snug mb-3 sm:mb-4 md:mb-6 px-4 sm:px-6"
                            itemProp="description"
                            style={{ 
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              maxWidth: '90%',
                              margin: '0 auto'
                            }}
                          >
                            {caseStudy.demoDescription}
                          </p>
                          <div className="flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-gray-500">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                            <span className="text-center">{index === 0 ? "2-week implementation" : "3-week development"}</span>
                          </div>
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                      </div>
                      
                      {/* Floating success badge - positioned below card on mobile */}
                      <div className="absolute -bottom-8 right-4 sm:-bottom-6 sm:-right-6 bg-white border border-gray-200/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl backdrop-blur-sm z-10">
                        <div className="text-center min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
                          <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 bg-gradient-to-r ${
                            index === 0 
                              ? 'from-green-600 to-emerald-600' 
                              : 'from-purple-600 to-pink-600'
                          } bg-clip-text text-transparent leading-tight`}>
                            {index === 0 ? "24/7" : "Real-time"}
                          </div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-semibold">
                            {index === 0 ? "Availability" : "Analytics"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button 
            onClick={() => {
              // Add a small delay to ensure the component is mounted
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Contact us to transform your business"
            role="button"
          >
            <Users className="w-5 h-5 mr-2" />
            Ready to Transform Your Business?
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;