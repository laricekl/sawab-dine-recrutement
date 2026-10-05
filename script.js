// Sawab Dine — interactions
(function () {
    'use strict';

    // Sticky header shadow on scroll
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(15,30,51,0.10)' : 'none';
    }, { passive: true });

    // Mobile nav toggle (simple)
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    toggle.addEventListener('click', function () {
        var isOpen = links.style.display === 'flex';
        links.style.display = isOpen ? '' : 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '72px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = '#fff';
        links.style.padding = '20px 24px';
        links.style.borderBottom = '1px solid #ece7db';
    });

    // Contact form (démo — à connecter à un backend)
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Merci ! Votre message a bien été pris en compte (démo — formulaire à connecter).');
            form.reset();
        });
    }

    // Reveal on scroll (sobre)
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.card, .step, .cta-box').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
})();
