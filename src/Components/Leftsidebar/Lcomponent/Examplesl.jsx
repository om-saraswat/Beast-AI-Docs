import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Examplesl.css';  // Use the new CSS file specifically for Examplesl

// Import icons from standard packages
import { MdDashboard, MdExpandLess, MdExpandMore, MdCode, MdSchool } from 'react-icons/md';
import { FaRobot, FaTools, FaUserGraduate, FaHeadset, FaBrain, FaChrome } from 'react-icons/fa';
import { BiEditAlt, BiBot } from 'react-icons/bi';
import { IoImagesOutline } from 'react-icons/io5';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsRobot, BsTools } from 'react-icons/bs';

function Examplesl() {
  const menuItems = [
    {
      title: "Examples",
      icon: <FaTools />,
      links: [
        { path: "/examples/overview", label: "Overview", icon: <MdDashboard /> },
        { path: "/examples/recallrai-demo", label: "Recallr AI Demo", icon: <FaRobot /> },
        { path: "/examples/AI_Companion", label: "AI Companion in Node.js", icon: <BsRobot /> },
        // Replace TbBrandOllama with a more common icon
        { path: "/examples/RecallrAi-with-Ollama", label: "Recallr AI with Ollama", icon: <GiArtificialIntelligence /> },
        { path: "/examples/Personalized-AI-Tutor", label: "Personalized AI Tutor", icon: <MdSchool /> },
        { path: "/examples/Customer-Support-AI-Agent", label: "Customer Support AI Agent", icon: <FaHeadset /> },
        { path: "/examples/Personal-AI-Travel-Assistant", label: "Personal AI Travel Assistant", icon: <BiBot /> },
        // Use FaBrain instead of SiLlama/BiBrain
        { path: "/examples/LlamaIndex-ReAct-Agent", label: "LlamaIndex ReAct Agent", icon: <FaBrain /> },
        { path: "/examples/chrome-extension", label: "Chrome extension", icon: <FaChrome /> },
        { path: "/examples/Document-Editing-with-RecallrAi", label: "Document Editing with RecallrAi", icon: <BiEditAlt /> },
        { path: "/examples/Multimodal-Demo-with-RecallrAi", label: "Multimodal Demo with RecallrAi", icon: <IoImagesOutline /> },
      ],
    },
  ];

  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (e, path) => {
    if (openMenus[path] !== undefined) {
      e.preventDefault();
    }
    setOpenMenus((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return (
    <div className="examples-leftbar-change-side">
      {menuItems.map((section) => (
        <div key={section.title} className="examples-leftbar-menu-section">
          <div className="examples-leftbar-section-header">
            <span className="examples-leftbar-section-icon">{section.icon}</span>
            <h3 className="examples-leftbar-section-title">{section.title}</h3>
          </div>
          <div className="examples-leftbar-menu-links">
            {section.links.map((item) => (
              <div key={item.path} className={`examples-leftbar-menu-item ${location.pathname === item.path ? "active" : ""}`}>
                <Link 
                  to={item.path} 
                  className="examples-leftbar-menu-link" 
                  onClick={(e) => item.subLinks && toggleMenu(e, item.path)}
                >
                  <span className="examples-leftbar-menu-icon">{item.icon}</span>
                  <p className="examples-leftbar-menu-label">{item.label}</p>
                  {item.subLinks && (
                    <span className="examples-leftbar-expand-icon">
                      {openMenus[item.path] ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                  )}
                </Link>
                {item.subLinks && openMenus[item.path] && (
                  <div className="examples-leftbar-submenu">
                    {item.subLinks.map((subItem) => (
                      <Link 
                        key={subItem.path} 
                        to={subItem.path} 
                        className={`examples-leftbar-submenu-item ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        <span className="examples-leftbar-submenu-icon">{subItem.icon}</span>
                        <span className="examples-leftbar-submenu-label">{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Examplesl;