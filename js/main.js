document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Simulate loading (in a real site, you'd wait for all assets to load)
    setTimeout(function() {
        document.body.classList.add('loaded');
        loadingScreen.classList.add('fade-out');
        
        // Remove loading screen after animation completes
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    
    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
    
    // Add glow class to gold buttons
    const goldButtons = document.querySelectorAll('.btn--gold');
    goldButtons.forEach(button => {
        button.classList.add('glow');
    });
    
    // Add pulse class to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.classList.add('pulse');
    });
    
    // Parallax effect for hero sections
    const heroes = document.querySelectorAll('.hero, .page-hero');
    
    if (heroes.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            heroes.forEach(hero => {
                hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            setTimeout(function() {
                contactForm.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
            }, 1000);
        });
    }
    
    // Prevent scroll when mobile menu is open
    document.addEventListener('scroll', function() {
        if (navList.classList.contains('active')) {
            window.scrollTo(0, 0);
        }
    });
    
    // Add active class to current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav__link');
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        
        if (currentPage === itemHref || 
            (currentPage === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });
});
