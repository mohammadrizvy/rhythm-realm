import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../../assets/LottieAnimations/animation_lnyrpidh.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="  mx-auto pt-20 w-[30%]">
        <Lottie animationData={ErrorAnimation} loop={true} />
        <h1 className="text-7xl font-bold text-red-500">ERROR 404</h1>
        <Link to={"/"}>
          <button className="btn btn2 ml-[30%] mt-3 "> Go Back HOme</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
