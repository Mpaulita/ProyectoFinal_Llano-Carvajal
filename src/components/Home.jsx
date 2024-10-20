import React from 'react';
import '../styles/inicio.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenido a SkillSwap</h1>
      <p>Intercambia habilidades, aprende nuevas destrezas y conecta con expertos de todo el mundo. ¡Únete ahora y comienza tu viaje de aprendizaje!</p>
      <a href="/login" className="cta-button">¡Únete a SkillSwap!</a>
    </div>
  );
};

export default Home;
