import InstaList from "@/components/Instagram/InstaList";
import Landing from "@/components/Landing/Landing";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Ribbon from "@/components/swiper/Ribbon";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import { getAllEvents } from "@/helpers/api-util";

function HomePage(props) {
  const { events } = props;
  console.log(events);
  return (
    <div className="no-scrollbar">
      <Navbar/>
      <Landing/>
      <h1 className="font-serif text-6xl font-bold md:pl-10 pl-5 md:pt-20 pt-8 md:pb-10 pb-0">Events</h1>
      <div className="flex justify-center mb-28">
        <SwiperSlider events={events}/>
      </div>
      <div className="mt-28 mb-16">
        <Ribbon />
      </div>
      {/* <h1 className="font-serif font-bold text-6xl mb-8 pl-10">Check Us On Instagram</h1>
      <div className="mb-10">
        <InstaList />
      </div> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  console.log(events)
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  }
}


export default HomePage;
