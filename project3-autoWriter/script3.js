let txt = 'hi dear users i am "Ali" from Tehran'
let h2 = document.getElementById('txt')

//Functions

function showText() {
    let index = 1

    function show() {
        if (index === txt.length) {
            setTimeout(() => {
                index = 1
            }, 1000)
        }

        h2.innerText = txt.substring(0, index)
        index++
    }

    setInterval(show, 100)
}


// Events

document.addEventListener('DOMContentLoaded', showText)
