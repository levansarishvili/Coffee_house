'use strict';

// ================ Slider ====================
const slides = document.querySelectorAll(".slider-content");
const sliderArea = document.querySelector('.slider-area');
const prevSlide = document.querySelector(".left-arrow-btn");
const nextSlide = document.querySelector(".right-arrow-btn");
const controlLinesFill = document.querySelectorAll('.control-line-fill');

// Current slide counter
let curSlide = 0;
// Maximum number of slides
let maxSlide = slides.length - 1;

let intervalId;

function showSlide() {
  // Loop through slides and set each slide's translateX
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}vw)`;
  });

  // Function to update progress bar lines
  function updateProgressBar() {
    controlLinesFill.forEach((line, i) => {
      if (i === curSlide) {
        line.classList.add('active-control-line');
      } else {
        line.classList.remove('active-control-line');
      }
    });
  }

  function next() {
    // Check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // Move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}vw)`;
      slide.style.transition = '1s';
    });

    // Update progress bar lines
    updateProgressBar();
  }

  function prev() {
    // Check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    // Move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}vw)`;
      slide.style.transition = '1s';
    });

    // Update progress bar lines
    updateProgressBar();
  }

  // Add event listener and navigation functionality for next slide
  nextSlide.addEventListener("click", () => {
    clearInterval(intervalId);
    next();
    intervalId = setInterval(next, 5000);
  });

  // Add event listener and navigation functionality for previous slide
  prevSlide.addEventListener("click", () => {
    clearInterval(intervalId);
    prev();
    intervalId = setInterval(next, 5000);
  });

  // Automatic sliding interval
  intervalId = setInterval(next, 5000);

  // Pause automatic sliding on mouseenter
  sliderArea.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
    controlLinesFill[curSlide].classList.add('paused');
  });

  // Resume automatic sliding on mouseleave
  sliderArea.addEventListener("mouseleave", () => {
    intervalId = setInterval(next, 5000);
    controlLinesFill[curSlide].classList.remove('paused');
  });

  // Initialize progress bar
  updateProgressBar();

  // Variables to store touch start and end positions
  let touchStartX = 0;
  let touchEndX = 0;

  // Add touchstart event listener
  sliderArea.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  // Add touchmove event listener
  sliderArea.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
  });

  // Add touchend event listener
  sliderArea.addEventListener('touchend', () => {
    handleSwipe();
  });

  // Function to handle swipe based on touch start and end positions
  function handleSwipe() {
    const swipeThreshold = 50; // Adjust as needed

    // Calculate the difference between start and end positions
    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
      // Swipe right
      clearInterval(intervalId);
      prev();
      intervalId = setInterval(next, 5000);
    } else if (deltaX < -swipeThreshold) {
      // Swipe left
      clearInterval(intervalId);
      next();
      intervalId = setInterval(next, 5000);
    }
  }
}

// Call the function to initialize the slider
showSlide();