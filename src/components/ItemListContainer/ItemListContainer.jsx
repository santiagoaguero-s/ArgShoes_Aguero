import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsAsync } from '../../../utils/mockdata';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductsAsync().then((products) => {
      if (categoryId) {
        const filteredProducts = products.filter(
          (product) => product.genero.toLowerCase() === categoryId.toLowerCase()
        );
        setItems(filteredProducts);
        setLoading(false);
      } else {
        setItems(products);
        setLoading(false);
      }
    });
  }, [categoryId]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemList itemList={items} />
    </>
  );
};

export default ItemListContainer;
