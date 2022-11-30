var firstRequired = document.getElementById("1st-required");
var secondRequired = document.getElementById("2nd-required");
var emailRequired = document.getElementById("email-required");

function store(event) {
  event.preventDefault();
  var firstName = document.getElementById("first-n").value;
  var secondName = document.getElementById("second-n").value;
  var email = document.getElementById("email").value;

  if (firstName === "" || firstName === null) {
    firstRequired.style.display = "block";
    return false;
  }
  else{
    firstRequired.style.display = "none";
  }

  if (secondName === "" || secondName === null) {
    secondRequired.style.display = "block";
    return false;
  } else {
    secondRequired.style.display = "none";
  }

  if (email === "" || email === null) {
    emailRequired.style.display = "block";
    return false;
  } else {
    emailRequired.style.display = "none";
  }

    const info = {
      'firstName': firstName,
      'secondName': secondName,
      'email': email,
    };

    localStorage.setItem("userInfo", JSON.stringify(info));
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);  
  }


document.getElementById("submit-btn").onclick = store;
