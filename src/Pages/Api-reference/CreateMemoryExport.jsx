import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Export Options", path: "#export-options" },
  { name: "Permissions Required", path: "#permissions-required" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Export Format", path: "#export-format" },
  { name: "Failure Scenarios", path: "#failure-scenarios" }
];

function CreateMemoryExport() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Create Memory Export</h1>
          <p className="description">
            This endpoint allows users to initiate an export of memory data. Useful for analytics,
            migration tasks, or backup purposes. Export tasks are processed asynchronously and
            users can later retrieve the download URL.
          </p>
        </section>

        <section id="export-options" className="section">
          <h2 className="subsection-title">Export Options</h2>
          <p className="description">
            Users can specify filters to determine what data to export, such as date range, tags,
            or memory type.
          </p>
          <ul className="description">
            <li><strong>dateFrom</strong> – Start date for exported memories</li>
            <li><strong>dateTo</strong> – End date for exported memories</li>
            <li><strong>tags</strong> – Filter by specific tags</li>
            <li><strong>format</strong> – Export format (e.g., CSV, JSON)</li>
          </ul>
        </section>

        <section id="permissions-required" className="section">
          <h2 className="subsection-title">Permissions Required</h2>
          <p className="description">
            Only users with export privileges can initiate this request. Unauthorized attempts
            will be blocked and logged.
          </p>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="POST" endpoint="/api/memories/export/create" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">
            Here's how to initiate an export request programmatically:
          </p>
          <Codeblock />
        </section>

        <section id="export-format" className="section">
          <h2 className="subsection-title">Export Format</h2>
          <p className="description">
            The exported file will be delivered in the requested format. Ensure that you handle the
            file securely, especially when dealing with user-generated content.
          </p>
        </section>

        <section id="failure-scenarios" className="section">
          <h2 className="subsection-title">Failure Scenarios</h2>
          <p className="description">
            The export request may fail in the following cases:
          </p>
          <ul className="description">
            <li>Invalid filter parameters</li>
            <li>Insufficient permissions</li>
            <li>Export engine timeout or internal error</li>
          </ul>
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default CreateMemoryExport;
