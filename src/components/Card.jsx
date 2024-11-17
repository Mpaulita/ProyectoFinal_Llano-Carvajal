import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, category, imageSrc }) => {
  return (
    <Link to={`/skillswap/${id}`} className="card-link">
      <div className="card">
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-category">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
