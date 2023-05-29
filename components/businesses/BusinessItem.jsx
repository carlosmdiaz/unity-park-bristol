import Image from "next/image"

const BusinessItem = (props) => {
    const { name, image, id } = props 
  return (
    <div className="w-[300px] h-[330px] bg-slate-100 shadow-2xl rounded-xl flex flex-col hover:scale-105 mt-5">
        <div className="w-[95%] h-[65%] flex justify-center items-center pl-3 pt-3">
            <Image 
                src={image}
                width={600}
                height={600}
                alt={name}
                style={{objectFit:"cover", width:"100%", height:"100%", borderRadius: "10px", backgroundColor:"white"}}
            />
        </div>
        <h1 className="font-serif font-bold text-3xl px-4 pt-3">{name}</h1>
    </div>
  )
}

export default BusinessItem