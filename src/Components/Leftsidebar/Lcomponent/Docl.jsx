import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Docl.css";
// Import icons from react-icons
import { FaRocket, FaQuestionCircle, FaBook } from "react-icons/fa";
import { BsLightningCharge, BsGear, BsServer } from "react-icons/bs";
import { AiFillCode, AiFillGithub } from "react-icons/ai";
import { BiMemoryCard, BiCodeBlock } from "react-icons/bi";
import { MdDashboard, MdExpandMore, MdExpandLess, MdIntegrationInstructions } from "react-icons/md";
import { HiOutlineDocumentText, HiDatabase } from "react-icons/hi";
import { RiNodeTree, RiOpenSourceFill } from "react-icons/ri";
import { TbBrandPython, TbBrandNodejs } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

function Docl() {
  const menuItems = [
    {
      title: "Get Started",
      icon: <FaRocket />,
      links: [
        { path: "/overview", label: "Overview", icon: <MdDashboard /> },
        { path: "/quickstart", label: "Quickstart", icon: <BsLightningCharge /> },
        { path: "/faqs", label: "FAQs", icon: <FaQuestionCircle /> },
      ],
    },
    {
      title: "Core Concepts",
      icon: <BiMemoryCard />,
      links: [
        { path: "/core-concept/memory-types", label: "Memory Types", icon: <BiMemoryCard /> },
        { path: "/core-concept/memory-operations", label: "Memory Operations", icon: <BsGear /> },
      ],
    },
    {
      title: "Platform",
      icon: <BsServer />,
      links: [
        { path: "/platform/introduction", label: "Introduction", icon: <FaBook /> },
        { path: "/platform/guide", label: "Guide", icon: <HiOutlineDocumentText /> },
        { path: "/platform/features", label: "Features", icon: <BsGear /> },
      ],
    },
    {
      title: "Open Source",
      icon: <RiOpenSourceFill />,
      links: [
        { path: "/open-source/python-sdk", label: "Python SDK", icon: <TbBrandPython /> },
        { path: "/open-source/node-sdk", label: "Node SDK", icon: <TbBrandNodejs /> },
        {
          path: "/open-source/features",
          label: "Features",
          icon: <BsGear />,
          subLinks: [
            { path: "/open-source/features/openai-compatibility", label: "OpenAI Compatibility", icon: <AiFillCode /> },
            { path: "/open-source/features/custom-fact-extraction", label: "Custom Fact Extraction Prompt", icon: <HiOutlineDocumentText /> },
            { path: "/open-source/features/custom-update-memory", label: "Custom Update Memory Prompt", icon: <BiMemoryCard /> },
            { path: "/open-source/features/multimodal-support", label: "Multimodal Support", icon: <GiArtificialIntelligence /> },
            { path: "/open-source/features/rest-api", label: "REST API Server", icon: <BsServer /> },
          ],
        },
        {
          path: "/open-source/graph-memory",
          label: "Graph Memory",
          icon: <RiNodeTree />,
          subLinks: [
            { path: "/open-source/graph-memory/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/open-source/graph-memory/features", label: "Features", icon: <BsGear /> },
          ],
        },
        {
          path: "/open-source/llms",
          label: "LLMs",
          icon: <GiArtificialIntelligence />,
          subLinks: [
            { path: "/open-source/llms/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/open-source/llms/configurations", label: "Configurations", icon: <BsGear /> },
            { path: "/open-source/llms/supported", label: "Supported LLMs", icon: <GiArtificialIntelligence /> },
          ],
        },
        {
          path: "/open-source/vector-databases",
          label: "Vector Databases",
          icon: <HiDatabase />,
          subLinks: [
            { path: "/open-source/vector-databases/overview", label: "Overview", icon: <MdDashboard /> },
            { path: "/open-source/vector-databases/configurations", label: "Configurations", icon: <BsGear /> },
            { path: "/open-source/vector-databases/supported", label: "Supported Vector Databases", icon: <HiDatabase /> },
          ],
        },
        { path: "/open-source/embedding-models", label: "Embedding Models", icon: <BiCodeBlock /> },
      ],
    },
    {
      title: "Contribution",
      icon: <AiFillGithub />,
      links: [
        { path: "/contribution/development", label: "Development", icon: <AiFillCode /> },
        { path: "/contribution/documentation", label: "Documentation", icon: <HiOutlineDocumentText /> },
      ],
    },
  ];

  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  // Toggle function to open/close menus properly
  const toggleMenu = (e, path) => {
    e.preventDefault(); // Prevent navigation for menu items with sublinks
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path], // Toggle the state of this particular menu
    }));
  };

  return (
    <div className="doc-leftbar-sidebar-container">
      {menuItems.map((section) => (
        <div key={section.title} className="doc-leftbar-menu-section">
          <div className="doc-leftbar-section-header">
            <span className="doc-leftbar-section-icon">{section.icon}</span>
            <h3 className="doc-leftbar-section-title">{section.title}</h3>
          </div>
          <div className="doc-leftbar-menu-links">
            {section.links.map((item) => (
              <div key={item.path} className={`doc-leftbar-menu-item ${location.pathname === item.path ? "active" : ""}`}>
                {/* If sublinks exist, clicking the main link should toggle the submenu */}
                {item.subLinks ? (
                  <div className="doc-leftbar-menu-link" onClick={(e) => toggleMenu(e, item.path)}>
                    <span className="doc-leftbar-menu-icon">{item.icon}</span>
                    <p className="doc-leftbar-menu-label">{item.label}</p>
                    <span className="doc-leftbar-expand-icon">
                      {openMenus[item.path] ? <MdExpandLess /> : <MdExpandMore />}
                    </span>
                  </div>
                ) : (
                  <Link to={item.path} className="doc-leftbar-menu-link">
                    <span className="doc-leftbar-menu-icon">{item.icon}</span>
                    <p className="doc-leftbar-menu-label">{item.label}</p>
                  </Link>
                )}
                
                {/* Display sublinks if this menu item is toggled open */}
                {item.subLinks && openMenus[item.path] && (
                  <div className="doc-leftbar-submenu">
                    {item.subLinks.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`doc-leftbar-submenu-item ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        <span className="doc-leftbar-submenu-icon">{subItem.icon}</span>
                        <span className="doc-leftbar-submenu-label">{subItem.label}</span>
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

export default Docl;