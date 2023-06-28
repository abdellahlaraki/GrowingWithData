import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full text-white py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 p-3 gap-4">
        <div>
          <h2 className="md:text-xl lg:text-2xl text-3xl">
            Want tips and & tricks to optimaze your flow?
          </h2>
          <p className="mt-4 text-sm text-green-300 ">sign up to our NewsLetter and stay up to date.</p>
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="w-full  lg:w-[500px] p-3 text-black"
          />
          <button className="p-3 bg-green-300 w-[200px] mt-3  lg:ml-3 text-black font-bold  rounded-xl">
            Sign up
          </button>
          <p  className="mt-4">we care about the protection of your data.
Read here <span className="text-green-300">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
