import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/alogin.css";
import axios from "axios";

const Asignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handlemail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields locally first
    const errors = validate({ name, email, password });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://127.0.0.1:8080/Signup", { name, email, password });
        if (response.data === "User Added") {
          navigate("/alogin");
        } else if (response.data === "Existing Username") {
          // Handle existing username error, show an error message or something
        } else {
          // Handle signup failure, show an error message or something
        }
      } catch (error) {
        console.error("Error occurred during signup:", error);
        // Handle error, show an error message or something
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const reg = new RegExp("[0-9]");
    const preg = new RegExp("[A-Z][A-Za-z0-9$_]+");

    if (!values.name) errors.name = "Name is required";
    else if (reg.test(values.name)) errors.name = "Name must contain only alphabets";

    if (!values.email) errors.email = "Email is required";

    if (!values.password) errors.password = "Password is required";
    else if (!preg.test(values.password)) errors.password = "Invalid password";

    return errors;
  };

  return (
    <>
      <div className="login-wrapper">
        <form onSubmit={handleSubmit} className="login-container">
          <h1>Sign Up</h1>
          <input
            type="text"
            className="input-field"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={handleName}
          />
          {formErrors.name && <p>{formErrors.name}</p>}
          <input
            type="email"
            className="input-field"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={handlemail}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
          <input
            type="password"
            className="input-field"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePwd}
          />
          {formErrors.password && <p>{formErrors.password}</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="new-user">
        <center>
          Already an admin?<a href="/Alogin">Click me</a>
        </center>
      </div>
    </>
  );
};

export default Asignup;