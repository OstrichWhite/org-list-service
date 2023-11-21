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
          setErr(false)
        }}
      />
      <Input
        placeholder="Password"
        style={inputBoxStyle}
        onChange={({ target: { value } }) => {
          setPassword(value);
          setErr(false)

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
            console.log(email, password, );
            setEmail("");
            setPassword("");
          },
        }}
      />
      {err && <div style={{ color: "red" }}> Fill all the above details</div>}
      <div>
        <a href="#" style={{ textDecoration: "none" }}>
          Create a new account
        </a>
      </div>
    </div>
  );
};

export default SignIn;
