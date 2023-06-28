import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [nav, setnav] = useState(true);
  const handnav = () => {
    setnav(!nav);
  };
  return (
    <div className="text-white w-full">
      <div className="max-w-[1420px] mx-auto flex justify-between items-center my-8 py-7 px-7 ">
        <h1 className="text-green-600 text-2xl capitalize w-full">ReactJs</h1>
        <ul className="md:flex hidden ">
          <li className="ml-4 capitalize cursor-pointer">Home</li>
          <li className="ml-4 capitalize cursor-pointer">About</li>
          <li className="ml-4 capitalize cursor-pointer">Services</li>
          <li className="ml-4 capitalize cursor-pointer">Contact</li>
        </ul>
        <div onClick={handnav} className="block  md:hidden cursor-pointer">
          {!nav && <TfiClose size={30} />}
          {nav && <FiMenu color="white" size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed  top-0 left-[0] py-8 w-[40%] bg-black  h-screen md:hidden duration-300 ease-in-out"
              : "fixed left-[-100%]"
          }
        >
          <ul className="">
            <h1 className="text-green-600 text-2xl capitalize w-full ml-8   mt-8">
              ReactJs
            </h1>
            <li className="pl-8 py-4   mt-8 capitalize cursor-pointer border-b border-gray-400">
              Home
            </li>
            <li className=" pl-8 py-4   capitalize cursor-pointer border-b border-gray-400">
              About
            </li>
            <li className="pl-8 py-4    capitalize cursor-pointer border-b border-gray-400">
              Services
            </li>
            <li className="pl-8 py-4    capitalize cursor-pointer border-b border-gray-400">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
