import React from 'react'
import "./Registro.css"

const Registro = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkillSwap - Login</title>

    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Registrate y unite a esta comunidad</h2>
      <input type="text" placeholder="Usuario" required="" />
      <input type="password" placeholder="Contraseña" required="" />
      <button onclick="window.location.href='Inicio.jsx'">Iniciar ahora</button>
    </div>
  </>
  
  )
}

export default Registro