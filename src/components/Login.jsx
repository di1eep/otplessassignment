import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log("User Info:", otplessUser);
      //alert("Login Successful!");

      if (otplessUser.token) {
        login(otplessUser.token);
        navigate("/home");
      }
    };
  }, [login, navigate]);

  return (
    <div className="login">
      <div id="otpless-login-page"></div>
    </div>
  );
};

export default Login;
