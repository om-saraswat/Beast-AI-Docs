import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Key Features", path: "#features" },
  { name: "Integrating with Dify", path: "#integration" },
  { name: "Sample Code", path: "#sample-code" }
];

function Dify() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Dify Integration</h1>
          <p className="description">
            Dify is a platform designed to build and manage AI-native applications. 
            It supports prompt engineering, workflow configuration, and deployment pipelines. 
            Dify enables both technical and non-technical teams to collaborate effectively on AI development.
          </p>
        </section>

        <section id="features" className="section">
          <h2 className="subsection-title">Key Features</h2>
          <ul className="description">
            <li>Visual prompt editor and testing</li>
            <li>Prompt version control and deployment</li>
            <li>Integrated API endpoints for applications</li>
            <li>User interaction history and analytics</li>
          </ul>
        </section>

        <section id="integration" className="section">
          <h2 className="subsection-title">Integrating with Dify</h2>
          <p className="description">
            You can integrate your language models with Dify by using their OpenAPI schema. 
            This allows you to hook in third-party services or self-hosted APIs that the Dify interface can call.
          </p>
        </section>

        <section id="sample-code" className="section">
          <h2 className="subsection-title">Sample Code</h2>
          <Codeblock
            code={`curl -X POST https://api.dify.ai/v1/chat-messages \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{ "query": "Tell me a joke about AI", "user": "example_user_id" }'`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default Dify;
