import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Introduction", path: "#introduction" },
  { name: "Why This Platform?", path: "#why-this-platform" },
  { name: "Core Concepts", path: "#core-concepts" },
  { name: "Example", path: "#example" }
];

function Overview_integration() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">Platform Overview</h1>
          <p className="description">
            Our platform is designed to offer a robust, scalable, and developer-friendly interface for working
            with cognitive memory systems, LLM orchestration, vector databases, and multimodal AI integration. This
            overview introduces the philosophy, components, and utilities of our platform in an accessible and
            comprehensive format.
          </p>
        </section>

        <section id="why-this-platform" className="section">
          <h2 className="subsection-title">Why This Platform?</h2>
          <p className="description">
            Traditional platforms offer rigid and limited memory control, often lacking flexibility in real-time
            customization and cross-agent collaboration. Our system fills this gap with memory-first architecture
            built specifically for modern AI workflows. Highlights include:
          </p>
          <ul className="description">
            <li>Full support for both short-term and long-term memory modules</li>
            <li>Unified memory layer accessible across different LLMs</li>
            <li>Easy plugin-based architecture for tools and integrations</li>
            <li>RESTful API endpoints with flexible schemas</li>
          </ul>
        </section>

        <section id="core-concepts" className="section">
          <h2 className="subsection-title">Core Concepts</h2>
          <p className="description">
            Understanding our architecture starts with a few key concepts:
            <strong> Memory Entities, Memory Scopes, Memory Vectors, Agents, Prompts, and Contextual Recall.</strong>
            These work together to ensure data is preserved, retrieved, and evolved with precision.
          </p>
          <p className="description">
            Each entity is time-stamped, vectorized (when necessary), and scoped with access control. Agents can query
            the memory layer as part of their execution logic. Developers can add/override logic through hookable endpoints.
          </p>
        </section>

        <section id="example" className="section">
          <h2 className="subsection-title">Code Example</h2>
          <Codeblock
            code={`// Example: Add a memory entry for a user
fetch("/api/memories", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    user_id: "u_001",
    content: "User asked about product refund policy.",
    tags: ["refund", "customer_query"],
    timestamp: Date.now()
  })
})`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default Overview_integration;
