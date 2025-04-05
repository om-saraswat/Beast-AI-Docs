import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Examples", path: "#example-request" },
  { name: "Success Response", path: "#success-response" },
  { name: "Error Responses", path: "#error-responses" },
  { name: "Headers & Auth", path: "#headers-auth" },
  { name: "Versioning", path: "#versioning" },
  { name: "Rate Limiting", path: "#rate-limiting" },
  { name: "Best Practices", path: "#best-practices" }
];

const GetOrganizations = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Get Organization</h1>
        <p className="description">
          Retrieve detailed information for a specific organization by its unique <code>orgId</code>. This endpoint is useful for viewing settings, metadata, and current configuration details of an organization.
        </p>
        <p className="description">
          This operation requires read-level permission. It is typically used in admin panels, dashboards, or API clients that need to fetch current organization data.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="GET" endpoint="/api/organizations/{orgId}" />
        <p className="description">
          Replace <code>{`{orgId}`}</code> with the organization's ID you want to retrieve.
        </p>
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>

        <p className="description"><strong>JavaScript (Fetch)</strong></p>
        <Codeblock code={`fetch('/api/organizations/456', {
  method: 'GET',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
})
  .then(res => res.json())
  .then(data => console.log(data));`} />

        <p className="description"><strong>cURL</strong></p>
        <Codeblock code={`curl https://api.example.com/organizations/456 \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <p className="description">
          Returns <code>200 OK</code> and the organization object.
        </p>
        <Codeblock code={`{
  "id": "456",
  "name": "Acme Inc",
  "email": "admin@acme.com",
  "settings": {
    "theme": "dark",
    "timezone": "UTC"
  },
  "customProperties": {
    "industry": "technology",
    "size": "enterprise"
  },
  "createdAt": "2022-08-01T10:00:00Z",
  "updatedAt": "2025-04-05T14:55:00Z"
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>400 Bad Request</strong> – Invalid orgId format or missing parameter.</li>
          <li><strong>401 Unauthorized</strong> – No or invalid access token.</li>
          <li><strong>403 Forbidden</strong> – The user is not authorized to view this organization.</li>
          <li><strong>404 Not Found</strong> – Organization with the given ID was not found.</li>
          <li><strong>500 Internal Server Error</strong> – Unexpected server issue.</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <ul className="description">
          <li><code>Authorization</code>: <code>Bearer YOUR_API_TOKEN</code> – Required</li>
        </ul>
        <p className="description">
          Make sure your token has read access for the organization you're requesting.
        </p>
      </section>

      <section id="versioning" className="section">
        <h2 className="subsection-title">📦 API Versioning</h2>
        <p className="description">
          Current version: <strong>v1</strong>. Endpoint is available at <code>/v1/organizations/{`{orgId}`}</code> for version-controlled APIs.
        </p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">
          This endpoint supports <strong>120 requests per minute</strong>. Hitting the limit returns a <code>429 Too Many Requests</code> error.
        </p>
        <ul className="description">
          <li><code>X-RateLimit-Limit</code>: Total allowed</li>
          <li><code>X-RateLimit-Remaining</code>: Remaining calls</li>
          <li><code>X-RateLimit-Reset</code>: Time when it resets</li>
        </ul>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Cache organization data locally when possible to reduce repeated calls.</li>
          <li>Always handle <code>404</code> errors gracefully in the UI.</li>
          <li>Use feature flags to gate access to organization-level data if needed.</li>
          <li>Mask or encrypt sensitive fields if storing locally.</li>
        </ul>
      </section>
    </div>

    <Rightside menuItems={menuItems} />
  </div>
);

export default GetOrganizations;
