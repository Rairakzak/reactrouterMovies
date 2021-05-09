import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../images/1.jpeg";
import bg2 from "../images/2.jpeg";
import bg3 from "../images/3.jpeg";
import bg4 from "../images/4.jpeg";
import bg5 from "../images/5.jpeg";
const HomePage = () => {
  return (
    <div className="home">
      <div className="cta-block">
        <h1>All About Movies</h1>
        <Link className="btnalike" to="/discover">
          Discover Movies
        </Link>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 20,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img src={bg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
