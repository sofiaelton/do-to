import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth, db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 



const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setDoc(doc(db, "users", user.uid), {
          userName: userName,
          email: email
        })
        // db.collection('users').doc(user.uid).set({
        //   userName: userName,
        //   email: email,
        // })
        .then(() => {
          console.log('Usuario registrado exitosamente en Firestore.');
           navigate("/home");
        })
        .catch((error) => {
          console.error('Error al guardar usuario en Firestore:', error);
      });
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h2>Create Account:</h2>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        ></input>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        ></input>
        <button type="submit">Create account</button>
        <p>Already a user?  <Link to="/login" >Login here!</Link> </p>
        
      </form>
    </div>
  );
};

export default SignUp;
