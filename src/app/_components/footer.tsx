import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="py-6 px-8 flex justify-around mb-8 bg-slate-100 w-full">
        <img src="/google.png" alt="Empresa 1" className="h-8" />
        <img src="/spotify.png" alt="Empresa 2" className="h-8" />
        <img src="/zap.png" alt="Empresa 3" className="h-8" />
        <img src="/pinteres.png" alt="Empresa 4" className="h-8" />
        <img src="/apple.png" alt="Empresa 4" className="h-8" />
        <img src="/dribbble.png" alt="Empresa 4" className="h-8" />
      </div>
      <div className="pt-8 pb-32 px-8">
        <div className="flex flex-col md:flex-row gap-32">
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/categorias">Categorias</Link>
              </li>
              <li>
                <Link href="/sobre-nos">Sobre Nós</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Ajuda</h4>
            <ul>
              <li>
                <Link href="/suporte">Suporte ao Cliente</Link>
              </li>
              <li>
                <Link href="/termos">Termos e Condições</Link>
              </li>
              <li>
                <Link href="/privacidade">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
