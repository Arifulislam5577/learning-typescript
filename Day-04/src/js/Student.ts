export class Student {
  readonly college: string = "Raipura College";

  constructor(
    private name: string,
    readonly gender: string,
    private department: string
  ) {}

  greeting() {
    console.log(
      `Welcome ${this.name.toUpperCase()}, to our ${
        this.department
      } department in ${this.college.toUpperCase()}`
    );
  }
}
