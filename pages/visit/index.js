import BusinessItem from '@/components/businesses/BusinessItem';
import Navbar from '@/components/layout/Navbar'
import React, { useState } from 'react'
import { getAllBusinesses } from '@/helpers/api-util';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const VisitPage = (props) => {
  const {businesses} = props;
  console.log(businesses)
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Navbar />
      <div className="w-full flex flex-col justify-between mb-40">
        <h1 className="font-serif text-6xl  md:pl-10 pl-5 pt-32">Explore our Businesses</h1>
        <div className='flex flex-wrap justify-between p-5 mb-10'>
          {
            businesses.map(business => {
              return (
                <Link href={`/visit/${business.id}`}>
                  <BusinessItem 
                  key={business.id}
                  name={business.name}
                  image={business.image}
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const businesses = await getAllBusinesses();
  return {
    props: {
      businesses: businesses,
    },
    revalidate: 60,
  }
}

export default VisitPage