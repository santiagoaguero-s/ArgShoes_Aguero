import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { getCategoriesAsync } from '../../../utils/mockdata';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesAsync().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="navbar">
      <Link to="/">ArgShoes</Link>
      <div className="links">
        <Link to="/products">Todos los Productos</Link>
        {categories.map((category, index) => (
          <Link to={`/products/${category}`} key={index} className="link">
            {category}
          </Link>
        ))}
           <Link to="/products/hombres" className="links">
          Hombres
        </Link>
        <Link to="/products/mujeres" className="links">
          Mujeres
        </Link>
      </div>
    </div>  
  );
};

export default Navbar;
