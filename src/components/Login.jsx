import React from "react";
import "../Styles/login.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, error: signUpErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>
        Intercambia tus habilidades con gente cercana. ¡No hay dinero de por
        medio!
      </h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Correo"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Este campo es requerido</span>}
        <button type="submit">Iniciar Sesión</button>
        <button onClick={() => navigate("/register")}>Registrarse</button>
        {signUpErrors && <span>{signUpErrors}</span>}
      </form>
      <br />
      <a className="contra" href="/recover-password">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
};

export default Login;
