import React from "react";
import "../Styles/inicio.css";

const Card = ({ title, category, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="inicio-contenedor">
      <div className="header-container">
        <h1 className="inicio-header">Skill Swap</h1>
        <p className="inicio-descripcion">
          Intercambia habilidades, aprende nuevas destrezas y conecta con
          expertos de todo el mundo. ¡Únete ahora y comienza tu viaje de
          aprendizaje!
        </p>
      </div>

      <div className="horizontal-container">
        <button className="button-swap">
          <i className="icon-swap" /> {/* Icono opcional */}
          <span>Swap</span>
        </button>
        <button className="button-help">
          <i className="icon-help" /> {/* Icono opcional */}
          <span>Ayuda</span>
        </button>
        <button className="button-requests">
          <i className="icon-requests" /> {/* Icono opcional */}
          <span>Solicitudes</span>
        </button>
        <button className="button-profile">
          <i className="icon-profile" /> {/* Icono opcional */}
          <span>Perfil</span>
        </button>
        <input type="text" placeholder="Buscar" />
        <button className="button-logout">
          <i className="icon-logout" /> {/* Icono opcional */}
          <span>Salir</span>
        </button>
      </div>

      <div className="card-container">
        <Card
          title="Reparación estantería"
          category="SkillSwap: Repostería y gastronomía"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBMVr1ddI9MzEjHNsoPmfF5HVqouVpteoMVCR6zC7RrGWvEpTWoK5j7YBaQnC4WmbWXA&usqp=CAU"
        />
        <Card
          title="Instalación armario"
          category="SkillSwap: Conocimientos matemáticos"
          imageSrc="https://maderkit.vtexassets.com/arquivos/ids/166207/mueble-habitacion-closet-armario-1-1-maderkit.jpg?v=638218472161600000"
        />
        <Card
          title="Arreglo impresora"
          category="SkillSwap: Trabajo y cuidado con niños"
          imageSrc="https://shop.epson.com.co/media/catalog/product/P/T/PT336EPS75_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549"
        />
        {/* Añade más tarjetas como las anteriores según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
