import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import "swiper/css";
import EventsItems from "../events/EventsItems";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SwiperSlider = (props) => {
  const { events } = props;
  console.log(events);

  SwiperCore.use(Autoplay);
  return (
    <section className="py-4 lg:w-full w-[75%] -z-1 flex justify-center drop-shadow-lg">
      <div className="container mx-auto">
        <Swiper
          style={{
          "--swiper-navigation-color": "#AE895A",
          "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          autoplay={{
            delay:3000,
            pauseOnMouseEnter:false
          }}
          speed={100}
          
        >
          {
          events.map((event) => (
            <SwiperSlide key={event.id}>
              <EventsItems
                title={event.title}
                image={event.image}
                description={event.description}
                date={event.date}
              />
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperSlider;
