'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { useCart } from '../contexts/CartContext' 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // funções do carrinho
  const { setIsCartOpen, cartCount } = useCart()

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY
      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        setShowNavbar(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false)
        setIsOpen(false)
      }
      setLastScrollY(currentScrollY)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`bg-[#0f0510] h-20 flex items-center justify-between px-10 fixed w-full z-50 top-0 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href="/" className="text-2xl font-bold uppercase tracking-wider text-[#E9D0D3] font-ibarra">
        W<span className="text-[#56070C] text-3xl">W</span>W
      </Link>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex space-x-10">
          <Link href="#colecao" className="hover:text-[#56070C] transition text-[#E9D0D3]">Coleções</Link>
          <Link href="#contato" className="hover:text-[#56070C] transition text-[#E9D0D3]">Contato</Link>
          <Link href="#saibamais" className="hover:text-[#56070C] transition text-[#E9D0D3]">Saiba Mais</Link>
        </nav>

        {/* Botão do Carrinho */}
        <button 
          onClick={() => setIsCartOpen(true)} 
          className="relative text-[#E9D0D3] hover:text-[#56070C] transition"
        >
          <span className="material-symbols-outlined text-3xl">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#8C3A42] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-bounce">
              {cartCount}
            </span>
          )}
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f0510] flex flex-col items-center py-5 md:hidden border-t border-gray-800">
           <Link href="#colecao" className="py-2 text-[#E9D0D3]" onClick={() => setIsOpen(false)}>Coleções</Link>
           <Link href="#saibamais" className="py-2 text-[#E9D0D3]" onClick={() => setIsOpen(false)}>Saiba Mais</Link>
        </div>
      )}
    </header>
  )
}