import React from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Instractors = ({instructor}) => {
useEffect(() => {
  AOS.init();
}, []);
    const instructors = [
      {
        name: "Wolfgang Amadeus Mozart",
        image: "https://i.ibb.co/NZcn2gv/9243645.jpg",
        email: "wolfgang.mozart@gmail.com",
        students: 110,
        classes: 12,
        description:
          "Experience classical brilliance with Wolfgang Amadeus Mozart.",
      },
      {
        name: "Eric Clapton",
        image: "https://i.ibb.co/jf97cmz/0119620a04d54c89c268c168543b1b8a.jpg",
        email: "eric.clapton@gmail.com",
        students: 75,
        classes: 6,
        description: "Learn guitar and blues with Eric Clapton.",
      },
      {
        name: "Beethoven",
        image: "https://i.ibb.co/4ZdrhgH/young-beethoven-1343753038-view-1.png",
        email: "beethoven@gmail.com",
        students: 105,
        classes: 11,
        description: "Immerse in classical music with the iconic Beethoven.",
      },
      {
        name: "B.B. King",
        image: "https://i.ibb.co/hCx6CKM/0d393693b15d6baeecc3fb061a019b54.jpg",
        email: "bb.king@gmail.com",
        students: 65,
        classes: 5,
        description: "King of the blues, B.B. King's guitar teachings.",
      },
      {
        name: "Freddie Mercury",
        image: "https://i.ibb.co/bHNvgdm/85053f9facca7142a4c484a043a0fbe9.jpg",
        email: "freddie.mercury@gmail.com",
        students: 80,
        classes: 8,
        description: "Learn vocals and rock with Freddie Mercury.",
      },
      {
        name: "Charlie Parker",
        image: "https://i.ibb.co/j84b0jq/74809.webp",
        email: "charlie.parker@gmail.com",
        students: 70,
        classes: 7,
        description: "Master the saxophone with Charlie Parker.",
      },
      {
        name: "Carlos Santana",
        image: "https://i.ibb.co/0DdNgfV/212705aab953a76e6b8043286ba91515.jpg",
        email: "carlos.santana@gmail.com",
        students: 85,
        classes: 9,
        description: "Experience the guitar magic of Carlos Santana.",
      },
      {
        name: "Elton John",
        image: "https://i.ibb.co/s56wg5k/gettyimages-515292634-612x612.jpg",
        email: "elton.john@gmail.com",
        students: 120,
        classes: 13,
        description: "Learn piano and songwriting with Elton John.",
      },
      {
        name: "Billie Holiday",
        image: "https://i.ibb.co/DLNyqQL/fe266ae7f52eabae66c0dcded92d7f13.jpg",
        email: "billie.holiday@gmail.com",
        students: 55,
        classes: 5,
        description: "Explore jazz and vocal performance with Billie Holiday.",
      },
      {
        name: "Tchaikovsky",
        image: "https://i.ibb.co/HzLsscZ/tumblr-njckuej7-NM1rzknswo1-400.webp",
        email: "tchaikovsky@gmail.com",
        students: 90,
        classes: 9,
        description: "Delve into classical composition with Tchaikovsky.",
      },
      {
        name: "John Williams",
        image: "https://i.ibb.co/qBpz20Y/John-Williams.jpg",
        email: "john.williams@gmail.com",
        students: 100,
        classes: 10,
        description: "Experience the magic of music with John Williams.",
      },
      {
        name: "Yo-Yo Ma",
        image: "https://i.ibb.co/gt9h9tw/ums-photos-01346.jpg",
        email: "yo-yo.ma@gmail.com",
        students: 90,
        classes: 8,
        description: "Yo-Yo Ma, a virtuoso cellist.",
      },
      {
        name: "Andrés Segovia",
        image:
          "https://i.ibb.co/Sxq9nz7/3191-by-STRINGS-EXCLUSIVE-Lisa-Marie-Mazzucco.jpg",
        email: "andres.segovia@gmail.com",
        students: 80,
        classes: 7,
        description: "Learn the art of classical guitar from Andrés Segovia.",
      },
      {
        name: "Itzhak Perlman",
        image: "https://i.ibb.co/YdByMqx/a9ba068d5537f8c31b17a1462a6fdf81.jpg",
        email: "itzhak.perlman@gmail.com",
        students: 70,
        classes: 6,
        description:
          "Embark on a journey of violin mastery with Itzhak Perlman.",
      },
      {
        name: "Vladimir Horowitz",
        image: "https://i.ibb.co/F3v5hM5/tumblr-mstg1a1-BOA1qdqpe6o1-500.jpg",
        email: "vladimir.horowitz@gmail.com",
        students: 60,
        classes: 5,
        description:
          "Discover the world of piano excellence with Vladimir Horowitz.",
      },
      {
        name: "Nina Simone",
        image: "https://i.ibb.co/Yps2755/5b92c68a566ed-408554b.jpg",
        email: "nina.simone@gmail.com",
        students: 50,
        classes: 4,
        description:
          "Immerse yourself in the soulful sounds of jazz and blues with Nina Simone.",
      },
      {
        name: "Jimi Hendrix",
        image: "https://i.ibb.co/WtJ15Pp/5f6edb375936e-466448b.jpg",
        email: "jimi.hendrix@gmail.com",
        students: 95,
        classes: 9,
        description: "Learn guitar with the legendary Jimi Hendrix.",
      },
      {
        name: "Miles Davis",
        image: "https://i.ibb.co/wKpzSq9/eab810607a4deae6da7d0eb480dd7be4.jpg",
        email: "miles.davis@gmail.com",
        students: 85,
        classes: 7,
        description: "Jazz it up with trumpet master Miles Davis.",
      },
    ];


    return (
      <>
        <Helmet>
          <title>Rhythm Realm | Instractors </title>
        </Helmet>
        <div className="popular-instructors min-h-screen ">
          <h2 className="text-5xl font-semibold text-center pt-32">
            Meet Our Talented
            <br /> Instructors
          </h2>
          <h3 className="title-sub text-center mb-10">
            Discover the World of Music with Renowned Masters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                data-aos="zoom-out"
                className="instructor-card transition-transform transform scale-95 hover:scale-100  bg-[#211c22] shadow-lg p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 avatar rounded-xl    overflow-hidden">
                    <img
                      src={instructor.image}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{instructor.name}</h2>
                    <p className=" ptext font-semibold text-sm py-1">
                      Email : {instructor.email}
                    </p>
                    <div className="flex items-center space-x-4">
                      <p className="  ptext text-sm font-semibold">
                        Classes Taken : {instructor.classes}
                      </p>
                      <p className="text-sm ptext font-semibold">
                        Students : {instructor.students}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Instractors;