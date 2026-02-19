document.addEventListener("DOMContentLoaded", function () {

  // NAVBAR LINKS HOVER
const navLinks = document.querySelectorAll(".navLinks a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", function () {
    this.classList.add("text-highlight");
  });

  navLinks[i].addEventListener("mouseout", function () {
    this.classList.remove("text-highlight");
  });
}

  // CARD HOVER
  const homeCards = document.querySelectorAll(".toolCard");
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
  const footerLinks = document.querySelectorAll("footer a");
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

  // CTA BUTTON HOVER
  const ctaButtons = document.querySelectorAll(".homePreviewSection .button");
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
const hamburgerBtn = document.querySelector("#hamburgerBtn");
  const navMenu = document.querySelector(".navLinks");
hamburgerBtn.addEventListener("click", function() {
    if (navMenu.classList.contains("nav-active")) {
        navMenu.classList.remove("nav-active");
    } else {
        navMenu.classList.add("nav-active");
    }
});
//  Keyboard navigation between cards:
// Allows users to move between cards using the arrow keys
// and activate the focused card using the Enter key.
//
  const keyboardCards = document.querySelectorAll(".toolCard");

  let currentCardIndex = 0;


  for (let i = 0; i < keyboardCards.length; i++) {
    keyboardCards[i].setAttribute("tabindex", "0");

    keyboardCards[i].addEventListener("focus", function () {
      currentCardIndex = i;
    });
  }

  function focusCard(index) {
    if (!keyboardCards.length) return;

    if (index < 0) index = keyboardCards.length - 1;
    if (index >= keyboardCards.length) index = 0;

    currentCardIndex = index;
    keyboardCards[currentCardIndex].focus();
  }

  document.addEventListener("keydown", function (e) {
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusCard(currentCardIndex + 1);
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusCard(currentCardIndex - 1);
    }

    
    if (e.key === "Enter") {
      const focusedCard = document.activeElement;
      if (focusedCard.classList.contains("toolCard")) {
        const link = focusedCard.querySelector("a, button");
        if (link) link.click();
      }
    }

    // Jump to main content:
    // Pressing the "M" key moves the focus directly to the main content area.
    if (e.key === "m" || e.key === "M") {
      const main = document.getElementById("main");
      if (main) {
        main.setAttribute("tabindex", "-1");
        main.focus();
        main.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
