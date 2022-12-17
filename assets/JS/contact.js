var firstRequired = document.getElementById("1st-required");
var secondRequired = document.getElementById("2nd-required");
var emailRequired = document.getElementById("email-required");
var emailInvalid = document.getElementById("email-invalid");
var subAjax = document.getElementById("submit-ajax");
let popup = document.getElementById("popup-contact");

function popupS(event) {
  event.preventDefault();
  setTimeout(function () {
    popup.style.display = "flex";
    popup.classList.add("fade-in");
    popup.classList.remove("fade-out");
  }, 350);
}

myForm.addEventListener("submit", popupS);

function closePopup() {
  popup.classList.add("fade-out");
  popup.classList.remove("fade-in");
  setTimeout(function () {
    popup.style.display = "none";
  }, 350);
}

document.myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  subAjax.style.visibility = "visible";
  setTimeout(function () {
    subAjax.style.visibility = "hidden";
  }, 500);
});

function store() {
  // event.preventDefault();
  var firstName = document.getElementById("first-n").value;
  var secondName = document.getElementById("second-n").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const info = {
    firstName: firstName,
    secondName: secondName,
    email: email,
    message: message,
  };

  if (firstName === "" || firstName === null) {
    firstRequired.style.display = "block";
  } else {
    firstRequired.style.display = "none";
  }

  if (secondName === "" || secondName === null) {
    secondRequired.style.display = "block";
  } else {
    secondRequired.style.display = "none";
  }

  if (email === "" || email === null) {
    emailRequired.style.display = "block";
    emailInvalid.style.display = "none";
  }
  if (email !== "" && validEmail.test(email) === false) {
    emailRequired.style.display = "none";
    emailInvalid.style.display = "block";
  }
  if (email !== "" && validEmail.test(email) === true) {
    emailRequired.style.display = "none";
    emailInvalid.style.display = "none";
  }

  if (
    firstName === "" ||
    firstName === null ||
    secondName === "" ||
    secondName === null ||
    email === "" ||
    email === null ||
    validEmail.test(email) === false
  ) {
    return false;
  }

  localStorage.setItem("userInfo", JSON.stringify(info));
  const userInfo = localStorage.getItem("userInfo");
  console.log(userInfo);
}

document.getElementById("submit-btn").onclick = store;
