import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import CaseStudies from "./CaseStudies";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

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
