import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, loading, updateUserProfile, logOut } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(data.name, data.photoURL).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        logOut().then(() => {
          navigate("/");
        });
        reset();

      });
    })
    .catch((error) => {
      console.error("Error creating user :" , error)
      if(error.code === "auth/email-already-in-use"){
        Swal.fire({
          icon: "error",
          title: "Registration Error",
          text: "Email is already in use. Please use a different email.",
          showDenyButton: true,
          confirmButtonText: "Try Again",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result.isDenied) {
            navigate("/");
          }
        });
        // window.location.reload();
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="hero min-h-screen pt-28 bgc">
        <Helmet>
          <title>Rhythm Realm | Register </title>
        </Helmet>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#211c22]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl font-semibold text-center">Signup</h1>
                <label className="label"></label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  style={{ color: "black" }}
                />
                {errors.name && (
                  <span className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  style={{ color: "black" }}
                />
                {errors.email && (
                  <span className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label"></label>

                <input
                  {...register("photoURL", { required: true })}
                  type="url"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  style={{ color: "black" }}
                />
              </div>
              <div className="form-control">
                <label className="label"></label>
                <div className="relative">
                  <input
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    style={{ color: "black" }}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                      Password must have one uppercase , one lowercase , one
                      number and one special character
                    </p>
                  )}
                  <input
                    type="checkbox"
                    name=""
                    className="checkbox checkbox-primary checkbox-circle absolute right-2 top-3"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="confirm password"
                  className="input input-bordered"
                  style={{ color: "black" }}
                />
                {errors.confirmPassword && (
                  <span className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn1">Register</button>
              </div>
              <SocialLogin></SocialLogin>
              <p className="label-text-alt mt-6 text-white link link-hover">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#7a6efc]">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
