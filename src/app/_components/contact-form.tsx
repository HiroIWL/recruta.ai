import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  sobrenome: z.string().nonempty("O sobrenome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  localizacao: z.string().nonempty("A localização é obrigatória"),
  mensagem: z.string().nonempty("A mensagem é obrigatória"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      localizacao: "",
      mensagem: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log("Dados do formulário:", data);
  }

  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold mb-8 font-martel">Contato</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sobrenome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="Sobrenome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="localizacao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localização</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecione sua localização" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brasil">Brasil</SelectItem>
                      <SelectItem value="portugal">Portugal</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Mensagem" className="h-32 bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-1 md:col-span-2">
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
}
