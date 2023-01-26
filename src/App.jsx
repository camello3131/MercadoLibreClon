import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext, CartContextProvider } from './context/Context'
import { useContext } from 'react'
import CartProducts from './components/cart/CartProducts'
import Carousel from './components/carousel/Carousel.jsx'

function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='' element={<Carousel/>} />
        {/* 
          <Route exact path='' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='categoria/:categoriaId' element={<ItemListContainer/>} />
        */}
          <Route path='cart' element={<CartProducts/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
