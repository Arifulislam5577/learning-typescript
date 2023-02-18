"use strict";
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value,
    };
    console.log(user);
});
