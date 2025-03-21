import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Lsidebar.css";

// Import only the icons from your provided files
import Documetationlogo from "./img/icons8-open-book-30.png";
import playlogo from "./img/icons8-play-button-48.png";
import Gitlogo from "./img/github-mark-white.svg";
import Discordlogo from "./img/icons8-discord-50.png";
import dashicon from "./img/icons8-bar-chart-48.png";
import supportlogo from "./img/icons8-mail-24.png";

const menuItems = [
  {
    title: "Get Started",
    links: [
      { path: "/overview", label: "Overview" },
      { path: "/quickstart", label: "Quickstart" },
      { path: "/faqs", label: "FAQs" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { path: "/memory-types", label: "Memory Types" },
      { path: "/memory-operations", label: "Memory Operations" },
    ],
  },
  {
    title: "Platform",
    links: [
      { path: "/introduction", label: "Introduction" },
      { path: "/guide", label: "Guide" },
      { path: "/features", label: "Features" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { path: "/open-source/python-sdk", label: "Python SDK" },
      { path: "/open-source/node-sdk", label: "Node SDK" },
      {
        path: "/open-source/features",
        label: "Features",
        subLinks: [
          { path: "/open-source/openai-compatibility", label: "OpenAI Compatibility" },
          { path: "/open-source/custom-fact-extraction", label: "Custom Fact Extraction Prompt" },
          { path: "/open-source/custom-update-memory", label: "Custom Update Memory Prompt" },
          { path: "/open-source/multimodal-support", label: "Multimodal Support" },
          { path: "/open-source/rest-api", label: "REST API Server" },
          
        ],},
        { path: "/open-source/graph-memory", label: "Graph Memory", subLinks: [
          { path: "/open-source/graph-memory/overview", label: "Overview" },
          { path: "/open-source/graph-memory/features", label: "Features" }
      ] },
      { path: "/open-source/llms", label: "LLMs", subLinks: [
        { path: "/open-source/llms/overview", label: "Overview" },
        { path: "/open-source/llms/configurations", label: "Configurations" },
        { path: "/open-source/llms/supported", label: "Supported LLMs" }
    ] },
      { path: "/open-source/vector-databases", label: "Vector Databases", subLinks: [
        { path: "/open-source/vector-databases/overview", label: "Overview" },
        { path: "/open-source/vector-databases/configurations", label: "Configurations" },
        { path: "/open-source/vector-databases/supported", label: "Supported Vector Databases" }
    ] },
      { path: "/open-source/embedding-models", label: "Embedding Models" },
    ],
  },
  {
    title: "Contribution",
    links: [
      { path: "/contribution/development", label: "Development" },
      { path: "/contribution/documentation", label: "Documentation" },
    ],
  },
];

function Lsidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="sidebar">
      <div className="top-side">
        <div className="logo">
          <h1>Recallr AI</h1>
        </div>
        <nav className="nav-side">
          {[
            { path: "/documentation", icon: Documetationlogo, label: "Documentation" },
            { path: "/dashboard", icon: dashicon, label: "Your Dashboard" },
            { path: "/playground", icon: playlogo, label: "Playground" },
            { path: "/discord", icon: Discordlogo, label: "Discord" },
            { path: "/github", icon: Gitlogo, label: "GitHub" },
            { path: "/support", icon: supportlogo, label: "Support" },
          ].map((item) => (
            <div key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>
                <img src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="change-side">
        {menuItems.map((section) => (
          <div key={section.title} className="menu-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="menu-links">
              {section.links.map((item) => (
                <div key={item.path} className={`menu-item ${location.pathname === item.path ? "active" : ""}`}>
                  <Link to={item.path} className="menu-link" onClick={() => item.subLinks && toggleMenu(item.path)}>
                    <p className="menu-label">{item.label}</p>
                  </Link>
                  {item.subLinks && openMenus[item.path] && (
                    <div className="submenu">
                      {item.subLinks.map((subItem) => (
                        <Link key={subItem.path} to={subItem.path} className="submenu-item" onClick={() =>  toggleMenu(subItem.path)}>
                          {subItem.label}
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
    </aside>
  );
}

export default Lsidebar;