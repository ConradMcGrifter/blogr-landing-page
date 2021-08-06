const HAMBURGER = document.getElementById("hamburger--btn");
const menuContainer = document.querySelector(".menu--container");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const menuButton = document.querySelectorAll(".menu-button");

HAMBURGER.addEventListener("click", () => {
    menuContainer.classList.toggle("display");

    for (let i = 0; i < dropdownContent.length; i++) {
        dropdownContent[i].classList.remove("display");
        menuButton[i].classList.remove("active");
        menuButton[i].classList.remove("rotate");
    }
});
