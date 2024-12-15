const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      slide.style.opacity = index === slideIndex ? '1' : '0';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize the first slide
  showSlide(currentSlide);

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);