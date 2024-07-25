import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const PopularInstructors = () => {

  useEffect(() => {
    AOS.init();
  }, []);
const popularInstructors = [
  {
    name: "John Williams",
    image: "https://i.ibb.co/qBpz20Y/John-Williams.jpg",
    students: 100,
    classes: 10,
    description:
      "Experience the magic of music with John Williams.",
  },
  {
    name: "Yo-Yo Ma",
    image: "https://i.ibb.co/gt9h9tw/ums-photos-01346.jpg",
    students: 90,
    classes: 8,
    description:
      "Yo-Yo Ma, a virtuoso cellist.",
  },
  {
    name: "Andrés Segovia",
    image:
      "https://i.ibb.co/Sxq9nz7/3191-by-STRINGS-EXCLUSIVE-Lisa-Marie-Mazzucco.jpg",
    students: 80,
    classes: 7,
    description:
      "Learn the art of classical guitar from Andrés Segovia.",
  },
  {
    name: "Itzhak Perlman",
    image: "https://i.ibb.co/YdByMqx/a9ba068d5537f8c31b17a1462a6fdf81.jpg",
    students: 70,
    classes: 6,
    description:
      "Embark on a journey of violin mastery with Itzhak Perlman.",
  },
  {
    name: "Vladimir Horowitz",
    image: "https://i.ibb.co/F3v5hM5/tumblr-mstg1a1-BOA1qdqpe6o1-500.jpg",
    students: 60,
    classes: 5,
    description:
      "Discover the world of piano excellence with Vladimir Horowitz.",
  },
  {
    name: "Nina Simone",
    image: "https://i.ibb.co/Yps2755/5b92c68a566ed-408554b.jpg",
    students: 50,
    classes: 4,
    description:
      "Immerse yourself in the soulful sounds of jazz and blues with Nina Simone.",
  },
];

  return (
    <div className="popular-instructors">
      <div data-aos="fade-down-right" className="">
        <h2 className="text-5xl font-semibold text-center pt-14  mb-10">
          Meet Our Most Popular
          <br /> Instructors
        </h2>
        <h3 className="title-sub text-center mb-10">
          Discover Our Leading Music Instructors and Their Inspiring Journey.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularInstructors.map((instructor, index) => (
          <div
            key={index}
            className="instructor-card transition-transform transform scale-95 hover:scale-100  bg-[#211c22] shadow-lg p-4 rounded-lg"
          >
            <div
              data-aos="flip-up"
              className="flex relative items-center gap-4"
            >
              <div className="w-24 h-24 avatar rounded-xl   overflow-hidden">
                <img
                  src={instructor.image}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{instructor.name}</h2>
                <p className=" ptext font-semibold text-sm py-1">
                  {instructor.description}
                </p>
                <div className="flex items-center space-x-4">
                  <p className="  ptext text-sm font-semibold">
                    Students : {instructor.students}
                  </p>
                  <p className="text-sm ptext font-semibold">
                    Total Class : {instructor.classes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
