import React from "react";
import useTitle from "../../hooks/useTitle";
import "./Blog.css";
const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mb-32 mt-12 mx-8">
      <h1 className="text-2xl mb-8">
        Q. What are the differences between SQL and NoSQL
      </h1>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  SQL databases are primarily called RDBMS or Relational
                  Database
                </td>
                <td>
                  NoSQL databases are primarily called as Non-relational or
                  distributed database
                </td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>Structure query language(SQL)</td>
                <td>No declarative query language</td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td>SQL databases are table based database</td>
                <td>
                  NoSQL databases can be document based, key-value pairs, graph
                  database
                </td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td>SQL databases have a predefined schema</td>
                <td>
                  NoSQL databases use dynamic schema for unstructured data
                </td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td>Qracle, Postgres, MySQL, and MS-SQL</td>
                <td>MongoDB, Redis, Neo4j, Cassandra, Hbase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-2xl my-8">Q. What is JWT and how it works?</h1>
      <p className="ml-5 text-xl  mb-3">JWT (JSON WEB TOKEN)</p>
      <ul className="mx-5 list-q" style={{ listStyleType: "circle" }}>
        Security transmits information between two parties. JWT is mainly used
        for authorization.
        <br />
        <li>Token has three parts:</li>
        Header, Payload, and signature
        <br />
        <p className="my-3">JWT mechanism:</p>
        <li>Client needs to be authenticated first.</li>{" "}
        <li>
          After authentication, the server creates two tokens for the client
          with the help of an API call.
        </li>{" "}
        <li>
          {" "}
          Client stores the token on either local storage or browser cookie. A
          browser cookie is safer than local storage.
        </li>{" "}
        <li>
          {" "}
          Next time the client requests, a token copy is sent to the server for
          verification. Server verifies the JWT signature before giving the
          authorization and responding to the client's requests.
        </li>
      </ul>
      <h1 className="text-2xl my-8">
        Q. What are the differences between JavaScript and NodeJS?
      </h1>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th>JavaScript</th>
                <th>NodeJS</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>Javascript can only be run in the browsers.</td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.{" "}
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td>
                  Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                </td>
                <td>
                  Some of the Nodejs modules are Lodash, express etc. These
                  modules are to be imported from npm.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-2xl my-8">
        Q. How does NodeJs handle multiple requests at the same time?
      </h1>
      <div>
        Node's main JavaScript thread uses an event loop. When multiple requests
        are made, the first is processed while the rest are blocked (until the
        first is complete). Each request is processed one loop at a time until
        they're all processed. The loop executes very quickly and you kind of
        have to go out of your way to create apps that block. There's an
        important caveat to this: user requests (like web requests) are not the
        same as function requests. Multiple users can submit requests and
        they'll be processed within nanoseconds of each other (not noticeable
        without tooling). This differs from a process calling the same
        function/memory space at the same time.
      </div>
    </div>
  );
};

export default Blog;
