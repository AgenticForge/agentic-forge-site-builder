import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
