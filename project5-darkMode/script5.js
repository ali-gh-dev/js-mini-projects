let checkBox = document.getElementById('dark-mode-toggle')

function updateLocaleStorage(){
    if (checkBox.checked){
        localStorage.setItem('darkMode','true')
        setDarkMode()
    }else{
        localStorage.setItem('darkMode','false')
        setDarkMode()
    }
}

function setDarkMode(){
    let darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true'){
        checkBox.checked = true
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
}

document.addEventListener('DOMContentLoaded',setDarkMode)
checkBox.addEventListener('change',updateLocaleStorage)
