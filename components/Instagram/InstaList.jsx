import InstaItem from "./InstaItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import { getAllInstaEvents } from "@/helpers/api-util";
import "swiper/css";
import "swiper/css/navigation";


const InstaList = (props) => {
  const [instaInfo, setInstaInfo] = useState([]);
  const [slidePerWidth, setSlidePerWidth] = useState();


  const slidePerScreen = () => {
    console.log(window.innerWidth);
    let slidePerWidthVar;
    if (window.innerWidth >= 768) {
      slidePerWidthVar = 3;
    } else {
      slidePerWidthVar = 1;
    }
    console.log(slidePerWidthVar);
    setSlidePerWidth(slidePerWidthVar);
  }

  useEffect(() => {
    if(instaInfo.length === 0) {
      try {
        fetch(
          "https://instagram-scraper-2022.p.rapidapi.com/ig/posts/?id_user=51605757238",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "f77ed9e018mshe835509d964d506p11b904jsn16b8bb9294b0",
              "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setInstaInfo(data.data.user.edge_owner_to_timeline_media.edges);
          });
          console.log(instaInfo);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(instaInfo);
    }
    slidePerScreen();
  }, [instaInfo, slidePerWidth]);

  if (instaInfo.length === 0) {
    return (
      <h1>Loading...</h1>
    )
  }
  
  return (
    <section className="py-4 lg:w-full w-[95%] -z-1 flex justify-center drop-shadow-lg">
      <div className="container mx-auto">
      <Swiper
          slidesPerView={slidePerWidth}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
        >
          {instaInfo.map((item) => (
            <SwiperSlide key={item.node.id} className="px-5">
              <InstaItem
                type={item.node.__typename}
                image={item.node.display_url}
                id={item.node.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default InstaList;
