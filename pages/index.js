import InstaList from "@/components/Instagram/InstaList";
import SocialTitle from "@/components/Instagram/SocialTitle";
import Landing from "@/components/Landing/Landing";
import AboutLanding from "@/components/about/AboutLanding";
import BlogLanding from "@/components/blog/BlogLanding";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getAllBlogs, getAllBlogParagraph } from "@/helpers/api-util";
import Head from "next/head";

function HomePage(props) {
  const { blogs } = props;
  console.log(blogs);
  return (
    <div className="no-scrollbar">
      <Head>
        <title>Unity Park Bristol</title>
        <meta
          name="description"
          content="Welcome to Unity Park Bristol, the new and improved Industrial Park, now a Store Park for you. We have anything you need and more. Visit us!"
        />
      </Head>
      <Navbar />
      <Landing />
      <div className="translate-y-[-2rem]">
        <div className="font-serif text-6xl h-[4rem] ml-2">
          <div className="bg-white w-64 flex justify-center rounded-lg">
            About
          </div>
        </div>
        <AboutLanding />
      </div>
      <div className="flex justify-center mt-20 mb-28 flex-col">
        <div className="font-serif text-6xl h-[4rem] ml-2 mb-5">
          <div className="bg-white w-64 flex justify-center rounded-lg">
            Events
          </div>
        </div>
        <BlogLanding blogs={blogs[0]}/>
      </div>
      <div className="mt-28 mb-16">
        <SocialTitle />
      </div>
      {/* <h1 className="font-serif font-bold text-6xl mb-8 pl-10">Check Us On Instagram</h1>
      <div className="mb-10">
        <InstaList />
      </div> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs: blogs,
    },
  };
}

export default HomePage;
