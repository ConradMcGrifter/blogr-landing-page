const HAMBURGER = document.getElementById("hamburger--btn");
const menuContainer = document.querySelector(".menu--container");

HAMBURGER.addEventListener("click", () => {
    menuContainer.classList.toggle("display");
});
