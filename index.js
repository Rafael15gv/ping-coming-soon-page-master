const form = document.querySelector(".container__login");
const btn = document.querySelector(".container__btn");
const emailInput = document.querySelector(".container__email");
const errorUno = document.querySelector(".p1");
const errorDos = document.querySelector(".p2");
const isValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailUser = emailInput.value;

  if (isValido.test(emailUser)) {
    console.log("es valido el email");
    this.submit();
  } else if (emailUser == "") {
    errorUno.classList.remove("hidden");
    errorDos.classList.add("hidden");
    emailInput.style.borderColor = "red";
  } else {
    errorDos.classList.remove("hidden");
    errorUno.classList.add("hidden");
    emailInput.style.borderColor = "red";
  }
});
