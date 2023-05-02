
import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext, CartContextProvider } from './context/Context'
import { useContext } from 'react'
import CartProducts from './components/cart/CartProducts'
import Carousel from './components/carousel/Carousel.jsx'
import PaysContainer from './components/paysContainer/PaysContainer.jsx'
import CarouselOfertas from './components/carouselOfertas/CarouselOfertas'
import Initial from './pages/Initial'
import Added from './components/Added/Added'
import Ingresar from './pages/Ingresar'
import SearchListContainer from './components/SearchListContainer/SearchListContainer'
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra'

function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='' element={<Initial/>} />
        <Route exact path='' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<CartProducts/>} />
          <Route path='/addeddata/:Id' element={<Added/>}/>
          <Route path='/session' element= {<Ingresar/>} />
          <Route path='search/:busqueda' element={<SearchListContainer/>} />
          <Route path='/finalizar-compra' element={<FinalizarCompra/>}  ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App