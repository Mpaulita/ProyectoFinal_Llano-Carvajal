import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/contraseña.css';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRecovery = () => {
    if (email) {
      navigate('/inicio'); // Navegar a la página de inicio después de enviar el código
    } else {
      alert('Por favor, ingresa un correo electrónico.');
    }
  };

  return (
    <div className="login-container">
      <h2>Recupera tu contraseña y sigue contribuyendo a esta comunidad con tus habilidades</h2>
      <input 
        type="email" 
        placeholder="Correo electrónico" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <button onClick={handleRecovery}>Generar código de verificación</button>
    </div>
  );
};

export default RecoverPassword;
