// /components/Updates.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Updates() {
  const updates = [
    {
      title: "Como melhorar seu currículo",
      excerpt: "Dicas essenciais para destacar seu currículo no mercado atual.",
      image: "https://picsum.photos/536/354?random=1",
    },
    {
      title: "Tendências em tecnologia",
      excerpt: "Descubra as principais tendências que estão moldando o futuro.",
      image: "https://picsum.photos/536/354?random=2",
    },
    {
      title: "Soft skills em alta",
      excerpt: "As habilidades interpessoais mais valorizadas pelas empresas.",
      image: "https://picsum.photos/536/354?random=3",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 font-martel">Atualizações</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {updates.map((update, index) => (
          <Card key={index} className="border-none shadow-none flex flex-col rounded-b-3xl">
            <img src={update.image} alt={update.title} className="rounded-t-3xl" />
            <CardHeader>
              <CardTitle className="text-lg">{update.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{update.excerpt}</p>
            </CardContent>
            <CardFooter className="justify-self-start mt-auto">
              <Button className="rounded-full">Leia mais</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
