// import React, { useState } from "react";
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import vertical_logo from "../images/vertical_logo.png";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const matchedUser = storedUsers.find(
//       (user) => user.email === email && user.password === pass
//     );
//     if (matchedUser) {
//       setLoggedIn(true);
//       console.log("login successful");
//       navigate("/dashboard");
//     } else {
//       window.alert("Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="auth-form-container">
//         <img
//           className="persistent_vertical"
//           src={vertical_logo}
//           alt="Icon 3"
//           style={{ width: "10ch", margin: "auto", marginBottom: "15px" }}
//         />

//         <h1 className="h2">Login</h1>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="youremail@gmail.com"
//             id="email"
//             name="email"
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             placeholder="********"
//             id="password"
//             name="password"
//           />
//           <button className="login-btn" type="submit">
//             Log In
//           </button>
//         </form>
//         <button className="link-btn" onClick={() => navigate("/register")}>
//           Don't have an account? Register here.
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import vertical_logo from "../images/persistent_logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(
      (user) => user.email === email && user.password === pass
    );
    if (matchedUser) {
      setLoggedIn(true);
      console.log("login successful");
      navigate("/dashboard");
    } else {
      window.alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <img
          className="persistent_vertical"
          src={vertical_logo}
          alt="Icon 3"
          style={{ width: "16ch", margin: "auto", marginBottom: "25px" }}
        />

        <h1 className="h1">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email</label> */}
          <div className="input-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email ID"
              id="email"
              name="email"
            />
          </div>
          {/* <label htmlFor="password">Password</label> */}
          <div className="input-box">
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
        <button className="link-btn" onClick={() => navigate("/register")}>
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};
