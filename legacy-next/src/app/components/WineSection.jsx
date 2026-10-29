'use client'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'

export default function WineSection({ 
  title, 
  subtitle, 
  description, 
  price, 
  imageSrc, 
  reverse = false, 
  showIcons = false,
  showDocg = false   
}) {
  
  const { addToCart } = useCart()

  return (
    <section className="py-12">
      
      {showIcons && (
        <div className="flex justify-around px-0 lg:px-24 md:px-5 mb-12">
          {[
            { icon: 'nutrition', text: 'fresco' },
            { icon: 'psychiatry', text: 'suave' },
            { icon: 'cloud', text: 'leve' }
          ].map((item, index) => (
             <div key={index} 
                  className="w-[130px] h-[130px] md:w-[180px] md:h-[180px] flex flex-col justify-center items-center bg-[#8C3A42] text-white font-lexend text-lg rounded-full mb-12 transition duration-500 hover:-translate-y-2.5"
                  data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 100}>
                <span className="material-symbols-outlined text-5xl">{item.icon}</span>
                <p>{item.text}</p>
             </div>
          ))}
        </div>
      )}

      {showDocg && (
        <div className="flex flex-col justify-center items-center mt-[60px] mb-12" data-aos="fade-up">
           <h2 className="w-[450px] font-ibarra text-[40px] text-center text-[#8C3A42] md:w-[700px] md:text-[50px]">
             A maioria dos nossos vinhos possuem selo DOCG
           </h2>
           <div className="mt-[30px] flex justify-center items-center w-[200px] h-[200px] border-[3px] border-[#8C3A42] rounded-full transition duration-500 hover:-translate-y-2.5">
             <p className="font-lexend text-[#8C3A42] text-[30px]">D.O.C.G</p>
           </div>
        </div>
      )}

      {/* O Conteúdo do Vinho */}
      <div className={`mx-8 flex flex-col lg:flex-row justify-center items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Texto */}
        <div className="flex flex-col items-center lg:items-start font-lexend w-[455px] md:w-[500px]" data-aos="fade-right" data-aos-duration="1500">
          <h2 className="font-ibarra text-6xl font-extrabold text-[#310729]">{title}</h2>
          <h3 className="text-[#8C3A42] text-xl font-normal m-2.5">{subtitle}</h3>
          <p className="font-light mb-5 text-justify text-sm md:text-base text-[#310729]">
            {description}
          </p>
          
          <div className="flex gap-5 md:gap-10">
            
            <button 
              className="flex gap-2.5 bg-[#8C3A42] text-white px-8 py-2.5 transition duration-500 hover:bg-white hover:text-[#8C3A42] hover:border hover:border-[#8C3A42] cursor-pointer items-center border border-transparent rounded-sm"
              onClick={() => addToCart({ name: title, price: Number(price), image: imageSrc })}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              <span>comprar</span>
            </button>
            
            <button className="group flex gap-2.5 text-[#8C3A42] px-8 py-2.5 transition-all duration-500 items-center">
              <span className="material-symbols-outlined">reviews</span>
              <span className="transition-all duration-500 group-hover:tracking-[3px]">avaliações</span>
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="order-1 lg:order-2" data-aos="fade-down" data-aos-duration="1500">
          <img src={imageSrc} alt={title} className="max-w-full h-auto" />
        </div>

      </div>
    </section>
  )
}