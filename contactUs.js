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

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agree = document.getElementById("agree").checked;
    const method = document.querySelector('input[name="contactMethod"]:checked');

    if (name === "") {
      alert("Please enter your name");
      return;
    }

    if (email === "") {
      alert("Please enter your email");
      return;
    }

    if (!method) {
      alert("Please select contact method");
      return;
    }

    if (message === "") {
      alert("Please write a message");
      return;
    }

    if (!agree) {
      alert("You must agree to be contacted");
      return;
    }

    alert("Form submitted successfully");
    form.reset();
    window.location.href = "planner.html";
  });
});
