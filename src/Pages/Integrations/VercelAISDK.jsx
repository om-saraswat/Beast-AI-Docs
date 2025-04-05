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

function VercelAISDK() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">Vercel AI SDK</h1>
          <p className="description">
            The Vercel AI SDK provides a powerful toolkit for integrating artificial intelligence services 
            into your applications. It offers seamless API integrations, real-time model inference, and 
            customizable configurations for optimal performance.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`npm install @vercel/ai-sdk`} />
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage</h2>
          <Codeblock
            code={`import { AI } from "@vercel/ai-sdk";\nconst ai = new AI();\nai.runModel("text-generation", { prompt: "Hello AI" })`}
          />
        </section>

        <section id="configuration" className="section">
          <h2 className="subsection-title">Configuration</h2>
          <p className="description">
            The SDK allows configuring models, endpoints, and caching mechanisms for enhanced performance.
          </p>
          <Codeblock
            code={`const ai = new AI({ model: "gpt-4", apiKey: "YOUR_API_KEY" });`}
          />
        </section>

        <section id="examples" className="section">
          <h2 className="subsection-title">Examples</h2>
          <Codeblock
            code={`const response = await ai.runModel("text-to-image", { prompt: "A futuristic cityscape" });`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default VercelAISDK;
