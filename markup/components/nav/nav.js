class Nav {
    constructor() {
        this.$header = document.querySelector('.header');
        // this.$navWrap = document.querySelector('.header__nav-w');
        this.$navTrigger = document.querySelector('.nav__trigger');
        this.$nav = document.querySelector('.nav_primary');
        // this.$navContacts = document.querySelector('.nav_primary .nav__contact');
        this.$page = document.querySelector('.page');
        this.events();
        this.navOpen = false;
    }

    // events
    events() {

        this.$navTrigger.addEventListener( 'click', (e) => {

            if ( this.navOpen ) {
                this.closeNav();
            } else {
                this.openNav();
            }

        });

        window.addEventListener( 'resize', (e) => {
            this.resizeNav();
        });
    }

    openNav() {
        this.navOpen = true;

        if ( window.innerWidth > '960' ) {
            this.$nav.classList.remove('nav_open');
            this.$page.classList.remove('page_nav_open');
        } else {
            this.$page.classList.add('page_nav_open');
            this.$nav.classList.add('nav_open');
        }

    }

    closeNav() {
        this.$nav.classList.remove('nav_open');
        this.$page.classList.remove('page_nav_open');
        this.navOpen = false;
    }

    resizeNav() {
        let viewportWidth = window.innerWidth;
        console.log(viewportWidth);

        if ( viewportWidth > '639' ) {

            this.$nav.classList.remove('nav_open');
            this.$page.classList.remove('page_nav_open');
        }
    }
    // methods
}

export default Nav;
export function scrollToBlock(objId) {
    let obj = document.getElementById(objId);
    if (!obj) {
        return false;
    }
    const y = obj.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}
export function selectNav(obj) {
    resetSelectNav();
    obj.parentElement.classList.add("nav__item_active");
}
export function resetSelectNav() {
    const nav = new Nav();
    const itemActive = nav.$nav.querySelector(".nav__item_active");
    if (itemActive) {
        itemActive.classList.remove("nav__item_active");
    }
}
export function selectPageOnScroll() {
    const links = document.querySelector('.nav_primary').querySelectorAll(".nav__link");
    links.forEach(function (link) {
        const id = link.getAttribute("data-scrollTo");
        const section = document.getElementById(id);
        const sectionItemHeight = section.offsetHeight;
        const sectionItemOffset = offset(section).top;
        const sectionStart = 2;

        let sectionItemPoint = window.innerHeight - sectionItemHeight / sectionStart;
        if (sectionItemHeight > window.innerHeight) {
            sectionItemPoint = window.innerHeight - window.innerHeight / sectionStart;
        }
        if ((pageYOffset > sectionItemOffset - sectionItemPoint) && pageYOffset < (sectionItemOffset + sectionItemHeight)) {
            selectNav(link);
        }
    });
}
export function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}
