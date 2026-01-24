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
  const aboutCards = document.querySelectorAll(".valueCard, .featureCard");
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

  // BUTTON HOVER (About: Try the Planner)
  const aboutButtons = document.querySelectorAll(".btnPrimary");
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
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.querySelector(".navLinks");
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
      navMenu.classList.toggle("nav-active");
    });
  }

  // ABOUT TABS: CLICK -> SCROLL + ACTIVE STATE
  const tabs = document.querySelectorAll(".aboutTab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove("isActive");
      }
      this.classList.add("isActive");

      const navBar = document.querySelector(".mainNavbar");
      const navHeight = navBar ? navBar.offsetHeight : 0;

      const y =
        targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({ top: y, behavior: "smooth" });
    });

    // TAB HOVER
    tabs[i].addEventListener("mouseover", function () {
      this.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
      this.style.transform = "translateY(-2px)";
      this.style.transition = "box-shadow 0.2s, transform 0.2s";
    });

    tabs[i].addEventListener("mouseout", function () {
      this.style.boxShadow = "";
      this.style.transform = "";
      this.style.transition = "";
    });
  }
});
