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
  { name: "Error Responses", path: "#error-responses" }
];

const DeleteWebhook = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Delete Webhook</h1>
        <p className="description">
          Permanently delete an existing webhook by its unique <code>webhookId</code>.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="DELETE" endpoint="/api/webhooks/{webhookId}" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/webhooks/123', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
})`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`{
  "message": "Webhook successfully deleted."
}`} />
      </section>

      <section id="error-responses" className="section">
        <h2 className="subsection-title">❌ Error Responses</h2>
        <ul className="description">
          <li><strong>401 Unauthorized</strong> – Invalid API token</li>
          <li><strong>404 Not Found</strong> – Webhook with the given ID was not found</li>
          <li><strong>500 Internal Server Error</strong> – Unexpected issue</li>
        </ul>
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default DeleteWebhook;
