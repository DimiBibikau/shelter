const menu = document.querySelector(".hamburger-navigation");
const menuItems = document.querySelectorAll(".hamburger-nav-item");

const menuIcon = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".burger-menu-vertical");

// // const header = document.querySelector(".header");
const logo = document.querySelector(".logo")

function burgerMenu () {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        logo.style.display = "block"
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menu.style.display = "flex";
        logo.style.display = "none"
        // header.style.display = "none"
        
    }
}

menuIcon.addEventListener("click", burgerMenu);
closeIcon.addEventListener("click", burgerMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", burgerMenu);
    }
);

const renderPetShelter = () => {

}

renderPetShelter()