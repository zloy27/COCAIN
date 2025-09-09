import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const tabsInfoSwiper = () => {
    new Swiper('.tab__swiper', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.tab__swiper-buttons-prev',
            nextEl: '.tab__swiper-buttons-next',
        },
    });
};
export function tabsInfoButtonsIndent(){
    window.addEventListener('DOMContentLoaded',()=>{
        var imgWidth = document.querySelector('.tab__swiper-slide').offsetWidth
        var buttonsWidth = document.querySelector('.tab__swiper-buttons').offsetWidth
        document.querySelector('.tab__swiper-buttons').style.left = `${imgWidth-(buttonsWidth/2-11)}px`
    })
}

export const articlesSwiper = () => {
    new Swiper('.articles__swiper', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.articles__swiper--button-prev',
            nextEl: '.articles__swiper--button-next',
        },
    });
};