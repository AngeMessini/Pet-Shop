// Get the elements from your HTML
const loginLink = document.querySelector('.login-link');
const loginModal = document.querySelector('.login-container');

// When someone clicks 'Login', show the popup
loginLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    loginModal.style.display = 'flex';
});

// If someone clicks outside the white box, close it
window.addEventListener('click', (e) => {
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
    }
});
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Run once on load to show items already in view
reveal();