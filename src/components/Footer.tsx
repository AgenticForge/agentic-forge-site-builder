import { Cog, Linkedin, Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import heroLogo from "@/assets/heroLogo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path === '/about' || path === '/contact') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  return (
    <footer className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50 border-t border-blue-200/50 overflow-hidden">
      {/* Clean White & Blue Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Animated blue gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 via-blue-300/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/15 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-blue-200/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}} />
      
      {/* Floating blue particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
      <div className="absolute top-40 right-32 w-1 h-1 bg-blue-500/60 rounded-full animate-bounce" style={{animationDelay: '3s'}} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300/60 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative p-3 bg-gradient-to-br from-blue-100/60 via-blue-200/40 to-white/80 rounded-2xl border border-blue-300/40 shadow-lg shadow-blue-200/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-2xl animate-pulse" />
                <img 
                  src={heroLogo} 
                  alt="AgenticForge Logo" 
                  className="h-14 w-auto relative z-10"
                />
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                AgenticForge
              </span>
            </div>
            <p className="text-slate-600 mb-8 max-w-md leading-relaxed text-lg font-normal">
              Transform your business with intelligent AI automation. We build sophisticated AI agents and workflow automations using cutting-edge technologies.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Connect With Us</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/agentic-forge/about/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-blue-100/60 to-blue-200/50 rounded-full border border-blue-300/50 hover:border-blue-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Linkedin className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors relative z-10" />
                </a>
                <a 
                  href="https://facebook.com/agenticforge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-blue-100/60 to-blue-200/50 rounded-full border border-blue-300/50 hover:border-blue-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Facebook className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors relative z-10" />
                </a>
                <a 
                  href="https://www.instagram.com/agenticforge/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-blue-50/60 to-blue-100/50 rounded-full border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Instagram className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors relative z-10" />
                </a>
                <a 
                  href="https://twitter.com/agenticforge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-blue-100/60 to-blue-200/50 rounded-full border border-blue-300/50 hover:border-blue-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Twitter className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors relative z-10" />
                </a>
                <a 
                  href="https://github.com/agenticforge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-slate-100/60 to-slate-200/50 rounded-full border border-slate-300/50 hover:border-slate-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-slate-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Github className="w-6 h-6 text-slate-600 group-hover:text-slate-700 transition-colors relative z-10" />
                </a>
                <a 
                  href="mailto:agenticforge.tech@gmail.com" 
                  className="group relative w-12 h-12 bg-gradient-to-br from-blue-50/60 to-blue-100/50 rounded-full border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/30 flex items-center justify-center backdrop-blur-sm hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <div className="absolute -top-2 -left-2 w-1 h-12 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/20" />
            <div className="absolute -top-1 -left-1 w-0.5 h-10 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
            <h3 className="text-2xl font-bold text-slate-700 mb-8 pl-6 drop-shadow-lg">Services</h3>
            <ul className="space-y-5 pl-6">
              <li>
                <div 
                  className="group/item flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-400 group-hover/item:to-blue-600 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-500/30 transition-all duration-300 border border-blue-400/20" />
                  <span className="font-medium text-lg">AI Agent Development</span>
                </div>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="group/item flex items-center text-slate-600 hover:text-blue-500 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-300/40 to-blue-500/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-300 group-hover/item:to-blue-500 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-400/30 transition-all duration-300 border border-blue-300/20" />
                  <span className="font-medium text-lg">Workflow Automation</span>
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="group/item flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-400 group-hover/item:to-blue-600 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-500/30 transition-all duration-300 border border-blue-400/20" />
                  <span className="font-medium text-lg">Process Optimization</span>
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="group/item flex items-center text-slate-600 hover:text-blue-500 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-300/40 to-blue-500/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-300 group-hover/item:to-blue-500 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-400/30 transition-all duration-300 border border-blue-300/20" />
                  <span className="font-medium text-lg">AI Consulting</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="relative group">
            <div className="absolute -top-2 -left-2 w-1 h-12 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/20" />
            <div className="absolute -top-1 -left-1 w-0.5 h-10 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
            <h3 className="text-2xl font-bold text-slate-700 mb-8 pl-6 drop-shadow-lg">Company</h3>
            <ul className="space-y-5 pl-6">
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="group/item flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-400 group-hover/item:to-blue-600 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-500/30 transition-all duration-300 border border-blue-400/20" />
                  <span className="font-medium text-lg">About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="group/item flex items-center text-slate-600 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-300/40 to-blue-500/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-300 group-hover/item:to-blue-500 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-400/30 transition-all duration-300 border border-blue-300/20" />
                  <span className="font-medium text-lg">Contact</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/legal')}
                  className="group/item flex items-center text-slate-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-400 group-hover/item:to-blue-600 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-500/30 transition-all duration-300 border border-blue-400/20" />
                  <span className="font-medium text-lg">Legal</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/demo')}
                  className="group/item flex items-center text-slate-600 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-300/40 to-blue-500/40 rounded-full mr-4 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-300 group-hover/item:to-blue-500 group-hover/item:scale-125 group-hover/item:shadow-md group-hover/item:shadow-blue-400/30 transition-all duration-300 border border-blue-300/20" />
                  <span className="font-medium text-lg">Demo</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="relative border-t border-gradient-to-r from-transparent via-blue-300/50 to-transparent mt-20 pt-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-400/20" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-white/40 to-transparent rounded-full" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-100/60 via-blue-200/40 to-white/80 rounded-xl flex items-center justify-center border border-blue-300/40 shadow-lg shadow-blue-200/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-xl animate-pulse" />
                <Cog className="w-6 h-6 text-blue-500 relative z-10 animate-spin-slow" />
              </div>
              <div>
                <p className="text-slate-700 font-semibold text-lg">
                  © 2025 AgenticForge. All rights reserved.
                </p>
                <p className="text-slate-500 text-sm">
                  Powering the future with intelligent automation
                </p>
              </div>
            </div>
            
            <div className="flex space-x-10">
              <button 
                onClick={() => navigate('/legal')}
                className="relative text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg group"
              >
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button 
                onClick={() => navigate('/legal')}
                className="relative text-slate-600 hover:text-blue-500 transition-all duration-300 font-medium text-lg group"
              >
                <span className="relative z-10">Terms of Service</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
              <button 
                onClick={() => navigate('/legal')}
                className="relative text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg group"
              >
                <span className="relative z-10">Cookie Policy</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;