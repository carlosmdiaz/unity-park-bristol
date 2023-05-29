import { getAllBusinesses, getBusinessById } from '@/helpers/api-util';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const BusinessesById = (props) => {
    const business = props.selectBusiness;

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Navbar />
      <div className='w-full md:h-[100vh] h-[80vh] flex md:flex-row flex-col justify-around pt-36 p-20 mb-10'>
        <div className="shadow-2xl mr-5 md:w-[50%] w-[100%] md:h-[70%] h-[100%]">
          <Image 
            src={business.image ? business.image : '/images/restaurant-1.jpeg'}
            alt={business.name}
            width={450}
            height={450}
            style={{borderRadius: "5px", width: "100%", height: "100%"}}
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <div>
            <h1 className="font-serif font-bold md:text-6xl text-5xl md:pl-10 pl-5 pt-8">{business.name}</h1>
          </div>
          <div className="md:w-[90%] w-[100%] flex justify-center mt-10">
            <p className="font-serif font-bold text-justify text-3xl md:pl-10 pl-0">{business.description}</p>
          </div>
          <Link href={business.url} target="_blank">
            <h1 className="font-serif font-bold md:text-4xl text-3xl  md:pl-10 pl-5 md:pt-8 text-[#AE895A]">Learn More</h1>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export async function getStaticProps(context) {
    const businessId = context.params.id;
  
    const business = await getBusinessById(businessId);
  
    return {
      props: {
        selectBusiness: business
      },
      revalidate: 30,
    };
  }
  
  export async function getStaticPaths() {
    const business = await getAllBusinesses();
  
    const paths = business.map(business => ({ params: { id: business.id } }));
    return {
      paths: paths,
      fallback: true,
    };
  }

export default BusinessesById;