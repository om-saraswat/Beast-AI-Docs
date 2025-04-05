import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Use Cases", path: "#use-cases" },
  { name: "Permissions", path: "#permissions" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" }
];

function DeleteMemory() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Delete Memory</h1>
          <p className="description">
            This API endpoint allows for the deletion of a specific memory by its ID. Use this
            when a memory is no longer needed or was created in error.
          </p>
        </section>

        <section id="use-cases" className="section">
          <h2 className="subsection-title">Use Cases</h2>
          <p className="description">
            Common scenarios for deleting a memory include:
          </p>
          <ul className="description">
            <li>Data cleanup in development environments</li>
            <li>Handling user requests to remove specific memories</li>
            <li>Complying with data retention or privacy regulations</li>
          </ul>
        </section>

        <section id="permissions" className="section">
          <h2 className="subsection-title">Permissions</h2>
          <p className="description">
            Only users with admin or owner roles can delete a memory. Ensure that proper
            authentication is used before accessing this endpoint.
          </p>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="DELETE" endpoint="/api/memory/:id" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">
            Here’s how to delete a memory using the API:
          </p>
          <Codeblock />
        </section>

        <section id="example-response" className="section">
          <h2 className="subsection-title">Example Response</h2>
          <p className="description">
            A successful delete operation returns a confirmation object:
          </p>
          <Codeblock />
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default DeleteMemory;
