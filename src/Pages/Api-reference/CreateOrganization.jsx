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

const CreateOrganization = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Create Organization</h1>
        <p className="description">
          This endpoint allows you to create a brand new organization in your system. You must provide at least a name, and optionally any other metadata such as contact email, configuration settings, or custom properties.
        </p>
        <p className="description">
          This operation is typically reserved for super admins or system users with organization-creation permissions.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="POST" endpoint="/api/organizations" />
        <p className="description">
          This endpoint accepts a <code>POST</code> request with a JSON payload.
        </p>
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>

        <p className="description"><strong>JavaScript (Fetch)</strong></p>
        <Codeblock code={`fetch('/api/organizations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_TOKEN' },
  body: JSON.stringify({
    name: 'New Org',
    email: 'hello@neworg.com',
    settings: {
      timezone: 'UTC',
      theme: 'light'
    },
    customProperties: {
      industry: 'education',
      size: 'startup'
    }
  })
});`} />

        <p className="description"><strong>cURL</strong></p>
        <Codeblock code={`curl -X POST https://api.example.com/organizations \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "New Org",
    "email": "hello@neworg.com",
    "settings": {
      "timezone": "UTC",
      "theme": "light"
    },
    "customProperties": {
      "industry": "education",
      "size": "startup"
    }
  }'`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <p className="description">
          Returns <code>201 Created</code> along with the newly created organization object.
        </p>
        <Codeblock code={`{
  "id": "789",
  "name": "New Org",
  "email": "hello@neworg.com",
  "settings": {
    "timezone": "UTC",
    "theme": "light"
  },
  "customProperties": {
    "industry": "education",
    "size": "startup"
  },
  "createdAt": "2025-04-05T14:00:00Z"
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>400 Bad Request</strong> – Required fields missing or invalid data format.</li>
          <li><strong>401 Unauthorized</strong> – Access token is missing or invalid.</li>
          <li><strong>403 Forbidden</strong> – User does not have permission to create organizations.</li>
          <li><strong>409 Conflict</strong> – An organization with the same email or name already exists.</li>
          <li><strong>500 Internal Server Error</strong> – Server-side error during creation.</li>
        </ul>
      </section>

      <section id="request-schema" className="section">
        <h2 className="subsection-title">📘 Request Body Schema</h2>
        <ul className="description">
          <li><code>name</code> (string, required) – Name of the new organization</li>
          <li><code>email</code> (string, optional) – Organization's contact email</li>
          <li><code>settings</code> (object, optional) – Key-value configuration settings</li>
          <li><code>customProperties</code> (object, optional) – Additional metadata fields</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <ul className="description">
          <li><code>Authorization</code>: <code>Bearer YOUR_API_TOKEN</code> – Required</li>
          <li><code>Content-Type</code>: <code>application/json</code> – Required</li>
        </ul>
        <p className="description">
          Ensure that the authenticated user has permission to create organizations in your system.
        </p>
      </section>

      <section id="versioning" className="section">
        <h2 className="subsection-title">📦 API Versioning</h2>
        <p className="description">
          Current version: <strong>v1</strong>. Use versioned endpoints to avoid breaking changes in future updates. e.g., <code>/v1/organizations</code>
        </p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">
          You are limited to <strong>30 organization creations per hour</strong>. Exceeding this will result in a <code>429 Too Many Requests</code> error.
        </p>
        <ul className="description">
          <li><code>X-RateLimit-Limit</code>: Max allowed</li>
          <li><code>X-RateLimit-Remaining</code>: Remaining in this window</li>
          <li><code>X-RateLimit-Reset</code>: Reset time in epoch seconds</li>
        </ul>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Always validate required fields before sending the request.</li>
          <li>Use server-side checks to prevent duplicate organization names/emails.</li>
          <li>Log organization creation events for auditing and traceability.</li>
          <li>Use retry mechanisms for handling occasional 500-level errors.</li>
        </ul>
      </section>
    </div>

    <Rightside menuItems={menuItems} />
  </div>
);

export default CreateOrganization;
