const arrowElement = document.querySelector(".arrow");
const bar = document.querySelector("nav");

arrowElement.addEventListener("click", function () {
  arrowElement.classList.toggle("on");
  bar.classList.toggle("on");
});
