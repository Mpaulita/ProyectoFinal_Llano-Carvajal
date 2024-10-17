import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SkillSwap - Login</title>

  <div className="login-container">
    <h1>SkillSwap</h1>
    <h2>
      Intercambia tus habilidades con gente cercana. ¡No hay dinero de por
      medio!
    </h2>
    <input type="text" placeholder="Usuario" required="" />
    <input type="password" placeholder="Contraseña" required="" />
    <button onclick="window.location.href='Inicio.jsx'">Iniciar Sesión</button>
    <p />
    <button onclick="window.location.href='./Registro/Registro.jsx'">Registrate</button>
    <p />
    <a className="contra" href="Contraseña.jsx">
      ¿Olvidaste tu contraseña?
    </a>
  </div>
</>

  )
}

export default Login