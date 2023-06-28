import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className=" text-white">
      <div className=" w-full h-screen max-w-[800px]  mx-auto mt-[-154px] flex flex-col justify-center items-center">
        <p className="text-green-500 text-sm ">GROWING WITH DATA ANALYTICS</p>
        <h1 className="  sm:text-4xl  md:text-5xl lg:text-7xl  text-2xl font-bold my-4 ">GROW WITH DATA</h1>
        <p className="md:text-2xl text-xl ">flex,flexible financing for <span>
        <Typed
        strings={[
           "Saas","Ecommerce","Stock"

        ]}
        typeSpeed={50}
        backSpeed={30}
        loop

        />
        </span></p>
        <p className="text-sm lg:text-xl my-4">Monitore your data analystics to increase revenue for BTB,BTC & SaSS platforms</p>
        <button className="p-3 bg-green-300 w-[200px] md:w-[300px] text-black font-bold text-xl rounded-sm">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
