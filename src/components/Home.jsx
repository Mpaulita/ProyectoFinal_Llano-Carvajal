import React from 'react'; 
import '../Styles/inicio.css';

const Home = () => {
  return (
    <div className="inicio-contenedor">
      <div className="header-container">
        <h1 className="inicio-header">Bienvenido a SkillSwap</h1>
        <p className="inicio-descripcion">
          Intercambia habilidades, aprende nuevas destrezas y conecta con expertos de todo el mundo. ¡Únete ahora y comienza tu viaje de aprendizaje!
        </p>
      </div>
      
      <div className="horizontal-container">
        <button className="button-swap"></button>
        <button className="button-add"></button>
        <button className="button-text"></button>
        <button className="button-profile"></button>
        <input type="text" placeholder="Buscar"/>
        <button></button>
      </div>
    </div>
  );
};

export default Home;
