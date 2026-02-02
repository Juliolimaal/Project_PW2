'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard } from 'react-icons/fa' 
import { SiElo } from 'react-icons/si'

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [brand, setBrand] = useState('unknown')

  // --- 1. Bandeira do cartão ---
  const detectBrand = (number) => {
    const cleanNumber = number.replace(/\D/g, '')
    
    if (cleanNumber.match(/^4/)) return 'visa'
    if (cleanNumber.match(/^5[1-5]/)) return 'mastercard'
    if (cleanNumber.match(/^3[47]/)) return 'amex'
    if (cleanNumber.match(/^(4011|4389|4514|4576|5041|5066|5090|6277|6362|6363|650|6516|6550)/)) return 'elo'
    
    return 'unknown'
  }

  // --- 2. Formatação dos Inputs (Máscaras) ---
  const handleNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, '') 
    const currentBrand = detectBrand(val)
    setBrand(currentBrand)

   
    val = val.replace(/(\d{4})/g, '$1 ').trim()
    setCardNumber(val.slice(0, 19)) 
  }

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '')
    if (val.length >= 2) {
      val = val.slice(0, 2) + '/' + val.slice(2, 4)
    }
    setExpiry(val)
  }

  // --- 3. Renderiza o Ícone da Bandeira ---
  const getBrandIcon = () => {
    switch(brand) {
      case 'visa': return <FaCcVisa size={48} className="text-white" />
      case 'mastercard': return <FaCcMastercard size={48} className="text-white" />
      case 'amex': return <FaCcAmex size={48} className="text-white" />
      case 'elo': return <span className="text-white font-bold text-2xl font-lexend">elo</span>
      default: return <FaCreditCard size={48} className="text-white opacity-50" />
    }
  }

  // --- 4. Cor do Cartão Virtual baseada na bandeira ---
  const getCardColor = () => {
    switch(brand) {
      case 'visa': return 'bg-gradient-to-r from-[#1a1f71] to-[#2b33b5]' 
      case 'mastercard': return 'bg-gradient-to-r from-[#eb001b] to-[#f79e1b]' 
      case 'amex': return 'bg-gradient-to-r from-[#2f7e98] to-[#6fcfeb]'
      case 'elo': return 'bg-gradient-to-r from-[#000000] to-[#444444]' 
      default: return 'bg-gradient-to-br from-[#310729] to-[#56070C]' 
    }
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex items-center justify-center p-4">
      
      {/* Botão de Voltar */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 text-[#8C3A42] font-lexend hover:underline">
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar para Loja
        </Link>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        

        <div className="flex flex-col items-center justify-center order-1 lg:order-1">
          <div className={`w-[340px] h-[220px] rounded-2xl shadow-2xl p-6 flex flex-col justify-between transition-all duration-700 ${getCardColor()} transform hover:scale-105`}>
            
            <div className="flex justify-between items-start">
               {/* Chip do cartão */}
              <div className="w-12 h-9 bg-yellow-200/80 rounded-md border border-yellow-400 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-px bg-yellow-600 my-1"></div>
              </div>

              <div className="animate-pulse-once">
                {getBrandIcon()}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs text-white/70 font-lexend uppercase tracking-widest">Número do Cartão</label>
              <p className="text-white font-lexend text-2xl tracking-wider font-medium shadow-black drop-shadow-md">
                {cardNumber || '•••• •••• •••• ••••'}
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <label className="text-[10px] text-white/70 font-lexend uppercase">Nome do Titular</label>
                <p className="text-white font-lexend uppercase tracking-wide truncate w-[200px]">
                  {cardName || 'SEU NOME AQUI'}
                </p>
              </div>
              <div className="text-right">
                <label className="text-[10px] text-white/70 font-lexend uppercase">Validade</label>
                <p className="text-white font-lexend">
                  {expiry || 'MM/AA'}
                </p>
              </div>
            </div>

          </div>
          <p className="mt-8 text-gray-400 font-lexend text-sm text-center">
            Este é um ambiente seguro.<br/>Seus dados são criptografados.
          </p>
        </div>



        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 order-2 lg:order-2">
          <h2 className="font-ibarra text-4xl text-[#310729] mb-2">Pagamento</h2>
          <p className="text-gray-500 font-lexend text-sm mb-8">Preencha os dados para finalizar sua compra.</p>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-lexend">Número do Cartão</label>
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000"
                  className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-[#8C3A42] bg-transparent font-lexend transition-colors text-lg"
                  value={cardNumber}
                  onChange={handleNumberChange}
                  maxLength="19"
                />
                <span className="material-symbols-outlined absolute right-2 text-gray-400">credit_card</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-lexend">Nome no Cartão</label>
              <input 
                type="text" 
                placeholder="Como está impresso no cartão"
                className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-[#8C3A42] bg-transparent font-lexend transition-colors"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div className="flex gap-5">
              {/* Input Validade */}
              <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-lexend">Validade</label>
                <input 
                  type="text" 
                  placeholder="MM/AA"
                  className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-[#8C3A42] bg-transparent font-lexend transition-colors text-center"
                  value={expiry}
                  onChange={handleExpiryChange}
                  maxLength="5"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 font-lexend">CVC</label>
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full p-3 border-b-2 border-gray-200 outline-none focus:border-[#8C3A42] bg-transparent font-lexend transition-colors text-center"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    maxLength="4"
                  />
                  <span className="material-symbols-outlined absolute right-2 text-gray-400 text-sm">lock</span>
                </div>
              </div>
            </div>

            {/* Botão Pagar */}
            <button 
              className="mt-6 bg-[#8C3A42] text-white font-lexend py-4 rounded-xl shadow-lg hover:bg-[#6e2b32] hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Confirmar Pagamento</span>
              <span className="material-symbols-outlined">check_circle</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}