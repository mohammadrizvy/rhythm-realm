import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = (event) => {
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="custom-divider divider"></div>
      <div className="flex justify-center gap-10 -mt-5  ">
        <button onClick={handleGoogleSignIn} className="btn btn1 w-[30%] ">
          <FaGoogle></FaGoogle>
        </button>

        <button className="btn btn1 w-[30%]">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
