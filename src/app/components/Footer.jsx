'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  // Lista de páginas onde este Footer GLOBAL NÃO deve aparecer
  // O componente vai checar se a URL atual é alguma dessas
  const paginasSemFooter = ['/red', '/white', '/rose']

  // Se a página atual estiver na lista, retorna null (não desenha nada)
  if (paginasSemFooter.includes(pathname)) {
    return null
  }

  return (
    <footer id="footer" className="mt-12 pb-8 flex flex-col justify-center items-center bg-[#0f0510]">
      <div className="mt-16 mb-16 text-center text-white w-[200px] h-[200px] border-4 border-white rounded-full flex items-center justify-center text-[50px] transition duration-500 hover:rotate-45 font-lexend">
        <p>W<span className="text-[65px] text-[#56070C]">W</span>W</p>
      </div>
      
      <div className="address mb-12 text-center">
        <h2 className="text-[36px] font-light font-ibarra">
          <a href="https://maps.app.goo.gl/5vTvN2RrRdFYV9CB7" target="_blank" className="text-white transition duration-500 hover:text-[#56070C]">
            Av. Primeiro de Maio, 720 - Jaguaribe
          </a>
        </h2>
      </div>

      <div className="policies flex items-center gap-5 flex-wrap justify-center font-light text-sm">
          <Link href="#" className="hover:opacity-70 text-white">Contatos</Link>
          <Link href="#" className="hover:opacity-70 text-white">Política de Privacidade</Link>
          <Link href="#" className="hover:opacity-70 text-white">termos & serviços</Link>
          <span className="text-white">2025©WWW</span>
      </div>
    </footer>
  )
}