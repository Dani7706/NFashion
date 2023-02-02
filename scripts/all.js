"use script";
const filterBtn = document.getElementById("btn-filter");
const filterBox = document.querySelector("aside");

filterBtn.addEventListener("click", function () {
  filterBox.classList.toggle("hidden");
});
