let controlPanel = document.getElementById("fix-control");
let toTopBtn = document.getElementById("to-top");
// When the user scrolls down 20px from the top of the document, show the button

export function goToTopInit() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        controlPanel.style.display = "flex";
    } else {
        controlPanel.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}
toTopBtn.addEventListener('click', () => {
    topFunction();
});
