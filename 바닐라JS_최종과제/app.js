const loginWrap = document.querySelector("#login-wrap");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const widget = document.querySelector("#widget");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginBtnSubmit(event){
    event.preventDefault();
    loginWrap.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    widget.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginWrap.classList.remove(HIDDEN_CLASSNAME);
    loginWrap.addEventListener("submit", onLoginBtnSubmit);
}else {
    loginWrap.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;
    widget.classList.remove(HIDDEN_CLASSNAME);
}