const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('buttom-prev')
const btnNext = document.getElementById('buttom-next')

let currenSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currenSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currenSlide === slider.length -1) {
        currenSlide = 0 
    } else {
        currenSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currenSlide === 0) {
        currenSlide = slider.length -1 
    } else {
        currenSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
