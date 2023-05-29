import EventsItemsPage from '@/components/events/EventsItemsPage'
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import Link from 'next/link';
import React from 'react'
import { getAllEvents } from '@/helpers/api-util';
import Head from "next/head";

const EventsPage = (props) => {
  const { events } = props;

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>All Events at Unity Park Bristol</title>
        <meta
          name="description"
          content="A list of all events happening at Unity Park Bristol."
        />
      </Head>
      <Navbar />
      <h1 className="font-serif font-bold text-6xl md:pl-10 pl-5 pt-32">Upcoming Events</h1>
      <div className="w-full h-[100vh] flex flex-wrap md:justify-between justify-evenly px-10 mt-10 md:mb-60 mb-[1000px]">
        {
          events.map(event => {
            return (
              <Link href={`/events/${event.id}`}>
                <EventsItemsPage
                key={event.id}
                title={event.title}
                image={event.image}
                description={event.description}
                date={event.date}
              />
              </Link>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  }
}

export default EventsPage