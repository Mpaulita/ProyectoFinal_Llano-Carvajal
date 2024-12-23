import React from "react";
import ButtonGeneral from "./ButtonGeneral";
import "../Styles/Request.css";

const Request = () => {
  return (
    <div className="solicitud-contenedor">
      <div className="header-container">
        <h1 className="header-title">SKILLSWAP</h1>
        <p className="header-description">
          Crea tus propias solicitudes y encuentra con quien intercambiar tus
          habilidades
        </p>
      </div>
      <div className="horizontal-container">
        {/*texto, pagina, atributo, path, url*/}
        <ButtonGeneral
          texto="Swap"
          pagina="request"
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
          pagina="request"
          atributo="perfil"
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

      <div className="form-container">
        <h2 className="form-title">Crear Solicitud:</h2>
        <input type="text" placeholder="Nombre" className="input-field" />
        <textarea placeholder="Descripción" className="input-field" rows="3" />
        <input
          type="text"
          placeholder="¿Cuál es tu SkillSwap?"
          className="input-field"
        />

        <div className="upload-container">
          <div className="upload-image">
            <button className="upload-button">Upload Image</button>
          </div>
        </div>

        <button className="save-button">Guardar</button>
      </div>
    </div>
  );
};

export default Request;
