// Maquina de escrever

const meuNome = document.querySelector('.meu-nome')

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    )}
typeWriter(meuNome);


var url1 = "https://kanekizlf.github.io/Jogo-Samurai-JavaScript"
var url2 = "https://kanekizlf.github.io/Jogo-Samurai-JavaScript"
var url3 = "https://kanekizlf.github.io/Jogo-Samurai-JavaScript"


function sobre(){
    alert('Estou trabalhando nisso !')
}

function mario(){
    alert('Estou trabalhando nisso !')
}

function samurai(){
    window.open(url1)
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
