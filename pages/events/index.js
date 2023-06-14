import EventsItemsPage from '@/components/events/EventsItemsPage'
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import React from 'react'
import { getAllBlogs } from '@/helpers/api-util';
import Head from "next/head";
import NavbarFix from '@/components/layout/NavbarFix';

const EventsPage = (props) => {
  const { blogs } = props;

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>All Events at Unity Park Bristol</title>
        <meta
          name="description"
          content="A list of all events happening at Unity Park Bristol."
        />
      </Head>
      <NavbarFix />
      <h1 className="font-serif font-bold text-6xl md:pl-10 pl-5 pt-32">Upcoming Events</h1>
      <div className="w-full h-[100vh] flex flex-col md:justify-between justify-evenly items-center px-10 mt-10 md:mb-60 mb-[1000px]">
        {
          blogs.map(blog => {
            return (
                <EventsItemsPage
                key={blog.id}
                id={blog.id}
                title={blog.title}
                image={blog.image}
                description={blog.description}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs: blogs,
    },
  };
}

export default EventsPage