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
  { name: "Request Schema", path: "#request-schema" },
  { name: "Headers & Auth", path: "#headers-auth" },
  { name: "Versioning", path: "#versioning" },
  { name: "Rate Limiting", path: "#rate-limiting" },
  { name: "Best Practices", path: "#best-practices" }
];

const UpdateOrg = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Update Organization</h1>
        <p className="description">
          Use this endpoint to update an existing organization's attributes. It supports partial updates, allowing you to change only the fields you need without overwriting the whole resource.
        </p>
        <p className="description">
          This endpoint is essential when your application allows admins or org owners to configure organization details like name, contact email, timezone, and custom-defined properties like industry or user tier.
        </p>
        <p className="description">
          Only users with proper authorization (usually admins or owners of the organization) should perform this action. Unauthorized attempts will be rejected.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="PUT" endpoint="/api/organizations/123123" />
        <p className="description">
          Replace <code>{`918391`}</code> with the target organization’s unique ID.
        </p>
        <p className="description">
          This is a <strong>PUT</strong> request, indicating that you're replacing specific fields in the organization object.
        </p>
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>

        <p className="description"><strong>JavaScript (Fetch)</strong></p>
        <Codeblock code={`fetch('/api/organizations/456', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_TOKEN' },
  body: JSON.stringify({
    name: 'Updated Org Name',
    email: 'contact@updatedorg.com',
    settings: {
      theme: 'dark',
      timezone: 'UTC'
    },
    customProperties: {
      industry: 'technology',
      size: 'mid-market'
    }
  })
});`} />

        <p className="description"><strong>cURL</strong></p>
        <Codeblock code={`curl -X PUT https://api.example.com/organizations/456 \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Updated Org Name",
    "email": "contact@updatedorg.com",
    "settings": {
      "theme": "dark",
      "timezone": "UTC"
    },
    "customProperties": {
      "industry": "technology",
      "size": "mid-market"
    }
  }'`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <p className="description">Returns <code>200 OK</code> and the updated organization object.</p>
        <Codeblock code={`{
  "id": "456",
  "name": "Updated Org Name",
  "email": "contact@updatedorg.com",
  "settings": {
    "theme": "dark",
    "timezone": "UTC"
  },
  "customProperties": {
    "industry": "technology",
    "size": "mid-market"
  },
  "updatedAt": "2025-04-05T12:34:56Z"
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>400 Bad Request</strong> – Invalid JSON body or unsupported fields.</li>
          <li><strong>401 Unauthorized</strong> – Missing or invalid access token.</li>
          <li><strong>403 Forbidden</strong> – The authenticated user lacks permission to update the organization.</li>
          <li><strong>404 Not Found</strong> – The organization with the specified ID does not exist.</li>
          <li><strong>409 Conflict</strong> – Update would result in a conflict (e.g., duplicate email).</li>
          <li><strong>500 Internal Server Error</strong> – Something went wrong on the server.</li>
        </ul>
      </section>

      <section id="request-schema" className="section">
        <h2 className="subsection-title">📘 Request Body Schema</h2>
        <ul className="description">
          <li><code>name</code> (string, optional) – New name of the organization.</li>
          <li><code>email</code> (string, optional) – Updated contact email.</li>
          <li><code>settings</code> (object, optional) – Configuration options like UI theme, timezone, etc.</li>
          <li><code>customProperties</code> (object, optional) – Flexible fields like industry, company size, etc.</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <ul className="description">
          <li><code>Authorization</code>: <code>Bearer YOUR_API_TOKEN</code> – Required</li>
          <li><code>Content-Type</code>: <code>application/json</code> – Required</li>
        </ul>
        <p className="description">
          Make sure your token has permission to update organizations. Unauthorized tokens will result in a <code>401</code> or <code>403</code> error.
        </p>
      </section>

      <section id="versioning" className="section">
        <h2 className="subsection-title">📦 API Versioning</h2>
        <p className="description">
          This endpoint is part of API v1. Future versions may introduce breaking changes or support new request fields. Always check the documentation or use versioned routes like <code>/v1/organizations/adada</code>.
        </p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">
          Standard rate limit for this endpoint is <strong>60 requests per minute</strong>. Exceeding this will result in a <code>429 Too Many Requests</code> response.
        </p>
        <p className="description">
          Rate limit headers included in the response:
        </p>
        <ul className="description">
          <li><code>X-RateLimit-Limit</code> – Max requests allowed</li>
          <li><code>X-RateLimit-Remaining</code> – Requests left in current window</li>
          <li><code>X-RateLimit-Reset</code> – Time (epoch) when limit resets</li>
        </ul>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Validate inputs on the client side before sending the request.</li>
          <li>Use environment variables to manage auth tokens.</li>
          <li>Don’t send unchanged data — only include fields that need updating.</li>
          <li>Handle all error codes gracefully in the UI (especially 401/403).</li>
          <li>Log update attempts for auditing purposes if security is a concern.</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default UpdateOrg;
