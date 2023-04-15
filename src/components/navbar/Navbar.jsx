import React from 'react'
import Cart from '../cartWidget/Cart'
import {NavLink} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
      <>
    {/*
      <header role="banner" className='nav-header nav-header-plus ui-navigation-v2'>
        <div className='nav-bounds nav-bounds-with-cart nav-bounds-with-cp'>
            <div className='nav-header-plus-logo nav-area nav-top-area nav-left-area'>
                <a href="" id='nav-skip-to-main-content' className='nav-skip-to-main-content'></a>
                <a href="" className='nav-logo'></a>
            </div>
            <div className='nav-area nav-top-area nav-center-area'>
                <form action="" className='nav-search' method="GET" role="search">
                    <label htmlFor="" className='nav-header-visually-hidden' for="nav-search-input">Ingresá lo que quieras encontrar</label>
                    <input type="text" className='nav-search-input' id='cb1-edit' name="as_word"
                        placeholder="Buscar productos, marcas y más…" maxLength={120}
                        autoFocus autoCapitalize='off' autoCorrect='off'
                        spellCheck="false" autoComplete='off' aria-controls='cb1-list'
                        aria-autocomplete='list' aria-expanded="false" role='combobox'
                    />
                    <button type='submit' className='nav-search-btn'>
                        <div className='nav-icon-search' role="img" aria-label='Buscar'></div>
                    </button>
                    <div className='sb-suggestions' id='sb-suggestions-1' aria-hidden="true" style={{
                        display: "none", top: "40px", width: "414px", position: "absolute"
                    }}>
                        <ul className='sb-suggestions__list' role="listbox" id="cb1-list"></ul>
                        <div className='sb-suggestions__wrapper--additional'>
                            <ul className='sb-suggestions__list--additional'></ul>
                        </div>
                    </div>
                </form>
            </div>
            <div className='nav-area nav-top-area nav-right-area'>
                <a href="" className='exhibitor__picture'>
                    <img src="https://http2.mlstatic.com/D_NQ_773701-MLA54334638216_032023-OO.webp" alt="" />
                </a>
            </div>
            <div className='nav-header-plus-cp-wrapper nav-area nav-bottom-area nav-left-area'>
                <a href="" className='nav-header-cp-anchor'>
                    <span className='nav-menu-cp-send'>Enviar a</span>
                    <span className='nav-menu-link-cp'> Capital Federal</span>
                </a>
                <div className='nav-menu-item'>
                    <a href="" className='nav-menu-cp nav-menu-cp-logged' aria-expanded="false" aria-haspopup="true" >
                        <span className='nav-menu-cp-send'>Enviar a</span>
                        <span className='nav-menu-link-cp'> Capital Federal</span>
                    </a>
                </div>
            </div>
            <div className='nav-area nav-bottom-area nav-center-area'>
                <div className='nav-menu'>
                    <ul className='nav-menu-list'>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Categorías</a>
                            <div className='nav-categs' aria-label='Categorías' aria-modal="true" tabIndex={-1} role='dialog' hidden="hidden">
                                <ul className='nav-categs-departments'>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Autos,%20motos%20y%20otros"}>Vehículos</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Inmuebles"}>Inmuebles</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Supermercado"}>Supermercado</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Computación"}>Tecnología</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Electrodomésticos%20y%20Aires%20AC."}>Hogar y Muebles</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Electrodomésticos%20y%20Aires%20AC."}>Electrodomésticos</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Herramientas"}>Herramientas</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Construcción"}>Construcción</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Deportes%20y%20Fitness"} >Deportes y Fitness</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Accesorios%20para%20Vehículos"} >Accesorios para Vehículos</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Ropa%20y%20accesorios"} >Moda</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Juegos%20y%20juguetes"}>Juegos y Juguetes</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Bebés"} >Bebés</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Belleza%20y%20cuidado%20personal"}>Belleza y Cuidado Personal</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Salud%20y%20Equipamiento%20Médico"} >Salud y Equipamiento Médico</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Industrias%20y%20Oficina"}>Industrias y Oficinas</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Agro"}>Agro</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Alimentos%20y%20Bebidas"} >Productos Sustentables</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink to={"categoria/Servicios"} >Servicios</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink >Más vendidos</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink >Tiendas oficiales</NavLink>
                                    </li>
                                    <li className='nav-categs-departments__list nav-categs-departments__list--static'>
                                        <NavLink>Ver más categorías</NavLink>
                                    </li>
                                </ul>
                                <div className='nav-categs-detail' hidden="hidden" aria-modal="true" role='dialog' tabIndex={-1} ></div>
                            </div>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Ofertas</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Historial</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Supermercado</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Moda</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Vender</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a href="" className='nav-menu-categories-link' aria-expanded="false" role='button'>Ayuda</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='nav-header-plus-menu-wrapper nav-area nav-bottom-area nav-right-area'>
                <nav id='nav-header-menu'>
                    <a href="">Creá tu cuenta</a>
                    <a href="">Ingresá</a>
                    <a href="">Mis compras</a>
                </nav>
                <NavLink to={"/cart"} className={"nav-cart nav-cart-empty"} id='nav-cart'>
                    <Cart/>
                </NavLink>
            </div>
        </div>
      </header>
*/}

      <div className='containerAllNavbar container-fluid'>
      <div className='containerAllNavbar'>
        <nav className="navbar navbar-expand-sm nav-color" style={{height:"55px"}}>
            <div className="container-fluid justify-content-center">
            <NavLink className="navbar-brand" to={"/"}>
                    <img src='../src/assets/logo.png'/>
            </NavLink>
                <form className='formSearch'>
                    <label className='nav-header-visually-hidden' for="nav-search-input">Ingresá lo que quieras encontrar</label>
                    <input placeholder='Buscar productos, marcas y más…' className='nav-search-input' style={{width:"85%", marginLeft:"32px"}}/>
                    <button className='nav-search-btn btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </button>
                    <div></div>
                </form>
                <NavLink className="navbar-brand nav-disney" to={"/"} >
                    <img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' style={{height:"40px", }}/>
                </NavLink>
            </div>
        </nav>
        <nav className="navbar navbar-expand-sm nav-color container containerNavInferior" style={{height:"55px"}}>
            <div className="container-fluid justify-content-center ">
            <button className='btn d-flex' style={{minWidth:"fit-content"}}>
                <div className='d-flex svgcont'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="20px" height="45px" viewBox="0 0 948.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet" >
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M4420 12789 c-943 -64 -1863 -417 -2600 -998 -989 -780 -1620 -1890
                        -1780 -3131 -59 -455 -49 -840 30 -1209 241 -1122 1084 -2707 2479 -4656 588
                        -823 1434 -1907 2054 -2633 l137 -162 88 103 c303 353 824 996 1173 1447 1947
                        2515 3117 4541 3409 5901 79 369 89 754 30 1209 -160 1242 -791 2351 -1780
                        3131 -908 717 -2075 1076 -3240 998z m501 -299 c447 -20 821 -89 1239 -229
                        922 -309 1721 -921 2264 -1736 140 -209 218 -345 312 -540 211 -441 351 -920
                        408 -1400 33 -277 38 -655 11 -845 -76 -529 -286 -1122 -659 -1870 -616 -1232
                        -1641 -2757 -2995 -4455 -292 -366 -748 -915 -760 -915 -16 0 -529 621 -877
                        1060 -1085 1372 -1995 2693 -2584 3751 -552 991 -861 1777 -955 2429 -27 190
                        -22 568 11 845 144 1206 776 2297 1756 3033 697 522 1561 832 2437 871 91 5
                        171 9 176 9 6 1 103 -3 216 -8z"/>
                        <path d="M4515 10228 c-487 -49 -964 -277 -1315 -628 -328 -328 -538 -737
                        -615 -1200 -23 -134 -31 -422 -16 -562 55 -507 277 -973 631 -1328 369 -369
                        849 -587 1388 -631 360 -30 767 49 1106 215 681 332 1134 983 1217 1744 15
                        140 7 429 -16 562 -78 463 -285 869 -610 1195 -464 467 -1114 699 -1770 633z
                        m379 -218 c373 -31 730 -167 1031 -393 102 -76 303 -278 379 -380 217 -292
                        349 -631 386 -996 59 -585 -168 -1193 -598 -1603 -758 -721 -1946 -721 -2704
                        0 -335 319 -550 762 -598 1231 -48 478 91 972 386 1368 76 102 277 304 379
                        380 294 221 654 360 1011 391 140 13 193 13 328 2z"/>
                        </g>
                        </svg>
                </div>
                    <div className='d-flex flex-column'>
                        <span style={{fontSize:"11px", marginBottom:"0"}}>Ingresa tu domicilio</span>
                    </div>
                </button>
                <form className='formSearch' id='barra'>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{minWidth:"78%"}}>
                <ul className="navbar-nav" >
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><NavLink to={"categoria/gorras"} className={({isActive}) => isActive? "navbarActive nav-link" : "nav-link"}>
                                Gorras
                            </NavLink></li>
                        <li>
                            <NavLink to={"categoria/remeras"} className={({isActive}) => isActive? "navbarActive nav-link" : "nav-link"}>
                                Remeras
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"categoria/zapatillas"} className={({isActive}) => isActive? "navbarActive nav-link" : "nav-link"}>
                                Zapatillas
                            </NavLink>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Historial</a>
                    </li>
                    <li className="nav-item" id='supermercado'>
                    <a className="nav-link" href="#">Supermercado</a>
                    </li>
                    <li className="nav-item" id='moda'>
                    <a className="nav-link" href="#">Moda</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Vender</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                    </li>
                </ul>
                </div>
                </form>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Crea tu cuenta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Ingresa</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Mis Compras</a>
                        </li>
                        <li className="nav-item">
                        <NavLink className={"navbar-brand nav-link"} to={"/cart"} >
                            <Cart/>
                        </NavLink>
                        </li>
                    </ul>
                    </div>
            </div>
        </nav>
      </div>
      </div>
      
    </>
  )
}

export default Navbar