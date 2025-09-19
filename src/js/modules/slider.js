import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  autoHeight: true,


  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});