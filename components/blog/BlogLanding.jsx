import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLanding = (props) => {
  const {blogs} = props;
  return (
    <div className=" w-full md:h-128 h-[90rem] flex justify-center items-center">
      <div className="w-[95%] h-[95%] flex md:flex-row flex-col justify-center items-center md:border-t-2 border-t-[1px] md:border-b-2 border-b-[1px] border-black">
        <div className="md:w-[20%] w-[80%] h-[85%] md:mt-0 mt-10 md:mb-0 mb-5">
          <Image
            src={blogs.image}
            alt={blogs.title}
            width={600}
            height={100}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="md:w-[70%] w-[95%] h-[85%] md:ml-5 p-2 md:mb-0 mb-10">
          <div className="text-5xl font-serif mb-4">{blogs.title}</div>
          <div className="text-3xl font-serif mb-4">{blogs.description}</div>
          <div>
            <Link href={`/events/${blogs.id}`} className="text-4xl font-serif text-[#CFAA81] hover:text-[#AE895A] transition-all">
            Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;
