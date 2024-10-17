import React from 'react'
import './Contraseña.css'

const Contraseña = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SkillSwap - Login</title>
  <div className="login-container">
    <h2>
      Recupera tu contraseña y sigue contribuyendo a esta comunidad con tus
      habilidades
    </h2>
    <input type="text" placeholder="Correo electrónico" required="" />
    <button onclick="window.location.href='Inicio.jsx'">
      Generar código de verificación
    </button>
  </div>
</>

  )
}

export default Contraseña