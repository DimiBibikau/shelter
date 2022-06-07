const menu = document.querySelector(".hamburger-navigation");
const menuItems = document.querySelectorAll(".hamburger-nav-item");

const menuIcon = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".burger-menu-vertical");

const logo = document.querySelector(".logo")

const dimClickOut = document.querySelector(".dim-click-div");

function burgerMenu () {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");

        closeIcon.style.display = "none";
        dimClickOut.style.display = "none";

        menuIcon.style.display = "block";
        logo.style.display = "block";
        
    } else {
        menu.classList.add("show-menu");
        
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menu.style.display = "flex";
        logo.style.display = "none";
        
        dimClickOut.style.display = "block";       
    }
}

menuIcon.addEventListener("click", burgerMenu);
closeIcon.addEventListener("click", burgerMenu);
dimClickOut.addEventListener("click",  burgerMenu)

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", burgerMenu);
    }
);

const renderPetShelter = () => {
    const tagCreator = (tag, className, parentTag, indexParentTag = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentTag)[indexParentTag].append(element);
    }
}

renderPetShelter()