 //main
 function nexttab(evt, menubar) {
  var i, Infor_Menu, tab;
  Infor_Menu = document.getElementsByClassName("Infor_Menu");
  for (i = 0; i < Infor_Menu.length; i++) {
    Infor_Menu[i].style.display = "none";
  }
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
    
  }
  document.getElementById(menubar).style.display = "block";
  evt.currentTarget.className += " active";
}




