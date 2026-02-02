'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'

export default function WineCarrossel() {
  return (
    <div className="w-full relative max-w-7xl mx-auto px-4 mb-24 py-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}  
        loop={false}            
        grabCursor={true}      
        pagination={{ clickable: true }}
        breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {/* Slide 1 - White */}
        <SwiperSlide className="pb-12">
          <div className="text-center px-4 group">
            <Link href="/wine_white">
              <div className="h-[400px] relative transition duration-500 hover:scale-105 flex justify-center items-center">
                <img src="/images/wine-white-copy.png" alt="White Wine" className="h-full object-contain" />
              </div>
            </Link>
            <p className="text-[50px] font-ibarra text-[#A7AA37] mt-4">White</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Red */}
        <SwiperSlide className="pb-12">
           <div className="text-center px-4 group">
            <Link href="/red">
              <div className="h-[400px] relative transition duration-500 hover:scale-105 flex justify-center items-center cursor-pointer">
                 <img src="/images/wine-tinto-copy.png" alt="Red Wine" className="h-full object-contain" />
              </div>
            </Link>
            <p className="text-[50px] font-ibarra text-[#8C3A42] mt-4">Red</p>
          </div>
        </SwiperSlide>
        
        {/* Slide 3 - Rosé */}
        <SwiperSlide className="pb-12">
           <div className="text-center px-4 group">
            <Link href="/wine_rose">
              <div className="h-[400px] relative transition duration-500 hover:scale-105 flex justify-center items-center">
                <img src="/images/wine-rose-copy.png" alt="Rose Wine" className="h-full object-contain" />
              </div>
            </Link>
            <p className="text-[50px] font-ibarra text-[#DF587D] mt-4">Rosé</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}