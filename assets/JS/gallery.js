const filterContainer = document.querySelector(".filter");
const galleryItems = document.querySelectorAll(".item");

filterContainer.addEventListener("click", (event) =>{
  if (event.target.classList.contains("btn")) {
    filterContainer.querySelector(".active").classList.remove("active");

    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) ) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

window.onload = function(){
  document.getElementById("appe").click();
}
