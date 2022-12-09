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
    pic: './images/maindishes.png',
    name: 'Angus tenderloin with lobster',
    star:'<i class="fa fa-star" aria-hidden="true"></i>',
    link: '#',
    price: '$40.00',
    describe: 'Australian Black Beef Tenderloin with Lobster'
},
]
let listTemplate2 = [ 
{
    pic2: './images/maindishes2.png',
    name2: 'Grilled chicken with vegetables',
    star:'<i class="fa fa-star" aria-hidden="true"></i>',
    link2: '#',
    price2: '$30.00',
    describe2: 'Marinade, chicken, vegetables'
},
];
let listTemplate3 = [ 
    {
      pic: './images/maindishes.png',
      name: 'Angus tenderloin with lobster',
      star:'<i class="fa fa-star" aria-hidden="true"></i>',
      link: '#',
      price: '$40.00',
      describe: 'Australian Black Beef Tenderloin with Lobster'
  },
  {
      pic: './images/template4.png',
      name: 'KUNG PAO CHICKEN',
      star:'',
      link: '#',
      price: '$25.00',
      describe: 'Peppers, chicken, peanuts'
  },
  {
    pic: './images/plateofhoisin.png',
    name: 'STICKY HOISION PORK TACOS',
    link: '#',
    star:'',
    price: '$25.00',
    describe:'Pork, seasonal vegetables, eggs',
},

  ]
  let listTemplate4 = [ 
  {
      pic2: './images/maindishes2.png',
      name2: 'Grilled chicken with vegetables',
      star:'<i class="fa fa-star" aria-hidden="true"></i>',
      link2: '#',
      price2: '$30.00',
      describe2: 'Marinade, chicken, vegetables'
  },
  {
      pic2: './images/plateofbeef.png',
      name2: 'BEEF STEAK',
      link2: '#',
      star:'',
      price2: '$25.00',
      describe2: 'Beef steak, potato, tomato'
  },
  {
    pic2: './images/plateofpizza.png',
    name2: 'Pizza',
    link2: '#',
    star:'',
    price2: '$25.00',
    describe2: 'Sausage, flour, tomato'
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
                <h5>${i.star} ${i.name}</h5>
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
                <h5>${u.star} ${u.name2}</h5>
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
  
  listTemplate3.forEach((i) => {
      eleTem3 = eleTem3 + `
          <div class='Container_template'>
              <div><img src="${i.pic}" alt="${i.name}"></div>
              <div class='information'>
              <div class='Container_price'>
                  <h5>${i.star} ${i.name}</h5>
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
  
  listTemplate4.forEach((u) => {
      eleTem4 = eleTem4 + `
          <div class='Container_template'>
              <div><img src="${u.pic2}" alt="${u.name2}"></div>
              <div class='information'>
              <div class='Container_price'>
                  <h5>${u.star} ${u.name2}</h5>
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


//   function rendertemplate5() {
//   const listTem5 = document.getElementById('list_template5');
//   let eleTem5 = '';
  
//   listTemplate.forEach((i) => {
//       eleTem5 = eleTem5 + `
//           <div class='Container_template'>
//               <div><img src="${i.pic}" alt="${i.name}"></div>
//               <div>
//               <div class='Container_price'>
//                   <h5>${i.name}</h5>
//                   <h5>${i.price}</h5>
//               </div>
//               <p>${i.describe}</p>
//               </div>
//           </div>
//       `
//   })
//   if(listTem5)
//       listTem5.insertAdjacentHTML('beforeend', eleTem5);
//   }
//   rendertemplate5();
  
//   function rendertemplate6() {
//   const listTem6 = document.getElementById('list_template6');
//   let eleTem6 = '';
  
//   listTemplate2.forEach((u) => {
//       eleTem6 = eleTem6 + `
//           <div class='Container_template'>
//               <div><img src="${u.pic2}" alt="${u.name2}"></div>
//               <div>
//               <div class='Container_price'>
//                   <h5>${u.name2}</h5>
//                   <h5>${u.price2}</h5>
//               </div>
//               <p>${u.describe2}</p>
//               </div>
//           </div>
//       `
//   })
//   if(listTem6)
//       listTem6.insertAdjacentHTML('beforeend', eleTem6);
//   }
//   rendertemplate6();
   // /_______________________________________

  //  ____________________________________________________ScrollMagic____________

  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#goout',
      reverse: false
  })
  .setClassToggle('#goout','fadeInLeft')
  .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#goout1',
    reverse: false
  })
  .setClassToggle('#goout1','fadeInLeft')
  .addTo(controller);
  

//   var ourScene = new ScrollMagic.Scene({
//     triggerElement: '#goout2'
//   })
//   .setClassToggle('#goout2','fadeInLeft')
//   .addTo(controller); 
let listspace = [ 
  {
    pic: './images/space/1.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Overview/1.jpg',
  },
  {
    pic: './images/space/2.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Overview/2.jpg',
  },
  {
    pic: './images/space/3.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Overview/4.jpg',
  },
  {
    pic: './images/space/4.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/1.jpg',
  },
  {
    pic: './images/space/5.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/2.jpg',
  },
  {
    pic: './images/space/6.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/3.jpg',
  },
  {
    pic: './images/space/7.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/4.jpg',
  },
  {
    pic: './images/space/8.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/5.jpg',
  },
  {
    pic: './images/space/9.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/6.jpg',
  },
  
  {
    pic: './images/space/11.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Bar/1.jpg',
  },
  {
    pic: './images/space/10.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Restaurant/14.jpg',
  },
  {
    pic: './images/space/12.jpg',
    link: 'https://solariahotel.com/UploadFile/Gallery/Bar/3.jpg',
  },
  ];
  function renderspace() {
    const listSpace = document.getElementById('list_space');
    let elespace = '';
    
    listspace.forEach((i) => {
        elespace = elespace + `
                <a href="${i.link}" target="_blank">
                  <img src="${i.pic}">
                </a>
        `
    })
    if(listSpace)
        listSpace.insertAdjacentHTML('beforeend', elespace);
    }
    renderspace();
