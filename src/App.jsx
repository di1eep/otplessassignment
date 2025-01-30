import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthContext, AuthProvider } from "./context/AuthContext";


// Protected route to restrict access to authenticated users
// if there was
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/" replace />;
};


// Private routes to keep users inside /home if logged in     if they are trying to change in the navbar
const PrivateRoutes = () => {
  const { token } = useContext(AuthContext);
  return token ? <Navigate to="/home" replace /> : <LoginPage />;
};

// Routes
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoutes />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
