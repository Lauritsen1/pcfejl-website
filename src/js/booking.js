let timePoints = document.querySelectorAll('#time option');

let form = document.querySelector('.booking-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tlf = document.querySelector('#tlf');
const day = document.querySelector('#day');
const time = document.querySelector('#time');
const message = document.querySelector('#message');
const errorElement = document.querySelector('#error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (name.value === "" || name.value == null) {
        return false;
    }

    if (email.value === "" || email.value == null) {
        return false;
    }

    if (tlf.value === "" || tlf.value == null) {
        return false;
    }

    if (day.value === "" || day.value == null) {
        return false;
    }

    if (time.value === "" || time.value == null) {
        return false;
    }

    if (message.value === "" || message.value == null) {
        return false;
    }

    db.collection("booking")
        .add({
            name: name.value,
            email: email.value,
            day: day.value,
            tlf: tlf.value,
            time: time.value,
            message: message.value
        })
        .then(function () {
            window.location.replace(window.location);
        });

});