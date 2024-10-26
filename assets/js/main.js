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
const images = [
    ["image1.jpg", "image2.jpg", "image3.jpg"], // Project 1 images
    ["image4.jpg", "image5.jpg", "image6.jpg"], // Project 2 images
    ["image7.jpg", "image8.jpg", "image9.jpg"], // Project 3 images
    ["image10.jpg", "image11.jpg", "image12.jpg"] // Project 4 images
];

let indices = [0, 0, 0, 0]; // Current image index for each carousel

function showImage(cardIndex, imageIndex) {
    const carouselImage = document.getElementById(`carousel-image-${cardIndex + 1}`);
    carouselImage.src = images[cardIndex][imageIndex];
}

function nextImage(cardIndex) {
    indices[cardIndex] = (indices[cardIndex] + 1) % images[cardIndex].length;
    showImage(cardIndex, indices[cardIndex]);
}

// Set interval for each carousel
images.forEach((_, index) => {
    setInterval(() => nextImage(index), 3000);
});

// Initial display of images
images.forEach((_, index) => showImage(index, 0));




/*==================== TESTIMONIAL ====================*/


/*==================== CONTACT ME====================*/
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(this);

    const data = {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response-message').innerText = data;
        this.reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response-message').innerText = 'Failed to send message.';
    });
});


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 