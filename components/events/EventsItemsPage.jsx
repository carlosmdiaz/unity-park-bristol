import Image from 'next/image'
import React from 'react'

const EventsItemsPage = (props) => {
    const {title, image, description, date} = props;
    
  return (
    <div className="w-[300px] h-[350px] bg-slate-100 shadow-xl rounded-xl flex flex-col hover:scale-105 mt-5 md:mx-10">
        <div className="w-[95%] flex justify-center items-center pl-3 pt-3">
            <Image 
                src={image}
                width={500}
                height={500}
                alt={title}
                style={{objectFit:"cover", width:"100%", height:"100%", borderRadius: "10px"}}
            />
        </div>
        <h1 className="font-serif font-bold text-4xl  md:pl-10 pl-5 pt-3">{title}</h1>
        <h1 className="font-serif font-bold text-3xl  md:pl-10 pl-5 pt-2 text-[#AE895A]">{date}</h1>
    </div>
  )
}

export default EventsItemsPage