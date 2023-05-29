import Image from "next/image";

const GalleryItem = (props) => {
    const { image } = props;
  return (
    <div className='w-full h-[85vh] rounded-lg'>
        <Image 
            src={image}
            width={1200}
            height={1200}
            className="md:object-fill object-cover shadow-lg"
            style={{width:"100%", height:"100%", borderRadius:"15px"}}
          />
    </div>
  )
}

export default GalleryItem;