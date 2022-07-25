import Swiper, { Autoplay, Pagination, Navigation} from 'swiper';
export function includedSlider() {
    let mySwiper = new Swiper('.included__slider .swiper', {
        modules: [ Navigation, Pagination, Autoplay ],
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        preloadImages: true,
        lazy: true,
        autoHeight: true,
        slideToClickedSlide: true,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        resizeObserver: true,
        waitForTransition: true,
        speed: 800,

        pagination: {
            el: '.included__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.included__slider .swiper-button-next',
            prevEl: '.included__slider .swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                loop: false,
            },
            768: {
                slidesPerView: 'auto',
                loop: false,
            },
            960: {
                loop: false,
                slidesPerView: 'auto',
            }
        }
    });
}
