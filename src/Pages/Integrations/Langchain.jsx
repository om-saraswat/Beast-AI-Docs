import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Introduction", path: "#introduction" },
  { name: "Installation", path: "#installation" },
  { name: "Usage", path: "#usage" },
  { name: "Components", path: "#components" },
  { name: "Examples", path: "#examples" },
];

function Langchain() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="introduction" className="section">
          <h1 className="section-title">Langchain</h1>
          <p className="description">
            Langchain is a powerful framework designed to simplify working with 
            language models. It provides a structured approach for chaining 
            multiple AI components together for tasks like chatbots, summarization, 
            and text analysis.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`pip install langchain`} />
        </section>

        <section id="usage" className="section">
          <h2 className="subsection-title">Usage</h2>
          <Codeblock
            code={`from langchain.llms import OpenAI\nllm = OpenAI(api_key="YOUR_API_KEY")\nresponse = llm.generate("What is Langchain?")`}
          />
        </section>

        <section id="components" className="section">
          <h2 className="subsection-title">Components</h2>
          <ul className="description">
            <li><strong>LLMs:</strong> Interfaces for large language models.</li>
            <li><strong>Memory:</strong> Enables chat history tracking.</li>
            <li><strong>Chains:</strong> Combines multiple components to perform tasks.</li>
            <li><strong>Agents:</strong> Dynamically call different LLMs based on queries.</li>
          </ul>
        </section>

        <section id="examples" className="section">
          <h2 className="subsection-title">Examples</h2>
          <Codeblock
            code={`from langchain.chains import ConversationChain\nconversation = ConversationChain(llm=llm)\nresponse = conversation.run("Tell me a joke")`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default Langchain;
