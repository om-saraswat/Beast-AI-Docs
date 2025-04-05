import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Endpoint Details", path: "#endpoint-details" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function MemoryHistory() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Memory History</h1>
          <p className="description">
            Fetches the complete history of changes or updates made to a particular memory. Useful for audit and tracking.
          </p>
        </section>

        <section id="endpoint-details" className="section">
          <h2 className="subsection-title">Endpoint Details</h2>
          <ul className="description">
            <li><strong>memoryId</strong>: The unique identifier of the memory to retrieve history for.</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="GET" endpoint="/api/memories/history/:memoryId" />
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

export default MemoryHistory;
