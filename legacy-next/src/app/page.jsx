import QualityGrid from './components/QualityGrid'
import WineCarousel from './components/Winecarrossel'
import Hero from './components/Hero'
import { Sophistication, History } from './components/Sections' 

const SectionNumber = ({ num }) => (
  <div className="text-center mt-10 mb-10">
    <h2 className="text-[150px] tracking-[16px] font-ibarra leading-none" 
        style={{ 
          WebkitTextStroke: '1px #56070C', 
          WebkitTextFillColor: 'white', 
          color: 'white' 
        }}> 
      {num}
    </h2>
  </div>
)

const Separator = () => (
  <div className="flex justify-center my-20">
    <div className="h-[100px] w-[1px] bg-[#56070C]"></div>
  </div>
)

export default function Home() {
  return (
    <main className="pt-20">
      
      {/* --- HERO --- */}
      <Hero />

      {/* --- 01 COLEÇÃO --- */}
      <div id="colecao" className="bg-white text-[#310729] py-12">
        <SectionNumber num="01" />
        <div className="text-center mb-20 px-4">
          <h2 className="text-[44px] font-ibarra">Coleção de vinhos WWW</h2>
          <p className="text-[20px] max-w-[500px] mx-auto mt-2">
            Nossa coleção de vinhos reflete nossa paixão pela enologia. Entre tintos elegantes, brancos aromáticos, cada garrafa tem sua personalidade. Vinhos do Velho e do Novo Mundo compõem essa seleção, trazendo o melhor de cada safra. Brindar com um bom vinho é transformar qualquer ocasião em algo memorável.
          </p>     
        </div>
        <WineCarousel />
        <Separator />
      </div>

      {/* --- 02 SOFISTICAÇÃO --- */}
      <div className="zerotwo bg-white text-[#310729] py-12">
        <SectionNumber num="02" />
        
        <Sophistication />
        
        <Separator />
      </div>

      {/* --- 03 QUALIDADE --- */}
      <div className="relative w-full bg-cover bg-center bg-fixed py-12" style={{ backgroundImage: "url('/images/bg-quality.jpg')" }}>
         <SectionNumber num="03" />
         <div className="text-center mb-10 px-4">
            <h2 className="text-[50px] font-ibarra text-[#56070C] tracking-[16px]">Qualidade</h2> 
            <p className="text-xl max-w-2xl mx-auto text-[#310729]">
              Na WWW, a qualidade é nosso compromisso, desde o plantio até a venda. Vinhos selecionados para paladares exigentes, proporcionando experiências inesquecíveis.
            </p>
         </div>
         <QualityGrid />
      </div>

      {/* --- 04 HISTÓRIA --- */}
      <div id="saibamais" className="bg-white text-[#310729] py-12">
        <SectionNumber num="04" />
        
        
        <History />
      
      </div>

    </main>
  )
}