import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import { Clipboard, Check } from "lucide-react";
import "./codeblock.css";

const defaultCodeExamples = {
  JavaScript: `// Example JavaScript code
const greeting = "Hello World";
console.log(greeting);
  
function add(a, b) {
  return a + b;
}`,

  Python: `# Example Python code
greeting = "Hello World"
print(greeting)

def add(a, b):
    return a + b`,

  Java: `// Example Java code
public class Main {
    public static void main(String[] args) {
        String greeting = "Hello World";
        System.out.println(greeting);
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`,

  bash: `# Example bash script
echo "Hello World"
NAME="User"
echo "Welcome $NAME!"`,
};

// Create a global state to track the active tab
const globalState = {
  activeTab: "JavaScript",
  listeners: new Set(),
};

// Function to update all code blocks
const updateGlobalTab = (newTab) => {
  globalState.activeTab = newTab;
  globalState.listeners.forEach(listener => listener(newTab));
};

const Codeblock = ({ code, defaultLanguage = "JavaScript" }) => {
  const [localActiveTab, setLocalActiveTab] = useState(defaultLanguage);
  const [copied, setCopied] = useState(false);

  // Get the appropriate code to display
  const displayCode = code || defaultCodeExamples[localActiveTab];

  useEffect(() => {
    // Add listener for this instance
    const listener = (newTab) => {
      setLocalActiveTab(newTab);
    };
    globalState.listeners.add(listener);

    // Cleanup listener on unmount
    return () => {
      globalState.listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [localActiveTab]);

  const handleTabClick = (tab) => {
    updateGlobalTab(tab);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-container">
      <div className="tab-bar">
        <div className="tab-buttons">
          {['JavaScript', 'Python', 'Java', 'bash'].map((lang) => (
            <button
              key={lang}
              className={`tab-button ${localActiveTab === lang ? "active" : ""}`}
              onClick={() => handleTabClick(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <button className="copy-button" onClick={handleCopy}>
          {copied ? <Check size={18} strokeWidth={3} /> : <Clipboard size={18} strokeWidth={1.5} />}
        </button>
      </div>
      <div className="code-block">
        <pre>
          <code className={`language-${localActiveTab.toLowerCase()}`}>
            {displayCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Codeblock;
