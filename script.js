// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Contact Form (dummy handler)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for contacting me! I’ll get back to you soon.");
});
