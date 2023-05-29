import Image from "next/image";

const EventsItems = (props) => {
    const {title, image, description, date, hide} = props;
  return (
    <div className="flex md:flex-row flex-col justify-evenly items-center w-full h-128 px-10 rounded-xl bg-slate-100 hover:scale-105 ease-in-out duration-200">
        <div className="rounded-lg md:w-[45%] w-[90%] md:h-[73%] h-[40%] lg:pt-0 pt-5 drop-shadow-lg">
            <Image 
                src={image}
                alt={title}
                width={600}
                height={100}
                style={{objectFit:"cover", borderRadius:"8px", width:"100%", height:"100%"}}
            />
        </div>
        <div className="flex flex-col md:w-1/2 w-full h-[70%]">
            <div className="w-full flex flex-col sm:px-10 px-0">
                <h1 className="font-bold font-serif w-full md:text-5xl text-4xl pt-5">{title}</h1>
                <h1 className="font-serif font-bold lg:text-3xl text-3xl pt-1 text-[#AE895A]">{date}</h1>
            </div>
            <div className="flex justify-center items-center h-3/4">
                <p className="font-serif lg:text-3xl text-2xl lg:w-[85%] w-full h-full font-semibold pt-4">{description}</p>
            </div>
        </div>
        
    </div>
  )
}

export default EventsItems;