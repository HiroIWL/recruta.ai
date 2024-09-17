import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/processo-seletivo", label: "Jobs" },
    { href: "/categorias", label: "Categorias" },
    { href: "/atualizacoes", label: "Atualizações" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/contato", label: "Contato" },
    { href: "/feedback", label: "Feedback" },
  ];
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white font-inter">
      <div className="flex items-center space-x-8">
        <div className="font-roboto font-black">RECRUTA.AI</div>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-row gap-4 justify-center items-center font-normal">
            {links.map((link, index) => (
              <NavigationMenuLink key={index} href={link.href} className="hover:font-bold transition-all px-4 py-2">
                {link.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link href="/postar-job">
          <Button className="rounded-full">
            Postar um Job <span className="ml-2">→</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
