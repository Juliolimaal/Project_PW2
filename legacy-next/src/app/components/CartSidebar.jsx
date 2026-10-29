'use client'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link'

export default function CartSidebar() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart()

  return (
    <>
      <div className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsCartOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full bg-[#fdfbf7]">
          <div className="flex justify-between items-center mb-6 border-b border-[#E9D0D3] pb-4">
            <h2 className="font-ibarra text-3xl text-[#310729]">Seu Carrinho</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-3xl text-[#8C3A42] hover:rotate-90 transition">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? <p className="text-center text-gray-500 font-lexend mt-10">Carrinho vazio.</p> : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item.name} className="flex gap-4 items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    {item.image && <img src={item.image} alt={item.name} className="w-12 h-16 object-contain" />}
                    <div className="flex-1">
                      <h4 className="font-ibarra text-xl text-[#310729]">{item.name}</h4>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-500 font-lexend bg-gray-100 px-2 py-1 rounded">{item.qty}x</span>
                        <span className="font-bold text-[#8C3A42] font-lexend">R$ {(item.qty * item.price).toFixed(2)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.name)} className="text-gray-300 hover:text-[#8C3A42]"><span className="material-symbols-outlined">delete</span></button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t border-[#E9D0D3] pt-6 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-lexend text-gray-600">Total</span>
              <span className="font-ibarra text-3xl font-bold text-[#310729]">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <Link href="/pagamento">
              <button onClick={() => setIsCartOpen(false)} disabled={cart.length === 0} className="w-full bg-[#8C3A42] text-white py-4 rounded-xl font-lexend uppercase tracking-widest hover:bg-[#6e2b32] transition disabled:opacity-50 shadow-lg flex justify-center gap-2 items-center">
                <span>Finalizar Compra</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}