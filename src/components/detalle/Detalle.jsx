import React from 'react'
import { useState } from 'react'

const detalle = ({item}) => {


  console.log(item)
  return (
    <div>
      <img src={item.img} alt="" />
      <p>{item.nombre}</p>
    </div>
  )
}

export default detalle