import { Card, CardContent } from "@/components/ui/card";
import { Network, Plug, Shield, Wrench } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Intelligent AI Architecture",
    description:
      "We engineer AI agents that can handle complex decision-making, maintain context across interactions, and operate independently with precision.",
    badge: "Smart Agents",
  },
  {
    icon: Plug,
    title: "Smooth System Integration",
    description:
      "Our automation solutions plug seamlessly into your existing tools and processes, ensuring minimal disruption and maximum efficiency.",
    badge: "Seamless Fit",
  },
  {
    icon: Shield,
    title: "Data Privacy & Security",
    description:
      "Your data remains yours. We implement industry-leading privacy safeguards and encryption protocols to ensure your sensitive business information stays secure and confidential.",
    badge: "Privacy-First",
  },
  {
    icon: Wrench,
    title: "Tailored AI Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every automation we build is customized to your exact workflow, business rules, and long-term goals.",
    badge: "Custom-Built",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 relative bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 overflow-hidden">
      {/* Clean Background with Blue Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50">
        {/* Main grid with fade effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Enhanced fade overlay to make grids disappear only at top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-indigo-50/50" />
        
        {/* Corner fade for smooth transitions only at top and bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-50/50 to-transparent" />
      </div>
      
      {/* Minimalistic accent lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">AgenticForge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AgenticForge helps modern businesses scale efficiently by designing intelligent, context-aware AI automation systems — fully customized for your unique operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description, badge }, index) => (
            <Card
              key={index}
              className="relative group bg-white/80 backdrop-blur-sm border-blue-200/40 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">{title}</h3>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                        {badge}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
                  </div>
                </div>
              </CardContent>

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              {/* Minimalistic corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-indigo-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Minimalistic decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 border border-blue-300/40 rounded-full opacity-30">
          <div className="absolute top-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-10 left-10 w-12 h-12 border border-indigo-400/40 rounded-full opacity-25" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-sky-400/50 rounded-full opacity-20" />
      </div>
    </section>
  );
};

export default WhyChoose;