// script.js

// Example: Change header background color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#4b0082'; // Darker purple on scroll
    } else {
        header.style.backgroundColor = '#6a0dad'; // Original purple color
    }
});