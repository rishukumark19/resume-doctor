document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const navLinks = header.querySelectorAll("a");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-transparent");
      // Change desktop nav links color
      header.querySelectorAll("nav a").forEach((link) => {
        link.classList.add("text-gray-600");
        link.classList.remove("text-gray-100");
      });
      // Change logo color
      header.querySelector("a").classList.add("text-blue-700"); // First 'a' is the logo
      header.querySelector("a").classList.remove("text-white");
      // Change mobile menu button color
      header
        .querySelector("#mobile-menu-button")
        .classList.add("text-gray-800");
      header
        .querySelector("#mobile-menu-button")
        .classList.remove("text-white");
    } else {
      header.classList.remove("bg-white", "shadow-md");
      header.classList.add("bg-transparent");
      header.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("text-gray-600");
        link.classList.add("text-gray-100");
      });
      header.querySelector("a").classList.add("text-white");
      header.querySelector("a").classList.remove("text-blue-700");
      header
        .querySelector("#mobile-menu-button")
        .classList.remove("text-gray-800");
      header.querySelector("#mobile-menu-button").classList.add("text-white");
    }
  };

  window.addEventListener("scroll", handleScroll);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden"); // Prevent scrolling when menu is open
  };

  mobileMenuButton.addEventListener("click", toggleMenu);

  // Close menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });

  // Hero section slideshow
  const slides = document.querySelectorAll(".bg-slide");
  let currentSlide = 0;

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;

    // Fade out current slide
    slides[currentSlide].classList.add("opacity-0");

    // Fade in next slide
    slides[nextSlide].classList.remove("opacity-0");

    currentSlide = nextSlide;
  }, 3700); // Change image every 3.7 seconds
});
