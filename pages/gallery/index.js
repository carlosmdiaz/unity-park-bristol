import Footer from '@/components/layout/Footer'
import GallerySwiper from '@/components/gallery/GallerySwiper'
import React, { useState } from 'react'
import Head from "next/head";
import NavbarFix from '@/components/layout/NavbarFix';

const GalleryPage = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>Gallery for Images of Unity Park Bristol</title>
        <meta
          name="description"
          content="A list of images about Unity Park Bristol."
        />
      </Head>
      <NavbarFix />
      <div className="pb-10 pt-24">
      <h1 className="font-juniper text-6xl pb-10 md:pl-10 pl-5 pt-8">Gallery</h1>
        <GallerySwiper hide={hide}/>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage