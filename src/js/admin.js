// Gør så man ikke kan komme ind på admin siden medmindre man er logget ind
let html = document.querySelector('html');
html.style.display = 'none';
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location = '/';
    } else {
        html.style.display = 'block';
    }
});

// Log ud
// const signout_button = document.querySelector(".signout");
// signout_button.addEventListener("click", function () {
//     auth.signOut().then(function () {
//         console.log("brugeren er logget af");
//     });
// });

let åbningsstatus = document.querySelector('.admin-åbningsstatus__select');
let openMessage = document.querySelector('.open-message');
let closedMessage = document.querySelector('.closed-message');

db.collection("openingHours")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let data = doc.data();

            console.log(data)

            åbningsstatus.value = data.open;
            openMessage.value = data.open_message;
            closedMessage.value = data.closed_message;
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

let åbningsStatusForm = document.querySelector('.admin-åbningsstatus-form');
åbningsStatusForm.addEventListener('submit', () => {
    event.preventDefault();

    db.collection("openingHours")
        .doc("1YEFNC6gZtw4z17UBxDn")
        .update({
            open: åbningsstatus.value,
            open_message: openMessage.value,
            closed_message: closedMessage.value
        })
        .then(function () {
            window.location.replace(window.location);
        })

});