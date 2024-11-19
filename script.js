document.addEventListener('DOMContentLoaded', () => {
    // Basculer le menu Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fermer le menu lorsqu'un lien est cliqué
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Bouton Retour en Haut
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

    // Bascule Mode Sombre
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Interaction des boutons Email et Téléphone
    const emailBtn = document.getElementById('email-btn');
    const phoneBtn = document.getElementById('phone-btn');
    const emailInfo = document.getElementById('email-info');
    const phoneInfo = document.getElementById('phone-info');

    emailBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêcher la fermeture immédiate
        const isVisible = emailInfo.classList.contains('show');
        // Basculer l'affichage
        if (isVisible) {
            emailInfo.classList.remove('show');
        } else {
            emailInfo.classList.add('show');
            phoneInfo.classList.remove('show'); // Fermer l'autre info
        }
    });

    phoneBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêcher la fermeture immédiate
        const isVisible = phoneInfo.classList.contains('show');
        // Basculer l'affichage
        if (isVisible) {
            phoneInfo.classList.remove('show');
        } else {
            phoneInfo.classList.add('show');
            emailInfo.classList.remove('show'); // Fermer l'autre info
        }
    });

    // Fermer les informations de contact en cliquant à l'extérieur
    document.addEventListener('click', () => {
        emailInfo.classList.remove('show');
        phoneInfo.classList.remove('show');
    });

    // Barre de navigation fixe
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
