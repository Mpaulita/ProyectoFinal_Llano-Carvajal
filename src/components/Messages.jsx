import React from "react";
import ButtonGeneral from "./ButtonGeneral";
import "../Styles/messages.css";
const Messages = () => {
  return (
    <div className="message-contenedor">
      <div className="message-header-container">
        <h1 className="message-header">Skill Swap</h1>
        <p className="message-descripcion">
          Crea tus propias solicitudes y encuentra con quien intercambiar tus
          habilidades
        </p>
      </div>
      <div className="message-horizontal-container">
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
          texto="Perfiil"
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
      <div className="messages-list">
        <h2>Mensajes Directos:</h2>
        <div className="message-item">Guillermo Lopez - Tu coche no gira...</div>
        <div className="message-item">Daniela Suarez - El sensor esta...</div>
        <div className="message-item">Jimena Perez - Esta es la direccion...</div>
        <div className="message-placeholder">
          <p>Select a chat to reply</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
