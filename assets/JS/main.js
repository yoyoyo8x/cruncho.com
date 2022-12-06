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
//__________________________________________________Dot_______________
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
//___________________________________________________Auto_______________
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

// ____________________________________________________Menu______________
let listTemplate = [ 
  {
    pic: './images/template1.png',
    name: 'GARLIC SHRIMP & TONNARELLI PASTA',
    link: '#',
    price: '$19.99',
    describe: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic: './images/template2.png',
    name: 'PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI',
    link: '#',
    price: '$15.50',
    describe: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic: './images/template3.png',
    name: 'GRILLED HANGER STEAK',
    link: '#',
    price: '$25.50',
    describe: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic: './images/template4.png',
    name: 'GRILLED FREE RANGE CHICKEN SALAD',
    link: '#',
    price: '$19.99',
    describe: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
]
let listTemplate2 = [ 
{
    pic2: './images/template3.png',
    name2: 'PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI',
    link2: '#',
    price2: '$15.50',
    describe2: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic2: './images/template4.png',
    name2: 'GARLIC SHRIMP & TONNARELLI PASTA',
    link2: '#',
    price2: '$19.99',
    describe2: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic2: './images/template1.png',
    name2: 'GRILLED FREE RANGE CHICKEN SALAD',
    link2: '#',
    price2: '$19.99',
    describe2: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
{
    pic2: './images/template2.png',
    name2: 'GRILLED HANGER STEAK',
    link2: '#',
    price2: '$25.50',
    describe2: 'Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce'
},
];
 // /_______________________________________

function rendertemplate() {
const listTem = document.getElementById('list_template');
let eleTem = '';

listTemplate.forEach((i) => {
    eleTem = eleTem + `
        <div class='Container_template'>
            <div><img src="${i.pic}" alt="${i.name}"></div>
            <div>
            <div class='Container_price'>
                <h5>${i.name}</h5>
                <h5>${i.price}</h5>
            </div>
            <p>${i.describe}</p>
            </div>
        </div>
    `
})
if(listTem)
    listTem.insertAdjacentHTML('beforeend', eleTem);
}
rendertemplate();

function rendertemplate2() {
const listTem2 = document.getElementById('list_template2');
let eleTem2 = '';

listTemplate2.forEach((u) => {
    eleTem2 = eleTem2 + `
        <div class='Container_template'>
            <div><img src="${u.pic2}" alt="${u.name2}"></div>
            <div>
            <div class='Container_price'>
                <h5>${u.name2}</h5>
                <h5>${u.price2}</h5>
            </div>
            <p>${u.describe2}</p>
            </div>
        </div>
    `
})
if(listTem2)
    listTem2.insertAdjacentHTML('beforeend', eleTem2);
}
rendertemplate2();
// /_______________________________________

function rendertemplate3() {
  const listTem3 = document.getElementById('list_template3');
  let eleTem3 = '';
  
  listTemplate.forEach((i) => {
      eleTem3 = eleTem3 + `
          <div class='Container_template'>
              <div><img src="${i.pic}" alt="${i.name}"></div>
              <div>
              <div class='Container_price'>
                  <h5>${i.name}</h5>
                  <h5>${i.price}</h5>
              </div>
              <p>${i.describe}</p>
              </div>
          </div>
      `
  })
  if(listTem3)
      listTem3.insertAdjacentHTML('beforeend', eleTem3);
  }
  rendertemplate3();
  
  function rendertemplate4() {
  const listTem4 = document.getElementById('list_template4');
  let eleTem4 = '';
  
  listTemplate2.forEach((u) => {
      eleTem4 = eleTem4 + `
          <div class='Container_template'>
              <div><img src="${u.pic2}" alt="${u.name2}"></div>
              <div>
              <div class='Container_price'>
                  <h5>${u.name2}</h5>
                  <h5>${u.price2}</h5>
              </div>
              <p>${u.describe2}</p>
              </div>
          </div>
      `
  })
  if(listTem4)
      listTem4.insertAdjacentHTML('beforeend', eleTem4);
  }
  rendertemplate4();
  // /_______________________________________


  function rendertemplate5() {
  const listTem5 = document.getElementById('list_template5');
  let eleTem5 = '';
  
  listTemplate.forEach((i) => {
      eleTem5 = eleTem5 + `
          <div class='Container_template'>
              <div><img src="${i.pic}" alt="${i.name}"></div>
              <div>
              <div class='Container_price'>
                  <h5>${i.name}</h5>
                  <h5>${i.price}</h5>
              </div>
              <p>${i.describe}</p>
              </div>
          </div>
      `
  })
  if(listTem5)
      listTem5.insertAdjacentHTML('beforeend', eleTem5);
  }
  rendertemplate5();
  
  function rendertemplate6() {
  const listTem6 = document.getElementById('list_template6');
  let eleTem6 = '';
  
  listTemplate2.forEach((u) => {
      eleTem6 = eleTem6 + `
          <div class='Container_template'>
              <div><img src="${u.pic2}" alt="${u.name2}"></div>
              <div>
              <div class='Container_price'>
                  <h5>${u.name2}</h5>
                  <h5>${u.price2}</h5>
              </div>
              <p>${u.describe2}</p>
              </div>
          </div>
      `
  })
  if(listTem6)
      listTem6.insertAdjacentHTML('beforeend', eleTem6);
  }
  rendertemplate6();
   // /_______________________________________

  //  ____________________________________________________ScrollMagic____________

  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#goout'
  })
  .setClassToggle('#goout','fadeInLeft')
  .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#goout1'
  })
  .setClassToggle('#goout1','fadeInLeft')
  .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#goout2'
  })
  .setClassToggle('#goout2','fadeInLeft')
  .addTo(controller); 
