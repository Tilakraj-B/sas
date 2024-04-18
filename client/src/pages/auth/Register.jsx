import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../state/api/auth";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../state/slices/auth";
const AuthBackground = require("../../assets/auth-background.jpg");

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secret, setSecret] = useState("");
  const [register, { data: { user, token } = {}, error, isLoading }] =
    useRegisterMutation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password, secret });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSecretChange = (e) => {
    setSecret(e.target.value);
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
        <h1>Sign Up - Manager</h1>
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
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="password"
          placeholder="Secret"
          autoComplete="off"
          value={secret}
          onChange={handleSecretChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
        {error && <div>{error.data.message}</div>}
        <Link to="/auth/login" className={styles.link}>
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
};

export default Register;
