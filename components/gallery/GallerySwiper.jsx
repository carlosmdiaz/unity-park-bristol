import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
// import required modules
import { Navigation,} from "swiper";



// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = ['/images/unity-top.jpg','/images/Unity Park Home Page-01.jpg', '/images/Unity Park Home Page-02.jpg', '/images/Unity Park Home Page-03.jpg', '/images/Unity Park Home Page-04.jpg', '/images/Unity Park Home Page-05.jpg', '/images/Unity Park Home Page-06.jpg'];

const GallerySwiper = () => {
    const [isWidth, setIsWidth] = useState(false)

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsWidth(false);
        } else {
            setIsWidth(true)
        }
        console.log(isWidth);
    }, [isWidth]);

  return (
    <div className="w-[100%] h-[80vh] flex flex-col justify-center items-center">
            <div className="container mx-auto my-10">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#AE895A",
                    }}
                    slidesPerView={1}
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    >
                    {images.map((item) => (
                        <SwiperSlide className="px-1">
                            <GalleryItem
                                image={item}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
            </div>
    </div>
  )
}

export default GallerySwiper