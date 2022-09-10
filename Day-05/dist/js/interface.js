"use strict";
function drawRectAngle(props) {
    let width = props.width;
    let length = props.length;
    return width * length;
}
const result = drawRectAngle({ width: 30, length: 20 });
console.log(result);
const user1 = {
    id: Date.now().toString(),
    firstName: "Md Ariful",
    lastName: "Islam",
    disPlayUser() {
        console.log(`${this.id} || Welcome ${this.firstName} ${this.lastName}`);
    },
};
user1.disPlayUser();
console.log(user1);
