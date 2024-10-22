document.addEventListener('DOMContentLoaded', () => {
    // Toggle Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Email and Phone Buttons Interaction
    const emailBtn = document.getElementById('email-btn');
    const phoneBtn = document.getElementById('phone-btn');
    const emailInfo = document.getElementById('email-info');
    const phoneInfo = document.getElementById('phone-info');

    emailBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent immediate closure
        const isVisible = emailInfo.classList.contains('show');
        // Toggle display
        if (isVisible) {
            emailInfo.classList.remove('show');
        } else {
            emailInfo.classList.add('show');
            phoneInfo.classList.remove('show'); // Close the other info
        }
    });

    phoneBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent immediate closure
        const isVisible = phoneInfo.classList.contains('show');
        // Toggle display
        if (isVisible) {
            phoneInfo.classList.remove('show');
        } else {
            phoneInfo.classList.add('show');
            emailInfo.classList.remove('show'); // Close the other info
        }
    });

    // Close contact info when clicking outside
    document.addEventListener('click', () => {
        emailInfo.classList.remove('show');
        phoneInfo.classList.remove('show');
    });

    // Sticky Navigation Bar
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');

    const stickyNav = () => {
        if (window.scrollY > header.offsetHeight - navbar.offsetHeight - 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', stickyNav);
});
