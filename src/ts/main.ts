import "../scss/style.scss";

let sliderIndex = 2;

const rightSlide = document.querySelector(".right") as HTMLButtonElement;
const leftSlide = document.querySelector(".left") as HTMLButtonElement;

rightSlide.addEventListener("click", nextSlide);
leftSlide.addEventListener("click", nextSlide);

function showslides(index: number) {
  const rightImg = document.querySelector("#images1") as HTMLImageElement;
  const leftImg = document.querySelector("#images2") as HTMLImageElement;

  if (index === 1) {
    leftImg.classList.remove("hidden");
    rightImg.classList.add("hidden");
  }

  if (index === 2) {
    leftImg.classList.add("hidden");
    rightImg.classList.remove("hidden");
  }
}

function nextSlide() {
  if (sliderIndex === 1) {
    sliderIndex = 2;
  } else if (sliderIndex === 2) {
    sliderIndex = 1;
  }

  showslides(sliderIndex);
}
