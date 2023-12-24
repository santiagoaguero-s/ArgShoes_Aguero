import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
    <div className='App'>
    <NavBar></NavBar>
    <ItemListContainer bienvenida={'Bienvenido a ArgShoes'}></ItemListContainer>
    </div>
  )
}

export default App
