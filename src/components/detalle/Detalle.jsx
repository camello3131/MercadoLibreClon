import React from 'react'
import { useState } from 'react'

const detalle = ({data}) => {


  console.log(data)
  return (
    <div>
      <img src={data.img} alt="" />
      <p>{data.nombre}</p>
    </div>
  )
}

export default detalle