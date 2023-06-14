import Footer from "@/components/layout/Footer";
import React from "react";
import Head from "next/head";
import NavbarFix from "@/components/layout/NavbarFix";

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
      <NavbarFix />
      <div className="h-[100vh]"></div>
      <Footer />
    </div>
  )
}

export default ContactPage