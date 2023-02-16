"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.id = `${new Date().toISOString()}`;
    }
}
const user1 = new User("a@gmail.com", "Arif");
user1.name = "Arif Khan";
console.log(user1);
