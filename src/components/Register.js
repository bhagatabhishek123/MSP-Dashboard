import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

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
      <div className="auth-form-container">
        <h1 className="rh2">Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="Email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="login-btn2" type="submit">
            Register
          </button>
        </form>
        <button className="link-btn2" onClick={() => navigate("/")}>
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};
