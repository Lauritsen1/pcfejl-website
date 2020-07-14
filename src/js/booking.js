let timePoints = document.querySelectorAll('#time option');

db.collection("booking")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let data = doc.data();

            timePoints.forEach(point => {
                if (point.value == data.time) {
                    point.remove();
                }
            });
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

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
            name: form.name.value,
            email: form.email.value,
            tlf: form.tlf.value,
            day: form.day.value,
            time: form.time.value,
            message: form.message.value,
        }).then(function () {
            window.location.replace(window.location);
        })
});