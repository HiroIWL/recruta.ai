export default function SuggestionsSection() {
  const suggestions = [
    {
      title: "Melhorar",
      description: "Considere revisar suas habilidades e experiência para atender melhor aos requisitos da vaga.",
    },
    {
      title: "Arrumar",
      description: "Verifique se o seu currículo está atualizado e sem erros.",
    },
    {
      title: "Adicionar",
      description: "Adicione projetos ou certificações relevantes para fortalecer seu perfil.",
    },
  ];

  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center font-martel">Veja formas de como aprimorar seu currículo</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{suggestion.title}</h3>
            <p className="text-gray-700">{suggestion.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
