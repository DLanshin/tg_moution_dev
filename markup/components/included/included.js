import Swiper, { Navigation, Pagination } from 'swiper';
export function includedSlider() {
    let mySwiper = new Swiper('.included__slider .swiper', {
        modules: [ Navigation, Pagination ],
        a11y: true,
        keyboardControl: true,
        // grabCursor: true,
        preloadImages: true,
        lazy: true,
        autoHeight: true,
        slideToClickedSlide: true,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        resizeObserver: true,
        waitForTransition: true,
        speed: 600,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        pagination: {
            el: '.included__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.included__slider .swiper-button-next',
            prevEl: '.included__slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                // spaceBetween: 10,
                loop: false,
            },
            768: {
                slidesPerView: 'auto',
                // spaceBetween: 10,
                loop: false,
            },
            960: {
                loop: false,
                // slidesPerView: 3,
                slidesPerView: 'auto',
                // spaceBetween: 60,
            }
        }
    });
}
