import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Batch Deletion Logic", path: "#batch-deletion-logic" },
  { name: "Security & Authorization", path: "#security-authorization" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function BatchDeleteMemories() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Batch Delete Memories</h1>
          <p className="description">
            This endpoint allows clients to delete multiple memory entries in a single API call.
            It is especially useful for cleaning up test data, performing bulk operations, or supporting data archival processes.
          </p>
        </section>

        <section id="batch-deletion-logic" className="section">
          <h2 className="subsection-title">Batch Deletion Logic</h2>
          <p className="description">
            The endpoint expects an array of memory IDs. If any of the IDs are invalid or inaccessible, they will be ignored
            and the response will indicate which deletions were successful or failed.
          </p>
          <ul className="description">
            <li>Maximum 100 IDs per request</li>
            <li>Returns status per ID in the response</li>
            <li>Supports dry-run mode for testing</li>
          </ul>
        </section>

        <section id="security-authorization" className="section">
          <h2 className="subsection-title">Security & Authorization</h2>
          <p className="description">
            Only users with Admin or higher privileges can perform batch deletions. Ensure that your API token
            includes the correct scopes and access rights.
          </p>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="DELETE" endpoint="/api/memories/batch-delete" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">
            This code demonstrates how to send a batch delete request using your favorite language:
          </p>
          <Codeblock />
        </section>

        <section id="example-response" className="section">
          <h2 className="subsection-title">Example Response</h2>
          <p className="description">
            Below is a sample response showing which memory IDs were successfully deleted:
          </p>
          <Codeblock />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default BatchDeleteMemories;