import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Privacy from '@/components/privacy/Privacy'
import Head from "next/head";

const PrivacyPage = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>Privacy Polices for Unity Park Bristol</title>
        <meta
          name="description"
          content="A list of all policies at Unity Parkl Bristol"
        />
      </Head>
      <Navbar />
      <div className='h-[90vh] flex flex-col items-center justify-center md:mb-[8000px] mb-[17300px] mt-32'>
        <Privacy />
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPage