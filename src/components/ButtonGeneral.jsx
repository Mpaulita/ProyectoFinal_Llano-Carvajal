import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonGeneral = ({ texto, pagina, atributo, path, url }) => {
  const navigate = useNavigate();

  return (
    <div className={`button-text-${pagina}`}>
      <button
        className={`button-${atributo}`}
        onClick={() => navigate(`/${path}`)}
      >
        <i className={`icon-${atributo}`} /> {url}
      </button>
      <span>{texto}</span>
    </div>
  );
};

export default ButtonGeneral;
