import React, { useState } from "react";
import "../Styles/login.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const validCredentials = {
    username: "usuario_demo",
    password: "123456",
  };


  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 

    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }


    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {

      window.location.href = "/home";
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>
        Intercambia tus habilidades con gente cercana. ¡No hay dinero de por
        medio!
      </h2>

      {/* Formulario controlado */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>

      {/* Mensajes de error */}
      {error && <p className="error-message">{error}</p>}

      <p></p>
      <button onClick={() => (window.location.href = "/register")}>
        Regístrate
      </button>
      <p></p>
      <a className="contra" href="/recover-password">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
};

export default Login;
