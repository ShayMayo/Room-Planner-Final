document.addEventListener("DOMContentLoaded", function () {

  // NAV HOVER
  const navLinks = document.querySelectorAll(".navLinks a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function () {
      navLinks[i].style.color = "#e67e22";
      navLinks[i].style.fontWeight = "700";
    });

    navLinks[i].addEventListener("mouseout", function () {
      navLinks[i].style.color = "";
      navLinks[i].style.fontWeight = "";
    });
  }

  // CARD HOVER
  const homeCards = document.querySelectorAll(".tool-card");

  for (let i = 0; i < homeCards.length; i++) {
    homeCards[i].addEventListener("mouseover", function () {
      this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      this.style.transform = "translateY(-4px)";
      this.style.transition = "transform 0.2s, box-shadow 0.2s";
    });

    homeCards[i].addEventListener("mouseout", function () {
      this.style.boxShadow = "";
      this.style.transform = "";
      this.style.transition = "";
    });
  }

  // FOOTER LINKS HOVER
  const footerLinks = document.querySelectorAll(".site-footer a");

  for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].addEventListener("mouseover", function () {
      this.style.textDecoration = "underline";
      this.style.color = "#2f5d4a";
    });

    footerLinks[i].addEventListener("mouseout", function () {
      this.style.textDecoration = "";
      this.style.color = "";
    });
  }


  const ctaButtons = document.querySelectorAll(".home-preview-section .button");

  for (let i = 0; i < ctaButtons.length; i++) {
    ctaButtons[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#e89358";
      this.style.transform = "translateY(-2px)";
      this.style.transition = "background-color 0.2s, transform 0.2s";
    });

    ctaButtons[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
      this.style.transform = "";
      this.style.transition = "";
    });
  }


// HAMBURGER TOGGLE
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.querySelector(".navLinks");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("nav-active");
  });
}


});
