import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../Styles/registro.css";

const Registro = () => {
  const navigate = useNavigate();
  const { signUp, error: signUpErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signUp(data);
  });

  return (
    <div className="login-container">
      <h1>SkillSwap</h1>
      <h2>Registrate y unete a esta comunidad.</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido</span>}
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
        <button type="submit">Registrarse</button>
        {signUpErrors && <span>{signUpErrors}</span>}
        <br />
        <Link to="/">Ya estoy registrado</Link>
      </form>
    </div>
  );
};

export default Registro;
