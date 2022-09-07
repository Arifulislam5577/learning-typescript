// ENUM TYPE

enum CATEGORY {
  PHONE,
  LAPTOP,
  MOBILE,
  ELECTRIC,
}

const product: {
  name: string;
  price: number;
  category: CATEGORY;
} = {
  name: "Android 11",
  price: 1000,
  category: CATEGORY.PHONE,
};

// ANY TYPE

const arr: Array<any> = ["John", "Doe", true, 10];

// UNION TYPE
type Combinable = string | number;
function combine(input1: Combinable, input2: Combinable) {
  let result: Combinable;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result =
      input1.toString().toUpperCase() + " " + input2.toString().toUpperCase();
  }
  return result;
}

// console.log(combine(10, 20));
// console.log(combine("ariful", "islam"));

// FUNCTION TYPE

function addNumber(n1: number, n2: number): number {
  const result: number = n1 + n2;
  return result;
}

function func1(x: number, y: number, cb: (num: number) => void) {
  const result: number = x + y;
  cb(result);
}

func1(10, 21, (num) => console.log(num));
