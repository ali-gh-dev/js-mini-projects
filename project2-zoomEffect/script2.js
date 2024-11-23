document.querySelector('img').addEventListener('mousemove',zoomIn)
document.querySelector('img').addEventListener('mouseleave',zoomOut)

function zoomIn(ev){
    const x = ev.clientX - ev.target.offsetLeft
    const y = ev.clientY - ev.target.offsetTop
    ev.target.style.transformOrigin = `${x}px ${y}px`
    ev.target.style.transform = `scale(1.5)`
}

function zoomOut(ev){
    ev.target.style.transformOrigin = 'center center'
    ev.target.style.transform = `scale(1)`
}