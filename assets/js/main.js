/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

//close menu is user clicks outside
document.addEventListener('click', (event) => {
    const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);

    if (!isClickInside && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className; // Get the class name of the header's parent (the content)

    // Close all items first
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'; // Close all skill content
    }

    // If the current item is closed, open it
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'; // Open the clicked item
    } else {
        // If the current item is already open, we can close it
        this.parentNode.className = 'skills__content skills__close'; // Close it
    }
}

// Attach event listeners to all skill headers
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of project images
let currentIndex = 0;

function showImage(index) {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Change image every 3 seconds
setInterval(nextImage, 3000);

// Initial image display
showImage(currentIndex);




/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 