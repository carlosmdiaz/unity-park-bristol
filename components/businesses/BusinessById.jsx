import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    AiOutlinePhone,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineClose,
    AiOutlineMail,
    AiOutlineClockCircle,
    AiOutlineLinkedin,
    AiOutlineYoutube,
    AiFillTwitterCircle,

  } from "react-icons/ai";
  import {
    TbWorldWww,
  } from "react-icons/tb";

const BusinessById = (props) => {
    const {business}= props;
    console.log(business);
  return (
    <div className='w-full flex justify-center items-center text-[#0C1E28]'>
        <div className='w-full flex md:flex-row flex-col justify-center items-center md:pt-36 md:mt-0  md:mb-20 mb-40 md:mx-10'>
        <div className="shadow-2xl mr-5 md:w-[40%] w-[90%] md:h-[60%] h-[40%] md:pl-0 md:ml-0 ml-5">
          <Image 
            src={business.image}
            alt={business.name}
            width={450}
            height={450}
            style={{borderRadius: "5px", width: "100%", height: "100%"}}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:w-[50%] w-[90%] font-serif">
          <div className='w-full'>
            <h1 className="md:text-6xl text-4xl md:pl-10 pl-4 md:pt-0 pt-8 ">{business.name}</h1>
          </div>
          <div className="md:w-[90%] w-[100%] flex flex-col justify-center mt-10 md:text-2xl text-xl">
            <div className='flex'>
                <AiOutlinePhone size={30} className='text-[#CFAA81]'/>
                <div className='ml-5'>{business.phone}</div>
            </div>
            <div className='flex mt-5'>
                <AiOutlineMail size={30} className='text-[#CFAA81]'/>
                <div className='ml-5'>{business.email}</div>
            </div>
            <div className='flex mt-5'>
                <TbWorldWww size={30} className='text-[#CFAA81]'/>
                <Link href={business.url} target='_blank' className='ml-5 hover:text-[#CFAA81] transition-all'>{business.url}</Link>
            </div>
            <div className='flex mt-5'>
                <AiOutlineClockCircle size={30} className='text-[#CFAA81]'/>
                <div className='ml-5'>
                    <div>{`Monday: ${business.hours.Monday}`}</div>
                    <div>{`Tuesday: ${business.hours.Tuesday}`}</div>
                    <div>{`Wednesday: ${business.hours.Wednesday}`}</div>
                    <div>{`Thursday: ${business.hours.Thursday}`}</div>
                    <div>{`Friday: ${business.hours.Friday}`}</div>
                    <div>{`Saturday: ${business.hours.Saturday}`}</div>
                    <div>{`Sunday: ${business.hours.Sunday}`}</div>
                </div>
            </div>
            <div className='flex justify-around mt-5 md:w-[40%] w-[90%]'>
                <Link href={business.instagram} target='_blank' className='text-[#CFAA81] hover:text-[#0C1E28] transition-all'>
                    <AiOutlineInstagram size={40} />
                </Link>
                <Link href={business.twitter} target='_blank' className='text-[#CFAA81] hover:text-[#0C1E28] transition-all'>
                    <AiFillTwitterCircle size={40} />
                </Link>
                <Link href={business.youtube} target='_blank' className='text-[#CFAA81] hover:text-[#0C1E28] transition-all'>
                    <AiOutlineYoutube size={40}/>
                </Link>
                <Link href={business.facebook} target='_blank' className='text-[#CFAA81] hover:text-[#0C1E28] transition-all'>
                    <AiOutlineFacebook size={40}/>
                </Link>
                <Link href={business.linkedin} target='_blank' className='text-[#CFAA81] hover:text-[#0C1E28] transition-all'>
                    <AiOutlineLinkedin size={40} />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessById