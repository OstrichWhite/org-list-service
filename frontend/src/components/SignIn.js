import React, { useState } from "react";
import Input from "./Input";
import { inputBoxStyle } from "./constants";
import Button from "./Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  return (
    <div className="sign-in">
      <h2 style={{ textTransform: "uppercase" }}>Sign in</h2>
      <Input
        placeholder="Email"
        style={inputBoxStyle}
        onChange={({ target: { value } }) => {
          setEmail(value);
          setErr(false);
        }}
      />
      <Input
        placeholder="Password"
        style={inputBoxStyle}
        onChange={({ target: { value } }) => {
          setPassword(value);
          setErr(false);
        }}
      />
      <Button
        {...{
          text: "Log in",
          onClick: () => {
            if (email === "") {
              setErr(true);
            }
            if (password === "") {
              setErr(true);
            }
            const data = { email, password };
            fetch("http://localhost:1234/api/v1/auth/login", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((res) => (window.location.href = "/"));
          },
        }}
      />
      {err && <div style={{ color: "red" }}> Fill all the above details</div>}
      <div>
        <a href="/signup" style={{ textDecoration: "none" }}>
          Create a new account
        </a>
      </div>
    </div>
  );
};

export default SignIn;
