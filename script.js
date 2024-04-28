document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector("header nav");

  function handleScroll() {
    const top = window.scrollY;

    sections.forEach((section) => {
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
    });

    if (top === 0) {
      navLinks.forEach((link) => {
        link.classList.remove("active", "color-change");
      });
      document
        .querySelector('header nav a[href="#home"]')
        .classList.add("active", "color-change");
    }

    const header = document.querySelector(".header");
    header.classList.toggle("sticky", top > 100);
  }


  function toggleMenu() {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
    document.body.classList.toggle("mobile-nav-active");
  }

  menuIcon.onclick = () => {
    toggleMenu();
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    };
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  handleScroll(); // Initial scroll check

  // Initialize ScrollReveal
  ScrollReveal().reveal(".home-content, .footer-content , .about-content h2", {
    origin: "top",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });
  ScrollReveal().reveal(".home-img img, .about-content h3", {
    origin: "bottom",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });
  ScrollReveal().reveal(".home-content h1, .about-img img, .help-img img", {
    origin: "left",
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 100,
  });
  ScrollReveal().reveal(
    ".home-content h3, .home-content p, .about-content p, .help-content, .conclusion-content",
    {
      origin: "right",
      reset: true,
      distance: "80px",
      duration: 1500,
      delay: 100,
    }
  );
});
