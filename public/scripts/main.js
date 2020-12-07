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


let productCounter = document.querySelectorAll('.js-productCounter')

if (productCounter) {
  for (let i = 0; i < productCounter.length; i++) {
    let productCounterCount = productCounter[i].querySelector('.js-productCounterCount')
    let productCounterDec = productCounter[i].querySelector('.js-productCounterDec')
    productCounterDec.addEventListener('click', function () {
      let number = Number(productCounterCount.textContent);
      if (number > Number(productCounter[i].dataset.minCount)) {
        productCounterCount.textContent = --number;
        calculateCartTotal();
      }
    })
    let productCounterInc = productCounter[i].querySelector('.js-productCounterInc')
    productCounterInc.addEventListener('click', function () {
      let number = Number(productCounterCount.textContent);
      if (number < Number(productCounter[i].dataset.maxCount)) {
        productCounterCount.textContent = ++number;
        calculateCartTotal();
      }
    })
  }
}

let calculateCartTotal = function () {
  let cartTotal = document.querySelector('.js-cartTotal')
  let cartSum = 0
  let cardsCart = document.querySelectorAll('.product-card-cart')

  if (cardsCart && cartTotal) {
    for (let i = 0; i < cardsCart.length; i++) {
      let price = cardsCart[i].dataset.price
      let quantity = cardsCart[i].querySelector('.js-productCounterCount')
      quantity = quantity.textContent
      cartSum += price * quantity
      console.log(price, quantity, cartTotal)
    }
    cartTotal.textContent = '$' + cartSum.toFixed(2)
  }
}

calculateCartTotal();
