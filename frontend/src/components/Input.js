import React from "react";

const Input = ({ placeholder = "", style, onChange }) => {
  return (
    <div style={{ border: "0.2px solid gray", borderRadius: "6px" }}>
      <input {...{ placeholder, style, required: true, onChange }} />
    </div>
  );
};

export default Input;
