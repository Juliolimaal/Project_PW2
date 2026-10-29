import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/bg3.jpg')", filter: "brightness(0.9)" }}
    >
      <div className="text-center px-10 max-w-5xl z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-[#E9D0D3] font-ibarra">
          Bem-Vindos a World <span className="text-[#56070C]">Wines</span> Web
        </h1>
        
        <p className="mt-4 mb-5 text-xl text-[#E9D0D3]">
          Encontre na nossa adega online vinhos que transformam qualquer instante em algo único. 
          Cada garrafa é uma história esperando para ser compartilhada, entregue com todo o carinho até sua porta.
        </p>     
        
        <Link 
          href="#saibamais" 
          className="inline-block bg-[#56070C] px-8 py-3 text-sm font-medium text-white hover:scale-110 transition rounded-sm"
        >
          Conheça Mais Sobre Nós
        </Link>
      </div>
    </section>
  )
}