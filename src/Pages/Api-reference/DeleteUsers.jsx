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

const DeleteUsers = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Delete User</h1>
        <p className="description">
          Remove a user from the system by their <code>userId</code>. This will revoke access and unlink the user from their organization.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="DELETE" endpoint="/api/users/{userId}" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/users/789', {
  method: 'DELETE',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
})`} />

        <Codeblock code={`curl -X DELETE https://api.example.com/users/789 \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`{
  "message": "User successfully deleted."
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>401 Unauthorized</strong></li>
          <li><strong>403 Forbidden</strong> – Not allowed to delete this user</li>
          <li><strong>404 Not Found</strong> – User doesn’t exist</li>
        </ul>
      </section>

      <section id="headers-auth" className="section">
        <h2 className="subsection-title">🔐 Headers & Authentication</h2>
        <p className="description"><code>Authorization: Bearer YOUR_API_TOKEN</code></p>
      </section>

      <section id="rate-limiting" className="section">
        <h2 className="subsection-title">🚦 Rate Limiting</h2>
        <p className="description">Max 30 user deletions/hour.</p>
      </section>

      <section id="best-practices" className="section">
        <h2 className="subsection-title">💡 Best Practices</h2>
        <ul className="description">
          <li>Confirm deletion via UI before calling API.</li>
          <li>Log audit trail for user deletions.</li>
          <li>Use soft-delete for recovery if needed.</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default DeleteUsers;
