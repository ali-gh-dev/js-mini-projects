document.querySelector('.show-modal').addEventListener('click',showModal)
document.querySelector('.hide-modal').addEventListener('click',hideModal)

function showModal(){
    document.querySelector('.modal').style.display = 'flex'
}

function hideModal(){
    document.querySelector('.modal').style.display = 'none'
}