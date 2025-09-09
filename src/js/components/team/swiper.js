import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const coverSwiper = () => {
    // var quantitySLide
    // if (window.innerWidth > 996) {
    //     quantitySLide = '2.3'
    // } else {
    //     quantitySLide = 'auto'
    // }
    new Swiper('.cover__swiper', {
        modules: [Navigation],
        slidesPerView: '2.5',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.cover__swiper-prev',
            nextEl: '.cover__swiper-next',
        },
        breakpoints: {
            300:{
                slidesPerView:1.2,
            },
            580:{
                slidesPerView:1.5,
            },
            960:{
                slidesPerView:2,
            },
            1200:{
                slidesPerView:2.5,
            }
        },
    });
};

export const ourTeamSwiper = () => {
    new Swiper('.our-team__swiper', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.our-team__swiper-prev',
            nextEl: '.our-team__swiper-next',
        },
        breakpoints: {
            300:{
                slidesPerView:1.3,
            },
            360:{
                slidesPerView:1.5,
            },
            580:{
                slidesPerView:2,
            },
            960:{
                slidesPerView:2,
            },
            1200:{
                slidesPerView:3,
            }
        },
    });
};

export function CoverButtonIndent(){
    window.addEventListener('DOMContentLoaded',()=>{
        var imgWidth = document.querySelector('.cover__swiper--slide').offsetWidth
        var buttonsWidth = document.querySelector('.cover__swiper-buttons').offsetWidth
        document.querySelector('.cover__swiper-buttons').style.left = `${imgWidth-(buttonsWidth/2-11)}px`
    })
}
export function OurTeamButtonIndent(){
    window.addEventListener('DOMContentLoaded',()=>{
        var imgWidth = document.querySelector('.our-team__swiper--slide').offsetWidth
        var buttonsWidth = document.querySelector('.our-team__swiper-buttons').offsetWidth
        document.querySelector('.our-team__swiper-buttons').style.left = `${imgWidth-(buttonsWidth/2-11)}px`
    })
}
