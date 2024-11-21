document.addEventListener('DOMContentLoaded', heartRain);

function heartRain() {
    function createHeart() {
        let colors = ['red','yellow','green','black', 'blue']
        let randomColor = colors[Math.floor(Math.random() * 5)]
        let el = document.createElement('div')
        el.className = 'heart'
        el.innerHTML = '&#10084;'
        el.setAttribute('style', `color:${randomColor};position:fixed;top:-40px;left:${Math.random() * 100}%`)
        document.body.appendChild(el)

        setTimeout(() => {
            el.remove()
        }, 4000)
    }
    setInterval(createHeart, 20)
}