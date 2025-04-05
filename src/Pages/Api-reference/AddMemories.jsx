import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" }
];

function AddMemories() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Add Memories</h1>
          <p className="description">
            The Add Memories API allows users to store new memory entries in the system.
          </p>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <p className="description">Use the following API endpoint to add a new memory.</p>
          <MethodBlock method="POST" endpoint="/api/memories/add" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">Example API request using JSON format.</p>
          <Codeblock />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default AddMemories;
