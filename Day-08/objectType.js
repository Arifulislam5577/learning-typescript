var users = [];
var user1 = { userName: "Arif", password: 123 };
var user2 = { userName: "Arif", password: "password" };
var user3 = { userName: "Arif", password: 123 };
var user4 = { userName: "Arif", password: 123 };
var user5 = { userName: "Arif", password: null };
users.push.apply(users, [user1, user2, user3, user4, user5]);
console.log(users);
