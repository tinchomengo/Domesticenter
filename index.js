// When the hamburger menu is clicked, toggle the open class
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector("header .nav-right").classList.toggle("open");
  document.querySelector(".carousel").classList.toggle("hidden");
  document.querySelector(".carousel-container").classList.toggle("hidden");
  document.querySelector(".arrow").classList.toggle("hidden");
});

const carousel = document.querySelector(".carousel");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const carouselWidth = carousel.offsetWidth;

let currentSlide = 0;

leftButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    carousel.style.transform = `translateX(-${currentSlide * 371}px)`;
  }
});

rightButton.addEventListener("click", () => {
  if (currentSlide < 5) {
    currentSlide++;
    carousel.style.transform = `translateX(-${currentSlide * 371}px)`;
  }
});
