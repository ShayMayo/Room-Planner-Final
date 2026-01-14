document.addEventListener("DOMContentLoaded", function () {

  
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


  const valueCards = document.querySelectorAll(".value-card");

  for (let i = 0; i < valueCards.length; i++) {
    valueCards[i].addEventListener("mouseover", function () {
      this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      this.style.transform = "translateY(-4px)";
      this.style.transition = "box-shadow 0.2s, transform 0.2s";
    });

    valueCards[i].addEventListener("mouseout", function () {
      this.style.boxShadow = "";
      this.style.transform = "";
    });
  }


  const featureCards = document.querySelectorAll(".feature-card");

  for (let i = 0; i < featureCards.length; i++) {
    featureCards[i].addEventListener("mouseover", function () {
      this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      this.style.transform = "translateY(-4px)";
      this.style.transition = "box-shadow 0.2s, transform 0.2s";
    });

    featureCards[i].addEventListener("mouseout", function () {
      this.style.boxShadow = "";
      this.style.transform = "";
    });
  }

  /* =========================
     4) BUTTON HOVER (About page)
     (.btn)
  ========================= */
  const buttons = document.querySelectorAll(".btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function () {
      this.style.opacity = "0.9";
      this.style.transform = "translateY(-2px)";
      this.style.transition = "opacity 0.2s, transform 0.2s";
    });

    buttons[i].addEventListener("mouseout", function () {
      this.style.opacity = "";
      this.style.transform = "";
    });
  }

  /* =========================
     5) FOOTER LINKS HOVER
  ========================= */
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

});
