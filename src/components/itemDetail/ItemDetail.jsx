import "./ItemDetal.css"
import { useCartContext } from '../../context/Context'
import { categorias } from '../helpers/getFetch'
import { ItemCount } from '../ItemCount/ItemCount'
import AdnArea from '../adn-Area/AdnArea.jsx'
import Footer from '../Footer/Footer.jsx'
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";

const ItemDetail = ({product}) => {


  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  console.log(comments)


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
    <>
    <div className="ui-pdp-container ui-pdp-container--top">
      <div className="ui-pdp-container__row">
        <div className="ui-pdp-container__col col-5 ui-pdp-container--breadcrumb-related">
          <div className="ui-pdp-related-search">
            <ul className="ui-pdp-related-search__list">
              <li className="ui-pdp-related-search__item ui-pdp-related-search__item-title"> También puede interesarte: </li>
              <li className="ui-pdp-related-search__item">
                <a href="">tcl tab 10s</a>
              </li>
              <li className="ui-pdp-related-search__item">
                <a href="">tablet samsung s8</a>
              </li>
              <li className="ui-pdp-related-search__item">
                <a href="">tablet telefono</a>
              </li>
            </ul>
          </div>
          <div className="ui-pdp-container__row ui-pdp-container__row--breadcrumb">
            <div className="ui-pdp-breadcrumb">
              <a href="" className="ui-pdp-breadcrumb__link">Volver</a>
              <nav>
                <ol className="andes-breadcrumb">
                  <li className="andes-breadcrumb__item">
                    <a href="" className="andes-breadcrumb__link">Tablets</a>
                    <div className="andes-breadcrumb__chevron"></div>
                  </li>
                  <li className="andes-breadcrumb__item">
                    <a href="" className="andes-breadcrumb__link">Computación</a>
                    <div className="andes-breadcrumb__chevron"></div>
                  </li>
                  <li className="andes-breadcrumb__item">
                    <a href="" className="andes-breadcrumb__link">Tablets y Accesorios</a>
                    <div className="andes-breadcrumb__chevron"></div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="ui-pdp-container__col col-2 ui-pdp-container--share">
          <div className="ui-pdp-share">
            <div className="andes-tooltip__trigger">
              <button className="andes-button ui-pdp-share__link__label andes-button--small andes-button--transparent">
                <span className="andes-button__content">Compartir</span>
              </button>
            </div>
          </div>
          <div className="ui-pdp-syi">
            <a href="" className="ui-pdp-syi__link">Vender uno igual</a>
          </div>
        </div>
      </div>
    </div>


      <div className='ui-pdp-container ui-pdp-container--pdp container'>
        <div className='ui-pdp-container__row ui-pdp--relative ui-pdp-with--separator--fluid pb-40'>
          <div className='ui-pdp-container__col col-3 ui-pdp-container--column-center pb-40'>
            <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-center' style={{top: "-2015px"}}>
              <div className='ui-pdp-container__row ui-pdp-with--separator--fluid ui-pdp-with--separator--40'>
                <div className='ui-pdp-container__col col-2 ui-pdp--relative'>
                  <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-gallery'>
                    <div className='ui-pdp-gallery'>
                      <div className='ui-pdp-gallery__zoom-container'>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'>
                          <div className='drift-zoom-pane-loader ui-pdp-gallery__zoom-zoom-pane-loader'></div>
                          <img src={product[0].img} alt="" style={{width: "850.5px", height: "1053px", transform: "translate(-155.417px, 0px)"}}/>
                        </div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'>
                          <div className='drift-zoom-pane-loader ui-pdp-gallery__zoom-zoom-pane-loader'></div>
                          <img src={product[0].imagenes} alt="" style={{width: "850.5px", height: "1053px", transform: "translate(-155.417px, 0px)"}}/>
                        </div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                        <div className='drift-zoom-pane ui-pdp-gallery__zoom-zoom-pane drift-opening ui-pdp-gallery__zoom-opening drift-closing ui-pdp-gallery__zoom-closing'></div>
                      </div>
                      <div className='ui-pdp-gallery__column'>
                        <input type="radio" className='ui-pdp-gallery__input' name="gallery-radio" id="gallery-thumbnail-890555-MLA50912449037_072022" value={0} checked readOnly/>
                        <span className='ui-pdp-gallery__wrapper'>
                          <label htmlFor="gallery-thumbnail-890555-MLA50912449037_072022" className='ui-pdp-gallery__label'>
                            <div className='ui-pdp-thumbnail ui-pdp-gallery__thumbnail'>
                              <div className='ui-pdp-thumbnail__picture'>
                                <img src={product[0].imagenes} alt="" style={{width:"44px", height: "44px"}}/>
                              </div>
                            </div>
                          </label>
                          <figure className='ui-pdp-gallery__figure'>
                            <img src={product[0].imagenes} alt="" className='ui-pdp-image ui-pdp-gallery__figure__image' style={{width: "410px", height: "500px"}}/>
                          </figure>
                        </span>
                        <input type="radio" className='ui-pdp-gallery__input' name="gallery-radio" id="gallery-thumbnail-920365-MLA50912414250_072022" value={0} checked readOnly/>
                        <span className='ui-pdp-gallery__wrapper'>
                          <label htmlFor="gallery-thumbnail-920365-MLA50912414250_072022" className='ui-pdp-gallery__label'>
                            <div className='ui-pdp-thumbnail ui-pdp-gallery__thumbnail'>
                              <div className='ui-pdp-thumbnail__picture'>
                                <img src={product[0].img} alt="" style={{width:"44px", height: "44px"}}/>
                              </div>
                            </div>
                          </label>
                          <figure className='ui-pdp-gallery__figure'>
                            <img src={product[0].img} alt="" className='ui-pdp-image ui-pdp-gallery__figure__image' style={{width: "410px", height: "500px"}}/>
                          </figure>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ui-pdp-container__col col-2 mr-32' style={{maxWidth:"352px"}}>
                  <div className='ui-pdp-container__top-wrapper mt-40'>
                    <div className='ui-pdp-header'>
                      <div className='ui-pdp-header__subtitle'>
                        <span className='ui-pdp-subtitle'>
                        Nuevo  |  +5mil vendidos
                        </span>
                      </div>
                      <div className='ui-pdp-header__title-container'>
                        <h1 className='ui-pdp-title'> {product[0].nombre} </h1>
                      </div>
                      <div className='ui-pdp-header__info'>
                        <a href="" className='ui-pdp-review__label ui-pdp-review__label--link'>
                          <span className="ui-pdp-review__ratings"></span>
                          <span className='ui-pdp-review__amount'>(1467)</span>
                        </a>
                      </div>
                    </div>
                    <form action="" className='ui-pdp-bookmark ui-pdp-bookmark__link-bookmark'></form>
                  </div>
                  <div className='ui-pdp-promotions-pill mt-10 ui-pdp-highlights'>
                    <div className='ui-pdp-promotions-pill-label ui-pdp-background-color--ORANGE ui-pdp-color--WHITE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                      <a href="" className='ui-pdp-promotions-pill-label__target'>MÁS VENDIDO</a>
                    </div>
                    <div className='ui-pdp-promotions-pill-label best_seller_position ui-pdp-background-color--WHITE ui-pdp-color--BLUE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                      <a href="" className='ui-pdp-promotions-pill-label__target'>
                      `14º en ${product[0].categoria}`
                      </a>
                    </div>
                  </div>
                  <div className='ui-pdp-price mt-16 ui-pdp-price--size-large'>
                    <div className='ui-pdp-price__second-line'>
                      <span className='andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact' style={{fontSize:"36px"}}>
                        <span className='andes-visually-hidden'>{product[0].precio} </span>
                        <span className='andes-money-amount__currency-symbol'>$</span>
                        <span className='andes-money-amount__fraction'>{product[0].precio}</span>
                      </span>
                      <span className='ui-pdp-price__second-line__label ui-pdp-color--GREEN ui-pdp-size--MEDIUM'>
                        <span className='andes-money-amount__discount' style={{fontSize: "18px"}}>
                            {product[0].descuento}% OFF
                        </span>
                      </span>
                    </div>
                    <div className='ui-pdp-price__subtitles'>
                      <p className='ui-pdp-color--GREEN ui-pdp-size--MEDIUM ui-pdp-family--REGULAR'>
                        <span className='ui-pdp-color--GREEN ui-pdp-family--REGULAR'>Mismo precio en </span>
                        6 cuotas de
                        <span className='andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact' style={{fontSize: "18px"}} >
                            <span className='andes-money-amount__currency-symbol'>$</span>
                            <span className='andes-money-amount__fraction'> {product[0].precio / 6} </span>
                        </span>
                      </p>
                      <p className='ui-pdp-color--SMALL ui-pdp-size--XSMALL ui-pdp-family--REGULAR mt-8'>
                        <span className='ui-pdp-color--GREEN ui-pdp-family--SEMIBOLD'>Duplica puntos:</span>
                        <span className='ui-pdp-color--GRAY ui-pdp-family--REGULAR'>sumás 284 Mercado Puntos</span>
                      </p>
                    </div>
                    <div className='ui-pdp-price__payments-link'>
                      <div className='ui-pdp-action-modal'>
                        <div className='andes-tooltip__trigger'>
                          <a href="" className='ui-pdp-action-modal__link'>Ver los medios de pago</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-promotions-pill mt-10'>
                    <div className='ui-pdp-promotions-pill-label ui-pdp-background-color--BLUE ui-pdp-color--WHITE ui-pdp-size--XXSMALL ui-pdp-family--SEMIBOLD'>
                    OFERTA DEL DÍA
                    </div>
                  </div>
                  <div className='ui-pdp-variations'></div>
                  <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-specs-features'>
                    <section className='ui-vpp-highlighted-specs'>
                      <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-features-title'>
                        <h2 className='ui-vpp-text-alignment--left ui-pdp-color--BLACK ui-pdp-size--XSMALL ui-pdp-family--SEMIBOLD highlighted-features-title'>
                        Lo que tenés que saber de este producto
                        </h2>
                      </div>
                      <div className='ui-pdp-container__row ui-pdp-container__row--highlighted-features'>
                        <div className='ui-vpp-highlighted-specs__features'>
                          <ul className='ui-vpp-highlighted-specs__features-list'>

                          </ul>
                          <a href="" className='ui-pdp-media__action ui-vpp-highlighted-specs__features-action'>
                          Ver características
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row ui-pdp-recommendations-row'></div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'>
                <div className='ui-pdp-container__col col-1'>
                  <div className='ui-pdp-description pl-45 pr-45 ui-pdp-collapsable--is-collapsed'>
                    <h2 className='ui-pdp-description__title'>Descripción</h2>
                    <p className='ui-pdp-description__content'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis quia repellat saepe libero? Odio illo eligendi blanditiis placeat delectus, laborum error? At quam similique ab voluptatem illo accusamus placeat.
                      Tempore pariatur iste adipisci cumque ab! Autem, eaque repellat. Delectus voluptatum ratione quos temporibus voluptas voluptatibus eaque laudantium porro ullam laboriosam quam ex, illum dolor blanditiis iusto sint reiciendis adipisci.
                      Consequatur maiores voluptates a culpa saepe, distinctio vitae quae excepturi, qui sequi voluptatem. Quasi, dicta vero voluptas in doloribus nisi tenetur. Provident dolore veritatis illum odio sint aliquam quod sapiente.
                      Earum natus hic sit nam quos facilis eos, eligendi sequi magni modi et laudantium vitae reprehenderit esse accusantium cumque atque excepturi quia culpa ipsam laborum inventore provident eius. Qui, sapiente.
                      Minima, libero autem minus repellat eum voluptatibus veniam ipsam voluptate eaque quod officia alias esse possimus maiores ipsum dolore cum officiis porro, tempora tenetur vel cupiditate facere suscipit fugit? Placeat?
                    </p>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row'></div>
            </div>
          </div>
          <div className='ui-pdp-container__col col-1 ui-pdp-container--column-right mt-16 pr-16'>
            <div className='ui-pdp--sticky-wrapper ui-pdp--sticky-wrapper-right' style={{top: "-1063px"}}>
              <div className='ui-pdp-container__row'>
                <form action="" className='ui-pdp-buybox' id="buybox-form">
                  <input type="hidden" value={"GwONo6h2-_3Z5mZZYehwOEWdOGuBuBDq2Vpw"} name="_csrf" />
                  <div className='ui-pdp-media ui-pdp-shipping ui-pdp-shipping--md mb-20 ui-pdp-color--GREEN'>
                    <figure className='ui-pdp-media__figure'>
                    </figure>
                    <div className='ui-pdp-media__body'>
                      <div className='andes-tooltip__trigger'>
                        <p className='ui-pdp-color--GREEN ui-pdp-family--REGULAR ui-pdp-media__title ui-pdp-media__title--on-hover'>Envío gratis a todo el país
                          <span className='ui-pdp-media__title-icons'></span>
                        </p>
                      </div>
                      <p className='ui-pdp-color--GRAY ui-pdp-family--REGULAR ui-pdp-media__text'>Conocé los tiempos y las formas de envío.</p>
                      <div className='ui-pdp-action-modal'>
                        <div className='andes-tooltip__trigger'>
                          <a href="" className='ui-pdp-action-modal__link'>
                            <div className='ui-pdp-action-modal__icon'></div>
                            Calcular cuándo llega
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-seller mb-20'>
                    <div className='ui-pdp-seller__header'>
                      <div className='ui-pdp-seller__header__info-container'>
                        <div className='ui-pdp-seller__header__title'>
                          <span className='ui-pdp-seller__label-sold'>Tienda oficial</span>
                          <div className='ui-pdp-action-modal ui-pdp-seller__link-trigger non-selectable'>
                            <div className='andes-tooltip__trigger'>
                              <a href="" className='ui-pdp-action-modal__link'>
                                <span className='ui-pdp-color--BLUE ui-pdp-family--REGULAR'>
                                Mercado Libre Electrónica
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className='ui-pdp-color--BLACK ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>+100mil ventas</p>
                        <p className='ui-pdp-color--GRAY ui-pdp-size--XXSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>Hace Factura A</p>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-stock-information mt-24 mb-8'>
                    <p className='ui-pdp-color--BLACK ui-pdp-size--SMALL ui-pdp-family--SEMIBOLD ui-pdp-stock-information__title'>
                    Stock disponible
                    </p>
                  </div>
                    <ItemCount stock={product[0].stock} initial={1} onAdd={onAdd} product={product[0]} />
                  <ul className='ui-pdp-benefits mt-24'>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'></figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Devolución gratis.
                                </a>
                              </div>
                            </div>
                          Tenés 30 días desde que lo recibís.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'></figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Compra Protegida
                                </a>
                              </div>
                            </div>
                            , recibí el producto que esperabas o te devolvemos tu dinero.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'></figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                                <a href="" className='ui-pdp-action-modal__link'>
                                Mercado Puntos
                                </a>
                              </div>
                            </div>
                            . Sumás 1284 puntos.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='ui-pdp-benefits__item'>
                      <div className='ui-pdp-media ui-pdp-color--GRAY'>
                        <figure className='ui-pdp-media__figure'></figure>
                        <div className='ui-pdp-media__body'>
                          <p className='ui-pdp-family--REGULAR ui-pdp-media__title'>
                            <div className='ui-pdp-action-modal'>
                              <div className='andes-tooltip__trigger'>
                              </div>
                            </div>
                            12 meses de garantía de fábrica.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
              <div className='ui-pdp-container__row'>
                <div className='ui-box-component ui-box-component-pdp__visible--desktop'>
                  <h2 className='ui-box-component__title'>Información de la tienda</h2>
                  <div className='ui-seller-info'>
                    <div className='ui-pdp-seller__header ui-pdp-seller__header--margin'>
                      <div className='ui-pdp-seller__header__image-container'>
                        <img src="https://http2.mlstatic.com/D_Q_NP_630558-MLA42437086154_072020-G.jpg" className='ui-pdp-seller__header__image-container__image' alt="" />
                      </div>
                      <div className='ui-pdp-seller__header__info-container'>
                        <div className='ui-pdp-seller__header__title'>Mercado Libre Electrónica</div>
                        <p className='ui-pdp-color--GRAY ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-seller__header__subtitle'>Tienda oficial de Mercado Libre</p>
                      </div>
                    </div>
                    <div className='ui-seller-info__status-info'>
                      <figure className='ui-seller-info__status-info__icon ui-pdp-color--GREEN'></figure>
                      <div>
                        <p className='ui-seller-info__status-info__title ui-pdp-seller__status-title'>MercadoLíder Platinum</p>
                        <p className='ui-seller-info__status-info__subtitle'>¡Es uno de los mejores del sitio!</p>
                      </div>
                    </div>
                    <ul>
                      <li className='ui-thermometer__level ui-thermometer__level--1'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--2'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--3'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--4'></li>
                      <li className='ui-thermometer__level ui-thermometer__level--5'></li>
                    </ul>
                    <div className='ui-pdp-seller__reputation-info'>
                      <ul className='ui-pdp-seller__list-description'>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__sales-description'>+100mil</strong>
                          <p className='ui-pdp-seller__text-description'>Ventas en los últimos 60 días</p>
                        </li>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__icon-description'>
                            <div className='ui-pdp-icon ui-pdp-icon--message-positive ui-pdp-color--REP_SELLER_ATTENTION_GOOD'>
                              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" alt="" />
                            </div>
                          </strong>
                          <p className='ui-pdp-seller__text-description'>Brinda buena atención</p>
                        </li>
                        <li className='ui-pdp-seller__item-description'>
                          <strong className='ui-pdp-seller__icon-description'>
                            <div className='ui-pdp-icon ui-pdp-icon--time-positive ui-pdp-color--REP_SELLER_DELIVERY_TIME_GOOD'>
                              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" alt="" />
                            </div>
                          </strong>
                          <p className='ui-pdp-seller__text-description'>Despacha sus productos a tiempo</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="" className='ui-pdp-media__action ui-box-component__action'>
                  Ver más datos de Mercado Libre Electrónica
                  </a>
                </div>
                <div className='ui-box-component ui-box-component-pdp__visible--desktop'>
                  <h2 className='ui-box-component__title'>Medios de pago</h2>
                  <div className='ui-vip-payment_methods'>
                    <div className='ui-pdp-action-modal'>
                      <div className='andes-tooltip__trigger'>
                        <a href="" className='ui-pdp-action-modal__link'>
                          <div className='ui-pdp-media ui-vip-payment_methods__container ui-pdp-background-color--GREEN ui-pdp-color--WHITE'>
                            <figure className='ui-pdp-media__figure'></figure>
                            <div className='ui-pdp-media__body'>
                              <p className='ui-pdp-color--WHITE ui-pdp-family--REGULAR ui-pdp-media__title'>
                              ¡Pagá el mismo precio en
                              <span className='ui-pdp-color--WHITE ui-pdp-family--SEMIBOLD'>
                              hasta 6 cuotas
                              </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Hasta 12 cuotas sin tarjeta</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon' />
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Tarjetas de crédito</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Tarjetas de débito</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                    <p className='ui-pdp-family--REGULAR ui-vip-payment_methods__title'>Efectivo</p>
                    <div className='ui-pdp-payment-icon'>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                      <div className='ui-pdp-payment-icon__container'>
                        <div className='ui-pdp-payment-icon__size'>
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" alt="" className='ui-pdp-image ui-pdp-payment-icon'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui-pdp-action-modal ui-box-component__action'>
                    <div className='andes-tooltip__trigger'>
                      <a href="" className='ui-pdp-action-modal__link'>Conocé otros medios de pago</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ui-pdp-container__row'></div>
              <div className='ui-pdp-container__row'></div>
            </div>
          </div>
        </div>
        <div className='ui-pdp-container__row'>
          <div className='ui-pdp-container__col col-3'></div>
        </div>
        <div className='ui-pdp-container__row'>
          <div className='ui-pdp-container__col col-3'></div>
          <div className='ui-pdp-container__col col-1 ui-pdp-container--column-right mt-40'></div>
        </div>
        <div className="ui-pdp-container__row">
          <div className="ui-pdp-container__col col-3">
            <div className="ui-pdp-container__row">
              <div className="ui-pdp-container__col col-1 ui-pdp-with--separator ui-pdp-with--separator--40">
                <div className="ui-pdp-qadb pl-45 pr-45 mb-48">
                  <h2 className="ui-pdp-qadb__title">Preguntas y respuestas</h2>
                  <div className="ui-pdp-quick-access__container">
                    <h3 className="ui-pdp-questions__subtitle">¿Qué querés saber?</h3>
                    <div className="ui-pdp-questions__list-container">
                      <ul className="ui-pdp-questions__list">
                        <li className="ui-pdp-questions__item">
                          <div className="ui-pdp-action-modal">
                            <div className="andes-tooltip__trigger">
                              <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Costo y tiempo de envío</a>
                            </div>
                          </div>
                        </li>
                        <li className="ui-pdp-questions__item">
                          <div className="ui-pdp-action-modal">
                            <div className="andes-tooltip__trigger">
                              <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Devoluciones gratis</a>
                            </div>
                          </div>
                        </li>
                        <li className="ui-pdp-questions__item">
                          <div className="ui-pdp-action-modal">
                            <div className="andes-tooltip__trigger">
                              <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Medios de pago y promociones</a>
                            </div>
                          </div>
                        </li>
                        <li className="ui-pdp-questions__item">
                          <div className="ui-pdp-action-modal">
                            <div className="andes-tooltip__trigger">
                              <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Garantía</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="questionTooltip">
                        <div>
                          <p className="ui-pdp-questions__tooltip__primary">¿Tenés dudas?</p>
                        </div>
                        <span className="ui-pdp-questions__tooltip__close"></span>
                      </div>
                    </div>
                  </div>
                  <div className="ui-pdp-qadb__search-bar">
                    <h3 className="ui-pdp-color--BLACK ui-pdp-size--MEDIUM ui-pdp-family--SEMIBOLD ui-pdp-search-bar__title">Buscá lo que querés saber</h3>
                    <form action="" className="">
                      <div className="ui-pdp-qadb__search-bar__input-container">
                        <div className="andes-form-control andes-form-control--textfield andes-form-control--default ui-pdp-qadb__search-bar__input">
                          <label htmlFor="" style={{width: "100%"}} >
                            <div className="andes-form-control__control">
                              <input type="text" className="andes-form-control__field" placeholder="Escribí una pregunta o palabra clave..." />
                            </div>
                          </label>
                          <div className="andes-form-control__bottom">
                            <span className="andes-form-control__message"></span>
                          </div>
                        </div>
                        <button className="ui-pdp-qadb__search-bar__search">
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="ui-pdp-qadb__questions-list">
                    <h3 className="ui-pdp-color--BLACK ui-pdp-size--MEDIUM ui-pdp-family--SEMIBOLD ui-pdp-qadb__questions-list__title">
                    Últimas realizadas
                    </h3>
                    <div className="ui-pdp-qadb__questions-list__wraper">
                      <div className="ui-pdp-qadb__questions-list__question">
                        <div className="ui-pdp-qadb__questions-list__question__container">
                          <span className="ui-pdp-color--BLACK ui-pdp-size--SMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__question__label"></span>
                          <a href="" className="ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__question-item__denounce">Denunciar</a>
                        </div>
                        <div className="ui-pdp-qadb__questions-list__question__answer-container">
                          <div>
                            <div className="ui-pdp-qadb__questions-list__container-answer__isNoCollapsed">
                              <span className="ui-pdp-color--GRAY ui-pdp-size--SMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__answer-item__answer">RESPUESTA DEL VENDEDOR</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="andes-button ui-pdp-qadb__questions-list__see-more andes-button--large andes-button--transparent">
                        <span className="andes-button__content">
                          <p className="ui-pdp-color--BLUE ui-pdp-size--SMALL ui-pdp-family--SEMIBOLD ui-pdp-qadb__questions-list__see-more__link">
                          Ver 7 resultados más
                          </p>
                        </span>
                      </button>
                    </div>
                  </div>
                  <button className="andes-button ui-pdp-qadb__how-to-make-question-button andes-button--large andes-button--quiet">
                          <span className="andes-button__content">
                            <span className="andes-button__text">¿Cómo le pregunto al vendedor?</span>
                          </span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="ui-pdp-container__row"></div>
          </div>
        </div>
      </div>
      <AdnArea/>
      <Footer/>
    </>


  )
}

export default ItemDetail