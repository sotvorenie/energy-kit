import {Swiper} from "swiper";
import {Navigation, Pagination} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.our-products__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
            nextEl: '.our-products__btn.next',
            prevEl: '.our-products__btn.prev',
        },

        pagination: {
            el: '.our-products__pagination',
            clickable: true,
        },

        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })
})