import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Head>
        <title>Contact Unity Park Bristol</title>
        <meta
          name="description"
          content="A list of information about how to contact Unity Park Bristol"
        />
      </Head>
      <Navbar />
      <div className="h-[100vh]"></div>
      <Footer />
    </div>
  )
}

export default ContactPage