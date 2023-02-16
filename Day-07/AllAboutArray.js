"use strict";
exports.__esModule = true;
// const arr: Array<number> = [];
var arr = [];
arr.push(10, 12);
var users = [];
var addUser = function (user) {
    return users.push(user);
};
addUser({
    name: "Arif",
    email: "arif@gmail.com",
    isAdmin: false,
    skills: ["Html", "css"]
});
console.log(users);
