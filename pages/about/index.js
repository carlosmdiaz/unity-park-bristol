import React from "react";
import Head from "next/head";

import NavbarFix from "@/components/layout/NavbarFix";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Unity Park Bristol</title>
        <meta
          name="description"
          content="Welcome to Unity Park Bristol, the new and improved Industrial Park, now a Store Park for you. We have anything you need and more. Visit us!"
        />
      </Head>
      <NavbarFix />
      <div className="pt-32 w-full flex justify-center pb-28">
        <div className="w-[80%] text-3xl font-serif ">
          <div>
            <div className="text-6xl font-serif mb-10">About Unity Park</div>
          </div>
          <div className="">
            Welcome to Unity Park, an oasis of community and connection nestled
            in the heart of Bristol, Rhode Island. Situated in the vibrant
            surroundings of Wood Street, Unity Park offers a serene and
            welcoming environment for individuals and families alike.
          </div>
          <br />
          <div className="">
            As you enter this breathtaking space, you'll be greeted by a
            harmonious blend of beautiful architecture and bustling businesses.
            Whether you're seeking a peaceful retreat, a place to gather with
            loved ones, or an avenue for professional development, Unity Park
            has something for everyone. With its delicious restaurants, moody
            breweries, and inviting businesses ranging from creation to
            innovation, the park beckons visitors to embrace the Bristol culture
            and indulge in joy, laughter, and relaxation.
          </div>
          <br />
          <div className="">
            Unity Park is a testament to the power of unity, fostering a sense
            of togetherness among residents and promoting a deep appreciation
            for the historical elements surrounding us. Come and experience the
            essence of community and tranquility at Unity Park—a cherished gem
            within the heart of Bristol, Rhode Island.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
