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

    const removeCart= () => {
        setCart([])
    }
    return(
        <CartContext.Provider
            value={{cart,
            addToCart,
            removeCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

