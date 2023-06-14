import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLanding = (props) => {
  const {blogs} = props;
  return (
    <div className=" w-full h-128 flex justify-center items-center">
      <div className="w-[95%] h-[95%] flex justify-center items-center border-t-2 border-b-2 border-black">
        <div className="w-[20%] h-[85%]">
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
        <div className="w-[70%] h-[85%] ml-5 p-2">
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
