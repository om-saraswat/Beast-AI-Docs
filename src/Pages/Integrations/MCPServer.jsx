import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Architecture", path: "#architecture" },
  { name: "Endpoints", path: "#endpoints" },
  { name: "Sample Request", path: "#sample-request" }
];

function MCPServer() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">MCP Server</h1>
          <p className="description">
            The MCP (Memory Control Protocol) Server acts as a centralized control unit for managing memory 
            operations in AI systems. It serves as a communication bridge between memory modules and APIs 
            that access, modify, or query memory content.
          </p>
        </section>

        <section id="architecture" className="section">
          <h2 className="subsection-title">Architecture</h2>
          <p className="description">
            MCP Server is designed with modular architecture. It accepts HTTP requests, performs routing based on 
            the type of memory operation (CRUD), and returns structured JSON responses. It also handles 
            authentication and rate limiting.
          </p>
        </section>

        <section id="endpoints" className="section">
          <h2 className="subsection-title">Endpoints</h2>
          <ul className="description">
            <li><code>POST /memory</code> – Create a new memory entry</li>
            <li><code>GET /memory/:id</code> – Retrieve a memory entry</li>
            <li><code>PUT /memory/:id</code> – Update a memory entry</li>
            <li><code>DELETE /memory/:id</code> – Delete a memory entry</li>
          </ul>
        </section>

        <section id="sample-request" className="section">
          <h2 className="subsection-title">Sample Request</h2>
          <Codeblock
            code={`fetch("https://mcp.example.com/memory", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    user_id: "12345",
    content: "User interacted with product X"
  })
})`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default MCPServer;
