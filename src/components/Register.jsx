import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registro.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      navigate('/inicio'); // Navegar a la página de inicio después de registrarse
    } else {
      alert('Por favor, completa los campos.');
    }
  };

  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Registrate y únete a esta comunidad</h2>
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
      <button onClick={handleRegister}>Iniciar ahora</button>
    </div>
  );
};

export default Register;
