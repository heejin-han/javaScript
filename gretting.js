const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = input.value;
  paintGretting(currentUser);
  saveName(currentUser);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${text}!`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {
    askForName();
  } else {
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
