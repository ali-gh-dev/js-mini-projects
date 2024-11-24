function createNotif() {
    let notif = document.createElement('div')
    notif.className = 'notif'
    notif.innerText = 'hi guys !!!'
    document.querySelector('.notif-container').appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 4000)
}


document.querySelector('.show-notif').addEventListener('click',createNotif)
