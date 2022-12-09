//main
const menuItems = [
  //List ra danh sách item menu
  {
    cate: "ALL",
  },
  {
    cate: "APPETIZERS",
  },
  {
    cate: "DESSERT",
  },
  {
    cate: "DRINK",
  },
  {
    cate: "MAIN DISHES",
  },
  {
    cate: "PANNI PASTA",
  },
  {
    cate: "RISOTTO",
  },
  {
    cate: "SALAS",
  },
  {
    cate: "SAUCES SOUPS",
  },
];

let listMenu = [ //list ra danh sách cái picture và info ở dưới
 {
     pic: './images/Menu-img/Food6.png',
     name: 'MUFFIN BANANA NUTELLA',
     cate: 'APPETIZERS',
     link: '#',
     price: '$19.99',
     describe:'Eggs, banana, flour, cinamon, almond powder',
 }, 
 {
     pic: './images/Menu-img/DESSERT01.png',
     name: 'FUDGY AND MOIST BROWNIES WITH ICE CREAM',
     cate: 'DESSERT',
     link: '#',
     price: '$15.00',
     describe:'Blueberry and nut brownies, vanilla ice cream, fresh berry',
 },   
 {
     pic: './images/Menu-img/Dri.png',
     name: 'KETO DRINK MIX',
     cate: 'DRINK',
     link: '#',
     price: '$10.00',
     describe:'Lemon juice, simple syrup, water or seltzer water',
 }, 
 {
     pic: './images/Menu-img/Food8.png',
     name: 'COFFEE',
     cate: 'DRINK',
     link: '#',
     price: '$10.00',
     describe:'Eggs, espresso, cacao, honey',
 },
 {
     pic: './images/Menu-img/Beefsteak.jpg',
     name: 'BEEF STEAK',
     link: '#',
     cate: 'MAIN DISHES',
     price: '$25.00',
     describe:'Beef steak, potato, tomato',
 },
 {
     pic: './images/Menu-img/Food3.png',
     name: 'ASIAN HOISIN PORK',
     link: '#',
     cate: 'MAIN DISHES',
     price: '$25.00',
     describe:'Pork, seasonal vegetables, eggs, bread',
 },
 {
    pic: './images/Menu-img/Hoisin.png',
    name: 'STICKY HOISION PORK TACOSASIAN HOISIN PORK',
    link: '#',
    cate: 'MAIN DISHES',
    price: '$25.00',
    describe:'Pork, seasonal vegetables, eggs',
},
{
    pic: './images/Menu-img/Pizza.png',
    name: 'PIZZA',
    link: '#',
    cate: 'MAIN DISHES',
    price: '$25.00',
    describe:'Sausage, flour, tomato',
},
 {
     pic: './images/Menu-img/Food5.png',
     name: 'KUNG PAO CHICKEN',
     cate: 'MAIN DISHES',
     link: '#',
     price: '$25.00',
     describe:'Peppers, chicken, peanuts',
 },
 {
    pic: './images/Menu-img/main1.png',
    name: 'Angus tenderloin with lobster',
    cate: 'MAIN DISHES',
    link: '#',
    price: '$40.00',
    describe:'Australian Black Beef Tenderloin with Lobster',
},
{
    pic: './images/Menu-img/main2.png',
    name: 'Grilled chicken with vegetables',
    cate: 'MAIN DISHES',
    link: '#',
    price: '$30.00',
    describe:'Marinade, chicken, vegetables ',
},
 {
     pic: './images/Menu-img/Food1.png',
     link: '#',
     cate: 'PANNI PASTA',
     name: 'GARLIC MUSHROOM NOODLES',
     price: '$20.00',
     describe: 'Egg noodles, mushrooms, garlic cloves finely chopped',
 },
 {
     pic: './images/Menu-img/Pa.png',
     name: 'TOMATO BASIL ONE POT PASTA',
     cate: 'PANNI PASTA',
     link: '#',
     price: '$20.00',
     describe:'Cook pancetta in oil, saute vegetables, add broth, tomatoes and seasonings, bring to simmer, add pasta',
 }, 
 {
     pic: './images/Menu-img/Ris.png',
     name: 'GOURMET MUSHROOM RISOTTO',
     cate: 'RISOTTO',
     link: '#',
     price: '$20.00',
     describe:'Chicken broth, mushrooms, olive oil, shallots',
 },
 {
     pic: './images/Menu-img/Food4.png',
     name: 'GRILLED FREE SALAD',
     link: '#',
     cate: 'SALAS',
     price: '$18.00',
     describe:'Ginger, seasonal vegetables',
 },
 {
     pic: './images/Menu-img/Food7.png',
     name: 'SALAD CHERRY TOMATOES',
     cate: 'SALAS',
     link: '#',
     price: '$18.00',
     describe:'Cucumber, cherry tomatoes, boss, olive oil',
 },
 {
     pic: './images/Menu-img/soup1.png',
     name: 'BAKED LOBSTER AND OCEAN CRAB SOUP',
     cate: 'SAUCES SOUPS',
     link: '#',
     price: '$20.00',
     describe:'Baked Lobster and Ocean Crab soup, en croute ',
 },
 {
     pic: './images/Menu-img/soup2.png',
     name: 'CREAMY MUSHROOM CAPPUCCINO',
     cate: 'SAUCES SOUPS',
     link: '#',
     price: '$20.00',
     describe:'Creamy mushroom cappuccino, pita bread with herb and Parmesan cheese',
 },   
];
// MENU
function removeClassActiveItemMenu() {
  const menuEle = document.getElementById("menu_bar_filter");
  for (let i of menuEle.children) {
    i.removeAttribute("class");
  }
}
function renderMenubar() {
  const menuEle = document.getElementById("menu_bar_filter");
  let eleRender = "";

  menuItems.forEach((i, index) => {
    eleRender =
      eleRender +
      `
         <li class="" onclick="cateFilter('${i.cate}',this)">
             <p>${i.cate}</p>
         </li>
     `;
  });
  if (menuEle) menuEle.insertAdjacentHTML("beforeend", eleRender);
}

