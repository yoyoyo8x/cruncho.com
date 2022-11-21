// Panel
/* Openpanel*/
function openPanel() {
    document.getElementById("Containerpanel").style.display = "block";
  }
  function openPanel1() {
    document.getElementById("Containerpanel").style.display = "block";
  }
  
  
  /* Closepane*/
  function closePanel() {
    document.getElementById("Containerpanel").style.display = "none";
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
  
  // slideshow{}
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("bg-header fade");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }
  
  
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
  
  
  