import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Introduction", path: "#introduction" },
  { name: "Installation", path: "#installation" },
  { name: "Usage", path: "#usage" },
  { name: "Configuration", path: "#configuration" },
  { name: "Examples", path: "#examples" },
];

function CrewAI() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">CrewAI</h1>
          <p className="description">
            CrewAI is a collaborative AI framework that enables teams of AI models to work together
            in solving complex problems. It supports distributed model deployment, task assignment, and
            inter-model communication.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`npm install crew-ai`} />
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage</h2>
          <Codeblock
            code={`import { CrewAI } from "crew-ai";\nconst crew = new CrewAI();\ncrew.assignTask("data-analysis", "gpt-4")`}
          />
        </section>

        <section id="configuration" className="section">
          <h2 className="subsection-title">Configuration</h2>
          <p className="description">
            Configure model roles, assign responsibilities, and define collaboration workflows.
          </p>
          <Codeblock
            code={`const crew = new CrewAI({ roles: ["data-analyzer", "summarizer"], apiKey: "YOUR_API_KEY" });`}
          />
        </section>

        <section id="examples" className="section">
          <h2 className="subsection-title">Examples</h2>
          <Codeblock
            code={`const summary = await crew.run("summarize", { text: "Artificial intelligence is..." });`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default CrewAI;
