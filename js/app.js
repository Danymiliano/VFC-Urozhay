// Анимация для кнопок навигации

// const navAnimation = setNavAnimation = () => {
//   document.querySelectorAll('.navLink').forEach(navLink => {
//     navLink.addEventListener('mouseover', () => {
//         navLink.style = `
//         transition: all 0.4s;
//         font-size: 40px;
//         background-color: var(--mainColor);
//         color: var(--secondColor);
//         padding-bottom: 5px;`
//     })

//     navLink.addEventListener('mouseout', () => {
//         navLink.style = `
//         transition: all 0.4s;
//         font-size: 26px;
//         `
//     })
//   }) 
// }
// setNavAnimation()

// Анимация для бургер-меню

AOS.init({
  once: false,
  offset: '100px',
})

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const navItems = nav.querySelectorAll('a')

const setBurgerMenuAnimation = () => {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('stop__scroll')
    burger.classList.toggle('burger__active')
    nav.classList.toggle('nav__visible')
  })
}
setBurgerMenuAnimation()

const setNavItemsOptions = () => {
  navItems.forEach(el => {
    el.addEventListener('click', () => {
  document.body.classList.remove('stop__scroll')
  burger.classList.toggle('burger__active')
  nav.classList.remove('nav__visible')
    })
  })
}
setNavItemsOptions()

// Модальное окно

const setModalWindow = () => {
  const modalButton = document.querySelector('.btn__description')
  const modalOverlay = document.querySelector('.modal__overlay')
  const modalWindow = document.querySelector('.modal')

  modalButton.addEventListener('click', () => {
  modalOverlay.classList.add('modal__overlay-visible')
  modalWindow.classList.add('modal__visible')

    modalOverlay.addEventListener('click', (e) => {
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal__overlay-visible');
      }
      })
})
}
setModalWindow()

// Слайдер

const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

const setSliderSettings = () => {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height ='auto';
  })
}
setSliderSettings()

window.addEventListener('resize', setSliderSettings)

const rollSlider = () => {
  sliderLine.style.transform = 'translate(-'+ count * width +'px)';
 }

document.querySelector('.slider__next').addEventListener('click', () => {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider()
})

document.querySelector('.slider__prev').addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider()
})

