import React from "react";
import Map from "./Map";
import Link from "next/link";

const AboutLanding = () => {
  return (
    <div className="w-full h-[38rem] flex justify-center items-center">
      <div className="w-[80%] h-[100%] flex">
        <div className="w-[30%] h-[85%] flex justify-center items-center translate-x-40 translate-y-12 rounded-xl shadow-xl">
          <Map address="500 Wood St, Bristol, RI" />
        </div>
        <div className="w-[60%] h-[100%] flex justify-end items-center bg-slate-100 rounded-xl shadow-2xl">
          <div className="w-[75%] h-[50%] flex flex-col items-center  mr-3 rounded-lg">
            <div className="text-6xl font-serif w-full pb-5 pl-6">Welcome</div>
            <div className="text-3xl font-serif w-[90%]">
              Welcome to Unity Park, an oasis of community and connection
              nestled in the heart of Bristol, Rhode Island. Situated in the
              vibrant surroundings of Wood Street, Unity Park offers a serene
              and welcoming environment for individuals and families alike.
            </div>
            <div className="w-full">
              <Link
                href="/about"
                className="pl-6 text-4xl font-serif text-[#CFAA81] hover:text-[#AE895A] ease-in-out duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
