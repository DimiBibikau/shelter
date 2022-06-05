const menu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelectorAll("nav-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".burger-menu");

const burgerMenu = () => {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", burgerMenu);

const renderPetShelter = () => {

}

renderPetShelter()