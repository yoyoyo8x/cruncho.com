var firstRequired = document.getElementById("1st-required");
var secondRequired = document.getElementById("2nd-required");
var emailRequired = document.getElementById("email-required");
var emailInvalid = document.getElementById("email-invalid");
var phoneRequired = document.getElementById("phone-required");
var phoneInvalid = document.getElementById("phone-invalid");
var dateRequired = document.getElementById("date-required");
var timeRequired = document.getElementById("time-required");
var peopleRequired = document.getElementById("people-required");
var peopleInvalid = document.getElementById("people-invalid");

document.booking.addEventListener("submit", function (event) {
  event.preventDefault();
  subAjax.style.visibility = "visible";
  setTimeout(function () {
    subAjax.style.visibility = "hidden";
  }, 1500);
});

function store() {
  // event.preventDefault();
  var firstName = document.getElementById("first-n").value;
  var secondName = document.getElementById("second-n").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var people = document.getElementById("people").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var note = document.getElementById("note").value;
  validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const info = {
    firstName: firstName,
    secondName: secondName,
    email: email,
    phone: phone,
    date: date,
    time: time,
    peoples: people,
    note: note,
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

  if (date === "" || date === null) {
    dateRequired.style.display = "block";
  } else {
    dateRequired.style.display = "none";
  }

  if (phone === "" || phone === null) {
    phoneRequired.style.display = "block";
    phoneInvalid.style.display = "none";
  }

  if (people === "" || people === null) {
    peopleRequired.style.display = "block";
    peopleInvalid.style.display = "none";
  } 
  if (people !== "" && people === 0) {
    peopleRequired.style.display = "none";
    peopleInvalid.style.display = "block";
  }
  if (people !== "" && people !== 0) {
    peopleRequired.style.display = "none";
    peopleInvalid.style.display = "none";
  }

  if (time === "" || time === null) {
    timeRequired.style.display = "block";
  } else {
    timeRequired.style.display = "none";
  }

  if (
    firstName === "" ||
    firstName === null ||
    secondName === "" ||
    secondName === null ||
    email === "" ||
    email === null ||
    validEmail.test(email) === false ||
    phone === "" ||
    phone === null ||
    people === "" ||
    people === null ||
    people === 0 ||
    time === "" ||
    time === null ||
    date === "" ||
    date === null
  ) {
    return false;
  }

  localStorage.setItem("userInfo", JSON.stringify(info));
  const userInfo = localStorage.getItem("userInfo");
  console.log(userInfo);
}

document.getElementById("submit-btn").onclick = store;