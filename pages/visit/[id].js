import { getAllBusinesses, getBusinessById } from '@/helpers/api-util';
import Footer from '@/components/layout/Footer';
import Head from "next/head";
import NavbarFix from '@/components/layout/NavbarFix';
import BusinessById from '@/components/businesses/BusinessById';

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
    <div className='flex flex-col justify-between'>
      <Head>
        <title>{business.title}</title>
        <meta
          name="description"
          content={business.description}
        />
      </Head>
      <NavbarFix />
      <div className='w-full md:pt-0 pt-20'>
        <BusinessById business={business}/>
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