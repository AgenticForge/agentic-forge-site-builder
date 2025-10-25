import { Button } from "./ui/button";
import { Play, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="group hover:bg-white/10"
          onClick={handleBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </Button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 via-blue-300/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/15 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            See Our AI Agents in{" "}
            <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI agents transform business processes and automate
            complex workflows in real-time.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-2xl blur opacity-25" />
          <div className="relative bg-card border border-blue-200/30 rounded-xl p-2 backdrop-blur-sm">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/YmpRrQdN18c?autoplay=0&rel=0${//
                  isPlaying ? "&autoplay=1" : ""
                }`}
                title="AgenticForge AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => (window.location.href = "/demo")}
            >
              Try Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/consultation")}
            >
              Schedule Demo Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
