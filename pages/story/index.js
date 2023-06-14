import Footer from '@/components/layout/Footer';
import Head from "next/head";
import Story from '@/components/story/Story';
import NavbarFix from '@/components/layout/NavbarFix';

const StoryPage = () => {
  return (
    <div>
      <Head>
        <title>History of Unity Park Bristol</title>
        <meta
          name="description"
          content="A resumed history of this ex industrial park now known as Unity Park Bristol."
        />
      </Head>
      <NavbarFix />
      <div className="md:w-full w-[95%] h-[100vh] flex flex-col pt-32 md:pb-[3900px] pb-[8400px] md:ml-0 ml-5">
        <h1 className="font-serif text-6xl md:pl-10 pl-5 pb-5">History of Unity Park</h1>
        <div className='md:w-full w-[95%] flex justify-center'>
          <Story />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StoryPage