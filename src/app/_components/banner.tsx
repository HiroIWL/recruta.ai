import { Search } from "./search";

export default function Banner() {
  return (
    <section className="text-center py-16 bg-gray-50 flex flex-col justify-center gap-20 w-[980px] justify-self-center self-center">
      <h1 className="text-6xl font-bold text-center font-martel">Encontre seu emprego dos sonhos no Recruta.AI</h1>
      <h4 className="text-center font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod sed do eiusmod{" "}
      </h4>
      <Search />
    </section>
  );
}
