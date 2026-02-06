const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const carouselButtons = document.querySelectorAll(".carousel-btn");
const testimonials = document.querySelectorAll(".testimonial-card");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

let currentIndex = 0;

const updateTestimonials = () => {
  testimonials.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
};

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction;
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % testimonials.length;
    } else {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    }
    updateTestimonials();
  });
});
