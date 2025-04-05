import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Introduction", path: "#introduction" },
  { name: "Setup", path: "#setup" },
  { name: "Usage Example", path: "#usage" }
];

function RecallrAiDemo() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">Recallr AI Demo</h1>
          <p className="description">
            Recallr AI is a powerful memory-based AI platform designed to enhance your application's intelligence
            by providing persistent memory, contextual awareness, and real-time adaptation. This demo will showcase
            how to integrate Recallr AI into your workflow.
          </p>
        </section>

        <section id="setup" className="section">
          <h2 className="subsection-title">Setup</h2>
          <p className="description">
            To get started, install the Recallr AI SDK:
          </p>
          <Codeblock
            code={`npm install recallr-ai-sdk`}
          />
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage Example</h2>
          <Codeblock
            code={`import RecallrAI from 'recallr-ai-sdk';

const ai = new RecallrAI({ apiKey: "YOUR_API_KEY" });

async function getMemory() {
  const memory = await ai.getMemory("user_123");
  console.log(memory);
}

getMemory();`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default RecallrAiDemo;
