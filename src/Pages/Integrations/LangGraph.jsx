import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Graph-Based Reasoning", path: "#graph-reasoning" },
  { name: "Installation", path: "#installation" },
  { name: "Example", path: "#example" },
];

function LangGraph() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">LangGraph</h1>
          <p className="description">
            LangGraph is a library for building stateful, multi-step applications powered by LLMs. 
            It provides a visual or programmable interface to define how different nodes 
            (which can be prompts, tools, or logic) interact with each other in a graph.
          </p>
        </section>

        <section id="graph-reasoning" className="section">
          <h2 className="subsection-title">Graph-Based Reasoning</h2>
          <p className="description">
            Unlike traditional pipelines, LangGraph enables flexible decision-making. 
            Each node in the graph can decide where to go next based on intermediate results.
          </p>
        </section>

        <section id="installation" className="section">
          <h2 className="subsection-title">Installation</h2>
          <Codeblock code={`pip install langgraph`} />
        </section>

        <section id="example" className="section">
          <h2 className="subsection-title">Example</h2>
          <Codeblock
            code={`from langgraph.graph import Graph\n\ndef node_a(input):\n    return input + " processed by A"\n\ngraph = Graph()\ngraph.add_node("A", node_a)\nresult = graph.run("Start")`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default LangGraph;
