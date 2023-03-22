import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='foo'>
        <section className='site-shopping-info'>
            <div className="container">
                <div className='info-slide'>
                    <div className='img-container'>
                        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" className='img-container' alt="" />
                    </div>
                    <h2>Elegí cómo pagar</h2>
                    <p>
                        <span>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</span>
                    </p>
                    <a href="">Cómo pagar tus compras</a>
                </div>
                <div className='info-slide'>
                    <div className="img-container">
                        <img className='img-container' src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
                    </div>
                    <h2>Envío gratis desde $ 8.000</h2>
                    <p>
                        <span>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</span>
                    </p>
                    <a href="">Conocé más sobre este beneficio</a>
                </div>
                <div className='info-slide'>
                    <div className="img-container">
                        <img className='img-container' src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
                    </div>
                    <h2>Seguridad, de principio a fin</h2>
                    <p>
                        <span>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
                    </p>
                    <a href="">Cómo te protegemos</a>
                </div>
            </div>
        </section>
        <section className='regret'>
            <div className='container regret__container'>
                <div className='regret__box'>
                    <p className='regret__content'>Botón de arrepentimiento
                    <br />
                        <a href="#">Cancelar una compra</a>
                        <br />
                        <a href="">Cancelar una suscripción</a>
                        <br />
                        <a href="">Cancelar un seguro o garantía</a>
                    </p>
                </div>
                <div className='regret__box'>
                <p className='regret__content'>Conocé las normas que aplican cuando comprás
                    <br />
                        <a href="#">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
                    </p>
                </div>
            </div>
        </section>
        <section className='regulation-row'>
            <div className="container">
                <div className='container-regulation-row'>
                    <div className='help-email'>
                        <a href="#" className='help-email__link'>
                            <img className='help-email__icon' src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/./help-email/icon_email.svg" alt="" />
                            <span className='help-email__email'>ayuda@mercadolibre.com.ar</span>
                        </a>
                    </div>
                    <div className='national-insurance-info'>
                        <a href="" className='national-insurance-info__link'>
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" alt="" className='national-insurance-info__image' />
                        </a>
                    </div>
                    <div className='financial-user-info'>
                        <a href="" className='financial-user-info__link'>
                            <img src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg" alt="" className='financial-user-info__image'/>
                        </a>
                    </div>
                    <div className='afip'>
                        <a href="" className='afip-link'>
                            <img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className='nav-footer-access nav-footer-access-expanded'>
            <button id='nav-footer-access-switch'>Más información</button>
            <div className='nav-footer-access-content'>
                <div className='nav-bounds'>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Acerca de</h3>
                        <ul>
                            <li>
                                <a href="">Mercado Libre</a>
                            </li>
                            <li>
                                <a href="">Investor relations</a>
                            </li>
                            <li>
                                <a href="">Tendencias</a>
                            </li>
                            <li>
                                <a href="">Sustentabilidad</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Otros sitios</h3>
                        <ul>
                            <li>
                                <a href="">Developers</a>
                            </li>
                            <li>
                                <a href="">Mercado Pago</a>
                            </li>
                            <li>
                                <a href="">Mercado Shops</a>
                            </li>
                            <li>
                                <a href="">Mercado Envíos</a>
                            </li>
                            <li>
                                <a href="">Mercado Ads</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Ayuda</h3>
                        <ul>
                            <li>
                                <a href="">Comprar</a>
                            </li>
                            <li>
                                <a href="">Vender</a>
                            </li>
                            <li>
                                <a href="">Resolución de problemas</a>
                            </li>
                            <li>
                                <a href="">Centro de seguridad</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Redes sociales</h3>
                        <ul>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                            <li>
                                <a href="">Facebook</a>
                            </li>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Mi cuenta</h3>
                        <ul>
                            <li>
                                <a href="">Ingresá</a>
                            </li>
                            <li>
                                <a href="">Vender</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-footer-access-col'>
                        <h3 className='nav-footer-access-title'>Mercado Puntos</h3>
                        <ul>
                            <li>
                                <a href="">Nivel 6</a>
                            </li>
                            <li>
                                <a href="">Disney+</a>
                            </li>
                            <li>
                                <a href="">Star+</a>
                            </li>
                            <li>
                                <a href="">HBO MAX</a>
                            </li>
                            <li>
                                <a href="">Paramount+</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer className='nav-footer'>
            <div className='nav-footer-user-info nav-bounds'>
                <div className='nav-footer-info-wrapper'>
                    <div className='nav-footer-primaryinfo'>
                        <small className='nav-footer-copyright'>Lucas Jesús Britos Developer</small>
                        <nav className='nav-footer-navigation'>
                            <ul className='nav-footer-navigation__menu'>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Trabajá con nosotros</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Términos y condiciones</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Cómo cuidamos tu privacidad</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Accesibilidad</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Información al usuario financiero</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Ayuda</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Defensa del Consumidor</a>
                                </li>
                                <li className='nav-footer-navigation__item'>
                                    <a href="" className='nav-footer-navigation__link'>Información sobre seguros</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <p></p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer