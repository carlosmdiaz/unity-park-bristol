import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar'
import React, { useState } from 'react'

const StoryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[100vh]">
        <h1 className="font-serif text-6xl  md:pl-10 pl-5 pt-32">History of Unity Park</h1>
      </div>
      <Footer />
    </div>
  )
}

export default StoryPage