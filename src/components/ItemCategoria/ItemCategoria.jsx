import React from 'react'
import "./itemCategoria.css"

const ItemCategoria = ({categoria}) => {
  return (
    <>
        <a href="">
          <div href='#' className='card-category'>
                  <img src= {categoria.img} alt="" className="img-categoria" />
                  <p className='name-categories'>{categoria.categoria}</p>
          </div>
        </a>
    </>
  )
}

export default ItemCategoria