import { Student } from "./Student.js";
const student1 = new Student("Arif", "Male", "Computer Science");
console.log(student1);
const person = (obj) => {
    const id = Date.now().toString();
    return Object.assign(Object.assign({}, obj), { id });
};
const person1 = person({
    name: "Arif",
    age: 28,
});
console.log(person1);
