import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./Index";
import NotFound from "./NotFound";
import Legal from "./Legal";
import Consultation from "./Consultation";
import Demo from "./Demo";
import SEO from "./SEO";

const AppContent = () => {
  const location = useLocation();
  
  // Route-specific SEO metadata
  const getSEOConfig = (pathname: string) => {
    switch(pathname) {
      case '/':
        return {
          title: "AgenticForge - AI Automation & Custom AI Agents for Business",
          description: "Transform your business with AgenticForge's intelligent AI automation. We build sophisticated AI agents, chatbots, voicebots, and workflow automations using cutting-edge AI technologies.",
          keywords: "AI automation, custom AI agents, business automation, workflow automation, AI chatbot, voicebot, process optimization, enterprise AI solutions, intelligent automation"
        };
      case '/demo':
        return {
          title: "AI Automation Demo | AgenticForge - See Our Technology in Action",
          description: "Experience AgenticForge's AI automation capabilities firsthand. Watch our intelligent AI agents and workflow automation solutions in action.",
          keywords: "AI demo, automation demo, AI agent demo, workflow automation example, AI technology demo, business process automation"
        };
      case '/consultation':
        return {
          title: "Free AI Automation Consultation | AgenticForge",
          description: "Get a free consultation on how AI automation can transform your business. Discuss your needs with our AI experts at AgenticForge.",
          keywords: "AI consultation, automation consulting, business AI implementation, AI strategy, digital transformation, AI solutions"
        };
      case '/legal':
        return {
          title: "Legal Information | AgenticForge - AI Automation Solutions",
          description: "Legal information, privacy policy, and terms of service for AgenticForge's AI automation and AI agent development services.",
          keywords: "AI legal terms, automation privacy policy, terms of service, data protection, AI compliance"
        };
      default:
        return {
          title: "AgenticForge - Leading AI Automation Solutions Provider",
          description: "AgenticForge provides cutting-edge AI automation solutions, custom AI agents, and workflow optimization for modern businesses.",
          keywords: "AI company, automation provider, AI development, custom AI solutions, enterprise automation"
        };
    }
  };

  const seoConfig = getSEOConfig(location.pathname);

  return (
    <>
      <SEO {...seoConfig} pathname={location.pathname} />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </>
  );
};

export default AppContent;
