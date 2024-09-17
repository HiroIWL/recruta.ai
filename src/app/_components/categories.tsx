export default function Categories() {
  const categories = [
    { name: "Web Design", icon: "🌐" },
    { name: "Desenvolvimento Web", icon: "💻" },
    { name: "Marketing", icon: "📈" },
    { name: "Vendas", icon: "🛒" },
    { name: "Suporte Técnico", icon: "🔧" },
  ];

  return (
    <section className="bg-gray-50 w-full">
      <h2 className="text-3xl font-bold mb-8 font-martel">Categorias</h2>
      <div className="flex justify-between gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center w-1/3 px-4 py-8 mb-8 text-gray-700 bg-white rounded-3xl flex flex-col items-center hover:bg-gray-800 transition-all hover:text-white"
          >
            <div className="text-4xl mb-4 rounded-full bg-gray-50 p-8 w-16 h-16 flex items-center justify-center">
              {category.icon}
            </div>
            <p className="">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
