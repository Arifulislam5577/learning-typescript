// ENUM TYPE
var CATEGORY;
(function (CATEGORY) {
    CATEGORY[CATEGORY["PHONE"] = 0] = "PHONE";
    CATEGORY[CATEGORY["LAPTOP"] = 1] = "LAPTOP";
    CATEGORY[CATEGORY["MOBILE"] = 2] = "MOBILE";
    CATEGORY[CATEGORY["ELECTRIC"] = 3] = "ELECTRIC";
})(CATEGORY || (CATEGORY = {}));
var product = {
    name: "Android 11",
    price: 1000,
    category: CATEGORY.PHONE
};
// ANY TYPE
var arr = ["John", "Doe", true, 10];
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result =
            input1.toString().toUpperCase() + " " + input2.toString().toUpperCase();
    }
    return result;
}
// console.log(combine(10, 20));
// console.log(combine("ariful", "islam"));
// FUNCTION TYPE
function addNumber(n1, n2) {
    var result = n1 + n2;
    return result;
}
function func1(x, y, cb) {
    var result = x + y;
    cb(result);
}
func1(10, 21, function (num) { return console.log(num); });
