import { useState } from "react";
import { Clipboard, Check, Play } from "lucide-react";
import "./method.css";

export default function MethodBlock({ method, endpoint }) {
  const [isCopied, setIsCopied] = useState(false);
  const commandText = `${method.toUpperCase()} ${endpoint}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commandText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2s
    });
  };

  const handleExecute = () => {
    console.log(`Executing API call: ${commandText}`);
  };

  // Define colors based on HTTP method
  const methodColors = {
    POST: { bg: "#113225", text: "#4ade80" }, // Dark green bg, Light green text
    GET: { bg: "#172554", text: "#60a5fa" }, // Dark blue bg, Light blue text
    PUT: { bg: "#4a2803", text: "#f59e0b" }, // Dark brown bg, Orange text
    DELETE: { bg: "#450a0a", text: "#f43f5e" }, // Dark red bg, Light red text
  };

  const { bg, text } = methodColors[method.toUpperCase()] || { bg: "#374151", text: "#d1d5db" }; // Default gray

  return (
    <div className="method-container">
      <div className="method-box" onClick={copyToClipboard}>
        <span 
          className="http-method" 
          style={{ backgroundColor: bg, color: text }}
        >
          {method.toUpperCase()}
        </span>
        <span className="endpoint">{endpoint}</span>
        <span className="copy-icon">
          {isCopied ? <Check size={16} color="#4ade80" /> : <Clipboard size={16} />}
        </span>
      </div>
      <button className="execute-button" onClick={handleExecute}>
        Try it <Play size={18} />
      </button>
    </div>
  );
}
