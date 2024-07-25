import React from "react";
import UseClasses from "../Hooks/UseClasses";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Classes = () => {
  const [classes, refetch] = UseClasses();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

if(loading){
  return <Loader></Loader>;
}
useEffect(() => {
  AOS.init();
}, []);
  const isAdmin = false;
  const isInstructor = false;

  const isUserAdminOrInstructor = user && (isAdmin || isInstructor);

  const handleSelect = (classItem) => {
    if (!user || !user.email) {
      Swal.fire({
        title: "Please Log In",
        text: "You must log in to book a class.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const selectedClass = {
        classId: classItem._id,
        classname: classItem.className,
        price: classItem.price,
        image: classItem.image,
        email: user.email,
        availableSeats : classItem.availableSeats
      };
      fetch("https://assignment-12-server-sepia.vercel.app/selectedclasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="pt-28">
      <h1 className="text-center text-5xl font-bold">
        Explore Our Approved Classes
      </h1>
      <p className="title-sub text-center py-10">
        Discover a Wide Range of Exciting Courses Taught by Renowned Instructors
      </p>
      <div className="class-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((classItem, _id) => (
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center" // Center the card content vertically
          >
            <div
              className={`card card-compact w-[350px] h-[450px] p-4 bg-[#211c22] shadow-xl ${
                classItem.availableSeats === 0 ? "bg-red-500" : ""
              }`}
            >
              <figure>
                <img src={classItem.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classItem.className}</h2>
                <p>Instructor name: {classItem.name}</p>
                <p>Available seats: {classItem.availableSeats}</p>
                <p>Price: ${classItem.price}</p>
                <div className="card-actions justify-end"></div>
              </div>
              <button
                className="btn btn1"
                onClick={() => handleSelect(classItem)}
                disabled={
                  isUserAdminOrInstructor || classItem.availableSeats === 0
                }
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
