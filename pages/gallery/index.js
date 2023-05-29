import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import GallerySwiper from '@/components/gallery/GallerySwiper'
import React, { useState } from 'react'

const GalleryPage = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className='flex flex-col justify-between min-h-[100vh] no-scrollbar'>
      <Navbar hide={hide} setHide={setHide}/>
      <div className="pb-10">
      <h1 className="font-juniper text-6xl pb-10 md:pl-10 pl-5 pt-8">Gallery</h1>
        <GallerySwiper hide={hide}/>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage