import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Request from "./components/Request";
import Login from "./components/Login";
import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword";
import Home from "./components/Home";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import "./App.css";
import SkillSwapCard from "./components/SkillSwapCard";

import { AuthProvider } from "./context/AuthContext";

import PublicRoutes from "./utils/PublicRoutes";
import ProtectedRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/publicar" element={<Request />} />
            <Route path="/mensajes" element={<Messages />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/skillswap/:id" element={<SkillSwapCard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
