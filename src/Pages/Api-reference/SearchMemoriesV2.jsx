import React from "react";
import "../pages.css";
import MethodBlock from "../../Components/api-method-block/Method_Block";
import Codeblock from "../../Components/codeblock/Codeblock";
import Rightside from "../../Components/Right side bar/Rightside";

const menuItems = [
  { name: "Overview", path: "#overview" },
  { name: "Query Parameters", path: "#query-parameters" },
  { name: "Request Headers", path: "#request-headers" },
  { name: "API Endpoint", path: "#api-endpoint" },
  { name: "Example Request", path: "#example-request" },
  { name: "Example Response", path: "#example-response" },
  { name: "Use Case", path: "#use-case" }
];

function SearchMemoriesV2() {
  return (
    <div className="page-container">
      <div className="content-area">
        {/* Overview */}
        <section id="overview" className="section">
          <h1 className="section-title">Search Memories (v2)</h1>
          <p className="description">
            The Search Memories (v2) API enables users to perform advanced searches on stored memories.
            It supports filtering, pagination, and full-text search to efficiently retrieve relevant data.
          </p>
        </section>

        {/* Query Parameters */}
        <section id="query-parameters" className="section">
          <h2 className="subsection-title">Query Parameters</h2>
          <p className="description">The following query parameters can be used for refining the search results:</p>
          <ul className="description">
            <li><strong>query</strong>: The keyword or phrase to search for within stored memories.</li>
            <li><strong>limit</strong>: The number of results to return per request (default: 10, max: 100).</li>
            <li><strong>offset</strong>: The pagination offset for fetching the next set of results.</li>
            <li><strong>sort</strong>: Sorting criteria (e.g., "date_created", "relevance").</li>
            <li><strong>order</strong>: Sorting order ("asc" for ascending, "desc" for descending).</li>
            <li><strong>tag</strong>: Filter by specific tags associated with memories.</li>
          </ul>
        </section>

        {/* Request Headers */}
        <section id="request-headers" className="section">
          <h2 className="subsection-title">Request Headers</h2>
          <p className="description">Required headers for making a request:</p>
          <ul className="description">
            <li><strong>Authorization</strong>: Bearer token for authentication.</li>
            <li><strong>Content-Type</strong>: application/json</li>
          </ul>
        </section>

        {/* API Endpoint */}
        <section id="api-endpoint" className="section">
          <h2 className="subsection-title">API Endpoint</h2>
          <p className="description">
            The following API endpoint is used to search stored memories:
          </p>
          <MethodBlock method="POST" endpoint="/api/memories/search/v2" />
        </section>

        {/* Example Request */}
        <section id="example-request" className="section">
          <h2 className="subsection-title">Example Request</h2>
          <p className="description">Below is an example request using JSON format:</p>
          <Codeblock>
            {`
POST /api/memories/search/v2 HTTP/1.1
Host: api.example.com
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "query": "birthday party",
  "limit": 5,
  "offset": 0,
  "sort": "date_created",
  "order": "desc",
  "tag": "family"
}
            `}
          </Codeblock>
        </section>

        {/* Example Response */}
        <section id="example-response" className="section">
          <h2 className="subsection-title">Example Response</h2>
          <p className="description">The API will return a JSON response with the matched memories:</p>
          <Codeblock>
            {`
{
  "status": "success",
  "data": [
    {
      "id": "mem12345",
      "title": "Grandma's 80th Birthday Party",
      "description": "A wonderful family gathering to celebrate Grandma's 80th birthday.",
      "date_created": "2024-04-01T12:00:00Z",
      "tags": ["family", "birthday", "party"]
    },
    {
      "id": "mem67890",
      "title": "Surprise Birthday Party",
      "description": "A surprise birthday party with close friends.",
      "date_created": "2024-03-25T18:30:00Z",
      "tags": ["friends", "birthday", "celebration"]
    }
  ]
}
            `}
          </Codeblock>
        </section>

        {/* Use Case */}
        <section id="use-case" className="section">
          <h2 className="subsection-title">Use Case</h2>
          <p className="description">
            Imagine a user wants to quickly find memories related to family birthday parties.
            They can use this API with filters such as tags ("family") and search queries ("birthday party")
            to efficiently retrieve relevant memories.
          </p>
        </section>
      </div>

      <Rightside menuItems={menuItems} />
    </div>
  );
}

export default SearchMemoriesV2;
