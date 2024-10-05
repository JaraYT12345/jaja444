// script.js

let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(index);
});
