import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token, login } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      login(storedToken);
    }
  }, [login]);

  return token ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
