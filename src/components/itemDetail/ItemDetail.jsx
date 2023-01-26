
import { useCartContext } from '../../context/Context'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

    const styleCard = {
        width: "35rem",
        maxHeight: "300px"
    }
    const styleContainer = {
      justifyContent: "center",
      marginTop: "50px",
      width: "100vw"
    }
    /////////////////////////////////////////////////

    const {addToCart, cart} = useCartContext()
    function onAdd(cantidad) {
      addToCart({...product, cantidad: cantidad})
      console.log(cantidad)
    }
    
    console.log(cart)
  return (
    <div className='container d-flex' style={styleContainer}>
    <div className="card" style={styleCard}>
    <img className="card-img-top" src={product.img} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title text-center">{product.nombre} </h5>
        <p className="card-text text-center"> {product.descripcion} </p>
        <p className="card-text text-center"> Precio : $ {product.precio} </p>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
    </div>
    </div>
    </div>
  )
}

export default ItemDetail