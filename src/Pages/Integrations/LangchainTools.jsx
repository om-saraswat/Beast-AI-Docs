import React from "react";
import "../pages.css";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Tool Usage", path: "#tool-usage" },
  { name: "Creating Custom Tools", path: "#custom-tools" },
  { name: "Example with Code", path: "#example-code" }
];

function LangchainTools() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Langchain Tools</h1>
          <p className="description">
            LangChain Tools allow agents to interact with your defined logic by wrapping them into tools. 
            These tools expose functions to the agent and can be used for calculations, querying APIs, 
            searching databases, and more.
          </p>
        </section>

        <section id="tool-usage" className="section">
          <h2 className="subsection-title">Tool Usage</h2>
          <p className="description">
            Tools in LangChain are designed to be lightweight and simple to create. 
            You define a function, wrap it with a Tool object, and assign it to an agent.
          </p>
        </section>

        <section id="custom-tools" className="section">
          <h2 className="subsection-title">Creating Custom Tools</h2>
          <Codeblock
            code={`from langchain.agents import tool\n\n@tool\ndef get_current_weather(city: str) -> str:\n    return f"The weather in {city} is sunny."`}
          />
        </section>

        <section id="example-code" className="section">
          <h2 className="subsection-title">Example with Code</h2>
          <Codeblock
            code={`from langchain.agents import initialize_agent, AgentType\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.agents import Tool\n\nllm = ChatOpenAI(temperature=0)\ntools = [Tool(name="GetWeather", func=get_current_weather, description="Get weather info")]\nagent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION)\nresponse = agent.run("What's the weather in Paris?")`}
          />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default LangchainTools;
