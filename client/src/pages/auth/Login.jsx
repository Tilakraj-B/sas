import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../state/api/auth";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../state/slices/auth";
const AuthBackground = require("../../assets/auth-background.jpg");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data: { user, token } = {}, error, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (user) {
      dispatch(setCredentials({ user, token }));
    }
  }, [user, token, dispatch]);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${AuthBackground})` }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        {error && <div>{error.data?.message || error.error?.message}</div>}
        <Link to="/auth/register" className={styles.link}>
          Don't have an account? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
