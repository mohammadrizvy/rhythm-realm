import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut , loading} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Log Out Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
    };


  const navOptions = (
    <>
      <div className="navitems gap-5 lg:flex text-sm items-center">
        <li className="hover:border-b-2 border-[#7a6efc]">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:border-b-2 border-[#7a6efc]">
          <NavLink to={"/instractors"}> Instructors</NavLink>
        </li>
        <li className="hover:border-b-2 border-[#7a6efc]">
          <NavLink to={"/classes"}>Classes</NavLink>
        </li>
        <li className="hover:border-b-2 border-[#7a6efc]">
          <NavLink to={"/dashboard/myclasses"}>Dashboard</NavLink>
        </li>
       
        <li className="hover:border-b-2 border-[#7a6efc]">
          <NavLink to={"/faq"}>FAQ</NavLink>
        </li>

        {user ? (
          <>
            <li
                onClick={handleLogOut}
              className=" hover:border-b-2 border-[#7a6efc]"
            >
              <a>LogOut</a>
            </li>
          </>
        ) : (
          <>
            <li className=" hover:border-b-2 border-[#7a6efc]"></li>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="navbar  pt-4 bgc fixed max-w-screen-xl z-10 shadow-2xl bg-opacity-30  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bgc rounded-box w-40"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center">
              <p className=" title-text text-red font-bold   text-4xl">
                Rhythm Realm
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          <div className=" flex items-center p-2 gap-2 rounded-lg px-3 ">
            {user ? (
              <>
                <div className="avatar">
                  <div className="w-12 rounded-full  ">
                    <Link to={"/dashboard/profile"}>
                      <img
                        src={
                          user
                            ? user.photoURL ||
                              "https://i.ibb.co/4sHVzFy/Internet-Download-Manager.jpg"
                            : "https://i.ibb.co/4sHVzFy/Internet-Download-Manager.jpg"
                        }
                      />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Link to={"/login"}>
                  <button className="btn2 btn btn-sm">Log In</button>
                </Link>
                <Link to={"signup"}>
                  <button className="btn1 btn btn-sm">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
