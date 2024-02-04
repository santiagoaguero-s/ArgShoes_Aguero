import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ itemList }) => {
  return (
    <div className="item-list">
      {itemList.map(({ id, marca, nombre, precio, genero, image }) => {
        return (
          <Item
            key={id}
            id={id}
            nombre={nombre}
            precio={precio}
            genero={genero}
            image={image}
            marca={marca}
          />
        );
      })}
    </div>
  );
};


export default ItemList;

