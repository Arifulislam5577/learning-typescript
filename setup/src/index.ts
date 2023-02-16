class User {
  private readonly id: string = `${new Date().toISOString()}`;
  constructor(readonly email: string, public name: string) {}
}

const user1 = new User("a@gmail.com", "Arif");
user1.name = "Arif Khan";
console.log(user1);
