// /app/processo-seletivo/page.tsx

"use client";

import Header from "../_components/header";
import Footer from "../_components/footer";
import Banner from "./_components/banner";
import JobCard from "./_components/job-card";

export default function ProcessoSeletivo() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-[980px] m-auto">
        <Banner />
        <JobCard />
      </main>
      <Footer />
    </>
  );
}
