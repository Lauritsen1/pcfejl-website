//====================
// Aktivere mobil nav ved klik

let navIcon = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let body = document.querySelector("body");

navIcon.addEventListener("click", () => {

    navIcon.classList.toggle("is-active");

    if (navIcon.classList.contains("is-active")) {
        nav.classList.add("nav--show-mobile");
        body.style.overflow = "hidden";
    } else {
        nav.classList.remove("nav--show-mobile");
        body.style.overflow = "unset";
    }

});

//====================
// Highlighter den side man er på i nav
let anchorElems = document.querySelectorAll('.nav__link');
anchorElems.forEach((anchorElem, index) => {
    if (anchorElem.href == window.location.href) {
        anchorElems[index].classList.add('nav--active-link');
    }
});