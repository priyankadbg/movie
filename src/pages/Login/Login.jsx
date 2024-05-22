import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../Firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (signState === "Sign In") {
        await login(email, password);
        console.log("Login successful");
      } else {
        await signUp(name, email, password);
        console.log("Sign up successful");
      }
    } catch (err) {
      console.error("Authentication error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="Login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          {error && <p className="error-message">{error}</p>}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
