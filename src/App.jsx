import React from 'react';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<main />} />
          <Route path='/products' element={<ItemListContainer />} />
          {/* Cambiamos los nombres de los parámetros de género */}
          <Route path='/products/:genero' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;

