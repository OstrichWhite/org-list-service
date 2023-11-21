import React from "react";

const Button = ({ text, onClick = () => {} }) => {
  return (
    <div>
      <button
        className={`${text}-btn`}
        style={{
          backgroundColor: "#5851DB",
          width: "330px",
          height: "40px",
          borderRadius: "6px",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
