//====================
// Nav icon animation

let navIcon = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let body = document.querySelector("body");

navIcon.addEventListener("click", () => {

    navIcon.classList.toggle("is-active");

    if (navIcon.classList.contains("is-active")) {
        nav.classList.add("nav--show-mobile");
        header.style.backgroundColor = "#007ACC";
        body.style.overflow = "hidden";
    } else {
        nav.classList.remove("nav--show-mobile");
        header.style.backgroundColor = "transparent";
        body.style.overflow = "unset";
    }
    
});

//====================
// Active nav

let anchorElems = document.querySelectorAll('.nav__link');
anchorElems.forEach((anchorElem, index) => {
	if (anchorElem.href == window.location.href) {
		anchorElems[index].classList.add('nav--active-link');
	}
});