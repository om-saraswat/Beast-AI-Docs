import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Delete Use Cases", path: "#delete-use-cases" },
  { name: "Request Format", path: "#request-format" },
  { name: "Validation Rules", path: "#validation-rules" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Error Handling", path: "#error-handling" }
];

function DeleteMemories() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Delete Memories</h1>
          <p className="description">
            This endpoint is used to delete one or more memory records. It can be applied to remove outdated content,
            correct data inconsistencies, or clean up redundant information.
          </p>
        </section>

        <section id="delete-use-cases" className="section">
          <h2 className="subsection-title">Delete Use Cases</h2>
          <p className="description">
            Common scenarios for using the delete endpoint:
          </p>
          <ul className="description">
            <li>User requests data removal</li>
            <li>Archival of irrelevant entries</li>
            <li>Bulk deletion from admin dashboard</li>
            <li>Scheduled cleanup tasks</li>
          </ul>
        </section>

        <section id="request-format" className="section">
          <h2 className="subsection-title">Request Format</h2>
          <p className="description">
            The request body should contain an array of memory IDs to delete. Ensure all IDs are valid UUID strings.
          </p>
        </section>

        <section id="validation-rules" className="section">
          <h2 className="subsection-title">Validation Rules</h2>
          <p className="description">
            Before deletion, the system checks:
          </p>
          <ul className="description">
            <li>That the requesting user has permission for each memory</li>
            <li>That the memory still exists and hasn't already been deleted</li>
            <li>That there are no locking processes preventing deletion</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <MethodBlock method="DELETE" endpoint="/api/memories/delete" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">
            Here’s an example showing how to send a delete request:
          </p>
          <Codeblock />
        </section>

        <section id="error-handling" className="section">
          <h2 className="subsection-title">Error Handling</h2>
          <p className="description">
            If any memory fails to delete, the response will include an error message and status code for each failed ID.
            Common errors include:
          </p>
          <ul className="description">
            <li>403 Forbidden – User lacks permission</li>
            <li>404 Not Found – Memory does not exist</li>
            <li>409 Conflict – Memory is locked or in use</li>
          </ul>
        </section>
      </div>
      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default DeleteMemories;