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
        />
      </Head>
      <Navbar />
      <div className='h-[100vh] flex justify-center mb-[100vh] mt-32'>
        <CommunityGuidelines />
      </div>
      <Footer />
    </div>
  )
}

export default CommunityPage