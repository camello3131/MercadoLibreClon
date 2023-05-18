import "./ItemDetal.css"
import { useCartContext } from '../../context/Context'
import { ItemCount } from '../ItemCount/ItemCount'
import AdnArea from '../adn-Area/AdnArea.jsx'
import Footer from '../Footer/Footer.jsx'
import React, { useState, useEffect } from "react";
import Comments from "../Comments/Comments"

const ItemDetail = ({item}) => {

  const [imagenSeleccionada, setImagenSeleccionada] = useState(item.img)

    const {addToCart, cart} = useCartContext()
    function onAdd(cantidad) {
      addToCart({...item, cantidad: cantidad})
    }
    
  return (
    <>
    <div className="container-top-detail">
      <div className="top-and-bottom">
        <div className="top-menu">
          <span className="span-detail">Tambien puede interesarte: </span>
          <a href="">
            <span className="span-detail">tcl tab 10stablet samsung s8tablet telefono</span>
          </a>
        </div>
        <div className="bottom-menu">
          <div className="left-bottom-menu-detail">
            <a href="">
              <span className="no-color-blue span-detail">Volver </span>
            </a>
            <span className="barra-separadora span-detail">|</span>
            <a href="">
              <span className="span-detail"> {item.categoria}</span>
            </a>
          </div>
          <div className="right-bottom-menu-detail">
          <a href="">
            <span className="span-detail">Compartir </span>
          </a>
          <span className="barra-separadora span-detail">|</span>
          <a href="">
            <span className="span-detail"> Vender uno igual</span>
          </a>
          </div>
        </div>
      </div>
    </div>

 
      <AdnArea/>
      <Footer/>
    </>


  )
}

export default ItemDetail