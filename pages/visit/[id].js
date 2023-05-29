import { getAllBusinesses, getBusinessById } from '@/helpers/api-util';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Head from "next/head";

const BusinessesById = (props) => {
    const business = props.selectBusiness;

    if (!business) {
      return (
        <div className="center">
          <p>Loading...</p>
        </div>
      );
    }

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Head>
        <title>{business.title}</title>
        <meta
          name="description"
          content={business.description}
        />
      </Head>
      <Navbar />
      <div className='w-full h-[100vh] flex md:flex-row flex-col justify-center items-center md:pt-36 md:mt-0 mt-40 md:mb-20 mb-40 md:mx-10'>
        <div className="shadow-2xl mr-5 md:w-[50%] w-[90%] md:h-[80%] h-[40%] md:pl-0 md:ml-0 ml-5">
          <Image 
            src={business.image}
            alt={business.name}
            width={450}
            height={450}
            style={{borderRadius: "5px", width: "100%", height: "100%"}}
          />
        </div>
        <div className="flex flex-col md:w-[50%] w-[100%]">
          <div>
            <h1 className="font-serif font-bold md:text-6xl text-4xl md:pl-10 pl-4 md:pt-0 pt-8 ">{business.name}</h1>
          </div>
          <div className="md:w-[90%] w-[100%] flex justify-center mt-10">
            <p className="font-serif font-bold text-justify text-3xl md:pl-10 pl-0 md:mx-0 mx-10">{business.description}</p>
          </div>
          <Link href={business.url} target="_blank">
            <h1 className="font-serif font-bold md:text-4xl text-3xl  md:pl-10 pl-5 md:pt-8 pt-6 md:mx-0 mx-6 text-[#AE895A]">Learn More</h1>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export async function getStaticProps(context) {
    const businessId = context.params.id;
  
    const business = await getBusinessById(businessId);
  
    return {
      props: {
        selectBusiness: business
      },
      revalidate: 30,
    };
  }
  
  export async function getStaticPaths() {
    const business = await getAllBusinesses();
  
    const paths = business.map(business => ({ params: { id: business.id } }));
    return {
      paths: paths,
      fallback: true,
    };
  }

export default BusinessesById;