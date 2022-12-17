// Maquina de escrever

const meuNome = document.querySelector('.meu-nome')

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    )}
typeWriter(meuNome);
