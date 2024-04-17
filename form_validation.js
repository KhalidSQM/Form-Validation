const submit = document.getElementById("submit")

function formValidation() {
    const userName = document.getElementById("userName").value;
    const userPass = document.getElementById("password").value;
    const userNameMessage = document.getElementById("userNameMessage");
    const userPasswordMessage = document.getElementById("passwordMessage");
    let error = 0


    if (!userName) {
        userNameMessage.innerText = "Please enter your name";
        error += 1;
    } else if (!isNaN(userName)) {
        userNameMessage.innerText = "Must be letters only";
        error += 1;
    } else if (userName.length < 3) {
        userNameMessage.innerText = "Must be 3 characters or more";
        error += 1;
    }else {
        userNameMessage.innerText = ""
    }

    if (!userPass) {
        userPasswordMessage.innerText = "Please enter your password";
        error += 1;
    } else if (isNaN(userPass)) {
        userPasswordMessage.innerText = "Must be numbers only";
        error += 1;
    } else if (userPass.length < 6) {
        userPasswordMessage.innerText = "Must be 6 digits or more";
        error += 1;
    }else {
        userPasswordMessage.innerText = ""
    }

    return error === 0;
}

submit.addEventListener("click", function (event) {
    if (!formValidation()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});


