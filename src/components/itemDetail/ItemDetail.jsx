
import { useCartContext } from '../../context/Context'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

  console.log(product)

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
      addToCart({...product[0], cantidad: cantidad})
    }
    
  return (
    <div className='container d-flex' style={styleContainer}>
    <div className="card" style={styleCard}>
    <img className="card-img-top" src={product[0].img} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title text-center">{product[0].nombre} </h5>
        <p className="card-text text-center"> {product[0].descripcion} </p>
        <p className="card-text text-center"> Precio : $ {product[0].precio} </p>
        <ItemCount stock={product[0].stock} initial={1} onAdd={onAdd}/>
    </div>
    </div>
    </div>
  )
}

export default ItemDetail