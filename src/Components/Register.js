import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../all css/Register.css"

function Register() {
  const [UserName, setUserName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const [MobileNo, setMobileNo] = useState(" "); 
  const navigator = useNavigate();
 
  return ( 
    <div className="social-login">
      <div className="social-loginWrapper">
        <div className="social-loginLeft">
          <h3 className="social-loginLogo">Lamasocial</h3>
          <span className="social-loginDesc">
            Connect with friends and the world <br/> around you on Lamasocial
          </span>
        </div>
        <div className="social-loginRight">
          <div className="social-loginBox">
            <input
              placeholder="UserName"
              className="social-LoginInput"
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              placeholder="Email"
              className="social-LoginInput"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              className="social-LoginInput"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              placeholder="MobileNo"
              className="social-LoginInput" 
              onChange={(e) => setMobileNo(e.target.value)}
            />

            <button className="social-loginButton">Sign Up</button>
            <button className="social-loginRegisterButton">Log into Account</button>
            <div className="social-link" onClick={()=>navigator("/login")}>
          Login
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
