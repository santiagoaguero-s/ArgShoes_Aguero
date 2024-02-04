import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = ()=>{
    return(
        <div className={NavBar}>
        <nav>
            <h3>ArgShoes</h3>
            <div>
            <button>Hombres</button>
            <button>Mujeres</button>
            <button>Carrito</button>
            </div>
           <CartWidget></CartWidget> 
        </nav>
        </div>
    )
}
export default NavBar;