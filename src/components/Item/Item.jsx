import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, marca, nombre, precio, genero, image }) => {

  return (
    <div className={"item"}>
      <div className={"item__image"}>
        <img src={image} alt={nombre} />
      </div>
      <div className={"item__info"}>
        <h2 className={"item__info__title"}>{nombre}</h2>
        <p className={"item__info__price"}>${precio}</p>
        <p className={"item__info__genero"}>{genero}</p>
        <p className={"item__info__marca"}>{marca}</p>
        <Link to={`/product/${id}`} className={"item__info__button"}>
          Ver más 
        </Link>
      </div>
    </div>
  );
};



export default Item;

