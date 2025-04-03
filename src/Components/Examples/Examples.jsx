import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Rightside from "../Right side bar/Rightside";
function Example() {
  return (
    <div>
      <Outlet/>
      
      <Rightside menuItems={[
        { name: "Introduction", path: "#introduction" },
        { name: "Key Features", path: "#key-features", subItems: [
          { name: "Memory Management", path: "#memory-management" },
          { name: "Context Awareness", path: "#context-awareness" }
        ]},
        { name: "Use Cases", path: "#use-cases", subItems: [
          { name: "Customer Service", path: "#customer-service" },
          { name: "Content Creation", path: "#content-creation" }
        ]},
        { name: "Getting Started", path: "#steps", subItems: [
          { name: "Installation", path: "#installation" },
          { name: "Configuration", path: "#configuration" }
        ]},
        { name: "Need Help?", path: "#help", subItems: [
          { name: "FAQ", path: "#faq" },
          { name: "Support Channels", path: "#support-channels" }
        ]},
      ]} />
      
    </div>
  );
}
export default Example;