import React from "react";

const Card = ({ title, category, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
};

export default Card;
