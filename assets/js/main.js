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

// Handle contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const visitorEmail = document.getElementById("visitorEmail").value;
    const subject = "Let's work together";
    const body = `Hi Daniela,\n\nI would like to get in touch with you.\n\nBest regards,\n${visitorEmail}`;
    
    // Open email client with pre-filled message
    window.location.href = `mailto:danayala@uchicago.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Projects carousel
const projectsTrack = document.querySelector(".projects-track");
const projectsPrev = document.getElementById("projectsPrev");
const projectsNext = document.getElementById("projectsNext");

if (projectsTrack && projectsPrev && projectsNext) {
  const rotateProjects = (direction) => {
    if (direction === "next") {
      const firstCard = projectsTrack.firstElementChild;
      if (firstCard) {
        projectsTrack.appendChild(firstCard);
      }
    } else if (direction === "prev") {
      const lastCard = projectsTrack.lastElementChild;
      if (lastCard) {
        projectsTrack.insertBefore(lastCard, projectsTrack.firstElementChild);
      }
    }
  };

  projectsPrev.addEventListener("click", () => rotateProjects("prev"));
  projectsNext.addEventListener("click", () => rotateProjects("next"));
}
