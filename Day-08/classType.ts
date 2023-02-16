class User {
  userName: string;
  password: string | any;

  constructor(userName: string, password: string | any) {
    this.userName = userName;
    this.password = password;
  }

  displayUser() {
    console.log(
      `UserName is : ${this.userName} and Password is : ${this.password}`
    );
  }
}

const user1 = new User("Arif", "pass123");
user1.displayUser();
