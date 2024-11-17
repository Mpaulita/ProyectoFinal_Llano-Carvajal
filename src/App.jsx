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
import SkillSwapCard from "./components/SkillSwapCard"; // Importa el componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicar" element={<Request />} />
        <Route path="/mensajes" element={<Messages />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/skillswap/:id" element={<SkillSwapCard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
