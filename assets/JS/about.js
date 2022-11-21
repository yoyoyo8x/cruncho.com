

// Slideshow2
let Move = 0;
Persay();
//dot
function Change(n) {
  if (n > slides.length) {n = 1}
      else if(n < 1) {n = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[n-1].style.display = "flex";  
  dots[n-1].className += " active";
}
//auto
function Persay() {
  var i;
  slides = document.getElementsByClassName("sl_show per");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  Move++;
  if (Move > slides.length) {Move = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Move-1].style.display = "flex";  
  dots[Move-1].className += " active";
  setTimeout(Persay, 3000); // Change image every 3 seconds
}


// AUTOSCROLL
var autoBtn = document.getElementById("auto-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    autoBtn.style.display = "block";
  } else {
    autoBtn.style.display = "none";
  }
}
function autoScroll() {
  document.documentElement.scroll({ top: 0, behavior: "smooth" });
}


// MENUBAR
var navBtn = document.getElementById("nav-mobile-btn");
var navOver = document.getElementById("nav-overlay");

function showMenu() {
  navBtn.classList.add("slide-out");
  navOver.classList.add("fade-in");
  navOver.classList.remove("fade-out");
  setTimeout(function () {
    navBtn.style.display = "flex";
    navOver.style.display = "block";
  }, 500);
}

function hideMenu() {
  navOver.classList.remove("fade-in");
  navBtn.classList.remove("slide-out");
  navBtn.classList.add("slide-in");
  navOver.classList.add("fade-out");
  setTimeout(function () {
    navBtn.style.display = "none";
    navOver.style.display = "none";
  }, 500);
}


// LOADING
var loadAjax = document.getElementById("loading")
window.addEventListener("load", function(){
  // loadAjax.classList.add("blur");
  setTimeout(
      function (){
          loadAjax.style.display = "none";
      },
     300
  )
});



// ! AnimationNumber
function animateNumber(finalNumber, duration = 3000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber/ (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }  
  }
}


document.addEventListener('DOMContentLoaded', function () {
  animateNumber(5337, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('happyclient-count').innerText = formattedNumber
  })
  
  animateNumber(1230, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('amazingdish-count').innerText = formattedNumber
  })
  
  animateNumber(251, 3500, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('satisfiedstaff-count').innerText = formattedNumber
  })

  animateNumber(9437, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('workhour-count').innerText = formattedNumber
  })

})

