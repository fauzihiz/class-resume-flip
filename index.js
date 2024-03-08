document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      effect: 'slide',
      speed: 600,  
      spaceBetween: 20,
      // If you need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      
    });
  });
  