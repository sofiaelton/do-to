import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then((data) => {
        alert("Check your email");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="email" /> <br />
        <br />
        <button>Reset</button>
      </form>
      <p>
        Go back to <Link to="/login">Login here!</Link>{" "}
      </p>
    </div>
  );
};

export default ForgotPassword;
