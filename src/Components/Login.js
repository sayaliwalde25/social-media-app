import React from "react";
import "../all css/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();
  return (
    <div className="cake-login">
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="btn" />
          <div className="login-div">
            <div className="link" onClick={()=>navigator("/register")}>
              Register
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
