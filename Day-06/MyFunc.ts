function userLogin(
  email: string,
  password: string,
  name: string = "John Doe"
): string {
  return "User Login";
}

userLogin("arif@gmail.com", "arif123");

function checkValue(value: number): Array<Number> | string {
  if (value <= 5) {
    return [value];
  }

  return "Not Ok";
}

type User = {
  name: string;
  email: string;
  password: string;
};

type Role = {
  isAdmin: boolean;
};

type Student = User & Role;

const newStudent: Student = {
  name: "",
  email: "",
  password: "",
  isAdmin: false,
};

export {};
