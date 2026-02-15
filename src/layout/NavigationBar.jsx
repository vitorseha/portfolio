import React, { useEffect, useState } from 'react';
import './NavigationBar.css'
import NavigationItem from './NavigationItem';

const NavigationBar = () => {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav>

        <NavigationItem
          navicon={<i className="bi bi-cup-fill"></i>}
          label="Home"
          targetId="home"
          isActive={activeSection === "home"}
        />

        <NavigationItem
          navicon={<i className="bi bi-code-slash"></i>}
          label="Backend"
          targetId="backend"
          isActive={activeSection === "backend"}
        />

        <NavigationItem
          navicon={<i className="bi bi-text-indent-left"></i>}
          label="Frontend"
          targetId="frontend"
          isActive={activeSection === "frontend"}
        />

        <NavigationItem
          navicon={<i className="bi bi-medium"></i>}
          label="Motion"
          targetId="motion"
          isActive={activeSection === "motion"}
        />

        <NavigationItem
          navicon={<i className="bi bi-spellcheck"></i>}
          label="Design"
          targetId="design"
          isActive={activeSection === "design"}
        />

      </nav>
    </header>
  );
};

export default NavigationBar;
