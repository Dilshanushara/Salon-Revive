import React, { useEffect, useState } from "react";
import Footer from "./componenets/footer/footer";
import Header from "./componenets/header/header";
import About from "./pages/about/about";
import Gallery from "./pages/gallery/gallery";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Testimonials from "./pages/testimonials/testimonials";
import Contact from "./pages/contact/contact";

const sectionIds = [
  "home-section",
  "about-section",
  "services-section",
  "testimonials-section",
  "gallery-section",
  "contact-section",
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: rect.top };
      });

      // Find the first section whose top is >= 0 (i.e., in view or soon to be in view)
      const inView = offsets.reduce((best, curr) =>
        Math.abs(curr.top) < Math.abs(best.top) ? curr : best
      );
      setActiveSection(inView.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
