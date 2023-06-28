import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-2 py-5">
        <div className="shadow-lg mt-5 bg-white  flex flex-col  items-center justify-between pb-3 cursor-pointer hover:scale-110 rounded-xl duration-300 ease-in-out px-6">
          <BsPersonCircle className="w-20 h-20 mt-[-30px] " /> <br />
          <h1 className="text-4xl my-3 font-medium" >Single User</h1> <br />
          <p className="text-2xl">$149</p>
          <ul className="w-full text-center py-7">
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0]  ">500 GB Strorage</li>
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0] ">1 Granted user</li>
            <li className="text-sm capitalize  py-4 border-b border-[#e2e8f0] ">Send up to GB</li>
          </ul>
          <button className="p-3 bg-green-500 w-[200px] mt-3 text-xl   text-white font-bold  rounded-xl">Free Trial</button>
        </div>
        <div className="shadow-lg mt-5 bg-white  flex flex-col  items-center justify-between pb-3 cursor-pointer hover:scale-110 rounded-xl duration-300 ease-in-out px-6">
          <BsPersonCircle className="w-20 h-20 mt-[-30px] " /> <br />
          <h1 className="text-4xl my-3 font-medium" >Single User</h1> <br />
          <p className="text-2xl">$149</p>
          <ul className="w-full text-center py-7">
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0]  ">500 GB Strorage</li>
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0] ">1 Granted user</li>
            <li className="text-sm capitalize  py-4 border-b border-[#e2e8f0] ">Send up to GB</li>
          </ul>
          <button className="p-3 bg-green-500 w-[200px] mt-3 text-xl   text-white font-bold  rounded-xl">Free Trial</button>
        </div>
        <div className="shadow-lg mt-5 bg-white  flex flex-col  items-center justify-between pb-3 cursor-pointer hover:scale-110 rounded-xl duration-300 ease-in-out px-6">
          <BsPersonCircle className="w-20 h-20 mt-[-30px] " /> <br />
          <h1 className="text-4xl my-3 font-medium" >Single User</h1> <br />
          <p className="text-2xl">$149</p>
          <ul className="w-full text-center py-7">
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0]  ">500 GB Strorage</li>
            <li className="text-sm capitalize py-4 border-b border-[#e2e8f0] ">1 Granted user</li>
            <li className="text-sm capitalize  py-4 border-b border-[#e2e8f0] ">Send up to GB</li>
          </ul>
          <button className="p-3 bg-green-500 w-[200px] mt-3 text-xl   text-white font-bold  rounded-xl">Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
