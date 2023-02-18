class User {
  private id: string = `${new Date().toISOString()}`;
  constructor(readonly email: string, public name: string) {}

  get getId(): string {
    return this.id;
  }

  set newId(newId: string) {
    this.id = newId;
  }
}

const user1 = new User("a@gmail.com", "Arif");
user1.name = "Arif Khan";
user1.newId = "123";
console.log(user1.getId);
console.log(user1);
