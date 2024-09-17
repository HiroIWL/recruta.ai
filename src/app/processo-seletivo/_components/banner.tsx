import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full py-16 bg-gray-50 flex justify-center items-center">
      <Image src="/jobs.svg" width={240} height={240} alt="banner" />
    </section>
  );
}
