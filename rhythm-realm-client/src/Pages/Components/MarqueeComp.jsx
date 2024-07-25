import React from 'react';

const MarqueeComp = () => {
    return (
      <div className="flex gap-10">
        <div className="flex-row ml-10 p-10 rounded-lg  bg-[#211c22]">
          <h1 className="text-4xl text-center">45</h1>
          <p className="title-sub font-semibold text-xl text-center ">Lessons</p>
        </div>
        <div className="flex-row p-10 rounded-lg  bg-[#211c22]">
          <h1 className="text-4xl text-center">35+</h1>
          <p className="title-sub font-semibold text-xl text-center ">Classes</p>
        </div>
        <div className="flex-row p-10 rounded-lg  bg-[#211c22]">
          <h1 className="text-4xl text-center">20</h1>
          <p className="title-sub font-semibold text-xl text-center ">Mentors</p>
        </div>
        <div className="flex-row p-10 rounded-lg bg-[#211c22]">
          <h1 className="text-4xl text-center">13+</h1>
          <p className="title-sub font-semibold text-xl text-center ">Students</p>
        </div>
      </div>
    );
};

export default MarqueeComp;