let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
}
