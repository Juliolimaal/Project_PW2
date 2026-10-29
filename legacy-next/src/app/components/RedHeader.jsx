export default function RedHeader() {
  return (
    <header className="flex flex-col items-center pt-20 pb-12">
      
      <div className="flex items-center justify-center mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
        <div className="h-[100px] w-px bg-gradient-to-t from-[#8C3A42] to-transparent opacity-50"></div>
      </div>
      <h1 
        className="font-ibarra font-semibold text-9xl text-center text-[#8C3A42] mt-0 mb-8 2xl:text-[200px]" 
        data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear"
      >
        Red
      </h1>
      <p 
        className="font-lexend text-xl md:text-1xl max-w-3xl px-4 font-semibold text-center text-[#8C3A42] mb-8 leading-relaxed tracking-wide" 
        data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear"
      >
        Envelhece em barricas de carvalho e garrafa, ganhando suavidade, complexidade e aromas elegantes com o tempo.
      </p>

      <p 
        className="font-lexend text-xl md:text-1xl max-w-2xl px-4 font-semibold text-center text-[#8C3A42] mb-12 leading-relaxed tracking-wide" 
        data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear"
      >
        De cor rubi profunda, revela aromas de frutas maduras e especiarias. Encorpado e equilibrado, possui taninos aveludados e final elegante.
      </p>

    </header>
  )
}