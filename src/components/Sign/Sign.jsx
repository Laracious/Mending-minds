// import React from 'react'
import { useState} from "react";
import "./sign.css";
import { useNavigate } from "react-router";
import axios from 'axios';
// const [password, setPassword] = useState('');

const Sign = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
 
 


  // console.log(formData);
  // console.log(formData);

  let navigation = useNavigate();

  function handleSignUp (){
    const opts = {
      
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password,
        cpassword:cpassword,
        lname:lname,
        fname:fname,

      })}
    fetch('http://127.0.0.1:5000/Sign', opts
    )
    .then(function (response) {
      console.log(response);
      navigation("/Login");
    })
    .catch(function (error) {
      console.log(error.data);

    });
  };



  return (
    <div className="signUp-container">
      <div className="signUp">
        <h2>Sign Up</h2>
        <form method="POST">
          <input
            type="text"
            name="fname"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            // pattern="\b[a-zA-Z0-9._%@-]{6,}\b"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="alternative">
            Have an account? <a href="./login">Login</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign;
