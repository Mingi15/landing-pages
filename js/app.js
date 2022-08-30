/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//get the navbar ul tag
const navbar = document.getElementById('navbar__list');
//get the sections in order to get the data attribute
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function isInViewPort(element) {
    const bounding = element.getBoundingClientRect();
    if (bounding.top < 300 && bounding.bottom > 500) {
      return true;
    }
 }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar() {
    for (let i = 0; i < sections.length; i++) {
        const navData = sections[i].dataset.nav;
        const sectionId = sections[i].id;
        const listItem = document.createElement('li');
        listItem.innerHTML = '<a href="#' + sectionId +'" class="menu__link">'+navData+'</a>';
        navbar.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport
function setNavActive() {
    for (let i = 0; i < sections.length; i++) {
      const anchorTag = document.querySelector('a[href="#' + sections[i].id +'"]');
      if (isInViewPort(sections[i])) {
        sections[i].classList.add('active');
        anchorTag.classList.add('nav-active');
      } else {
        sections[i].classList.remove('active');
        anchorTag.classList.remove('nav-active');
      }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollIntoView(event) {
    event.preventDefault();
    const top = document.querySelector(event.target.hash).getBoundingClientRect().top + window.pageYOffset;
    // evt.preventDefault();
    window.scrollTo({
      top,
      behavior: "smooth"
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar);
// Scroll to section on link click
navbar.addEventListener('click', scrollIntoView);
// Set sections as active
document.addEventListener('scroll', setNavActive);
