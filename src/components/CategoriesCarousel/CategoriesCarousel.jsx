import React from 'react'
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemTienda from '../ItemTienda/ItemTienda.jsx';
import { categorias } from '../helpers/getFetch.js';

const CategoriesCarousel = () => {
    
  console.log (categorias)
  return (
    <div>CategoriesCarousel</div>
  )
}

export default CategoriesCarousel