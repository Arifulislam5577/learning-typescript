const person: {
  firstName: string;
  lastName: string;
  age: number;
  skills: Array<object>;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  skills: [{}, {}],
};

// ARRAY

const arr: Array<string> = ["John", "Doe"];
const arr1: string[] = ["John", "Doe"];

arr.push("Jack");
arr.map((x) => console.log(x.toUpperCase()));
