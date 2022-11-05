const setHoverAnimation = () => {
    const playersLink = document.querySelectorAll('.navLink');
    playersLink.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            elem.style = `
            color: var(--urozhayColor);
            transition: 0.2s all ease-in-out;
            font-size: 30px;`
        }),
        elem.addEventListener('mouseout', () => {
            elem.style = `
            color: var(--secondColor);
            transition: 0.2s all ease-in-out;
            font-size: 26px;`   
        })
    })
}
setHoverAnimation()
