import svg4everybody from 'svg4everybody';
import LazyLoad from 'vanilla-lazyload';
// import header from '../../components/header/header';
// import { casesSlider, casesListToggle } from '../../components/cases/cases';
import Nav, {offset, selectPageOnScroll} from '../../components/nav/nav';

import {includedSlider} from '../../components/included/included';
import {benefitsSlider} from '../../components/benefits/benefits';
// import tabs from '../../components/tabs/tabs';
import {examplesGallery} from '../../components/examples/examples';
import '../../components/fx-ctrl-panel/fx-ctrl-panel';
import '../../components/bg-animation/bg-animation';
import {reviewsSlider} from '../../components/reviews/reviews';
// import { validateForms, validateFormsEn } from '../../components/form/form';
// import {pageWidget} from '../../components/page-widget/page-widget';
import {fixedHeader} from '../../components/header/header';
import {goToTopInit} from "../../components/fx-ctrl-panel/fx-ctrl-panel";
import {scrollToBlock, selectNav} from "../../components/nav/nav";

document.addEventListener('DOMContentLoaded', function (event) {

    svg4everybody();
    selectNavOnScroll();
    let styles = [
        'padding: 2px 9px',
        'background: #2948ff',
        'color: #fff',
        'line-height: 1.56',
        'font-size: 16px',
    ].join('');

    console.log('%c Developed by Daniil Lanshin telegram:@DaniilLanshin', styles);


    /*
        Lazyload images
    */

    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        threshold: 0,
        // load_delay: 300,
        use_native: true
    });

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    /*
        Nav
    */

    const nav = new Nav();

    /*
       Slider
    */

    const $includedSlider = document.querySelector('.included__slider');

    if ($includedSlider) {
        includedSlider();
    }

    /* Gallery */

    examplesGallery();

    /* Benefits slider */

    const $benefitsSlider = document.querySelector('.benefits__slider');

    // if ($benefitsSlider) {
    //     benefitsSlider();
    // }

    /* Reviews slider */

    const $reviewsSlider = document.querySelector('.reviews__slider');

    if ($reviewsSlider) {
        // reviewsSlider();
    }

    var links = document.querySelectorAll('.nav__link');

    function handleButtonClick() {
        scrollToBlock(this.getAttribute("data-scrollTo"));
        selectNav(this);
    }

    links.forEach(function (link) {
        link.addEventListener('click', handleButtonClick);
    });
    window.onscroll = function () {
        fixedHeader();
        goToTopInit();
        selectPageOnScroll();
        const Items = document.querySelectorAll('.animate__animated');
        if (Items.length > 0) {
            animationOnScroll(Items);
        }
    };

    function animationOnScroll(animItems) {
        animItems.forEach(animItem => {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // console.log(animItemPoint);
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                console.log("addClass");
                animItem.classList.add("animate__zoomIn");
            }

        });
    }

});


