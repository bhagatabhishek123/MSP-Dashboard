import React, { useState } from "react";
// import "../App.css";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import vertical_logo from "../images/persistent_logo.png";
//Register here

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password: pass }; //Constructs a user object
    const users = JSON.parse(localStorage.getItem("users")) || []; //Retrieves an array of user objects
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); //Saves the updated users array to the browser's localStorage
    console.log(users);
    window.location.href = "/";
  };

  return (
    <div className="App">
      <div className="auth-register-form-container">
        <img
          className="persistent_vertical"
          src={vertical_logo}
          alt="Icon 3"
          style={{ width: "16ch", margin: "auto", marginBottom: "25px" }}
        />
        <h1 className="h1">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-input-box">
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div className="register-input-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              placeholder="Email ID"
              id="email"
              name="email"
            />
          </div>
          <div className="register-input-box">
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          <button className="register-login-btn" type="submit">
            Register
          </button>
        </form>
        <button className="register-link-btn" onClick={() => navigate("/")}>
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};
