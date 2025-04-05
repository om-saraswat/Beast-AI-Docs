import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Query Parameters", path: "#query-parameters" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" }
];

function GetMemoriesV1() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Get Memories (v1)</h1>
          <p className="description">
            Retrieves a basic list of all memories accessible to the user.
          </p>
        </section>

        <section id="query-parameters" className="section">
          <h2 className="subsection-title">Query Parameters</h2>
          <ul className="description">
            <li><strong>userId</strong>: Optional user identifier.</li>
            <li><strong>limit</strong>: Maximum number of results to fetch.</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="GET" endpoint="/api/memories/v1" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <Codeblock />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default GetMemoriesV1;