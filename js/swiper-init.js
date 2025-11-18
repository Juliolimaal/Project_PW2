var swiper = new Swiper(".centered-slide-carousel", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  1920: { 
    slidesPerView: 3, 
    spaceBetween: 30 
  },
  1028: { 
    slidesPerView: 2.5, 
    spaceBetween: 20 
  },
  768: { 
    slidesPerView: 1.5, 
    spaceBetween: 15 
  },
  0: { 
    slidesPerView: 1.2, 
    spaceBetween: 10 
  }
}
});