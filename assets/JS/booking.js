
document.booking.addEventListener("submit", function (event) {
    event.preventDefault();
    subAjax.style.visibility = "visible";
    setTimeout(function () {
      subAjax.style.visibility = "hidden";
    }, 1500);
  });