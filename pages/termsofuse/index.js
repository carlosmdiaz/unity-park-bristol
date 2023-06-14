import Footer from "@/components/layout/Footer";
import TermsOfUse from "@/components/termsofuse/TermsOfUse";
import Head from "next/head";
import NavbarFix from "@/components/layout/NavbarFix";

const TermsOfUsePage = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>Terms of Use</title>
        <meta
          name="description"
          content="A list of all terms of use about Unity Park Bristol's website."
        />
      </Head>
      <NavbarFix />
      <div className='h-[100vh] flex justify-center md:mb-[9000px] mb-[19300px] mt-32'>
        <TermsOfUse />
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfUsePage