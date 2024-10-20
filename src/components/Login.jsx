import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate('/inicio'); // Navegar a la página de inicio
    } else {
      alert('Por favor, completa los campos.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navegar a la página de registro
  };

  const handleForgotPassword = () => {
    navigate('/recover-password'); // Navegar a la página de recuperación de contraseña
  };

  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Intercambia tus habilidades con gente cercana. ¡No hay dinero de por medio!</h2>
      <input 
        type="text" 
        placeholder="Usuario" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p></p>
      <button onClick={handleRegister}>Registrate</button>
      <p></p>
      <a className="contra" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</a>
    </div>
  );
};

export default Login;
