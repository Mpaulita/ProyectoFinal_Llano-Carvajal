import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RecoverPassword from './components/RecoverPassword';
import Register from './components/Register';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
