import React from "react";
import ButtonGeneral from "./ButtonGeneral";
import "../Styles/inicio.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
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
        {/*texto, pagina, atributo, path, url*/}
        <ButtonGeneral
          texto="Swap"
          pagina="home"
          atributo="swap"
          path="home"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Publicar Propuesta"
          pagina="home"
          atributo="help"
          path="publicar"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Mensajes"
          pagina="home"
          atributo="request"
          path="mensajes"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Perfil"
          pagina="home"
          atributo="profile"
          path="perfil"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          }
        />
        <input type="text" placeholder="Buscar" />

        <ButtonGeneral
          texto="Salir"
          pagina="home"
          atributo="logout"
          path=""
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          }
        />
      </div>

      <div className="card-container">
        <Card
         id="1" 
          title="Reparación estantería"
          category="SkillSwap: Repostería y gastronomía"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBMVr1ddI9MzEjHNsoPmfF5HVqouVpteoMVCR6zC7RrGWvEpTWoK5j7YBaQnC4WmbWXA&usqp=CAU"
        />
        <Card
         id="2" 
          title="Instalación armario"
          category="SkillSwap: Conocimientos matemáticos"
          imageSrc="https://www.alkosto.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7706112013893-001.jpg?context=bWFzdGVyfGltYWdlc3wxMTIwMTR8aW1hZ2UvanBlZ3xhR1JtTDJnM015OHhNemM0TnpRM05UZ3pOamsxT0M4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd05qRXhNakF4TXpnNU0xOHdNREV1YW5Cbnw5MjA3YzI2MTMzYjBhYzZkYWM4OWY3MThmYWE4ZDQyMzM4NWEwMjU1YTcyODM5NjIxODY3ZmQxZjUyYjk5Y2Ix"
        />
        <Card
         id="3" 
          title="Arreglo impresora"
          category="SkillSwap: Trabajo y cuidado con niños"
          imageSrc="https://shop.epson.com.co/media/catalog/product/P/T/PT336EPS75_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549"
        />
      </div>
    </div>
  );
};

export default Home;
