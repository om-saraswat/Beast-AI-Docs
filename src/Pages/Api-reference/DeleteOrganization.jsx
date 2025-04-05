import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Success Response", path: "#success-response" },
  { name: "Error Responses", path: "#error-responses" },
  { name: "Headers & Auth", path: "#headers-auth" },
  { name: "Rate Limiting", path: "#rate-limiting" },
  { name: "Best Practices", path: "#best-practices" }
];

const DeleteOrganization = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Delete Organization</h1>
        <p className="description">
          Permanently delete an organization and all of its data. This operation cannot be undone and should be used with caution.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="DELETE" endpoint="/api/organizations/{orgId}" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/organizations/456', {
  method: 'DELETE',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
})`} />

        <Codeblock code={`curl -X DELETE https://api.example.com/organizations/456 \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`{
  "message": "Organization deleted successfully."
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>401 Unauthorized</strong></li>
          <li><strong>403 Forbidden</strong> – Only owners can delete</li>
          <li><strong>404 Not Found</strong></li>
          <li><strong>500 Internal Server Error</strong></li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <p className="description"><code>Authorization: Bearer YOUR_API_TOKEN</code></p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">10 deletes per hour max.</p>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Show a confirmation prompt before calling the API.</li>
          <li>Archive instead of hard delete where possible.</li>
          <li>Log all deletion events.</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default DeleteOrganization;
