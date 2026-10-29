'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient' 

import Navbar from '../components/Navbar'
import RedHeader from '../components/RedHeader'
import WineSection from '../components/WineSection'
import NextFamilyFooter from '../components/NextFamilyFooter'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function RedPage() {
  // Estado para guardar os dados que vêm do banco
  const [dbWines, setDbWines] = useState([])

  useEffect(() => {
    // 1. Inicia animações
    AOS.init({ duration: 1000, once: false, mirror: true });

    // 2. Busca os preços atualizados no Supabase
    async function fetchPrices() {
      const { data } = await supabase
        .from('products')
        .select('name, price')
      
      if (data) setDbWines(data)
    }

    fetchPrices()
  }, [])

  // procura se o vinho existe no banco. 
  // Se existir, usa o preço do banco. Se não, usa o preço fixo.
  const getPrice = (wineName, defaultPrice) => {
    const foundWine = dbWines.find(w => w.name === wineName)
    return foundWine ? foundWine.price : defaultPrice
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar /> 
      
      <main className="pt-20">
        <RedHeader />
        
        {/* Vinho 1 - Alesia */}
        <WineSection 
          title="Red Wine Alesia"
          subtitle="Profundidade e elegância em sintonia"
          description="De cor rubi intensa e brilhante, Alesia revela aromas envolventes de frutas vermelhas maduras, notas sutis de especiarias e um delicado toque de carvalho. Encorpado e equilibrado."
          price={getPrice('Red Wine Alesia', 899.99)}
          imageSrc="/images/image-wine-red-alesia.png"
          showIcons={true}
        />

        {/* Vinho 2 - Larnache */}
        <WineSection 
          title="Larnache"
          subtitle="Intensidade de sabor"
          description="De coloração rubi profunda com reflexos violáceos, Larnache revela aromas envolventes de frutas vermelhas maduras. No paladar, é encorpado e aveludado."
          price={getPrice('Larnache', 999.99)}
          imageSrc="/images/image-wine-red-larnache.png"
          showDocg={true}
          reverse={true} 
        />

        {/* Vinho 3 - Vitalo */}
        <WineSection 
          title="Vitalo Vermelho"
          subtitle="Um brinde ao vermelho que desperta sentidos"
          description="De tom rubi intenso com reflexos violáceos, Vitalo exala aromas de frutas vermelhas maduras, como morango e amora. No paladar, revela corpo médio e textura aveludada."
          price={getPrice('Vitalo Vermelho', 2300.00)}
          imageSrc="/images/image-wine-red-vitalo.png"
        />
        
      </main>

      <NextFamilyFooter />
    </div>
  )
}