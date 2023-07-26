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
  "/images/galleryp/gallery1.jpg",
  "/images/galleryp/gallery2.jpg",
  "/images/galleryp/gallery3.webp",
  "/images/galleryp/gallery4.jpg",
  "/images/galleryp/gallery5.jpg",
  "/images/galleryp/gallery6.jpg",
  "/images/galleryp/gallery7.jpg",
  "/images/galleryp/gallery8.jpg",
  "/images/galleryp/gallery9.jpg",
  "/images/galleryp/gallery10.jpg",
  "/images/galleryp/gallery11.jpg",
  "/images/galleryp/gallery12.jpg",
  "/images/galleryp/gallery13.jpg",
  "/images/galleryp/gallery14.jpg",
  "/images/galleryp/gallery15.jpg",
  "/images/galleryp/gallery16.jpg",
  "/images/galleryp/gallery17.jpg",
  "/images/galleryp/gallery18.jpg",
  "/images/galleryp/gallery19.jpg",
  "/images/galleryp/gallery21.jpg",
  "/images/galleryp/gallery22.png",
  "/images/galleryp/gallery23.png",
  "/images/galleryp/gallery24.jpg",
  "/images/galleryp/gallery25.jpg",
  "/images/galleryp/gallery26.jpg",
  "/images/galleryp/gallery27.jpg",
  "/images/galleryp/gallery28.jpg",
];

const GallerySwiper = () => {
  const [photos, setPhotos] = useState([
    "/images/galleryp/gallery1.jpg",
    "/images/galleryp/gallery2.jpg",
    "/images/galleryp/gallery3.jpg",
    "/images/galleryp/gallery4.jpg",
    "/images/galleryp/gallery5.jpg",
    "/images/galleryp/gallery6.jpg",
    "/images/galleryp/gallery7.jpg",
    "/images/galleryp/gallery8.jpg",
    "/images/galleryp/gallery9.jpg",
    "/images/galleryp/gallery10.jpg",
    "/images/galleryp/gallery11.jpg",
    "/images/galleryp/gallery12.jpg",
    "/images/galleryp/gallery13.jpg",
    "/images/galleryp/gallery14.jpg",
    "/images/galleryp/gallery15.jpg",
    "/images/galleryp/gallery16.jpg",
    "/images/galleryp/gallery17.jpg",
    "/images/galleryp/gallery18.jpg",
    "/images/galleryp/gallery19.jpg",
    "/images/galleryp/gallery20.jpg",
    "/images/galleryp/gallery23.jpg",
    "/images/galleryp/gallery24.jpg",
    "/images/galleryp/gallery25.jpg",
    "/images/galleryp/gallery26.jpg",
    "/images/galleryp/gallery27.jpg",
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
