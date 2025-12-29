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
function startCountdown() {
    // 1. Set the specific date you are counting down to
    const targetDate = new Date("February 14, 2026 00:00:00").getTime();

    // 2. Create a function that runs every 1 second
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // 3. Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 4. Find the HTML element with id="countdown" and update its text
        // .padStart(2, '0') keeps it looking like 09:05 instead of 9:5
        document.getElementById("countdown").innerHTML = 
            days + "d " + 
            String(hours).padStart(2, '0') + "h " + 
            String(minutes).padStart(2, '0') + "m " + 
            String(seconds).padStart(2, '0') + "s";

        // 5. If the countdown finishes, show "LAUNCHED"
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "DROPPED! 🐾";
        }
    }, 1000);
}

// Start the function
startCountdown();