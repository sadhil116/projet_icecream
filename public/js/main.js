let body = document.body
let btndark = document.querySelector('.darkBtn')
btndark.addEventListener('click',function(){
    if (body.className == 'dark') {
        body.className='light'
        btndark.innerText = 'dark'
    } else {
        body.className = 'dark'
        btndark.innerText = 'light'
    }
})