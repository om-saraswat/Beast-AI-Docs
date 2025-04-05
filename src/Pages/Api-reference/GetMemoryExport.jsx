import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Usage", path: "#usage" },
  { name: "Permissions", path: "#permissions" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Sample Code", path: "#sample-code" },
  { name: "Common Issues", path: "#common-issues" },
  { name: "Response Structure", path: "#response-structure" }
];

function GetMemoryExport() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Get Memory Export</h1>
          <p className="description">
            This endpoint fetches an existing memory export task that was initiated earlier.
            It's primarily used to poll for the status of the export and retrieve the download URL
            once available.
          </p>
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage</h2>
          <p className="description">
            Call this endpoint after submitting an export request. This is helpful for large data exports
            which take time to process asynchronously. Keep polling at intervals until the status is marked
            as completed.
          </p>
        </section>

        <section id="permissions" className="section">
          <h2 className="subsection-title">Permissions</h2>
          <p className="description">
            Requires the same level of access as the export creator. Unauthorized users will receive a 403 Forbidden response.
          </p>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="GET" endpoint="/api/memories/export/{exportId}" />
        </section>

        <section id="sample-code" className="section">
          <h2 className="subsection-title">Sample Code</h2>
          <p className="description">
            Here's an example of how to poll the export status and retrieve the result.
          </p>
          <Codeblock />
        </section>

        <section id="common-issues" className="section">
          <h2 className="subsection-title">Common Issues</h2>
          <ul className="description">
            <li>Export ID not found (ensure correct ID is used)</li>
            <li>Insufficient permissions</li>
            <li>Export task still pending</li>
          </ul>
        </section>

        <section id="response-structure" className="section">
          <h2 className="subsection-title">Response Structure</h2>
          <p className="description">
            The API returns the export status and a signed URL if available:
          </p>
          <ul className="description">
            <li><strong>status</strong>: One of PENDING, IN_PROGRESS, COMPLETE, FAILED</li>
            <li><strong>downloadUrl</strong>: Available only when status is COMPLETE</li>
          </ul>
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default GetMemoryExport;
