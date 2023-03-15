

import { useState, useEffect } from "react";
import { getFetch } from '../helpers/getFetch.js'

import "./carouselOfertas.css";

import ItemOfertas from "../ItemOfertas/ItemOfertas";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function CarouselOfertas() {
  const [loading, setLoading] = useState(true)
  const [products, setProduct] = useState([])
  const [ofertas, setOfertas] = useState([])

  useEffect(() => {
    getFetch()
    .then ((res) => {
        setProduct(res)
        setOfertas(res.filter(product => product.descuento > 0))
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 3 
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
      

  return (
    <>
      <div className="container-all-carousel">
          <div className="section-header">
            <h4>Ofertas</h4>
            <a href="#">Ver mas</a>
          </div>
      {
        loading? 
        <div className='container spinner'>
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      :
      <Carousel 
      responsive={responsive}
      keyBoardControl={true}
      containerClass="carousel-container"
      >
        {ofertas.map(oferta => 
        <ItemOfertas oferta={oferta} key={oferta.id}/>
        )}
      </Carousel>
      }
    </div>
  </>

  );
}