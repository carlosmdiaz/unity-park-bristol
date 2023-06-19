import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import GalleryItemSwiper from './GalleryItemSwiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Virtual } from "swiper";



const GalleryItem = (props) => {
  const { image, index, images } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
  ])

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      width: "85%",
      height: "80%",
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function handleOpen() {
    let photosArr = [
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

    if(!isOpen) {
      console.log(isOpen);
      photosArr.slice(index,1);
      photosArr.unshift(image);
      setPhotos(photosArr);
      setIsOpen(true);
      console.log(isOpen);
    } else if(isOpen){
      console.log(isOpen);
      setPhotos(photosArr);
      setIsOpen(false);
      console.log(isOpen);
    }
  }
  console.log(isOpen);
  console.log(photos);
  return (
    <div className="md:w-[30%] w-[95%] md:h-[250px] mt-4 shadow-xl hover:scale-105 transition-all md:ml-10 flex flex-grow">
      <Image
        src={image}
        width={400}
        alt="swiper"
        height={400}
        className="md:object-fill object-cover shadow-lg"
        style={{ width: "100%", height: "100%",}}
        onClick={handleOpen}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="w-full flex justify-end">
          <AiOutlineCloseCircle size={30} onClick={handleOpen} className="text-[#0C1E28] hover:text-[#CFAA81] transition-all cursor-pointer"/>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#CFAA81",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Virtual]}
          className="md:w-[80%] md:h-[80%] h-[80%]"
        >
          {
            photos.map((image) => {
              return (
                <SwiperSlide>
                  <Image
                    src={image}
                    alt="swiper"
                    width={1200}
                    height={1200}
                    className="object-fill shadow-lg"
                    style={{ width: "100%", height: "100%",}} 
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[15%] md:w-[80%] w-[100%] border-t-4 border-white"
        >
          {
            photos.map((image) => {
              return (
                <SwiperSlide>
                  <Image
                    src={image}
                    alt="swiper"
                    width={600}
                    height={600}
                    className="md:object-fill object-cover shadow-lg"
                    style={{ width: "100%", height: "100%",}} 
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Modal>
    </div>
  );
};

export default GalleryItem;
