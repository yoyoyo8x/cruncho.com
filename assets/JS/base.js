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
  }, 200);
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
var loadAjax = document.getElementById("loading");
window.addEventListener("load", function () {
  // loadAjax.classList.add("blur");
  loadAjax.classList.add("fade-in");
  loadAjax.style.display = "none";
});

// TOOGLE MUTE
let volume = document.querySelector("audio");
let mute = document.getElementById("audio-mute-btn");
let unmute = document.getElementById("audio-unmute-btn");
function toogleMute() {
  console.log(volume.muted);
  if (volume.muted === true) {
    volume.muted = false;
  } else {
    volume.muted = true;
  }
}
function toogleUnmute() {
  if (volume.muted === false) {
    volume.muted = true;
  }
}

// if (volume.muted = true) {
//   mute.style.display = none;
//   unmute.style.display = block;
// } else {
//   mute.style.display = block;
//   unmute.style.display = none;
// }
