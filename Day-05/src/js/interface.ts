// INTERFACE

interface RectAngleProps {
  width: number;
  length: number;
}

function drawRectAngle(props: RectAngleProps) {
  let width = props.width;
  let length = props.length;
  return width * length;
}

const result = drawRectAngle({ width: 30, length: 20 });

console.log(result);

interface User {
  readonly id: string; //OPTIONAL ?
  readonly firstName: string;
  readonly lastName: string;

  disPlayUser(): void;
}

const user1: User = {
  id: Date.now().toString(),
  firstName: "Md Ariful",
  lastName: "Islam",
  disPlayUser(): void {
    console.log(`${this.id} || Welcome ${this.firstName} ${this.lastName}`);
  },
};
user1.disPlayUser();

console.log(user1);
