

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carouselOfertas.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarouselOfertas() {
  return (
    <>
      <div className="container-text-carousel container">
        <h3>Ofertas</h3>
        <a href="">Ver todas</a>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container-fluid"
      >
        <SwiperSlide>
          <div>
            <div className="card" style={{width:"15rem"}}>
              <img src="https://http2.mlstatic.com/D_Q_NP_641871-MLA41957572071_052020-AB.webp" className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="card-text"> descripcion del producto </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </>
  );
}