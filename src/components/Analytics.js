import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="bg-white py-[96px] w-full">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-1 pl-2 ">
        <img
          src={laptop}
          className="w-[500px] md:h-[300px] mx-auto rounded-md "
          alt=""
          srcset=""
        />
        <div className="flex flex-col justify-center my-auto sm:items-center  md:items-start sm:ml-2">
          <p className="text-green-500 text-sm">Data Analytics Dashboard</p>
          <h1 className="text-3xl">Manage Data Analytics centrally</h1>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Repellat, iste? Error neque minus officia perferendis!
          </p>
          <button className="w-[200px] bg-green-500 py-3 ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
