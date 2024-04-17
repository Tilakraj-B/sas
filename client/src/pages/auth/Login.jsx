import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./auth.module.css";
import login from "./login.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password || !role) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        const userData = { email, role };

        document.cookie = `userData=${JSON.stringify(
          userData
        )}; HttpOnly; Path=/; Secure`;

        history.push("/dashboard");
      } else {
        setErrorMessage("Invalid login credentials or role.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="authpage">
      <div className="authcont">
        <img src={login} alt="login" />

        <form onSubmit={handleSubmit} className="authform">
          <h1>Login</h1>
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
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">-- Select Role --</option>
              <option value="manager">Manager</option>
              <option value="clerk">Clerk</option>
            </select>
          </div>
          <button className="btn">Login</button>
          <br />
          <button className="btn">
            <Link to="/signup">Signup</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
