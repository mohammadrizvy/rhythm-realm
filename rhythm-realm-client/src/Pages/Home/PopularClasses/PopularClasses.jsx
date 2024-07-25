import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const PopularClasses = () => {
  useEffect(() => {
    AOS.init();
  }, []);
      const topClasses = [
        {
          title: "Piano Mastery",
          description:
            "Unlock the world of melodies with our Piano Mastery classes. Learn to play like a professional with personalized lessons. Join us to explore the magic of piano music.",
          students: 120,
        },
        {
          title: "Guitar Basics",
          description:
            "Discover the art of guitar playing with our Guitar Basics courses. Our expert instructors guide you through fundamentals, helping you master chords and melodies.",
          students: 90,
        },
        {
          title: "Violin Virtuoso",
          description:
            "Becoming a Violin Virtuoso is a journey we'll take together. Join our skilled instructors and achieve virtuoso-level violin skills through guided programs.",
          students: 80,
        },
        {
          title: "Drum Beats Workshop",
          description:
            "Elevate your rhythmic prowess with our Drum Beats Workshop. Learn to create amazing beats with the guidance of experienced percussionists.",
          students: 110,
        },
        {
          title: "Saxophone Grooves",
          description:
            "Dive into the enchanting world of saxophone music with our Saxophone Grooves courses. Our expert lessons will make you a maestro of melodies.",
          students: 70,
        },
        {
          title: "Flute Enchantment",
          description:
            "Enchant the world with melodious flute tunes from our seasoned flutists. Join Flute Enchantment to create enchanting melodies and captivate audiences.",
          students: 60,
        },
      ];
;
    return (
      <div className="">
        <div data-aos="fade-right" className="">
          <h1 className="text-center text-5xl font-bold pt-16 pb-6">
            Popular Music Classes
          </h1>
          <h3 className="title-sub mb-16 text-center">
            {" "}
            Discover Top-Rated Courses in Music Instrument Learning
          </h3>
        </div>
        <div className="popular-classes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-screen-xl">
          {topClasses.map((classData, index) => (
            <div
              key={index}
              data-aos="flip-right"
              className="class-card w-full md:w-96 h-72"
            >
              <div className="card bg-[#211c22]">
                <div className="card-body">
                  <p className="title-sub">Class {index + 1}</p>
                  <h2 className="card-title text-3xl">{classData.title}</h2>
                  <p className="text-sm">
                    Students Enrolled : {classData.students}
                  </p>
                  <p className="ptext">{classData.description}</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center py-10">
          <button className="btn btn1 text-white">
            Learn more about classes
          </button>
        </div>
      </div>
    );
};

export default PopularClasses;