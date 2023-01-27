import React from 'react'
import Carousel from '../components/carousel/Carousel'
import CarouselOfertas from '../components/carouselOfertas/CarouselOfertas'
import PaysContainer from '../components/paysContainer/PaysContainer'

const Initial = () => {
  return (
    <div>
        <Carousel/>
        <PaysContainer/>
        <CarouselOfertas/>
    </div>
  )
}

export default Initial