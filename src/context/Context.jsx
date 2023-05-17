import React, { createContext, useContext, useState, useEffect }  from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from './../firebase/config'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({children}) => {


    const [cart, setCart] = useState([])
    

    const addToCart = (item) => {
        setCart([
            ...cart,
            item
        ])
    }
    const totalPrice = () => {
        return cart.reduce((prev, act) => {
          const price = act.descuento 
            ? act.precio * (1 - act.descuento / 100) // aplicar descuento si lo tiene
            : act.precio // si no tiene descuento, usar precio original
          return prev + act.cantidad * price
        }, 0)
      }
      

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + parseInt(productoActual.cantidad), 0);

    const isInCart = (id) => {
        return cart.find (product => product.id === id) ? true:false ; 
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))


    const removeCart= () => {
        setCart([])
    }
    return(
        <CartContext.Provider
            value={{cart,
            addToCart,
            removeCart,
            totalPrice,
            totalProducts,
            isInCart,
            removeProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

