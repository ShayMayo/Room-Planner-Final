// HOVER EFFECT
const navLinks = document.querySelectorAll(".navLinks a");

for (let i = 0; i < navLinks.length; i++) {
    // mouse-enter
    navLinks[i].addEventListener("mouseover", function() {
        navLinks[i].style.color = "#e67e22"; 
        navLinks[i].style.fontWeight = "700";
    });
    // mouse-exit
    navLinks[i].addEventListener("mouseout", function() {
        navLinks[i].style.color = "#333"; 
        navLinks[i].style.fontWeight = "500";
    });
}

// HAMBURGER MENU
const hamburgerBtn = document.querySelector("#hamburgerBtn");
// add the curser
hamburgerBtn.style.cursor = "pointer";
const navMenu = document.querySelector(".navLinks");

// waiting to open&close
hamburgerBtn.addEventListener("click", function() {
    // if the menu is open - close it, and if closed-open it
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});

// VIEW DETAILS
const buttons = document.querySelectorAll(".detailsLink");
// for each button
for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click", function(event) {
        // its built as links so need to fix that-dont go to do your default
        event.preventDefault(); 
        
        // need to get to the ARTICLE, family tree
        const currentButton = buttons[i];          // view details btn
        const footerDiv = currentButton.parentElement; // dad
        const mainCard = footerDiv.parentElement;      // grandpa

        const titleText = mainCard.querySelector(".prodTitle").innerText;
        const priceText = mainCard.querySelector(".prodPrice").innerText;
        const descriptionText = mainCard.querySelector("p").innerText;
     
        // show deatils
        alert("Product Name: " + titleText + "\n" +
              "Price: " + priceText + "\n" +
              "Itme Description: " + descriptionText);
    });
}

// MOUSE OVER THE CARD-POP THE CARD
const productCards = document.querySelectorAll(".productCard");

for (let i = 0; i < productCards.length; i++) {
    
    productCards[i].addEventListener("mouseover", function() {
        this.classList.add("activeCard");
    });
    productCards[i].addEventListener("mouseout", function() {
        this.classList.remove("activeCard");
    });
}