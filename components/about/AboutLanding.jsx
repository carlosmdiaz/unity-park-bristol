import React from "react";
import Map from "./Map";
import Link from "next/link";

const AboutLanding = () => {
  return (
    <div className="w-full md:h-[38rem] h-[80rem] flex justify-center items-center md:pt-10">
      <div className="md:w-[80%] w-[90%] h-[100%] flex md:flex-row flex-col-reverse">
        <div className="md:w-[30%] w-[100%] md:h-[85%] h-[50%] flex justify-center items-center md:translate-x-40 translate-y-12 md:z-[1000] rounded-xl shadow-xl">
          <Map address="500 Wood St, Bristol, RI" />
        </div>
        <div className="md:w-[60%] w-[100%] md:h-[100%] h-[50%] flex md:justify-end justify-center items-center bg-slate-100 rounded-xl shadow-2xl md:translate-y-0 translate-y-12 md:mb-0 mb-10">
          <div className="md:w-[75%] w-[90%] h-[90%] flex flex-col items-center md:mr-3 rounded-lg">
            <div className="text-6xl font-serif w-full pb-5 md:pl-6">Welcome</div>
            <div className="text-3xl font-serif w-[90%]">
              Welcome to Unity Park, an oasis of community and connection
              nestled in the heart of Bristol, Rhode Island. Situated in the
              vibrant surroundings of Wood Street, Unity Park offers a serene
              and welcoming environment for individuals and families alike.
            </div>
            <div className="w-full">
              <Link
                href="/about"
                className="md:pl-6 pl-3 text-4xl font-serif text-[#CFAA81] hover:text-[#AE895A] ease-in-out duration-200"
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
