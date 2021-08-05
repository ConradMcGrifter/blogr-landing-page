let menuButton = document.querySelectorAll(".menu-button");
let dropdownContent = document.querySelectorAll(".dropdown-content");

const setClass = (ele, className) => {
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove(className);
    }
};

// document.querySelector("body").addEventListener("click", () => {
//     console.log("test");
//     for (let j = 0; j < dropdownContent.length; j++) {
//         if (dropdownContent[j].classList.contains("display")) {
//             console.log(j);
//             setClass(dropdownContent, "display");
//         }
//     }
// });

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener("click", function () {
        let setClasses = !this.nextElementSibling.classList.contains("display");

        setClass(dropdownContent, "display");
        setClass(menuButton, "rotate");
        setClass(menuButton, "active");

        if (setClasses) {
            this.nextElementSibling.classList.toggle("display");
            menuButton[i].classList.toggle("rotate");
            menuButton[i].classList.toggle("active");
        }
    });
}
