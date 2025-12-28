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