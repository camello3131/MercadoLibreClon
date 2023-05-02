import React, { createContext, useContext, useState }  from 'react'

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
    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

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
            removeProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

