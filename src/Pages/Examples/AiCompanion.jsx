import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Introduction", path: "#introduction" },
  { name: "Features", path: "#features" },
  { name: "Implementation", path: "#implementation" }
];

function AiCompanion() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">AI Companion</h1>
          <p className="description">
            AI Companion is a virtual assistant powered by Recallr AI. It helps users by providing contextual
            responses, handling multiple tasks, and improving interactions through persistent memory.
          </p>
        </section>

        <section id="features" className="section">
          <h2 className="subsection-title">Key Features</h2>
          <ul className="description">
            <li>Natural Language Understanding</li>
            <li>Context-Aware Responses</li>
            <li>Multi-Turn Conversations</li>
          </ul>
        </section>

        <section id="implementation" className="section">
          <h2 className="subsection-title">Implementation</h2>
          <Codeblock
            code={`import AICompanion from 'recallr-ai-sdk';

const companion = new AICompanion({ apiKey: "YOUR_API_KEY" });

async function chatWithUser(message) {
  const response = await companion.sendMessage(message);
  console.log(response);
}

chatWithUser("What's the weather like today?");`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default AiCompanion;
