const imagesContainer = document.querySelector('.images-container')
const images = document.querySelectorAll('.images-container img')
let n = 0

function startCarousel(){
    function carousel(){
        if (n > images.length - 1){
            n = 0
        }
       imagesContainer.style.transform = `translateX(${n * 300}px)`
        n++
    }
    setInterval(carousel,2000)
}

document.addEventListener('DOMContentLoaded',startCarousel)
