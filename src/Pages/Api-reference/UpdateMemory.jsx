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

function UpdateMemory() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Update Memory</h1>
          <p className="description">
            Allows updating the content and attributes of an existing memory. Useful for correcting or expanding previously stored information.
          </p>
        </section>

        <section id="payload-fields" className="section">
          <h2 className="subsection-title">Payload Fields</h2>
          <ul className="description">
            <li><strong>memoryId</strong>: ID of the memory to update (in URL path).</li>
            <li><strong>content</strong>: New or updated content of the memory.</li>
            <li><strong>tags</strong>: Array of tags associated with the memory (optional).</li>
            <li><strong>metadata</strong>: Any additional metadata such as timestamp or location (optional).</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="PUT" endpoint="/api/memories/:memoryId" />
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

export default UpdateMemory;