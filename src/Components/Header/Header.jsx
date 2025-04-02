import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  const isActiveRoute = (path) => {
    if (path === "/") {
      // For Documentation route (root path)
      return location.pathname === "/" || 
             (!location.pathname.startsWith("/examples") && 
              !location.pathname.startsWith("/integrations") && 
              !location.pathname.startsWith("/api-reference"));
    }
    // For other routes (examples, integrations, api-reference)
    const mainPath = path.split('/')[1];
    return location.pathname.startsWith(`/${mainPath}`);
  };

  return (
    <header className="Header-navbar">
      <nav className="Header-nav-links">
        {[
          { path: "/", label: "Documentation" },
          { path: "/examples/overview", label: "Examples" },
          { path: "/integrations/overview", label: "Integrations" },
          { path: "/api-reference/overview", label: "API Reference" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`Header-nav-item ${
              isActiveRoute(item.path) ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
