"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.id = `${new Date().toISOString()}`;
    }
    get getId() {
        return this.id;
    }
    set newId(newId) {
        this.id = newId;
    }
}
const user1 = new User("a@gmail.com", "Arif");
user1.name = "Arif Khan";
user1.newId = "123";
console.log(user1.getId);
console.log(user1);
