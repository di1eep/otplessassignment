import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Welcome to Home Page</h2>
      <p className="token-box"><strong>Token:</strong> {token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
