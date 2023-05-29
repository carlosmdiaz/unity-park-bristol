import { useEffect, useState } from "react";
import Image from "next/image";

const images = ['/images/unity-top.jpg','/images/Unity Park Home Page-01.jpg', '/images/Unity Park Home Page-02.jpg', '/images/Unity Park Home Page-03.jpg', '/images/Unity Park Home Page-04.jpg', '/images/Unity Park Home Page-05.jpg', '/images/Unity Park Home Page-06.jpg']

const Landing = (props) => {
  const [image, setImage] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (image === images.length - 1) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [image]);



  return (
    <div className="flex justify-center w-full h-[716px] z-1">
      <div className="h-[100%] w-full">
        <Image 
          src={images[image]}
          alt="Carusell"
          height={1200}
          width={1200}
          className="md:object-fill object-cover"
          style={{width: "100%", height:"100%" }}
        />
      </div>
      {/* <img src={images[image]} className="blur-sm w-full h-full overflow-hidden object-cover"/> */}
      <div className="absolute w-3/4 md:top-[35%] top-[30%] flex sm:flex-row flex-col justify-between items-center">
        <h1 className="text-white font-bold md:text-8xl text-6xl font-serif underline md:pt-24 drop-shadow-[2px_2px_2px_rgba(0,0,0)] ">EAT</h1>
        <h1 className="text-white font-bold md:text-8xl text-6xl font-serif underline md:pt-24 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">DRINK</h1>
        <h1 className="text-white font-bold md:text-8xl text-6xl font-serif underline md:pt-24 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">VISIT</h1>
      </div>
      <div className="absolute w-3/4 sm:top-[55%] top-[60%] flex sm:flex-row flex-col justify-center items-center ">
        <h1 className="text-white md:text-5xl text-2xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">500 WOOD STREET </h1>
        <h1 className="text-white md:text-5xl text-2xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)] hidden md:flex">-</h1>
        <h1 className="text-white md:text-5xl text-2xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">BRISTOL RI</h1>
        <h1 className="text-white md:text-5xl text-2xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)] hidden md:flex">-</h1>
        <h1 className="text-white md:text-5xl text-2xl font-serif font-bold md:pt-28 drop-shadow-[2px_2px_2px_rgba(0,0,0)]">02809</h1>
      </div>
    </div>
  )
}

export default Landing