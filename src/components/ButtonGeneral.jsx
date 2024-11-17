import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ButtonGeneral = ({ texto, pagina, atributo, path, url }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    if (atributo === "logout") {
      logout();
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className={`button-text-${pagina}`}>
      <button className={`button-${atributo}`} onClick={handleClick}>
        <i className={`icon-${atributo}`} /> {url}
      </button>
      <span>{texto}</span>
    </div>
  );
};

export default ButtonGeneral;
