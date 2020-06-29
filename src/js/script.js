// if (time.getHours() <= 10) {
//     console.log('Vi har åbent')
// }

// db.collection("openingHours")
//     .doc('1YEFNC6gZtw4z17UBxDn')
//     .update({

//     });

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
                openingHours.textContent = 'Lukket, vi åbner kl 10:00';
                indicator.style.backgroundColor = 'red';
            }
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });
