document.addEventListener("DOMContentLoaded", function () {

  // NAV HOVER
  const navLinks = document.querySelectorAll(".navLinks a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function () {
      this.style.color = "#e67e22";
      this.style.fontWeight = "700";
    });

    navLinks[i].addEventListener("mouseout", function () {
      this.style.color = "";
      this.style.fontWeight = "";
    });
  }

  // CARD HOVER (About: values + features)
  const aboutCards = document.querySelectorAll(".value-card, .feature-card");

  for (let i = 0; i < aboutCards.length; i++) {
    aboutCards[i].addEventListener("mouseover", function () {
      this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      this.style.transform = "translateY(-4px)";
      this.style.transition = "transform 0.2s, box-shadow 0.2s";
    });

    aboutCards[i].addEventListener("mouseout", function () {
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

  // BUTTON HOVER (About: Try the Planner)
  const aboutButtons = document.querySelectorAll(".btn-primary, .header-actions .button");

  for (let i = 0; i < aboutButtons.length; i++) {
    aboutButtons[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#e89358";
      this.style.transform = "translateY(-2px)";
      this.style.transition = "background-color 0.2s, transform 0.2s";
    });

    aboutButtons[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
      this.style.transform = "";
      this.style.transition = "";
    });
  }

  // HAMBURGER TOGGLE
  const hamburgerBtn = document.querySelector("#hamburgerBtn");
  const navMenu = document.querySelector(".navLinks");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
      navMenu.classList.toggle("nav-active");
    });
  }

});
// ABOUT TABS SCROLL
const aboutTabs = document.querySelectorAll(".about-tab");

for (let i = 0; i < aboutTabs.length; i++) {
  aboutTabs[i].addEventListener("mouseover", function () {
    this.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
    this.style.transform = "translateY(-2px)";
    this.style.transition = "box-shadow 0.2s, transform 0.2s";
  });

  aboutTabs[i].addEventListener("mouseout", function () {
    this.style.boxShadow = "";
    this.style.transform = "";
    this.style.transition = "";
  });
}

