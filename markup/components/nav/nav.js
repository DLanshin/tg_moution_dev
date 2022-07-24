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
