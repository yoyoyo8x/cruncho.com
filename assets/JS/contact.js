var firstRequired = document.getElementById("1st-required");
var secondRequired = document.getElementById("2nd-required");
var emailRequired = document.getElementById("email-required");

document.myForm.onsubmit = (e) => {
  e.preventDefault();
};
function store() {
  // event.preventDefault();
  var firstName = document.getElementById("first-n").value;
  var secondName = document.getElementById("second-n").value;
  var email = document.getElementById("email").value;

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
  } else {
    emailRequired.style.display = "none";
  }

  if (
    firstName === "" ||
    firstName === null ||
    secondName === "" ||
    secondName === null ||
    email === "" ||
    email === null
  ) {
    return false;
  }
  const info = {
    firstName: firstName,
    secondName: secondName,
    email: email,
  };

  localStorage.setItem("userInfo", JSON.stringify(info));
  const userInfo = localStorage.getItem("userInfo");
  console.log(userInfo);
}

document.getElementById("submit-btn").onclick = store;
