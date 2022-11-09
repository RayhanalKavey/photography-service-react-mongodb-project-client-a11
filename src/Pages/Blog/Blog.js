import React from "react";

const Blog = () => {
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
      <p className="ml-5 text-xl mb-3">JWT (JSON WEB TOKEN)</p>
      <ol className="mx-12">
        <li>Security transmits information between two parties.</li>
        <li>JWT is mainly used for authorization.</li>
        <li>
          Token has three parts:
          <li className="ml-5">Header</li>
          <li className="ml-5">Payload</li>
          <li className="ml-5">signature</li>
        </li>
      </ol>
      <h1 className="text-2xl my-8">
        Q. What are the differences between JavaScript and NodeJS?
      </h1>
      <h1 className="text-2xl my-8">
        Q. How does NodeJs handle multiple requests at the same time?
      </h1>
    </div>
  );
};

export default Blog;
