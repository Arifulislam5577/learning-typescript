const userName = document.getElementById("name") as HTMLInputElement;
const userEmail = document.getElementById("email") as HTMLInputElement;
const userPassword = document.getElementById("password") as HTMLInputElement;
const form = document.getElementById("form") as HTMLFormElement;

interface User {
  userName: string;
  userEmail: string;
  userPassword: string;
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const user: User = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };

  console.log(user);
});
