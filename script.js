// Loading animation
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.display = 'none'; // Hide preloader
        content.style.display = 'block'; // Display content

        // Add visible class with delay for fade-in
        setTimeout(function() {
            document.querySelector('nav.header-nav').classList.add('visible');
            document.getElementById('home').classList.add('visible');
            document.getElementById('past').classList.add('visible');
        }, 100); // Delay

    }, 1000); // Delay before hiding preloader
});

// Smooth transition when click on menu element
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Fade-in when new section display
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
    fadeElements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Bouton retour en haut
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Affiche le bouton après avoir scrollé de 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});