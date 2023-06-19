import { useEffect, useState } from "react";
import Image from "next/image";

const images = ['/images/unity-top.jpg','/images/Unity Park Home Page-01.jpg', '/images/Unity Park Home Page-02.jpg', '/images/Unity Park Home Page-03.jpg', '/images/Unity Park Home Page-04.jpg', '/images/Unity Park Home Page-05.jpg', '/images/Unity Park Home Page-06.jpg']

const Landing = (props) => {
  
  return (
    <div className="flex justify-center w-full h-[95vh] z-1">
      <div className="h-[100%] w-full">
        <Image 
          src='/images/unity-top.jpg'
          alt="Drone Shot of Unity Park"
          height={1200}
          width={1200}
          className="md:object-fill object-cover"
          style={{width: "100%", height:"100%" }}
        />
      </div>
      {/* <img src={images[image]} className="blur-sm w-full h-full overflow-hidden object-cover"/> */}
      <div className="absolute sm:w-3/4 w-full sm:top-[20%] top-[40%] flex flex-row  justify-center items-center">
        <h1 className="text-white md:text-[10rem] text-6xl font-serif underline md:pt-24 drop-shadow-[2px_2px_2px_rgba(0,0,0)] ">UNITY PARK</h1>
      </div>
      <div className="absolute sm:w-3/4 w-full sm:top-[45%] top-[55%] flex sm:flex-row justify-center items-center sm:pl-0 pl-16">
        <h1 className="text-white md:text-5xl text-3xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">500 WOOD STREET, BRISTOL RI, 02809</h1>
      </div>
    </div>
  )
}

export default Landing