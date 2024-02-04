import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer bienvenida={'Bienvenido a ArgShoes'} />
      </BrowserRouter>
    </div>
  );
}

export default App;
