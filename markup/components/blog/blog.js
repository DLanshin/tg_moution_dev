import Swiper, { Navigation, Pagination } from 'swiper';

(function () {

    'use strict';

    const breakpoint = 640;
    let myBlogSwiper;

    const breakpointChecker = function () {
        if (window.innerWidth > breakpoint ) {
            if ( myBlogSwiper !== undefined ) {
                myBlogSwiper.destroy(true, true);
                document.querySelector(".blogs__slider .blogs__pagination").innerHTML = '';
            }
            document.querySelector(".blogs__slider .swiper-wrapper").style.height = "auto";
            document.querySelector(".blogs__slider .blogs__pagination").innerHTML = '';
            return;
        } else if ( window.innerWidth <= breakpoint) {

            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        console.log("init blog slider");
        myBlogSwiper = new Swiper('.blogs__slider .swiper', {
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
                el: '.blogs__slider .swiper-pagination',
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


