import React, { useState } from "react";
import Input from "./Input";
import { inputBoxStyle } from "./constants";
import Button from "./Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [err, setErr] = useState(false);
  return (
    <div className="sign-up">
      <h2 style={{ textTransform: "uppercase" }}>Sign up</h2>
      <Input
        placeholder="Name"
        style={inputBoxStyle}
        onChange={({ target: { value } }) => {
          setName(value);
          setErr(false);
        }}
      />
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
      <Input
        placeholder="Confirm Password"
        style={inputBoxStyle}
        onChange={({ target: { value } }) => {
          setConfirmPass(value);
          setErr(false);
        }}
      />
      {err && <div style={{ color: "red" }}> Fill all the above details</div>}
      <Button {...{ text: "Sign up", onClick: () => {} }} />
    </div>
  );
};

export default SignUp;
