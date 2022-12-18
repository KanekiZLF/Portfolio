// Maquina de escrever

const meuNome = document.querySelector('.meu-nome')

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    )}
typeWriter(meuNome);


function mario(){
    alert("OK Mario")
}

function samurai(){
    alert("OK Samurai")
}


const display = document.querySelectorAll('.start')
const dispon = document.getElementById('buttom-prev')
const dispoff = document.getElementById('buttom-next')

let currenDisplay = 0;

function hideDisplay() {
    display.forEach(item => item.classList.remove('off'))
}

function showDisplay() {
    display[currenDisplay].classList.add('off')
}

function nextDisplay(){
    hideDisplay()
    if(currenDisplay === display.length -1) {
        currenDisplay = 0 
    } else {
        currenDisplay++
    }
    showDisplay()
}

function prevDisplay(){
    hideDisplay()
    if(currenDisplay === 0) {
        currenDisplay = display.length -1 
    } else {
        currenDisplay--
    }
    showDisplay()
}

dispon.addEventListener('click', nextDisplay)
dispoff.addEventListener('click', prevDisplay)
