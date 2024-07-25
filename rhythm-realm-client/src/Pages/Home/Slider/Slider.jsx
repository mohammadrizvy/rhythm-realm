import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";import slide1 from "../../../assets/Instruments/Synthesizer.jpg";
import slide2 from "../../../assets/Instruments/violin.jpg";
import slide3 from "../../../assets/Instruments/Didgeridoo.jpg";
import slide4 from "../../../assets/Instruments/guitar.jpg";
import slide5 from "../../../assets/Instruments/saxophone.jpg";
import slide6 from "../../../assets/Instruments/closeup-part-drum.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css"; 
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <div data-aos="fade-right" className="">
        <h1 className="text-5xl text-center  font-bold">Harmonious Ensemble</h1>
        <p className="title-sub  text-center my-6">
          Discover the World of Music Instruments
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        data-aos="fade-up"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
