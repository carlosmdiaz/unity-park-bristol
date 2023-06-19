import Image from "next/image"
import Link from "next/link"

const BusinessItem = (props) => {
    const { name, image, id } = props 
  return (
    <div className="w-[400px] h-[500px] flex font-serif flex-col justify-center items-center mt-10 hover:border-[1px] hover:shadow-xl bg-slate-100 transition-all border-[#CFAA81] md:mx-5">
        <div className="w-[95%] h-[50%] flex justify-center items-center mt-3">
            <Image 
                src={image}
                width={600}
                height={600}
                alt={name}
                style={{objectFit:"fill", width:"100%", height:"100%", backgroundColor:"white"}}
            />
        </div>
        <div className="w-[95%] h-[50%] flex flex-col justify-center items-center">
          <div className="w-[95%]">
            <h1 className="text-5xl">{name}</h1>
          </div>
          <div className="w-[95%] mt-5">
            <Link href={`/visit/${id}`} className="text-4xl text-[#CFAA81] hover:text-[#AE895A] transition-all">
              More Information
            </Link>
        </div>
        </div>
    </div>
  )
}

export default BusinessItem