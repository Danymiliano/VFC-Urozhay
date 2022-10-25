const linkRegister = document.querySelector(".link-registration");

const formRegister = document.forms.formRegistration;
const btnClose = document.getElementById("btnClose");

const inputsRegister = document.querySelectorAll(
  ".form-registration input:not([type='checkbox'])"
);

const inputPasswords = document.querySelectorAll("[id^='pswd']");

const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  document.body.prepend(overlay);
};

const comparePswd = () => {
  if (inputPasswords[0].value != inputPasswords[1].value) {
    inputPasswords[0].classList.add("error");
    inputPasswords[1].classList.add("error");
  } else {
    inputPasswords[0].classList.remove("error");
    inputPasswords[1].classList.remove("error");
  }
};

for (let inputPswd of inputPasswords) {
  inputPswd.addEventListener("input", () => comparePswd());
}

const showPswd = document.getElementById("showPswd");
const btnResetRegister = document.getElementById("btnResetRegister");

btnResetRegister.addEventListener("click", () => {
  for (let input of inputsRegister) {
    input.value = "";
  }
  if (showPswd.checked) {
    document.getElementById("pswd").setAttribute("type", "password");
    document.getElementById("pswdRepeat").setAttribute("type", "password");
  }

  showPswd.checked = false;

  if (inputPasswords[0].classList.contains("error")) {
    inputPasswords[0].classList.remove("error");
    inputPasswords[1].classList.remove("error");
  }
});

showPswd.addEventListener("change", () => {
  for (let inputPswd of document.querySelectorAll("[id^='pswd']")) {
    if (inputPswd.getAttribute("type") == "password") {
      inputPswd.setAttribute("type", "text");
    } else {
      inputPswd.setAttribute("type", "password");
    }
  }
});