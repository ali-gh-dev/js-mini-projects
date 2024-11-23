document.addEventListener('DOMContentLoaded',bgChanger)


function bgChanger() {
    function change(){
        let n1 = Math.floor(Math.random() * 256)
        let n2 = Math.floor(Math.random() * 256)
        let n3 = Math.floor(Math.random() * 256)
        document.body.style.backgroundColor = `rgba(${n1}, ${n2}, ${n3}, 0.4)`
    }
    setInterval(change,1000)
}
