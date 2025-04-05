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

const CreateWebhook = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Create Webhook</h1>
        <p className="description">
          This endpoint allows you to create a new webhook by providing a target URL.
        </p>
      </section>

      <section id="api-endpoint" className="section">
        <h2 className="subsection-title">API Endpoint</h2>
        <MethodBlock method="POST" endpoint="/api/webhooks" />
      </section>

      <section id="example-request" className="section">
        <h2 className="subsection-title">Example Request</h2>
        <Codeblock code={`fetch('/api/webhooks', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN', 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://your-webhook-url.com' })
})`} />
      </section>

      <section id="success-response" className="section">
        <h2 className="subsection-title">✅ Success Response</h2>
        <Codeblock code={`{
  "id": "123",
  "url": "https://your-webhook-url.com",
  "status": "active"
}`} />
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default CreateWebhook;
