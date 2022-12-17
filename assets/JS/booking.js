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
let popup = document.getElementById("popup-booking");
let popupName = document.getElementById("popup-name");
let popupPhone = document.getElementById("popup-phone");
let popupEmail = document.getElementById("popup-email");
let popupDate = document.getElementById("popup-date");
let popupTime = document.getElementById("popup-time");
let popupNumber = document.getElementById("popup-number");

function popupS(event) {
  event.preventDefault();
  setTimeout(function () {
    popup.style.display = "flex";
    popup.classList.add("fade-in");
    popup.classList.remove("fade-out");
  }, 350);
}

booking.addEventListener("submit", popupS);

function closePopup() {
  popup.classList.add("fade-out");
  popup.classList.remove("fade-in");
  setTimeout(function () {
    popup.style.display = "none";
  }, 350);
}

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
  validPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  console.log(validPhone.test(phone));

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

  if (phone === "") {
    phoneRequired.style.display = "block";
    phoneInvalid.style.display = "none";
  }
  if (phone !== "" && validPhone.test(phone) === false) {
    phoneRequired.style.display = "none";
    phoneInvalid.style.display = "block";
  }
  if (phone !== "" && validPhone.test(phone) === true) {
    phoneRequired.style.display = "none";
    phoneInvalid.style.display = "none";
  }

  if (people === "" || people === null) {
    peopleRequired.style.display = "block";
  } else {
    peopleRequired.style.display = "none";
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
    validPhone.test(phone) === false ||
    phone === "" ||
    phone === null ||
    people === "" ||
    people === null ||
    time === "" ||
    time === null ||
    date === "" ||
    date === null
  ) {
    return false;
  }

  localStorage.setItem("bookingInfo", JSON.stringify(info));
  const bookingInfo = localStorage.getItem("bookingInfo");
  console.log(bookingInfo);
  dataInfo = JSON.parse(localStorage.getItem("bookingInfo"));
  user1Name = dataInfo.firstName;
  user2Name = dataInfo.secondName;
  userEmail = dataInfo.email;
  userPhone = dataInfo.phone;
  userTime = dataInfo.time;
  userDate = dataInfo.date;
  userNumber = dataInfo.peoples;
  popupName.innerHTML = user1Name + " " + user2Name;
  popupDate.innerHTML = userDate;
  popupTime.innerHTML = userTime;
  popupPhone.innerHTML = userPhone;
  popupEmail.innerHTML = userEmail;
  popupNumber.innerHTML = userNumber + " " + "people/person";
}

document.getElementById("submit-btn").onclick = store;
