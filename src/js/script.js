//====================
// Henter åbningstider fra firebase

db.collection("openingHours")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let data = doc.data();

            let openingHours = document.querySelector('.open__message');
            let indicator = document.querySelector('.open__status');

            if (data.open == true) {
                openingHours.textContent = 'Åbent nu, vi lukker kl 22:00';
                indicator.style.backgroundColor = 'lightgreen';
            } else {
                openingHours.textContent = 'Lukket, vi åbner kl 17:00';
                indicator.style.backgroundColor = 'red';
            }
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });


//====================
// Aktivere mobil nav ved klik

let navIcon = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let openingHours = document.querySelector(".open");
let body = document.querySelector("body");

navIcon.addEventListener("click", () => {

    navIcon.classList.toggle("is-active");

    if (navIcon.classList.contains("is-active")) {
        nav.classList.add("nav--show-mobile");
        openingHours.style.display = "none";
        body.style.overflow = "hidden";
    } else {
        nav.classList.remove("nav--show-mobile");
        openingHours.style.display = "flex";
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