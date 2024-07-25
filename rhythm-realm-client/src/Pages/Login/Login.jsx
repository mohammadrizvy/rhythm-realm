import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../Components/Loader/Loader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error during login:", error);
        let errorMessage = "An error occurred. Please try again.";

        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "Email not found. Please check your email.";
            break;
          case "auth/invalid-login-credentials":
            errorMessage = "Wrong password. Please check your password.";
            break;
          default:
            break;
        }

        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: errorMessage,
          showDenyButton: true,
          confirmButtonText: "Try Again",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result.isDenied) {
            navigate("/");
          }
        });
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="hero min-h-screen pt-28 bgc">
        <Helmet>
          <title>Rhythm Realm | Login</title>
        </Helmet>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#211c22]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <label className="label"></label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                    style={{ color: "black" }}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-700 mt-2 -mb-3 text-sm ml-3">
                      Password is required
                    </p>
                  )}
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-circle absolute right-2 top-3"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                </div>
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn1">Login</button>
              </div>
              <SocialLogin></SocialLogin>
              <p className="label-text-alt text-white link link-hover">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-[#7a6efc]">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
