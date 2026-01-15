// HAMBURGER MENU
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector(".navLinks");
// turn the mouse icon into curser icon
hamburgerBtn.style.cursor = "pointer";

hamburgerBtn.addEventListener("click", function() {
    if (navMenu.classList.contains("nav-active")) {
        navMenu.classList.remove("nav-active");
    } else {
        navMenu.classList.add("nav-active");
    }
});

// VIEW DETAILS
const buttons = document.querySelectorAll(".detailsLink");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        event.preventDefault(); 
        
        const currentButton = buttons[i]; 
        const footerDiv = currentButton.parentElement; 
        const mainCard = footerDiv.parentElement;   
        // the card itself is the grandpa
        
        const titleText = mainCard.querySelector(".prodTitle").innerText;
        const priceText = mainCard.querySelector(".prodPrice").innerText;
        const descriptionText = mainCard.querySelector("p").innerText;
        // get the item info from the catalog item itself
      
        alert("Product Name: " + titleText + "\n" +
              "Price: " + priceText + "\n" +
              "Item Description: " + descriptionText);
    });
}

// CARD POP EFFECT
const productCards = document.querySelectorAll(".productCard");

for (let i = 0; i < productCards.length; i++) {
    productCards[i].addEventListener("mouseover", function() {
        this.classList.add("activeCard");
    });
    productCards[i].addEventListener("mouseout", function() {
        this.classList.remove("activeCard");
    });
}

// NAVBAR LINLS
const navLinks = document.querySelectorAll(".navLinks a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function() {
        this.classList.add("text-highlight");
    });
    navLinks[i].addEventListener("mouseout", function() {
        this.classList.remove("text-highlight");
    });
}

// LOG THR CHANGES
console.log("JS Loaded Successfully & Clean from Styles!");