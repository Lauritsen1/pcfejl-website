const form = document.querySelector('.contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const errorElement = document.querySelector('#error');

form.addEventListener('submit', (event) => {
    let messages = []

    if (name.value === '' || name.value == null) {
        messages.push('Navn');
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email');
    }

    if (subject.value === '' || subject.value == null) {
        messages.push('Emne');
    }

    if (message.value === '' || message.value == null) {
        messages.push('Besked');
    }

    if (messages.length > 0) {
        event.preventDefault();
        errorElement.innerText = 'Mangler ' + messages.join(', ');
    }
});