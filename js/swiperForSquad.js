const swiper = new Swiper(".gallery__slider", {
    effect: 'coverflow',
    fadeEffect: {
      crossFade: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      370: {
        slidesPerView: 3,
      },
    },
    keyboard: {
      onlyinViewport: true,
      enabled: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    loop: true,
    slidesPerView: 'auto',
    grabCursor: true,
    autoHeight: false,
    spaceBetween: 300,
    centeredSlides: false,
    slidesPerView: 2,
    allowSlideNext: true,
    allowSlidePrev: true,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
  });