const container = document.getElementById("container");
const subscribing = document.getElementById("subscribing");
const email = document.getElementById("email");
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
let errorMessage = document.querySelector(".error-message");

let emailRe =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnOne.addEventListener("click", function (e) {
  errorMessage.innerHTML = "";
  e.preventDefault();
  if (!emailRe.test(email.value)) {
    
    errorMessage.innerHTML = "valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 100%, 90%)";
  } else {
    container.classList.toggle("hidden");
    subscribing.classList.toggle("show");
  }
});

btnTwo.addEventListener("click", function () {
  subscribing.classList.remove("show");
  container.classList.toggle("show-2");
  email.value = "";
});
