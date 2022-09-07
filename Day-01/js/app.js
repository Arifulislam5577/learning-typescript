var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    skills: [{}, {}],
    role: ["hello", 1]
};
// ARRAY
var arr = ["John", "Doe"];
var arr1 = ["John", "Doe"];
var arr2 = [1, "Hello", "World", true, {}];
arr.push("Jack");
arr.map(function (x) { return console.log(x.toUpperCase()); });
// TUPLE
console.log(person.role);
var _a = ["Admin", 1], string = _a[0], number = _a[1];
