import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Marquee from '../Marquee/Marquee';

const Homee = () => {
    return (
      <div>
        <Helmet>
          <title>Rhythm Realm | Home</title>
        </Helmet>
        <Banner></Banner>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <Marquee></Marquee>
      </div>
    );
};

export default Homee;