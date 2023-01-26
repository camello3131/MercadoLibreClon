import React from 'react'
import Item from '../item/Item'


const ItemList= ({products, categoria}) =>{

    return(
      categoria?
      products.map( product =>
        product.categoria === categoria ?
        <Item product={product} key={product.id} />
        :
        null
      )
      :
      products.map(product => 
        <Item product={product} key={product.id}/>
      )
    )
  }

export default ItemList