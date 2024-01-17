// Navigation.js
import React, { useEffect, useState } from 'react';

const Navigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const targetElement = document.getElementById(section.id);
        if (
          targetElement.offsetTop <= scrollPosition &&
          targetElement.offsetTop + targetElement.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="navigation-container">
      <div className="navigation-box">
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <button onClick={() => scrollToSection(section.id)} className={section.id === activeSection ? 'active' : ''}>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="scrollable-sections">
        {sections.map((section, index) => (
          <div key={index} id={section.id} className="scroll-section">
            <h2>{section.label}</h2>
            {/* Content of the section */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
