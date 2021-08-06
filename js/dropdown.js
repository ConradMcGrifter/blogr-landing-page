const menuButton = document.querySelectorAll(".menu-button");
const dropdownContent = document.querySelectorAll(".dropdown-content");

const setClass = (ele, className) => {
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove(className);
    }
};

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener("click", function () {
        let setClasses = !dropdownContent[i].classList.contains("display");

        setClass(dropdownContent, "display");
        setClass(menuButton, "rotate");
        setClass(menuButton, "active");

        if (setClasses) {
            dropdownContent[i].classList.add("display");
            menuButton[i].classList.add("rotate");
            menuButton[i].classList.add("active");
        }
    });
}
