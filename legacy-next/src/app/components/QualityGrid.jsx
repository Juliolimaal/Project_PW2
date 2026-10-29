import Link from 'next/link'

export default function QualityGrid() {
  const cards = [
    {
      title: 'Plantio',
      desc: 'Plantio da uva exige solo, clima, cuidado, poda, irrigação e paciência.',
      img: '/images/plantio.png',
      link: '#'
    },
    {
      title: 'Colheita',
      desc: 'Cada uva colhida conta uma história de tradição, paixão e tempo.',
      img: '/images/colheita.png',
      link: '#'
    },
    {
      title: 'Produção',
      desc: 'Da uva ao vinho, arte e tradição moldam cada preciosa gota de vinho.',
      img: '/images/esmagamento.png',
      link: '#'
    },
    {
      title: 'Venda',
      desc: 'Cada garrafa vendida leva consigo sabor, história e paixão pelo vinho.',
      img: '/images/compras.png',
      link: '#'
    }
  ]

  return (
    <div className="flex flex-wrap gap-10 justify-center pb-16 px-4">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="w-[270px] min-h-[350px] bg-[#0f0510] rounded-xl text-white text-center p-8 shadow-lg transition-transform transform hover:-translate-y-2 flex flex-col items-center"
        >
          <img 
            src={card.img} 
            alt={card.title} 
            className="w-[80px] h-[80px] object-contain mb-4" 
          />
          
          <h3 className="text-xl mb-2 font-ibarra">{card.title}</h3>
          
          <p className="text-[#E1D9D9] mb-6 text-sm flex-grow font-lexend">
            {card.desc}
          </p>
          
          <Link
            href={card.link}
            className="font-lexend inline-block rounded-sm bg-[#56070C] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl hover:bg-white hover:text-[#56070C]"
          >
            Saiba Mais
          </Link>
        </div>
      ))}
    </div>
  )
}