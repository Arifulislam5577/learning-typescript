import { Student } from "./Student.js";
import { studentInterFace } from "./interfaces/studentInerFace.js";

//CLASS AND INTERFACE
const student1: studentInterFace = new Student(
  "Arif",
  "Male",
  "Computer Science"
);

console.log(student1);

// GENERICS
interface Person {
  name: string;
  age: number;
}
const person = <T extends Person>(obj: T) => {
  const id = Date.now().toString();
  return { ...obj, id };
};

const person1 = person({
  name: "Arif",
  age: 28,
});

console.log(person1);
