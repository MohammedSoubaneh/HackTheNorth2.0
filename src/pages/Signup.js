import React, { useState } from "react";
import { useAuth } from "../authContext";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Passwords do not match");

  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
    }

    try {
      setError(null);
      setLoading(true);
      await signup(email, password);
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="title">Sign Up</h1>
      {error && (
        <div className="container error">
          <p>{error}</p>
        </div>
      )}
      <form className="container signupForm">
        <span className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="password"
            autocomplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <span className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            auttocomplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <span className="formGroup">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            auttocomplete="new-password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </span>
        <button
          onClick={handleSignup}
          disabled={loading}
          className="signupButton"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
