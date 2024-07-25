import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero min-h-screen bgc">
      <div className="hero-content flex-col lg:flex-row-reverse mt-28">
        <img
          data-aos="fade-right"
          src="https://i.ibb.co/FXrMJZF/14b8bbb3f56501ed47e148f03b8bd301.jpg"
          className="md:max-w-xs sm:max-w-xs lg:max-w-md rounded-lg shadow-2xl"
        />
        <div data-aos="zoom-out-up">
          <p className="title-sub ">Welcome</p>
          <h1 className="text-5xl w-[65%] font-bold mr-2">
            Unlock Your True Music
            <span style={{ color: "#7a6efc", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  " Potential",
                  " Possibility",
                  " Capability",
                  " Power",
                  " Ability",
                  " Talent",
                ]}
                loop={0}
                cursor
                cursorStyle="| "
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="ptext my-6">
            Unlock musical mastery at our instrument learning school. Expert
            instruction, diverse courses, and a vibrant community await. Start
            your music journey with us today
          </p>

          <Link to={"signup"}>
            <button className="btn btn1 mr-5 ">Sign up for free</button>
          </Link>
          <button className="btn btn2 ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
