'use strict'

// ============= Implementation of the burger menu on both pages =============

const btnNavEl = document.querySelector(".burger-menu");
const mainHeaderEl = document.querySelector(".main-header");
const mainContainer = document.querySelector(".container");
const navItems = document.querySelectorAll(".nav-items a");


btnNavEl.addEventListener("click", function () {
  let w = window.innerWidth;

  if (w <= 768) {
    mainHeaderEl.classList.toggle("burger-menu-active");

    // For disable vertical scroll
    mainContainer.classList.toggle("disable-scroll");
  } else {
    mainHeaderEl.classList.remove("burger-menu-active");
  }
})

// Close the burger menu when a navigation item is clicked
navItems.forEach(item => {
  item.addEventListener("click", function () {
    mainHeaderEl.classList.remove("burger-menu-active");
    mainContainer.classList.remove("disable-scroll");
  });
});