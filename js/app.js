

// Анимация для кнопок навигации

const navAnimation = setNavAnimation = () => {
  document.querySelectorAll('.navLink').forEach(navLink => {
    navLink.addEventListener('mouseover', () => {
        navLink.style = `
        transition: all 0.4s;
        font-size: 40px;
        background-color: var(--mainColor);
        color: var(--secondColor);
        padding-bottom: 5px;`
    })

    navLink.addEventListener('mouseout', () => {
        navLink.style = `
        transition: all 0.4s;
        font-size: 26px;
        `
    })
  }) 
}

setNavAnimation()

// Анимация для кнопки

const setButtonAnimation = () => {
  const button = document.querySelector('.btn');
  button.addEventListener('mouseover', () => {
    button.style = `
    transition: all 0.2s;
    background-color: var(--mainColor);
    color: var(--secondColor);
    font-size: 32px;
    padding: 29px;
        `
  },
  button.addEventListener('mouseout', () => {
    button.style = `
    transition: all 0.2s;
    background-color: transparent;
    color: var(--mainColor);
    font-size: 30px;`
  }))
}

setButtonAnimation()

// Параллакс эффект главной страницы

function setBackgroundEffect (event) {
    this.querySelectorAll('.parallax').forEach(parallax => {
      const speed = parallax.getAttribute('speed')
        parallax.style.transform = `translateX(${event.clientX*speed/2000}px)`
    });
}

document.addEventListener('mousemove', setBackgroundEffect)


