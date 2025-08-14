import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
//
export function sliderFirst() {
    const slideItem = document.querySelectorAll('.first-column');
    const sliderButton = document.querySelector('.news__slider--button');
    let numberSlide = 0;
    sliderButton.addEventListener('click', () => {
        slideItem.forEach(itemActive());
    });
    function itemActive() {
        if (slideItem[numberSlide].classList.contains('active__slide')) {
            slideItem[numberSlide].classList.remove('active__slide');
            numberSlide = numberSlide + 1;
            if (numberSlide >= slideItem.length) {
                numberSlide = 0;
            }
            slideItem[numberSlide].classList.add('active__slide');
        }
    }
}

export function sliderSecond() {
    const slideItem = document.querySelectorAll('.second-column');
    const sliderButton = document.querySelector('.news__slider--button');
    let numberSlide = 0;
    sliderButton.addEventListener('click', () => {
        slideItem.forEach(itemActive());
    });
    function itemActive() {
        if (slideItem[numberSlide].classList.contains('active__slide')) {
            slideItem[numberSlide].classList.remove('active__slide');
            numberSlide = numberSlide + 1;
            if (numberSlide >= slideItem.length) {
                numberSlide = 0;
            }
            slideItem[numberSlide].classList.add('active__slide');
        }
    }
}
export const feedbackSwiper = new Swiper('.feedback__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
        prevEl: '.feedback__button--left',
        nextEl: '.feedback__button--right',
    },
});
