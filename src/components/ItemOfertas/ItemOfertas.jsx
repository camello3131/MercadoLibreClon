import "./itemofertas.css"
import { Link } from "react-router-dom"
const ItemOfertas = ({oferta, key}) => {

  return (
    <>
        <div className="card">
          <Link to={`/detalle/${oferta.id}`}> 
            <a href="#" className="enlace-container">
            <img src={oferta.img} className="card-img-top" alt="..."/>
            <div className="ui-item__content">
              <div className="ui-item__price-block">
                <div className="ui-item__price-and-discount-wrapper">
                  <span className="price-tag ui-item__discount-price price-tag__disabled">
                    <span className="price-tag-text-sr-only">
                      Antes: {oferta.precio} pesos.
                    </span>
                  </span>
                  <span className="price-tag-text-sr-only">
                    <span className="price-tag-symbol">$</span>
                    <span className="price-tag-fraction"> {oferta.precio} </span>
                  </span>
                  <span className="price-tag ui-item__price">
                    <span className="price-tag-symbol">$</span>
                    <span className="price-tag-fraction"> {oferta.precio / 100 * oferta.descuento} </span>
                  </span>
                  <span className="ui-item__discount-text"> {oferta.descuento} % OFF </span>
                </div>
                <span className="ui-item__installments ui-item__installments--free">Mismo precio</span>
                <div className="ui-item__container-free">
                  <p className="ui-item__shipping-free">Envío Gratis</p>
                </div>
                <p className="ui-item__title" aria-hidden="true"> {oferta.descripcion} </p>
              </div>
            </div>
            </a>
          </Link>
          </div>

  </>
  )
}


export default ItemOfertas