"use strict";
exports.__esModule = true;
function userLogin(email, password, name) {
    if (name === void 0) { name = "John Doe"; }
    return "User Login";
}
userLogin("arif@gmail.com", "arif123");
function checkValue(value) {
    if (value <= 5) {
        return [value];
    }
    return "Not Ok";
}
