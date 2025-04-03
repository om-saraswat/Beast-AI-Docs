import React, { useState } from 'react';
import './Integ_l.css'; // Use dedicated CSS file
import { Link, useLocation } from 'react-router-dom';

// Import icons from react-icons - using only standard icons from main packages
import { MdDashboard, MdExpandLess, MdExpandMore, MdIntegrationInstructions } from 'react-icons/md';
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';
// Removed SiVercel and SiDify
import { BsTools, BsGearFill, BsLightningFill } from 'react-icons/bs';
import { AiFillApi, AiOutlineApartment } from 'react-icons/ai';
import { DiGoogleAnalytics } from 'react-icons/di';

function Integ_l() {
  const menuItems = [
    {
      title: "Integrations",
      icon: <MdIntegrationInstructions />,
      links: [
        { path: "/integrations/overview", label: "Overview", icon: <MdDashboard /> },
        // Replace SiVercel with AiFillApi
        { path: "/integrations/vercel-ai-sdk", label: "Vercel AI SDK", icon: <AiFillApi /> },
        { path: "/integrations/crewai", label: "CrewAI", icon: <AiOutlineApartment /> },
        { path: "/integrations/autogen", label: "Autogen", icon: <BsGearFill /> },
        { path: "/integrations/langchain", label: "Langchain", icon: <FaCode /> },
        // Replace GrGraphQl with DiGoogleAnalytics
        { path: "/integrations/langgraph", label: "LangGraph", icon: <DiGoogleAnalytics /> },
        { path: "/integrations/llamaindex", label: "LlamaIndex", icon: <FaBrain /> },
        { path: "/integrations/langchain-tools", label: "Langchain Tools", icon: <BsTools /> },
        // Replace SiDify with BsLightningFill
        { path: "/integrations/dify", label: "Dify", icon: <BsLightningFill /> },
        { path: "/integrations/mcp-server", label: "MCP Server", icon: <FaServer /> },
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
    <div className="integration-leftbar-change-side">
      {menuItems.map((section) => (
        <div key={section.title} className="integration-leftbar-menu-section">
          <div className="integration-leftbar-section-header">
            <span className="integration-leftbar-section-icon">{section.icon}</span>
            <h3 className="integration-leftbar-section-title">{section.title}</h3>
          </div>
          <div className="integration-leftbar-menu-links">
            {section.links.map((item) => (
              <div key={item.path} className={`integration-leftbar-menu-item ${location.pathname === item.path ? "active" : ""}`}>
                <Link 
                  to={item.path} 
                  className="integration-leftbar-menu-link" 
                  onClick={(e) => item.subLinks && toggleMenu(e, item.path)}
                >
                  <span className="integration-leftbar-menu-icon">{item.icon}</span>
                  <p className="integration-leftbar-menu-label">{item.label}</p>
                  {item.subLinks && (
                    <span className="integration-leftbar-expand-icon">
                      {openMenus[item.path] ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                  )}
                </Link>
                {item.subLinks && openMenus[item.path] && (
                  <div className="integration-leftbar-submenu">
                    {item.subLinks.map((subItem) => (
                      <Link 
                        key={subItem.path} 
                        to={subItem.path} 
                        className={`integration-leftbar-submenu-item ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        <span className="integration-leftbar-submenu-icon">{subItem.icon}</span>
                        <span className="integration-leftbar-submenu-label">{subItem.label}</span>
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

export default Integ_l;