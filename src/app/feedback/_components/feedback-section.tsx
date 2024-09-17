import Image from "next/image";

export default function FeedbackSection() {
  return (
    <section className="flex flex-col md:flex-row items-center py-16">
      <div className="md:w-1/2">
        <h1 className="text-6xl font-bold mb-4 font-martel">Sinto muito por não ter passado :(</h1>
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/negative-feedback-illustration.svg"
          alt="Ilustração de uma pessoa descansando com a cabeça sobre a mesa"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
