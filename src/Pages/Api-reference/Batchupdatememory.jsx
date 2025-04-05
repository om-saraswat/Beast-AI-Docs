import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Payload Fields", path: "#payload-fields" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function BatchUpdateMemory() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Batch Update Memories</h1>
          <p className="description">
            Enables bulk updates of multiple memories in a single API request. Ideal for large-scale data corrections or migrations.
          </p>
        </section>

        <section id="payload-fields" className="section">
          <h2 className="subsection-title">Payload Fields</h2>
          <ul className="description">
            <li><strong>updates</strong>: Array of objects, each containing memoryId and fields to update.</li>
            <li><strong>content</strong>: Optional. Updated memory content.</li>
            <li><strong>tags</strong>: Optional. Updated tags for the memory.</li>
            <li><strong>metadata</strong>: Optional. Additional updated metadata.</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="PUT" endpoint="/api/memories/batch-update" />
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

export default BatchUpdateMemory;