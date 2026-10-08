/* ========== 1. MOBILE MENU ========== */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Tap the button -> show or hide the menu
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

/* ========== 2. SMOOTH SCROLLING ==========
   When a menu link is clicked, scroll smoothly to its section
   and close the mobile menu. */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();                       // stop the sudden jump
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    navLinks.classList.remove("open");            // close mobile menu
  });
});

/* ========== 3. CONTACT FORM VALIDATION ========== */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();                         // stop the page from reloading

  // Get the values the user typed (trim removes extra spaces)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("thanks").textContent = "";

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }

  // A simple email pattern: text @ text . text
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  /* ========== 4. THANK YOU MESSAGE ========== */
  if (isValid) {
    document.getElementById("thanks").textContent =
      "Thank you, " + name + "! Your message has been received.";
    form.reset();                                 // empty the form
  }
});
