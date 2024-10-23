import React from 'react';
import '../Styles/registro.css';

const Register = () => {
  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Regístrate y únete a esta comunidad</h2>
      <input type="text" placeholder="Usuario" required />
      <input type="password" placeholder="Contraseña" required />
      <button onClick={() => window.location.href='/home'}>Iniciar ahora</button>
    </div>
  );
};

export default Register;
