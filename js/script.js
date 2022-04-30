/* When the user clicks on hamburger menu, toggle between hiding and showing the dropdown menu */

const menu = document.getElementById("nav");
const hamburgerButton = document.querySelector(".toggle-menu");

hamburgerButton.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});

/* When clicked outside of dropdown menu menu closes */

document.addEventListener("click", function (e) {
  if (!e.target == menu) {
    menu.classList.remove("show");
  }
});
