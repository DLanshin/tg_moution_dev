import Swiper, { Navigation, Pagination } from 'swiper';

(function () {

    'use strict';

    const breakpoint = 640;
    let mySwiper;


    const breakpointChecker = function () {
        if (window.innerWidth > breakpoint ) {
            console.log("destroy");
            if ( mySwiper !== undefined ) {
                mySwiper.destroy(true, true);
                document.querySelector(".benefits__slider .benefits__pagination").innerHTML = '';
            }
            document.querySelector(".benefits__slider .swiper-wrapper").style.height = "auto";
            document.querySelector(".benefits__slider .benefits__pagination").innerHTML = '';
            return;
        } else if ( window.innerWidth <= breakpoint) {
            console.log("init");
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        console.log("init");
        mySwiper = new Swiper('.benefits__slider .swiper', {
            modules: [Navigation, Pagination],
            a11y: true,
            keyboardControl: true,
            // grabCursor: true,
            preloadImages: true,
            lazy: true,
            // autoHeight: true,
            slideToClickedSlide: true,
            observer: true,
            observeSlideChildren: true,
            observeParents: true,
            resizeObserver: true,
            waitForTransition: true,
            speed: 600,
            pagination: {
                el: '.benefits__slider .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    loop: false,
                },
            }
        });

    };

    window.addEventListener('resize', () => {
        breakpointChecker();
    });
    breakpointChecker();

})(); /* IIFE end */


