import Link from "next/link";
import React from "react";

const SocialTitle = () => {
  return (
    <div className="w-screen md:h-104 h-[40rem] flex flex-col justify-evenly items-center font-serif">
      <div className="md:w-full w-[90%] md:h-[80%] h-full flex flex-col justify-evenly items-center">
        <div className="md:text-[7rem] text-6xl md:text text-center md:mb-0 mb-10">See what we're up to.</div>
        <div className="flex flex-col justify-center items-center md:text text-center">
          <div className="text-3xl">
            The only thing we love more than making amazing memories is sharing
            them with friends.
          </div>
          <div className="text-3xl">Watch all the fun unfold.</div>
        </div>
      </div>
      <Link
        href="https://www.instagram.com/unityparkbristol"
        target="_blank"
        className="text-3xl font-extrabold border-b-2 border-[#CFAA81] text-[#CFAA81] hover:text-[#AE895A] hover:border-[#AE895A] transition-all ease-in-out duration-300"
      >
        FOLLOW US
      </Link>
    </div>
  );
};

export default SocialTitle;
