import React from "react";
import {AiFillInstagram,AiFillFacebook,AiFillGithub,AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="text-white w-full">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 my-12 p-8 gap-7">
        <div>
          <h1 className="text-green-600 text-2xl capitalize w-full">ReactJs</h1>
          <p className="my-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            praesentium similique accusantium libero maiores sunt.
          </p>
          <div className="flex justify-between items-center">
            <AiFillInstagram color="white" />
            <AiFillFacebook color="white"/>
            <AiFillGithub color="white" />
            <AiFillLinkedin color="white"/>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start col-span-3">
          <div className="mt-12">
            <h1 className="text-white text-2xl font-thin mb-5">Solutions</h1>
            <ul>
              <li className="text-italic">Marketing</li>
              <li className="text-italic">Ecommerce</li>
              <li className="text-italic">Analystics</li>
            </ul>
          </div>
          <div className="mt-12">
            <h1 className="text-white text-2xl font-thin mb-5">Support</h1>
            <ul>
              <li className="text-italic">Pricing</li>
              <li className="text-italic">Documentation</li>
              <li className="text-italic">Guides</li>
              <li className="text-italic">Api Status</li>
            </ul>
          </div>
          <div className="mt-12">
            <h1 className="text-white text-2xl font-thin mb-5">Company</h1>
            <ul>
              <li className="text-italic">About</li>
              <li className="text-italic">Blog</li>
              <li className="text-italic">Jobs</li>
              <li className="text-italic">Press</li>
              <li className="text-italic">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
