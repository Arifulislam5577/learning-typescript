const person: {
  firstName: string;
  lastName: string;
  age: number;
  skills: Array<object>;
  role: [string, number];
} = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  skills: [{}, {}],
  role: ["hello", 1],
};

// ARRAY

const arr: Array<string> = ["John", "Doe"];
const arr1: string[] = ["John", "Doe"];
const arr2 = [1, "Hello", "World", true, {}];

arr.push("Jack");
arr.map((x) => console.log(x.toUpperCase()));

// TUPLE
console.log(person.role);
const [string, number] = ["Admin", 1];
