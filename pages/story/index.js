import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import React, { useState } from 'react'
import Head from "next/head";
import Story from '@/components/story/Story';

const StoryPage = () => {
  return (
    <div>
      <Head>
        <title>History of Unity Park Bristol</title>
        <meta
          name="description"
          content="A resumed history of this ex industrial park now known as Unity Park Bristol."
          charSet="utf-8"
        />
      </Head>
      <Navbar />
      <div className="w-full">
        <h1 className="font-serif text-6xl  md:pl-10 pl-5 pt-32">History of Unity Park</h1>
      </div>
      <div className='w-[100%] h-[100vh] flex justify-center md:mt-[1350px] mt-[3150px] md:mb-[1550px] mb-[3400px]'>
        <Story />
      </div>
      <Footer />
    </div>
  )
}

export default StoryPage