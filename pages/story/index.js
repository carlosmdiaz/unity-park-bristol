import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import React, { useState } from 'react'
import Head from "next/head";

const StoryPage = () => {
  return (
    <div>
      <Head>
        <title>History of Unity Park Bristol</title>
        <meta
          name="description"
          content="A resumed history of this ex industrial park now known as Unity Park Bristol."
        />
      </Head>
      <Navbar />
      <div className="w-full h-[100vh]">
        <h1 className="font-serif text-6xl  md:pl-10 pl-5 pt-32">History of Unity Park</h1>
      </div>
      <Footer />
    </div>
  )
}

export default StoryPage