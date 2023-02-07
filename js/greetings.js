const loginContainer = document.querySelector(".login-container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector(".logo span:last-child");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.innerText = "";
  localStorage.removeItem(TODOS_KEY);
  toDoList.innerText = "";
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  painGreetings(username);
}

function painGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreetings(savedUsername);
}

logoutButton.addEventListener("click", onLogoutSubmit);
