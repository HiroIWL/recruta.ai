"use client";

import Header from "../_components/header";
import Footer from "../_components/footer";
import FeedbackSection from "./_components/feedback-section";
import SuggestionsSection from "./_components/suggestion-section";

export default function FeedbackPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-[980px] m-auto">
        <FeedbackSection />
        <SuggestionsSection />
      </main>
      <Footer />
    </>
  );
}
