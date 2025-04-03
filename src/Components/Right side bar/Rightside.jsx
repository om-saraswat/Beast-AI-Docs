import React, { useEffect, useState } from "react";
import "./Rightside.css";

const Rightside = ({ menuItems }) => {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    // Handle initial active section on component mount
    setActiveHash(window.location.hash);
    
    // Function to update active section based on scroll position
    const handleScroll = () => {
      // Only process if we have menu items
      if (!menuItems || menuItems.length === 0) return;
      
      // Get all section elements on the page, including subtopics
      const allPaths = [];
      menuItems.forEach(item => {
        allPaths.push(item.path);
        if (item.subItems && item.subItems.length > 0) {
          item.subItems.forEach(subItem => allPaths.push(subItem.path));
        }
      });
      
      const sectionIds = allPaths.map(path => path.replace('#', ''));
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
      
      if (sections.length === 0) return;
      
      // Find which section is currently in viewport
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      // Track the last visible section
      let activeSection = null;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSection = section;
          break;
        } else if (scrollPosition >= sectionTop) {
          activeSection = section;
        }
      }
      
      if (activeSection) {
        setActiveHash(`#${activeSection.id}`);
      }
    };
    
    // Add event listeners
    window.addEventListener("hashchange", () => setActiveHash(window.location.hash));
    window.addEventListener("scroll", handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener("hashchange", () => setActiveHash(window.location.hash));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  // Handle smooth scrolling with offset for fixed header
  const scrollToElement = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate header height - adjust the 70 value as needed based on your header height
      const headerOffset = 70;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, '', `#${id}`);
      setActiveHash(`#${id}`);
    }
  };

  // Return null if no menu items are provided
  if (!menuItems || menuItems.length === 0) return null;

  return (
    <div className="right-sidebar">
      <div className="right-sidebar-container">
        <h3 className="right-sidebar-title">On this page</h3>
        <nav className="right-sidebar-nav">
          <ul className="right-sidebar-list">
            {menuItems.map((item) => {
              const id = item.path.replace('#', '');
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isActive = activeHash === item.path;
              const isParentOfActive = hasSubItems && item.subItems.some(subItem => activeHash === subItem.path);
              
              return (
                <li key={item.name} className="right-sidebar-item">
                  <a
                    href={item.path}
                    onClick={(e) => scrollToElement(e, id)}
                    className={`right-sidebar-link ${isActive ? "right-sidebar-link-active" : ""}`}
                  >
                    {item.name}
                  </a>
                  
                  {/* Render sub-items if they exist */}
                  {hasSubItems && (
                    <ul className="right-sidebar-sublist">
                      {item.subItems.map((subItem) => {
                        const subId = subItem.path.replace('#', '');
                        return (
                          <li key={subItem.name} className="right-sidebar-subitem">
                            <a
                              href={subItem.path}
                              onClick={(e) => scrollToElement(e, subId)}
                              className={`right-sidebar-sublink ${activeHash === subItem.path ? "right-sidebar-sublink-active" : ""}`}
                            >
                              {subItem.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Rightside;