const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuButton.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

const contactForm = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    messageDiv.textContent = "Please fill out all fields.";
    messageDiv.style.color = "red";
  } else {
    messageDiv.textContent = "Thank you! I will contact you soon.";
    messageDiv.style.color = "green";
    contactForm.reset();
  }
});
