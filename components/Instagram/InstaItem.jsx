import Image from "next/image";
import Link from "next/link";

const InstaItem = (props) => {
  const {image} = props; 
  
  return (
    <div className='w-full h-[600px] flex justify-center items-center rounded-lg'>
      <Link href='https://www.instagram.com/curestudionyc' target="_blank" className="w-[100%] h-[100%]">
        <Image 
            src={image}
            width={1000}
            height={1000}
            style={{objectFit:"cover", width:"100%", height:"100%"}}
          />
      </Link>
    </div>
  )
}

export default InstaItem;