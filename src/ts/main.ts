import '../scss/style.scss'

let sliderIndex = 1;

const rightSlide = document.querySelector('.right') as HTMLButtonElement;
const leftSlide = document.querySelector('.left') as HTMLButtonElement;

rightSlide.addEventListener('click', nextSlide);
leftSlide.addEventListener('click', nextSlide);

function showslides (index: number){
    const rightImg = document.querySelector('#images1') as HTMLImageElement
    const leftImg = document.querySelector('#images2') as HTMLImageElement;

    if (index === 1){
        rightImg.classList.remove('hidden');
        leftImg.classList.add('hidden');
    }

    if (index === 2){
        rightImg.classList.add('hidden');
        leftImg.classList.remove('hidden');
    }
}

function nextSlide(){
    if(sliderIndex === 1){
        sliderIndex = 2;
    }else if(sliderIndex === 2){
        sliderIndex = 1;
    }

    showslides(sliderIndex);
}  



