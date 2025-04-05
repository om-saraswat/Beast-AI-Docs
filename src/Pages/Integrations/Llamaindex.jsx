import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "What is LlamaIndex?", path: "#what-is" },
  { name: "Installation", path: "#installation" },
  { name: "Basic Usage", path: "#basic-usage" },
  { name: "Advanced Concepts", path: "#advanced" }
];

function LlamaIndex() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">LlamaIndex</h1>
          <p className="description">
            LlamaIndex (formerly GPT Index) is a data framework that connects your LLMs to external data. 
            It’s designed to help developers build powerful retrieval-based applications by structuring, 
            transforming, and optimizing your data for LLM usage.
          </p>
        </section>

        <section id="what-is" className="section">
          <h2 className="subsection-title">What is LlamaIndex?</h2>
          <p className="description">
            LlamaIndex allows you to ingest, index, and query data using large language models.
            It includes tools for document loaders, index construction, querying, and customization.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`pip install llama-index`} />
        </section>

        <section id="basic-usage" className="section">
          <h2 className="subsection-title">Basic Usage</h2>
          <Codeblock
            code={`from llama_index import SimpleDirectoryReader, GPTSimpleVectorIndex\n\ndocuments = SimpleDirectoryReader('data').load_data()\nindex = GPTSimpleVectorIndex.from_documents(documents)\nresponse = index.query("What is the main topic?")`}
          />
        </section>

        <section id="advanced" className="section">
          <h2 className="subsection-title">Advanced Concepts</h2>
          <p className="description">
            LlamaIndex supports complex retrieval flows, including composable graphs, 
            memory integration, and hybrid search. It integrates well with LangChain and other frameworks.
          </p>
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default LlamaIndex;
