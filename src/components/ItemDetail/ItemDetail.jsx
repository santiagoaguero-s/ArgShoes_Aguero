import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, nombre, precio, genero, image, marca }) => {
  const { addItem } = useCartContext()

  const onAdd = (count) => {
    console.log(`Agregaste ${count} ${nombre} al carrito`)
    addItem({ id, nombre, precio, genero, image }, count)
  }

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
      </div>
      <ItemCount onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail
