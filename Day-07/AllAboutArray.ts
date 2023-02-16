// const arr: Array<number> = [];
const arr: number[] = [];

arr.push(10, 12);

// CREATE AN ARRAY OF OBJECT

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
  skills: string[];
};

const users: User[] = [];
const addUser = (user: User) => {
  return users.push(user);
};

addUser({
  name: "Arif",
  email: "arif@gmail.com",
  isAdmin: false,
  skills: ["Html", "css"],
});

console.log(users);
export {};
