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
// console.log(shopCartBtn);
// console.log(shopCartWindow);
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

const price1 = Number(document.getElementById("price-1").textContent);
let qty1 = Number(document.getElementById("qty-1").value);
const value1 = Number(document.getElementById("value-1").textContent);
const btnMinus1 = document.getElementById("btn-minus-1");
const btnPlus1 = document.getElementById("btn-plus-1");
const price2 = Number(document.getElementById("price-2").textContent);
let qty2 = Number(document.getElementById("qty-2").value);
const value2 = Number(document.getElementById("value-2").textContent);
const btnMinus2 = document.getElementById("btn-minus-2");
const btnPlus2 = document.getElementById("btn-plus-2");
// document.getElementById("total").textContent = `${value1 + value2}$`;
let total = Number(document.getElementById("total").textContent);
function addValue(btn, currentValue, currentPrice, currentQty, currentEl) {}
function reduceValue(btn) {}
btnPlus1.addEventListener("click", function () {
  qty1 += 1;
  document.getElementById("qty-1").value = qty1;
  // console.log(currentValue);
  value1.textContent = `${qty1 * price1}$`;
  // console.log(currentValue.textContent);
  total += price1;

  document.getElementById("total").textContent = `${total}$`;
  return qty1;
});
btnMinus1.addEventListener("click", function () {
  if (qty1 > 0) {
    qty1 -= 1;
    document.getElementById("qty-1").value = qty1;

    value1.textContent = `${qty1 * price1}$`;

    total -= price1;

    document.getElementById("total").textContent = `${total}$`;
  }
});
btnPlus2.addEventListener("click", function () {
  qty2 += 1;
  document.getElementById("qty-2").value = qty2;
  // console.log(currentValue);
  value2.textContent = `${qty2 * price2}$`;
  // console.log(currentValue.textContent);
  total += price2;

  document.getElementById("total").textContent = `${total}$`;
  return qty2;
});
btnMinus2.addEventListener("click", function () {
  if (qty2 > 0) {
    qty2 -= 1;
    document.getElementById("qty-2").value = qty2;

    value2.textContent = `${qty2 * price2}$`;

    total -= price1;

    document.getElementById("total").textContent = `${total}$`;
  }
});

// btnMinus2.addEventListener("click", function () {
//   if (qty1 > 0) {
//     qty1 -= 1;
//     document.getElementById("qty-1").value = qty1;
//     console.log(price1.textContent);
//     value1.textContent = `${qty1 * Number(price1.textContent)}$`;
//   }
// });
// btnPlus2.addEventListener("click", function () {
//   qty1 += 1;
//   document.getElementById("qty-1").value = qty1;
//   console.log(price1.textContent);
//   value1.textContent = `${qty1 * Number(price1.textContent)}$`;
//   return qty1;
// });
// // console.log(btnPlus1);
// console.log(qty1);
// console.log();
// value1.textContent = qty1 * Number(price1.textContent);
