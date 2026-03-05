import React from "react";
import vector2 from "../../assets/vector2.png";
import vector1 from "../../assets/vector1.png";

const Banner = ({countProgress,countResolved}) => {
  return (
    <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-8 my-20">
      <div className="lg:w-6/12">
        <div
          className={`bg-linear-to-r from-[#632EE3] to-[#9F62F2]  rounded-2xl bg-[url(${vector2})] flex justify-between relative`}
        >
          <div className="h-70 w-6/12">
            <img className="w-full h-full object-cover" src={vector1} alt="" />
          </div>
          <div className="text-center text-2xl absolute inset-0 top-4/12 text-white">
            <h2>In-Progress</h2>
            <span className="text-5xl font-bold">{countProgress}</span>
          </div>
          <div className="h-70 w-6/12">
            <img
              className="scale-x-[-1] w-full h-full object-cover"
              src={vector1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:w-6/12">
        <div
          className={`bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-2xl bg-[url(${vector2})] flex justify-between relative`}
        >
          <div className="h-70 w-6/12">
            <img className="w-full h-full object-cover" src={vector1} alt="" />
          </div>
          <div className="text-center text-2xl absolute inset-0 top-4/12 text-white">
            <h2>Resolved</h2>
            <span className="text-5xl font-bold">{countResolved}</span>
          </div>
          <div className="h-70 w-6/12">
            <img
              className="scale-x-[-1] w-full h-full object-cover"
              src={vector1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
