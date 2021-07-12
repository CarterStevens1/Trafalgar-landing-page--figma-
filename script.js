const links = document.querySelector(".nav-items");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  links.classList.toggle("active");
});
