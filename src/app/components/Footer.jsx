'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

export default function Footer() {
  const pathname = usePathname()

  const paginasSemFooter = ['/red', '/white', '/rose']

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  if (paginasSemFooter.includes(pathname)) {
    return null
  }

  const handleNewsletter = async () => {
    if (!email.trim()) {
      setMessage('Digite seu e-mail.')
      return
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailValido.test(email)) {
      setMessage('Digite um e-mail válido.')
      return
    }

    try {
      setLoading(true)
      setMessage('')

      const { error } = await supabase
        .from('newsletter')
        .insert([{ email }])

      if (error) {
        if (
          error.message.includes('duplicate') ||
          error.message.includes('unique')
        ) {
          setMessage('Esse e-mail já está cadastrado.')
        } else {
          setMessage('Erro ao cadastrar.')
        }
        return
      }

      setMessage('Cadastro realizado com sucesso!')
      setEmail('')
    } catch (error) {
      setMessage('Erro inesperado.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#09040a] text-white">

      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8C3A42]/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#56070C]/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 border-b border-white/10 pb-14">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl hover:scale-105 transition duration-500">
              <Image
                src="/images/logo-footer.png"
                alt="World Wines"
                width={95}
                height={95}
                className="object-contain"
              />
            </div>

            <h2 className="font-ibarra text-3xl tracking-wide mb-3">
              World Wines
            </h2>

            <p className="text-sm text-gray-400 leading-7 max-w-xs">
              Vinhos exclusivos selecionados para transformar momentos
              comuns em experiências memoráveis.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">

            <h3 className="font-ibarra text-2xl mb-6">
              Navegação
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">

              <Link href="/" className="hover:text-[#d9a4ab] transition">
                Início
              </Link>

              <Link href="/red" className="hover:text-[#d9a4ab] transition">
                Tintos
              </Link>

              <Link href="/white" className="hover:text-[#d9a4ab] transition">
                Brancos
              </Link>

              <Link href="/rose" className="hover:text-[#d9a4ab] transition">
                Rosés
              </Link>

              <Link href="#" className="hover:text-[#d9a4ab] transition">
                Política de Privacidade
              </Link>

            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">

            <h3 className="font-ibarra text-2xl mb-6">
              Clube World Wines
            </h3>

            <p className="text-sm text-gray-400 mb-5 leading-7">
              Receba ofertas exclusivas, novidades e seleções especiais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-[#8C3A42]"
              />

              <button
                onClick={handleNewsletter}
                disabled={loading}
                className="rounded-xl bg-[#8C3A42] px-5 py-3 text-sm uppercase tracking-widest hover:bg-[#6e2b32] transition shadow-xl disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Entrar'}
              </button>

            </div>

            {message && (
              <p className="mt-3 text-sm text-gray-300">
                {message}
              </p>
            )}

          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-b border-white/10">

          <a
            href="https://maps.app.goo.gl/5vTvN2RrRdFYV9CB7"
            target="_blank"
            className="font-ibarra text-xl md:text-2xl text-center hover:text-[#d9a4ab] transition"
          >
            Av. Primeiro de Maio, 720 - Jaguaribe
          </a>

          {/* Social */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#8C3A42] hover:text-white hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#8C3A42] hover:text-white hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#8C3A42] hover:text-white hover:-translate-y-1 transition duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#8C3A42] hover:text-white hover:-translate-y-1 transition duration-300"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-gray-500">

          <p>© 2026 World Wines</p>

          <p>Elegância • Exclusividade • Experiência</p>

          <p>Todos os direitos reservados</p>

        </div>
      </div>
    </footer>
  )
}