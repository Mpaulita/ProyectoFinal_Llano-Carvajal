import React from 'react'
import './Inicio.css'

const Inicio = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SkillSwap - Inicio</title>

  <div className="container">
    <h1>Bienvenido a SkillSwap</h1>
    <p>
      Intercambia habilidades, aprende nuevas destrezas y conecta con expertos
      de todo el mundo. ¡Únete ahora y comienza tu viaje de aprendizaje!
    </p>
    <a href="Login.jsx" className="cta-button">
      ¡Únete a SkillSwap!
    </a>
    <p />
  </div>
</>

  )
}

export default Inicio