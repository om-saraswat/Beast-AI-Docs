import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Query Parameters", path: "#query-parameters" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function SearchMemoriesV1() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Search Memories (v1)</h1>
          <p className="description">
            This endpoint allows users to perform basic memory searches by keyword.
          </p>
        </section>

        <section id="query-parameters" className="section">
          <h2 className="subsection-title">Query Parameters</h2>
          <ul className="description">
            <li><strong>query</strong>: Search keyword or phrase.</li>
            <li><strong>limit</strong>: Max number of results to return.</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="POST" endpoint="/api/memories/search/v1" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <Codeblock>
{`
POST /api/memories/search/v1 HTTP/1.1
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "query": "vacation",
  "limit": 10
}
`}
          </Codeblock>
        </section>

        <section id="example-response" className="section">
          <h2 className="subsection-title">Example Response</h2>
          <Codeblock>
{`
{
  "status": "success",
  "results": [
    {
      "id": "mem001",
      "title": "Beach Vacation",
      "description": "Trip to Hawaii in summer."
    }
  ]
}
`}
          </Codeblock>
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default SearchMemoriesV1;

// Note: Follow this format to build the remaining pages:
// - GetMemoriesV2.jsx
// - GetMemoriesV1.jsx
// - MemoryHistory.jsx
// - GetMemory.jsx
// - UpdateMemory.jsx
// - BatchUpdateMemory.jsx
// - DeleteMemory.jsx
// - BatchDeleteMemories.jsx
// - DeleteMemories.jsx
// - CreateMemoryExport.jsx
// - GetMemoryExport.jsx