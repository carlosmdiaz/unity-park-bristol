import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommunityGuidelines from "@/components/community/CommunityGuidelines";
import Head from "next/head";

const CommunityPage = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>Community Rules</title>
        <meta
          name="description"
          content="A list of all Community Rules on Unity Park Bristol website."
          charSet="utf-8"
        />
      </Head>
      <Navbar />
      <h1 className="text-6xl font-extrabold mt-32 font-serif ml-10">Community Guidelines</h1>
      <div className='h-[100vh] flex justify-center md:mb-[100vh] mb-[3400px] mt-5 md:ml-0 ml-7'>
        <CommunityGuidelines />
      </div>
      <Footer />
    </div>
  )
}

export default CommunityPage