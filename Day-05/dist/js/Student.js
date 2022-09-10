export class Student {
    constructor(name, gender, department) {
        this.name = name;
        this.gender = gender;
        this.department = department;
        this.college = "Raipura College";
    }
    getProps() {
        return this.name;
    }
    greeting() {
        console.log(`Welcome ${this.name.toUpperCase()}, to our ${this.department} department in ${this.college.toUpperCase()}`);
    }
}
