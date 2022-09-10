import { studentInterFace } from "./interfaces/studentInerFace.js";

export class Student implements studentInterFace {
  readonly college: string = "Raipura College";

  constructor(
    private name: string,
    readonly gender: string,
    public department: string
  ) {}

  getProps() {
    return this.name;
  }

  greeting() {
    console.log(
      `Welcome ${this.name.toUpperCase()}, to our ${
        this.department
      } department in ${this.college.toUpperCase()}`
    );
  }
}
