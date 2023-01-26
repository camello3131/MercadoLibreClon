import React from 'react'
import Cart from '../cartWidget/Cart'
import {NavLink} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
      <>
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
                        <span style={{fontSize:"11px", marginBottom:"0"}}>Enviar a Lucas</span>
                        <span style={{fontSize:"12px", fontWeight:"bolder", padding:"0"}}>Calle 15 483</span>
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
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        👤 Lucas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Mis Compras</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                        </a>
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