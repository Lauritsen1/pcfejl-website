let headerElem = document.querySelector(".header");
let downloadElem = document.querySelector(".download");


window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        headerElem.classList.add("header--active");
        downloadElem.classList.add("download--color");

    } else {
        headerElem.classList.remove("header--active");
        downloadElem.classList.remove("download--color");
    }

});