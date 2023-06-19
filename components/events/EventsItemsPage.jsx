import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLanding = (props) => {
  const {id, title, image, description, } = props;
  console.log(id);
  return (
    <div className=" md:w-[80%] w-[100%] md:h-[28rem] h-[70rem] flex md:flex-row flex-col justify-center items-center ml-5 border-t-2 border-b-2 border-black">
      <div className="w-[95%] h-[100%] flex md:flex-row flex-col justify-center items-center ">
        <div className="md:w-[20%] w-[100%] md:h-[85%] h-[50%] md:pt-0 pt-10">
          <Image
            src={image}
            alt={title}
            width={10000}
            height={10000}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="md:w-[70%] h-[85%] md:ml-5 p-2 md:mb-0 mb-10">
          <div className="text-4xl font-serif mb-4 md:w-full w-screen md:text-left text-center md:px-0 px-2">{title}</div>
          <div className="text-2xl font-serif mb-4 md:pl-0 pl-6 md:pr-0 pr-6 text-justify">{description}</div>
          <div>
            <Link href={`/events/${id}`} className="text-4xl font-serif text-[#CFAA81] ml-3 hover:text-[#AE895A] transition-all md:pl-0 pl-3">
            Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;