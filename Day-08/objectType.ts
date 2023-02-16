type User = { userName: String; password: String | any };

const users: User[] = [];
const user1: User = { userName: "Arif", password: 123 };
const user2: User = { userName: "Arif", password: "password" };
const user3: User = { userName: "Arif", password: 123 };
const user4: User = { userName: "Arif", password: 123 };
const user5: User = { userName: "Arif", password: null };

users.push(...[user1, user2, user3, user4, user5]);

console.log(users);
