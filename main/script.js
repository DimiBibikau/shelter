// renderPetShelter()

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

        document.body.classList.remove("stop-scrolling");
        
    } else {
        menu.classList.add("show-menu");
        
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menu.style.display = "flex";
        logo.style.display = "none";
        
        dimClickOut.style.display = "block"; 

        document.body.classList.add("stop-scrolling");      
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

const petCardsArray = [
    {
      "name": "Jennifer",
      "img": "../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
]

const renderPetShelter = () => {
    const tagCreator = (tag, className, parentTag, indexParentTag = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentTag)[indexParentTag].append(element);
    }

    tagCreator("button", "button-round-left", ".pets-characters");

    for (let petCard in petCardsArray) { 
        // creating the pet card
        tagCreator("article", "pet-item", ".pets-characters");
        tagCreator("img", "pet-img", ".pet-item", petCard);
        tagCreator("h4", "h4", ".pet-item", petCard);
        tagCreator("button", "button-secondary-clickable", ".pet-item", petCard);
        
        // filling the pet card 
        document.querySelectorAll(".pet-img")[petCard].src = petCardsArray[petCard].img;
        document.querySelectorAll(".h4")[petCard].textContent = petCardsArray[petCard].name;
        document.querySelectorAll(".button-secondary-clickable")[petCard].textContent = "Learn more";
        
        // creating the pop up window
        // tagCreator("div", "pop-up-overlay", ".pets-characters");
        tagCreator("div", "pet-item-pop-up", ".pets-characters");
        tagCreator("div", "pet-item-pop-up-content", ".pet-item-pop-up", petCard);
        tagCreator("div", "pet-item-text-content", ".pet-item-pop-up-content", petCard);
        // creating the close button for the pop up
        tagCreator("button", "button-close-pop-up", ".pet-item-text-content", petCard);
        // creating the pop up window contents
        tagCreator("h3", "pet-name-pop-up", ".pet-item-text-content", petCard);
        tagCreator("img", "pet-pic-pop-up", ".pet-item-pop-up-content", petCard);
        tagCreator("h4", "pet-type-pop-up", ".pet-item-text-content", petCard);
        tagCreator("p", "pet-description-pop-up", ".pet-item-text-content", petCard);
        tagCreator("ul", "pet-description-pop-up-list", ".pet-item-text-content", petCard);
        tagCreator("li", "pet-age-pop-up", ".pet-description-pop-up-list", petCard);
        tagCreator("li", "pet-inoculations-pop-up", ".pet-description-pop-up-list", petCard);
        tagCreator("li", "pet-diseases-pop-up", ".pet-description-pop-up-list", petCard);
        tagCreator("li", "pet-parasites-pop-up", ".pet-description-pop-up-list", petCard);
        
        // filling the pop up window
        document.querySelectorAll(".pet-name-pop-up")[petCard].textContent = `${petCardsArray[petCard].name}`;
        document.querySelectorAll(".pet-type-pop-up")[petCard].textContent = `${petCardsArray[petCard].type} - ${petCardsArray[petCard].breed}`;
        document.querySelectorAll(".pet-pic-pop-up")[petCard].src = `${petCardsArray[petCard].img}`;
        document.querySelectorAll(".pet-description-pop-up")[petCard].textContent = `${petCardsArray[petCard].description}`;
        document.querySelectorAll(".pet-age-pop-up")[petCard].textContent = `Age: ${petCardsArray[petCard].age}`;
        document.querySelectorAll(".pet-inoculations-pop-up")[petCard].textContent = `Inoculations: ${petCardsArray[petCard].inoculations}`;
        document.querySelectorAll(".pet-diseases-pop-up")[petCard].textContent = `Diseases: ${petCardsArray[petCard].diseases}`;
        document.querySelectorAll(".pet-parasites-pop-up")[petCard].textContent = `Parasites: ${petCardsArray[petCard].parasites}`;
    }

    tagCreator("button", "button-round-right", ".pets-characters");

    // POP UP WINDOW BUTTON ACTIVATION
    const buttonInfoArray = document.querySelectorAll(".button-secondary-clickable");

    for (let [index, buttonElem] of buttonInfoArray.entries()) {
        buttonElem.addEventListener("click", () => {
            document.querySelectorAll(".pet-item-pop-up")[index].classList.add("active-pop-up");
            document.body.classList.add("stop-scrolling");
            dimClickOut.style.display = "flex";
        })
    }

    // POP UP WINDOW BUTTON DEACTIVATION
    const buttonInfoCloseArray = document.querySelectorAll(".button-close-pop-up");

    for (let [index, buttonElem] of buttonInfoCloseArray.entries()) {
        buttonElem.addEventListener("click", () => {
            document.querySelectorAll(".pet-item-pop-up")[index].classList.remove("active-pop-up");
            dimClickOut.style.display = "none";
            document.body.classList.remove("stop-scrolling");
        })

        dimClickOut.addEventListener ("click", () => {
            document.querySelector(".pet-item-pop-up")[index].classList.remove("active-pop-up");
            dimClickOut.style.display = "none";
            document.body.classList.remove("stop-scrolling");
        })
    }

    const sliderButtonLeft = document.querySelectorAll(".button-round-left");
    const sliderButtonRight = document.querySelectorAll(".button-round-right");


}

renderPetShelter()


// TAG CREATOR -  CONTENT FILLER
 // const petCardKeys = Object.keys(petCardsArray[petCard]);
    
        // for (let key in petCardKeys) {
        //     if (petCardKeys[key] !== "img" && petCardKeys[key] !== "name") {
        //         tagCreator("p", `pet-${petCardKeys[key]}-pop-up`, ".pet-item-text-content", petCard);
        //         document.querySelectorAll(`.pet-${petCardKeys[key]}-pop-up`)[petCard].textContent = `Pet ${petCardKeys[key]}: ${petCardsArray[petCard][petCardKeys[key]]}`;
        //     }  else {
        //         // tagCreator("img", `pet-item-pop-up-pic-${petCardsArray[petCard][petCardKeys[0]]}`, ".pet-item-pop-up-content", petCard);
        //         // document.querySelectorAll(`.pet-item-pop-up-pic-${petCardsArray[petCard][petCardKeys[0]]}`)[petCard].src = petCardsArray[petCard].img;
        //     }
        // }