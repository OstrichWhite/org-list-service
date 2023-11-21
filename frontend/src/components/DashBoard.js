import React, { useEffect, useState } from "react";
const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const Table = () => {
  const [data, setState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1234/api/v1/organizations")
      .then((response) => response.json())
      .then((json) => setState(json.data.data));
  });

  return (
    <div>
      <h2>Organization Details</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{item.name}</td>
              <td style={tableCellStyle}>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DashBoard = () => {
  return <Table></Table>;
};

export default DashBoard;
