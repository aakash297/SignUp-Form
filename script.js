const slidePage = document.querySelector(".slidepage");
const firstNxtBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnLast = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

firstNxtBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
});

nextBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
});

nextBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
});

prevBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "0%";
});

prevBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
});

prevBtnLast.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
});

submitBtn.addEventListener("click", function () {
  alert("Your Form has been submitted. Thank You");
});
