enum Category {
  Electronic = "Electronic",
  Accesories = "Accesories",
}

interface Product {
  readonly _id: number;
  title: string;
  price: number;
  category: Category;
  getOffers(category: Category): string | number;
}

const newProduct: Product = {
  _id: 1,
  title: "RFL Vlander",
  price: 10,
  category: Category.Electronic,
  getOffers(category: string) {
    if (this.category === category) {
      return this.price - this.price * 0.1;
    } else {
      return "Not Allowed";
    }
  },
};

enum Role {
  ADMIN = "Admin",
  USER = "User",
}
interface User {
  email: string;
  password: string;
  role: Role;
}

const user1: User = {
  email: "a@gmail.com",
  password: "123",
  role: Role.USER,
};

interface Student extends User {
  id: number;
}

const student1: Student = {
  id: 1,
  email: "a@gmail.com",
  password: "123",
  role: Role.USER,
};