renderMenubar();

//LIST

function renderMenuItems(listData) {
  const listItems = document.getElementById("list_menu");

  const eleMenu = listData.reduce((eleMerge, itemCurrent) => {
    eleMerge += `<div class="Food">
         <a href="#">
             <img
                 src="${itemCurrent.pic}" alt="${itemCurrent.name}">
                 <div class="infor">
                 <h2>${itemCurrent.name}</h2> 
                 <h2>${itemCurrent.price}</h2> 
                 </div>
                 <p>${itemCurrent.describe}</p>
                 </a>
     </div> `;
    return eleMerge;
  }, "");
  if (listItems) listItems.innerHTML = eleMenu;
}
function cateFilter(cateFilter, thisEle) {
  removeClassActiveItemMenu();
  thisEle.classList.add("active");
  const imagesFilter =
    cateFilter === "ALL"
      ? listMenu
      : listMenu.filter((i) => i.cate === cateFilter);
  renderMenuItems(imagesFilter);
}
renderMenuItems(listMenu);

//renderlist
let listItems = [ 
    {
        name: 'Angus tenderloin with lobster',
        link: '#',
        star:'<i class="fa fa-star" aria-hidden="true"></i>',
        cate: 'Title',
        price: '$40.00',
        describe: 'Australian Black Beef Tenderloin with Lobster'
    },
    {
        name: 'Grilled chicken with vegetables',
        star:'<i class="fa fa-star" aria-hidden="true"></i>',
        link: '#',
        cate: 'Title',
        price: '$30.00',
        describe: 'Marinade, chicken, vegetables'
    },
    {
        name: 'Beef steak',
        link: '#',
        star:'',
        cate: 'Title',
        price: '$25.00',
        describe: 'Beef steak, potato, tomato'
    },
    {
        name: 'Asian hoisin pork',
        link: '#',
        star:'',
        cate: 'Title',
        price: '$25.00',
        describe: 'Pork, seasonal vegetables, eggs, bread'
    },
    {
        name: 'Kung pao chicken',
        link: '#',
        star:'',
        cate: 'Title',
        price: '$25.00',
        describe: 'Peppers, chicken, peanuts'
    },
    {
        name: 'Pizza',
        link: '#',
        star:'',
        cate: 'Title',
        price: '$25.00',
        describe: 'Sausage, flour, tomato'
    },
];
function renderList() {
  const listEle = document.getElementById("list");
  let eleRender = "";
  listItems.forEach((i) => {
    eleRender =
      eleRender +
      `
            <div class='container_item'>
                <div class='item'>
                    <h5>${i.name} ${i.star}</h5>
                    <h5>${i.price}</h5>
                </div>
                <p>${i.describe}</p>
            </div>
        `;
  });
  if (listEle) listEle.insertAdjacentHTML("beforeend", eleRender);
}
renderList();

// function renderList1() {
//     const listEle = document.getElementById('list1');
//     let eleRender = '';
//     listItems.forEach((i) => {
//         eleRender = eleRender + `
//             <div class='container_item'>
//                 <div class='item'>
//                     <h5>${i.name}</h5>
//                     <h5>${i.price}</h5>
//                 </div>
//                 <p>${i.describe}</p>
//             </div>
//         `
//     })
//     if(listEle)
//         listEle.insertAdjacentHTML('beforeend', eleRender);
// }
// renderList1();

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
  triggerElement: "#rotate",
  reverse: false,
})
  .setClassToggle("#rotate", "rotate")
  .addTo(controller);

var ourScene = new ScrollMagic.Scene({
  triggerElement: "#hide",
  reverse: false,
})
  .setClassToggle("#hide", "hide")
  .addTo(controller);
