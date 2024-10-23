import React from 'react';
import '../Styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Intercambia tus habilidades con gente cercana. ¡No hay dinero de por medio!</h2>
      <input type="text" placeholder="Usuario" required />
      <input type="password" placeholder="Contraseña" required />
      <button onClick={() => window.location.href='/home'}>Iniciar Sesión</button>
      <p></p>
      <button onClick={() => window.location.href='/register'}>Regístrate</button>
      <p></p>
      <a className="contra" href="/recover-password">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

export default Login;
