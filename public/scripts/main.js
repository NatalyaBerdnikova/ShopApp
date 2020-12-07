let recomendationSlider = new Swiper('.js-recomendation-swiper-container', {
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.js-recomendation-swiper-pagination',
    clickable: true,
  },
});

let trendingSlider = new Swiper('.js-trending-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
  grabCursor: true,
});

let productSlider = new Swiper('.js-product-swiper-container', {
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.js-product-swiper-pagination',
    clickable: true,
  },
});
