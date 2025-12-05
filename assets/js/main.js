// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });

  // Close on link click (optional)
  navMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
    });
  });
}

// Set footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
