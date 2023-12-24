import CartWidget from "../CartWidget/CartWidget";
const NavBar = ()=>{
    return(
        <nav>
            <h3>ArgShoes</h3>
            <div>
            <button>Hombres</button>
            <button>Mujeres</button>
            <button>Carrito</button>
            </div>
           <CartWidget></CartWidget> 
        </nav>
    )
}
export default NavBar;