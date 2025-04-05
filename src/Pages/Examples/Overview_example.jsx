import React from "react";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";
const Overview_example = () => (
  <div className="page-container">
    <div className="content-area">
      <section id="overview" className="section">
        <h1 className="section-title">Overview</h1>
        <p className="description">
          This section provides an overview of various AI-powered integrations and applications.
          Below, you’ll find a collection of AI-driven tools and their detailed implementation examples.
        </p>
      </section>
      
      <section id="recallr-ai-demo" className="section">
        <h2 className="subsection-title">Recallr AI Demo</h2>
        <p className="description">
          Recallr AI is a state-of-the-art memory retrieval AI model.
        </p>
        <Codeblock code={`const response = await fetch('/api/recallr-demo');`} />
      </section>

      <section id="ai-companion" className="section">
        <h2 className="subsection-title">AI Companion in Node.js</h2>
        <p className="description">
          This example demonstrates an AI-powered virtual assistant built in Node.js.
        </p>
        <Codeblock code={`const assistant = new AICompanion(); assistant.start();`} />
      </section>

      <section id="recallr-ollama" className="section">
        <h2 className="subsection-title">Recallr AI with Ollama</h2>
        <p className="description">
          An advanced AI-powered chatbot that integrates Recallr AI with Ollama for deep learning interactions.
        </p>
        <Codeblock code={`const chat = new RecallrOllama(); chat.init();`} />
      </section>

      <section id="personalized-tutor" className="section">
        <h2 className="subsection-title">Personalized AI Tutor</h2>
        <p className="description">
          A smart AI-driven tutor that adapts to students’ learning styles.
        </p>
        <Codeblock code={`const tutor = new AITutor(); tutor.teach('Math');`} />
      </section>

      <section id="customer-support" className="section">
        <h2 className="subsection-title">Customer Support AI Agent</h2>
        <p className="description">
          An automated AI support system that handles customer queries in real-time.
        </p>
        <Codeblock code={`const supportBot = new CustomerAI(); supportBot.start();`} />
      </section>

      <section id="travel-assistant" className="section">
        <h2 className="subsection-title">Personal AI Travel Assistant</h2>
        <p className="description">
          AI assistant that helps with itinerary planning and bookings.
        </p>
        <Codeblock code={`const travelAI = new TravelBot(); travelAI.planTrip();`} />
      </section>

      <section id="llamaindex-react" className="section">
        <h2 className="subsection-title">LlamaIndex ReAct Agent</h2>
        <p className="description">
          A ReAct-powered AI agent that performs advanced data indexing.
        </p>
        <Codeblock code={`const llamaAgent = new LlamaIndex(); llamaAgent.indexData();`} />
      </section>

      <section id="chrome-extension" className="section">
        <h2 className="subsection-title">Chrome Extension</h2>
        <p className="description">
          An AI-powered Chrome extension for enhancing browsing experiences.
        </p>
        <Codeblock code={`chrome.runtime.onInstalled.addListener(() => { console.log('Extension installed'); });`} />
      </section>

      <section id="document-editing" className="section">
        <h2 className="subsection-title">Document Editing with RecallrAi</h2>
        <p className="description">
          AI-assisted document editing tool with smart suggestions.
        </p>
        <Codeblock code={`const docAI = new DocumentAI(); docAI.editDocument();`} />
      </section>

      <section id="multimodal-demo" className="section">
        <h2 className="subsection-title">Multimodal Demo with RecallrAi</h2>
        <p className="description">
          Demonstration of AI’s ability to handle text, images, and videos simultaneously.
        </p>
        <Codeblock code={`const multimodalAI = new MultiAI(); multimodalAI.processContent();`} />
      </section>
    </div>
    <Rightside menuItems={menuItems} />
  </div>
);

export default Overview_example;