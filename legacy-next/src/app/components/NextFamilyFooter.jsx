import Link from 'next/link'

export default function NextFamilyFooter() {
  return (
    <footer className="h-[650px] bg-[#0f0510] text-white flex flex-col items-center pt-24 pb-5 relative z-10 overflow-hidden">
      <div className="font-lexend -mb-10 text-xl z-20">Próxima Família</div>
      
      <Link href="/rose" className="group relative flex items-center justify-center text-white no-underline px-10 py-5 uppercase tracking-wider text-sm font-lexend mt-[390px] z-30 border border-white/30 hover:border-transparent transition-all">
        <span className="relative z-10">Saiba Mais</span>
        <span className="absolute inset-0 bg-[#DF587D] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
      </Link>

      <div className="absolute bottom-0 z-10 opacity-80">
        <img width="150" src="/images/wine-rose-copy.png" alt="Rose Wine" />
      </div>
      
      <div className="text-[200px] font-ibarra font-extrabold text-[#DF587D] absolute top-20 z-0 opacity-50 select-none">
        Rosé
      </div>
    </footer>
  )
}