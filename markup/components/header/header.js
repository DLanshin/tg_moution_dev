export function fixedHeader() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        document.querySelector(".header").classList.add("header--fixed");
    } else {
        document.querySelector(".header").classList.remove("header--fixed");
    }

}
