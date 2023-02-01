"use script";
const mobileBtn = document.querySelector(".nav__mobile");
const mobileBack = document.querySelector(".mobile__background");
const mobileNav = document.querySelector(".mobile__nav");
const navList = document.getElementById("nav-list");
// console.log(mobileBtn);
// console.log(navList);
mobileBtn.addEventListener("click", function () {
  navList.classList.toggle("hidden");
  mobileBack.classList.toggle("hidden");
  mobileBack.classList.toggle("show__background");
  mobileNav.classList.toggle("mobile__nav");
  mobileNav.classList.toggle("show__nav");
});

const shopCartBtn = document.getElementById("shop-cart");
const shopCartWindow = document.querySelector(".modal__shopping-cart");
const closeBtn = document.querySelector(".close--cart");
console.log(shopCartBtn);
console.log(shopCartWindow);
function openModal(btn, modalWindow) {
  btn.addEventListener("click", function () {
    modalWindow.style.display = "block";
  });
}
function closeModal(btn, modalWindow) {
  btn.addEventListener("click", function () {
    modalWindow.style.display = "none";
  });
}
openModal(shopCartBtn, shopCartWindow);
closeModal(closeBtn, shopCartWindow);
const userBtn = document.querySelector("#user");
const userProfile = document.querySelector(".modal__profile");
const closeProfileBtn = document.querySelector(".close--profile");
openModal(userBtn, userProfile);
closeModal(closeProfileBtn, userProfile);
