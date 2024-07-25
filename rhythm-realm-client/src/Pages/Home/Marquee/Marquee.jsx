import React from 'react';
import Marquee from "react-fast-marquee";
import MarqueeComp from '../../Components/MarqueeComp';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Marqueee = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <>
        <h1 data-aos="fade-up" className="text-5xl py-16 text-center">
          Evething you need to succeed
        </h1>
        <div data-aos="flip-right" className="mb-16 ">
          <Marquee>
            <MarqueeComp></MarqueeComp>
            <MarqueeComp></MarqueeComp>
            <MarqueeComp></MarqueeComp>
          </Marquee>
        </div>
      </>
    );
};

export default Marqueee;