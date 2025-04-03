import React from "react";
import '../pages.css'
import Rightside from "../../Components/Right side bar/Rightside";
import Codeblock from "../../Components/codeblock/Codeblock";
import Infobar from "../../Components/Infobar/Infobar";
import Method_Block from "../../Components/api-method-block/Method_Block";

function Overview() {
  // Define the example code to use in the CodeBlock
  const codeSnippets = {
    python: `import requests
  
  response = requests.delete("https://api.example.com/resource",
      headers={"Authorization": "Token <api-key>"})
  print(response.text)`,
    
    javascript: `fetch("https://api.example.com/resource", {
    method: "DELETE",
    headers: { "Authorization": "Token <api-key>" }
  }).then(response => response.json()).then(data => console.log(data));`,
  
    java: `HttpResponse<String> response = Unirest.delete("https://api.example.com/resource")
    .header("Authorization", "Token <api-key>")
    .asString();`
  };

  return (
    <div className="page-wrapper">
      <div className="page-content content">
      <Infobar/>
      <br/>
      
      <Method_Block method="POST" endpoint="/v1/memories" />
      <br />
      
        <h1 id="introduction">Introduction</h1>
        <p>Welcome to Recallr AI documentation. This guide will walk you through the features, capabilities, and implementation of our platform.</p>
        
        <h2 id="key-features">Key Features</h2>
        <p>Recallr AI offers a comprehensive set of features to enhance your productivity:</p>
        
        <h3 id="memory-management">Memory Management</h3>
        <p>Our advanced memory management system allows for efficient storage and retrieval of information.</p>
         <Codeblock snippets={codeSnippets} />
      
        <h3 id="context-awareness">Context Awareness</h3>
        <p>Recallr AI maintains context throughout conversations, providing more relevant responses.</p>
        
        <h2 id="use-cases">Use Cases</h2>
        <p>Discover how Recallr AI can be implemented across various scenarios:</p>
        
        <h3 id="customer-service">Customer Service</h3>
        <p>Improve response times and accuracy in customer support interactions.</p>
        
        <br />
      <Method_Block method="GET" endpoint="/v1/users" />
      <br /><h3 id="content-creation">Content Creation</h3>
        <p>Streamline your content workflow with AI-assisted writing and editing.</p>
        
        <h2 id="steps">Getting Started</h2>
        <p>Follow these steps to begin using Recallr AI in your projects:</p>
        
        <h3 id="installation">Installation</h3>
        <p>Install the Recallr AI package using your preferred package manager:</p>
       
        
        <h3 id="configuration">Configuration</h3>
        <p>Set up your environment with the appropriate API keys and configurations.</p>
        
        <h2 id="help">Need Help?</h2>
        <p>If you encounter any issues or have questions, our support team is ready to assist you.</p>
        
        <h3 id="faq">Frequently Asked Questions</h3>
        <p>Browse our collection of frequently asked questions for quick solutions.</p>
        <Method_Block method="DELETE" endpoint="/v1/memories/123" />
      <br />
      
        <h3 id="support-channels">Support Channels</h3>
        <p>Reach out through our dedicated support channels for personalized assistance.</p>
      </div>

      
      
      <Rightside menuItems={[
        { name: "Introduction", path: "#introduction" },
        { name: "Key Features", path: "#key-features", subItems: [
          { name: "Memory Management", path: "#memory-management" },
          { name: "Context Awareness", path: "#context-awareness" }
        ]},
        { name: "Use Cases", path: "#use-cases", subItems: [
          { name: "Customer Service", path: "#customer-service" },
          { name: "Content Creation", path: "#content-creation" }
        ]},
        { name: "Getting Started", path: "#steps", subItems: [
          { name: "Installation", path: "#installation" },
          { name: "Configuration", path: "#configuration" }
        ]},
        { name: "Need Help?", path: "#help", subItems: [
          { name: "FAQ", path: "#faq" },
          { name: "Support Channels", path: "#support-channels" }
        ]},
      ]} />
    </div>
  );
}

export default Overview;