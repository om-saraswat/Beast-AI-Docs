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

function Autogen() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">Autogen</h1>
          <p className="description">
            Autogen is an AI-powered code generation framework that helps developers create, 
            refactor, and optimize code automatically. It leverages deep learning models to understand 
            natural language descriptions and translate them into functional code.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`npm install autogen-ai`} />
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage</h2>
          <Codeblock
            code={`import { Autogen } from "autogen-ai";\nconst generator = new Autogen();\ngenerator.generate("Create a React component for a login form.")`}
          />
        </section>

        <section id="configuration" className="section">
          <h2 className="subsection-title">Configuration</h2>
          <p className="description">
            You can configure Autogen with various settings such as model selection, 
            output length, and API key authentication.
          </p>
          <Codeblock
            code={`const generator = new Autogen({ model: "gpt-4", apiKey: "YOUR_API_KEY" });`}
          />
        </section>

        <section id="examples" className="section">
          <h2 className="subsection-title">Examples</h2>
          <Codeblock
            code={`const codeSnippet = await generator.generate("Write a Python script to sort a list of numbers.");`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default Autogen;
