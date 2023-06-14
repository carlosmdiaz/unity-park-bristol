import Footer from "@/components/layout/Footer";
import { getBlogById, getAllBlogs } from "@/helpers/api-util";
import Image from "next/image";
import Head from "next/head";
import NavbarFix from "@/components/layout/NavbarFix";

const EventsById = (props) => {
  const blog = props.selectBlog;
  let blogParagraph = [];

  function getAllBlogParagraph(body) {
    const data = body;
    const blogs = [];

    for (const key in data) {
      console.log(key);
      console.log(data[key]);
      blogs.push(data[key]);
    }
    console.log(blogs)
    return blogs;
  }

  blogParagraph = getAllBlogParagraph(blog.body);

  if (!blog) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <NavbarFix />
      <div className="w-full flex md:flex-col items-center md:pt-32 pt-28 md:mb-0 mb-20">
        <div className="flex justify-center w-[95%] h-[85%] border-t-2 border-b-2 border-black">
          <div className="w-[20%] h-[90%] my-8 shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1000}
              height={1000}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="w-[60%] ml-10 flex justify-center items-center">
            <div className="font-serif md:text-6xl ">{blog.title}</div>
          </div>
        </div>
        <div className="flex flex-col md:w-[90%] w-full h-[80%] mt-10 mb-20">
          {
            blogParagraph.map((paragraph) => {
              console.log(paragraph);
              return (
                <div className="text-3xl font-serif">
                  <div>
                  {paragraph}
                  </ div>
                  <br />
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const blogId = context.params.id;
  const blog = await getBlogById(blogId);

  return {
    props: {
      selectBlog: blog,
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  const paths = blogs.map((blog) => ({ params: { id: blog.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventsById;
