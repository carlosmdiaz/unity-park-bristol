import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { getEventById, getAllEvents } from '@/helpers/api-util';
import Image from 'next/image';


const EventsById = (props) => {
  const event = props.selectEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Navbar />
      <div className='w-full h-[100vh] flex md:flex-row flex-col justify-center items-center md:pt-32 pt-28 md:mb-0 mb-20'>
        <div className="shadow-2xl mr-5 md:w-[50%] w-[90%] md:h-[80%] h-[40%] md:pl-0 md:ml-0 ml-5">
          <Image 
            src={event.image}
            alt={event.title}
            width={450}
            height={450}
            style={{borderRadius: "5px", width: "100%", height: "100%"}}
          />
        </div>
        <div className="flex flex-col md:w-[40%] w-full h-[80%]">
          <div className=''>
            <h1 className="font-serif font-bold md:text-6xl text-5xl md:pl-10 pl-5 md:pt-0 pt-8 ">{event.title}</h1>
            <h1 className="font-serif font-bold md:text-4xl text-3xl  md:pl-10 pl-5 text-[#AE895A]">{event.date}</h1>
          </div>
          <div className="md:w-[90%] w-[100%] flex justify-center mt-10">
            <p className="font-serif font-bold text-justify text-3xl md:pl-10 pl-0 mx-10">{event.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);

  return {
    props: {
      selectEvent: event
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map(event => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventsById