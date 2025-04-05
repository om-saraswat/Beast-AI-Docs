import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Form Fields", path: "#form-fields" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" }
];

function AddMember() {
  return (
    <div className="page-container">
      <div className="content-area">
        <section id="overview" className="section">
          <h1 className="section-title">Add Member</h1>
          <p className="description">
            The Add Member page allows administrators to invite new users to the platform.
            Fill in required fields, assign roles, and <br />submit to grant access.
          </p>
        </section>

        <section id="form-fields" className="section">
          <h2 className="subsection-title">Form Fields</h2>
          <p className="description">When adding a new member, the form requires the following:</p>
          <ul className="description">
            <li><strong>Name</strong>: Full name of the member</li>
            <li><strong>Email</strong>: A valid, unique email address</li>
            <li><strong>Role</strong>: One of Admin, Editor, or Viewer</li>
          </ul>
        </section>

        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <p className="description">
            Below is the API method used for programmatically adding a member.
            Click the box to copy the command or try it out.
          </p>
          <MethodBlock method="POST" endpoint="/api/members/add" />
        </section>

        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">
            This code shows how to send a request using different languages and tools.
          </p>
          <Codeblock />
        </section>
      </div>

      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default AddMember;
