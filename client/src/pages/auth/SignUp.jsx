import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import shop from "../images/shop.jpg";
import "./auth.module.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !password || !privateKey) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, privateKey }),
      });

      if (!response.ok) {
        throw new Error(`Signup failed with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.token) {
        document.cookie = `token=${data.token}; HttpOnly; Path=/; Secure`;
        history.push("/dashboard");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="authcont">
      <img src={shop} alt="signup" />

      <form onSubmit={handleSubmit} className="authform">
        <h1>Signup</h1>
        <div className="formgroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formgroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formgroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formgroup">
          <label htmlFor="privateKey">Private Key</label>
          <input
            type="text"
            id="privateKey"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
        <button type="submit" className="btn">
          <Link to="/signup">Sign Up</Link>
        </button>
      </form>
    </div>
  );
}

export default Signup;
