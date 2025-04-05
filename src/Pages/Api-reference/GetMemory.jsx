import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Parameters", path: "#parameters" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function GetMemory() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Get Memory</h1>
          <p className="description">
            Retrieves detailed information about a specific memory by ID. This includes all stored attributes and metadata.
          </p>
        </section>

        <section id="parameters" className="section">
          <h2 className="subsection-title">Parameters</h2>
          <ul className="description">
            <li><strong>memoryId</strong>: Unique identifier for the memory.</li>
            <li><strong>includeHistory</strong> (optional): Whether to include memory history in the response.</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="GET" endpoint="/api/memories/:memoryId" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <Codeblock />
        </section>

        <section id="example-response" className="section">
          <h2 className="subsection-title">Example Response</h2>
          <Codeblock />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default GetMemory;
