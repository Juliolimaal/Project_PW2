import { Lexend_Exa, Ibarra_Real_Nova } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'


const lexend = Lexend_Exa({ 
  subsets: ['latin'], 
  variable: '--font-lexend',
  weight: ['100', '400', '700'] 
})

const ibarra = Ibarra_Real_Nova({ 
  subsets: ['latin'], 
  variable: '--font-ibarra',
  weight: ['400', '700']
})

export const metadata = {
  title: 'World Wines Web',
  description: 'A melhor adega online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${lexend.variable} ${ibarra.variable}`}>
      <body className="bg-[#0f0510] text-white font-lexend m-0 p-0 box-border">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}