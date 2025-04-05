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
  { name: "Rate Limiting", path: "#rate-limiting" },
  { name: "Best Practices", path: "#best-practices" }
];

const GetMembers = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Get Organization Members</h1>
        <p className="description">
          Retrieve a list of all members associated with a specific organization. Results include user roles, emails, join date, and status.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="GET" endpoint="/api/organizations/{orgId}/members" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/organizations/456/members', {
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
}).then(res => res.json()).then(data => console.log(data));`} />

        <Codeblock code={`curl https://api.example.com/organizations/456/members \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`[
  {
    "id": "user_1",
    "email": "john@org.com",
    "role": "admin",
    "joinedAt": "2023-05-01T10:00:00Z",
    "status": "active"
  },
  {
    "id": "user_2",
    "email": "jane@org.com",
    "role": "member",
    "joinedAt": "2023-06-12T08:30:00Z",
    "status": "pending"
  }
]`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>401 Unauthorized</strong></li>
          <li><strong>403 Forbidden</strong></li>
          <li><strong>404 Not Found</strong> – Organization doesn't exist</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <p className="description"><code>Authorization: Bearer YOUR_API_TOKEN</code></p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">60 requests/minute per org.</p>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Use pagination if response is large.</li>
          <li>Don’t expose sensitive fields (e.g., password hashes).</li>
          <li>Filter inactive users client-side if needed.</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default GetMembers;
