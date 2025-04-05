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

const GetUsers = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Get User</h1>
        <p className="description">
          Retrieve details for a specific user by their <code>userId</code>. Returns user profile, role, email, and organization association.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="GET" endpoint="/api/users/{userId}" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/users/789', {
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
}).then(res => res.json()).then(data => console.log(data));`} />

        <Codeblock code={`curl https://api.example.com/users/789 \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`{
  "id": "789",
  "email": "user@example.com",
  "name": "Jane Doe",
  "role": "member",
  "status": "active",
  "organizationId": "456",
  "joinedAt": "2023-01-12T08:00:00Z"
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>401 Unauthorized</strong></li>
          <li><strong>403 Forbidden</strong></li>
          <li><strong>404 Not Found</strong> – No user with that ID</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <p className="description"><code>Authorization: Bearer YOUR_API_TOKEN</code></p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">100 requests/minute per token.</p>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Do not expose sensitive user data (e.g., passwords, tokens).</li>
          <li>Use role-based access control to ensure correct permissions.</li>
          <li>Mask emails if shown to other users.</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default GetUsers;
