import React from "react";
import "../Styles/contraseña.css";

const RecoverPassword = () => {
  return (
    <div className="login-container">
      <h2>
        Recupera tu contraseña y sigue contribuyendo a esta comunidad con tus
        habilidades
      </h2>
      <input type="text" placeholder="Correo electrónico" required />
      <button onClick={() => (window.location.href = "/home")}>
        Generar código de verificación
      </button>
    </div>
  );
};

export default RecoverPassword;
