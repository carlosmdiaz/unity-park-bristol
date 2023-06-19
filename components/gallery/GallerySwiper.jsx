import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "/images/gallery/Unity Park Home Page-01.jpg",
  "/images/gallery/Unity Park Home Page-02.jpg",
  "/images/gallery/Unity Park Home Page-03.jpg",
  "/images/gallery/Unity Park Home Page-04.jpg",
  "/images/gallery/Unity Park Home Page-05.jpg",
  "/images/gallery/Unity Park Home Page-06.jpg",
  "/images/gallery/Unity Park Home Page-07.jpg",
  "/images/gallery/Unity Park Home Page-08.jpg",
  "/images/gallery/Unity Park Home Page-09.jpg",
  "/images/gallery/Unity Park Home Page-10.jpg",
  "/images/gallery/Unity Park Home Page-11.jpg",
  "/images/gallery/Unity Park Home Page-12.jpg",
  "/images/gallery/Unity Park Home Page-13.jpg",
  "/images/gallery/Unity Park Home Page-14.jpg",
  "/images/gallery/Unity Park Home Page-15.jpg",
  "/images/gallery/Unity Park Home Page-16.jpg",
  "/images/gallery/Unity Park Home Page-17.jpg",
  "/images/gallery/Unity Park Home Page-18.jpg",
];

const GallerySwiper = () => {
  const [photos, setPhotos] = useState([
    "/images/gallery/Unity Park Home Page-01.jpg",
    "/images/gallery/Unity Park Home Page-02.jpg",
    "/images/gallery/Unity Park Home Page-03.jpg",
    "/images/gallery/Unity Park Home Page-04.jpg",
    "/images/gallery/Unity Park Home Page-05.jpg",
    "/images/gallery/Unity Park Home Page-06.jpg",
    "/images/gallery/Unity Park Home Page-07.jpg",
    "/images/gallery/Unity Park Home Page-08.jpg",
    "/images/gallery/Unity Park Home Page-09.jpg",
    "/images/gallery/Unity Park Home Page-10.jpg",
    "/images/gallery/Unity Park Home Page-11.jpg",
    "/images/gallery/Unity Park Home Page-12.jpg",
    "/images/gallery/Unity Park Home Page-13.jpg",
    "/images/gallery/Unity Park Home Page-14.jpg",
    "/images/gallery/Unity Park Home Page-15.jpg",
    "/images/gallery/Unity Park Home Page-16.jpg",
    "/images/gallery/Unity Park Home Page-17.jpg",
    "/images/gallery/Unity Park Home Page-18.jpg",
  ]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex flex-wrap justify-center">
          {images.map((image, index) => {
            return <GalleryItem key={index} image={image} index={index} photos={photos} isOpen={isOpen} setIsOpen={setIsOpen}/>;
          })
          }
        </div>
      </div>
    </div>
  );
};

export default GallerySwiper;
