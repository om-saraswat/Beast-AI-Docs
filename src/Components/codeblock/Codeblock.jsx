import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import { Clipboard, Check } from "lucide-react"; // Import checkmark icon
import "./codeblock.css";

const codeSnippets = {
  bash: `npm install recallrai`,

  JavaScript: `fetch("https://api.example.com/data", {
    headers: { "Authorization": "Token <api-key>" }
  }).then(response => response.text()).then(console.log);`,

  cURL: `curl -H "Authorization: Token <api-key>" https://api.example.com/data`,

  Java: `HttpResponse<String> response = Unirest.get("https://api.example.com/data")
    .header("Authorization", "Token <api-key>")
    .asString();`,
};

const Codeblock = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  return (
    <div className="code-container">
      {/* Tabs */}
      <div className="tab-bar">
        <div className="tab-buttons">
          {Object.keys(codeSnippets).map((lang) => (
            <button
              key={lang}
              className={`tab-button ${activeTab === lang ? "active" : ""}`}
              onClick={() => setActiveTab(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        {/* Clipboard Button */}
        <button className="copy-button" onClick={handleCopy}>
          {copied ? <Check size={18} strokeWidth={3} /> : <Clipboard size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Code Block */}
      <div className="code-block">
        <pre>
          <code className={`language-${activeTab.toLowerCase()}`}>
            {codeSnippets[activeTab]}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Codeblock;
