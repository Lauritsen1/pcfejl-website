const loginform = document.querySelector(".admin-form");
loginform.addEventListener("submit", function (event) {
	event.preventDefault();

	const email = loginform.email.value;
	const password = loginform.password.value;

	function validateEmail(email) {
		var re = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
		return re.test(String(email).toLowerCase());
	}

	if (email == "") {
		alert("Type email");
		return
	} else {
		validateEmail(email);
	}

	if (password == "") {
		alert("Type password");
		return
	}

	auth.signInWithEmailAndPassword(email, password)
		.then(function (cred) {
			console.log(cred);
            loginform.reset();
            window.location = '/admin';
		})
		.catch(function (error) {
			console.log(error.message)
		});

});
