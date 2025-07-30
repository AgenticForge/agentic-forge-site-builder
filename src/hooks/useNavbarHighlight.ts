import { useEffect, useState } from 'react';

export const useNavbarHighlight = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['hero', 'services', 'why-choose', 'case-studies', 'about', 'contact'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};