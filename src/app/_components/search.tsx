import FeatherIcon from "feather-icons-react";
export const Search = () => {
  return (
    <div className="w-full rounded-full bg-white flex items-center px-12 py-4 relative">
      <FeatherIcon icon="search" size={20} className="relative top-0 left-[-24px]" />
      <input type="text" placeholder="Pesquisar" className="w-full bg-transparent outline-none" />
      <button className="bg-black text-white rounded-full absolute top-0 right-0 py-4 px-8 hover:font-bold transition-all duration-300">Pesquisar</button>
    </div>
  );
};
