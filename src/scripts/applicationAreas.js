import {Swiper} from "swiper";
import {Navigation, Pagination} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.application-areas__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
        allowTouchMove: true,
        watchOverflow: true,

        navigation: {
            nextEl: '.application-areas__btn.next',
            prevEl: '.application-areas__btn.prev',
        },

        pagination: {
            el: '.application-areas__pagination',
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