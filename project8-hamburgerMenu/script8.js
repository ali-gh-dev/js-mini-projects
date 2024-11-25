const hamburgerBtn = document.querySelector('.hamburger-btn')
const container = document.querySelector('.social-container')
const closeBtn = document.querySelector('i.bi-x-square')

hamburgerBtn.addEventListener('click',showMenu)
closeBtn.addEventListener('click',hideMenu)

function showMenu(){
    hamburgerBtn.style.display = 'none'
    container.style.transform = 'translateX(0)'
}

function hideMenu(){
    hamburgerBtn.style.display = 'block'
    container.style.transform = 'translateX(100%)'
}