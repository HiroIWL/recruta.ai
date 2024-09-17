// /components/Testimonials.tsx

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      comment: "Ótimo serviço! Encontrei meu emprego rapidamente.",
      rating: 5,
      image: "https://thispersondoesnotexist.com?random=0",
    },
    {
      name: "Maria Souza",
      comment: "A plataforma é intuitiva e fácil de usar.",
      rating: 4,
      image: "https://thispersondoesnotexist.com?random=1",
    },
    {
      name: "Carlos Lima",
      comment: "Excelente suporte ao cliente.",
      rating: 5,
      image: "https://thispersondoesnotexist.com?random=2",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Avaliações</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-md text-center bg-white rounded-3xl">
            <Avatar className="mx-auto mb-4 h-24 w-24">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <div className="mb-2 text-yellow-400">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
            <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
