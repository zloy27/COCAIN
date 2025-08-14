import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const coverSwiper = () => {
    new Swiper('.cover__swiper', {
        modules: [Navigation],
        slidesPerView: '2.5',
        spaceBetween: 22,
        loop: true,
        setWrapperSize: { width: 1574, height: 604 },
        navigation: {
            prevEl: '.cover__swiper-prev',
            nextEl: '.cover__swiper-next',
        },
    });
};
export function buttonIndent() {
    const buttonItem = document.querySelector('.cover__swiper-buttons');
    const slideSize = document.querySelector('first__slide');
    window.addEventListener('resize', () => {
        buttonItem.Style.right = slideSize.Style.width;
    });
}
