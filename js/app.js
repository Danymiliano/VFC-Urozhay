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

