import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Lside.css'
import Docl from './Lcomponent/Docl';
import Examplesl from './Lcomponent/Examplesl'
import Integ_l from './Lcomponent/Integ_l'
import Api_l from './Lcomponent/Api_l'

// Import React icons
import { FaBook, FaDiscord, FaGithub, FaQuestion } from "react-icons/fa";
import { MdDashboard, MdOutlineToys } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function Lsidebar() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActiveRoute = (path) => {
        if (path === "/overview") {
            // For Documentation route
            return !location.pathname.startsWith("/examples") && 
                   !location.pathname.startsWith("/integrations") && 
                   !location.pathname.startsWith("/api-reference") &&
                   !location.pathname.startsWith("/dashboard") &&
                   !location.pathname.startsWith("/playground") &&
                   !location.pathname.startsWith("/discord") &&
                   !location.pathname.startsWith("/github") &&
                   !location.pathname.startsWith("/support");
        }
        return location.pathname === path;
    };

    const navItems = [
        { path: "/overview", icon: <FaBook />, label: "Documentation", internal: true },
        { path: "/dashboard", icon: <MdDashboard />, label: "Your Dashboard", internal: true },
        { path: "/playground", icon: <MdOutlineToys />, label: "Playground", internal: true },
        { path: "https://discord.com/invite/ck4ewKdw", icon: <FaDiscord />, label: "Discord", internal: false },
        { path: "https://github.com/recallrai", icon: <FaGithub />, label: "GitHub", internal: false },
        { path: "mailto:founders@recallai.com", icon: <BiSupport />, label: "Support", internal: true }
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button className="leftsidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <aside className={`leftsidebar-sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="leftsidebar-top-side">
                    <div className="leftsidebar-logo">
                        <Link to='/'><h1>Beast AI</h1></Link>
                    </div>
                    <nav className="leftsidebar-nav-side">
                        {navItems.map((item) => (
                            item.internal ? (
                                <Link 
                                    key={item.path} 
                                    to={item.path} 
                                    className={`leftsidebar-nav-item ${isActiveRoute(item.path) ? "active" : ""}`}
                                >
                                    <span className="leftsidebar-nav-icon">{item.icon}</span>
                                    <span className="leftsidebar-nav-label">{item.label}</span>
                                </Link>
                            ) : (
                                <a 
                                    key={item.path}
                                    href={item.path}
                                    className="leftsidebar-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="leftsidebar-nav-icon">{item.icon}</span>
                                    <span className="leftsidebar-nav-label">{item.label}</span>
                                </a>
                            )
                        ))}
                    </nav>
                </div>

                <div className="leftsidebar-sidebar-content">
                    {location.pathname.startsWith("/examples") ? <Examplesl /> : null}
                    {location.pathname.startsWith("/integrations") ? <Integ_l /> : null}
                    {location.pathname.startsWith("/api-reference") ? <Api_l /> : null}
                    {(
                        location.pathname.startsWith("/overview") || 
                        location.pathname.startsWith("/quickstart") || 
                        location.pathname.startsWith("/faqs") ||
                        location.pathname.startsWith("/core-concept") ||
                        location.pathname.startsWith("/platform") ||
                        location.pathname.startsWith("/open-source") ||
                        location.pathname.startsWith("/contribution")
                    ) ? <Docl /> : null}
                </div>
            </aside>
        </>
    );
}

export default Lsidebar;