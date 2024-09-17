"use client";

import Banner from "./_components/banner";
import Categories from "./_components/categories";
import FeaturedJobs from "./_components/featured-jobs";
import Header from "./_components/header";
import Testimonials from "./_components/testimonials";
import Updates from "./_components/updates";
import Footer from "./_components/footer";
import Image from "next/image";
import ContactForm from "./_components/contact-form";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-[980px] m-auto">
        <Banner />
        <Image src="/home.svg" width={980} height={500} alt="home.svg" />
        <FeaturedJobs />
        <Categories />
        <Updates />
        <ContactForm />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
