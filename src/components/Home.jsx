import React from 'react';
import '../Styles/inicio.css';

const Home = () => {
  return (
    <div className="inicio-contenedor">
      <h1 className="inicio-header">Bienvenido a SkillSwap</h1>
      <p className="inicio-descripcion">Intercambia habilidades, aprende nuevas destrezas y conecta con expertos de todo el mundo. ¡Únete ahora y comienza tu viaje de aprendizaje!</p>
      <a href="/" className="inicio-boton">¡Únete a SkillSwap!</a>
    </div>
  );
};

export default Home;
