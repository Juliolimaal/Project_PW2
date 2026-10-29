import Link from 'next/link'

// Componente da Seção 02
export function Sophistication() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center my-12 px-5 max-w-7xl mx-auto">
      <div>
        <img 
          src="/images/sec02.jpg" 
          alt="Sofisticação" 
          className="max-w-[400px] w-full" 
        />
      </div>
      <div className="max-w-[400px]">
        <h2 className="font-ibarra text-[50px]">Sofisticação</h2>
        <p className="text-lg leading-7 mt-2 mb-4">
          A sofisticação do vinho vai além de seu sabor, envolvendo uma complexa harmonia entre aromas, textura e final. Cada vinhedo, com suas características únicas, traz uma riqueza sensorial que reflete o terroir e o cuidado na vinificação. A maturação em barris de carvalho ou em garrafas acrescenta camadas de complexidade, oferecendo uma experiência única a cada gole. Assim, o vinho se torna não apenas uma bebida, mas uma verdadeira obra de arte que envolve história, cultura e paixão.
        </p>
        <Link href="#colecao" className="font-semibold hover:underline">
          • Veja todas coleções
        </Link>
      </div>
    </section>
  )
}

// Componente da Seção 04
export function History() {
  return (
    <section className="max-w-7xl mx-auto px-5 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-right">
            <h2 className="text-[40px] font-ibarra font-medium">WWW é vinho. É Brasil. É o mundo dos vinhos ao seu alcance.</h2>
        </div>
        <div className="flex justify-center">
            <img src="/images/sec04.jpg" alt="História" className="w-[340px]" />
        </div>
      </div>
      
      <div className="text-center my-12">
        <h2 
          className="text-[55px] font-light font-ibarra"
          style={{ textShadow: "0px 5px 10px #31072950" }}
        >
          Desde 1991
        </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Félix, um gato sofisticado, sonhava em abrir sua própria adega e, com esforço e persuasão, fundou a World Wines Web, um espaço elegante de vinhos raros. Seu faro apurado e conhecimento conquistaram clientes, incluindo influenciadores e amantes do vinho.
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto">Caminhando entre as prateleiras, ele recomendava safras especiais, provando que um gato não precisa só de leite pode ser um verdadeiro sommelier. 🍷🐱</p>
          <div className="mt-8">
            <img src="/images/cat.jpeg" alt="Gato Félix" className="w-[300px] mx-auto rounded shadow-lg" />
          </div>
      </div>
    </section>
  )
}