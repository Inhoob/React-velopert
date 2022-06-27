import "./ValidationSample.css";
import { useState } from "react";
import React from "react";
function ValidationSample() {
  const [form, setForm] = useState({
    password: "",
    clicked: false,
    validated: false,
  });

  const { password, clicked, validated } = form;
  const handleChange = (e) => {
    const nextForm = {
      ...form,
      password: e.target.value,
    };
    setForm(nextForm);
  };
  const handleButtonClick = () => {
    const nextForm = {
      ...form,
      clicked: true,
      validated: password === "0000",
    };
    ref.current.focus();
    setForm(nextForm);
  };
  const ref = React.createRef();
  return (
    <div>
      <input
        ref={ref}
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      ></input>
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
}
export default ValidationSample;
