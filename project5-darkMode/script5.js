let darkMode = localStorage.getItem('darkMode') || 'false'
let checkBox = document.getElementById('dark-mode-toggle')



function updateLocaleStorage(){
    if (checkBox.checked){
        localStorage.setItem('darkMode','true')
        location.reload()
    }else{
        localStorage.setItem('darkMode','false')
        location.reload()
    }
}

function setDarkMode(){
    if (darkMode === 'true'){
        checkBox.checked = true
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
}

document.addEventListener('DOMContentLoaded',setDarkMode)
checkBox.addEventListener('change',updateLocaleStorage)
