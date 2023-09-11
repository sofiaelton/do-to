import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigate("/home");
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="sign-in-container">
      <form onSubmit={logIn}>
        <h2>Welcome!</h2>
        <p>Sign in to your account:</p>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        <p>
          Not a member? <Link to="/signup">Create Account here</Link>{" "}
        </p>
        <p>Forgot your password?  <Link to="/reset" >Click here!</Link> </p>
      </form>
    </div>
  );
};

export default Login;
