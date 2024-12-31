import React from "react";
import banner1 from "../assets/images/banner/2.jpg";
import banner2 from "../assets/images/banner/1.jpg";
import banner3 from "../assets/images/banner/3.jpg";
import banner4 from "../assets/images/banner/4.jpg";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
// import required modules
import { Navigation } from "swiper/modules";

const banners = [
  {
    img: banner1,
    des: "The Drive of your life",
    path: "#",
  },
  {
    img: banner2,
    des: "The Power of Dreams",
    path: "#",
  },
  {
    img: banner3,
    des: "Romantic Chipping",
    path: "#",
  },
  {
    img: banner4,
    des: "What the Fog?",
    path: "#",
  },
];

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="slider-wrapper">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {banners.map((items, index) => (
            <SwiperSlide key={index}>
              <img src={items.img} alt={items.des} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
