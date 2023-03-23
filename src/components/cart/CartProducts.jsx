import { useCartContext } from "../../context/Context"


const CartProducts = () => {
    const { cart, removeCart } = useCartContext()
  return (
    cart.length > 0 ?
    <div>
        <ul>
        {
            cart.map( item => <li> {item.nombre} </li>)
        }
        </ul>
        <button onClick={removeCart}>Vaciar Carrito</button>
        <button>Terminar Compra</button>
    </div>
    :
    <div>
      <p>no hay nada</p>
    </div>
  )
}


export default CartProducts