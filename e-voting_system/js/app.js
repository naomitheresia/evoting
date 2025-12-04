// Main JavaScript - Complete Version
document.addEventListener('DOMContentLoaded', function() {
    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isVisible = navMenu.style.display === 'flex';
            navMenu.style.display = isVisible ? 'none' : 'flex';
            
            if (window.innerWidth <= 768) {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.backgroundColor = 'white';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                navMenu.style.gap = '15px';
                navMenu.style.zIndex = '1000';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            }
        });
        
        // Close mobile menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
        
        // Adjust menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'row';
                navMenu.style.position = 'static';
                navMenu.style.backgroundColor = 'transparent';
                navMenu.style.padding = '0';
                navMenu.style.boxShadow = 'none';
                navMenu.style.gap = '30px';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
    
    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Update active nav link
                updateActiveNavLink(this);
                
                // Smooth scroll to target
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== NAVIGATION ACTIVE STATE ==========
    function updateActiveNavLink(clickedLink = null) {
        const navLinks = document.querySelectorAll('.nav-link:not(.btn)');
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        if (clickedLink && clickedLink.classList.contains('nav-link')) {
            clickedLink.classList.add('active');
        }
    }
    
    // Update active nav based on scroll position
    function updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link:not(.btn)');
        
        let currentSection = '';
        
        // Find current section based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && 
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize active nav on page load
    function initializeActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link:not(.btn)');
        
        // For index.html or home page
        if (currentPath.includes('index.html') || currentPath === '/') {
            // Set initial active state
            const hash = window.location.hash || '#home';
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === hash) {
                    link.classList.add('active');
                }
            });
            
            // Add scroll listener for index page
            window.addEventListener('scroll', updateActiveNavOnScroll);
            updateActiveNavOnScroll();
        } else {
            // For other pages (login, register, dashboard)
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // Highlight based on current page
                if (currentPath.includes('dashboard') && link.getAttribute('href') === '#') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Call initialization
    initializeActiveNav();
    
    // ========== COUNTDOWN TIMER ==========
    function updateCountdown() {
        const timerElements = document.querySelectorAll('.stat-num');
        if (!timerElements.length || timerElements.length < 3) return;
        
        // Set election end date: May 15, 2026, 23:59 WIB
        const electionEnd = new Date('May 15, 2026 23:59:00').getTime();
        
        function update() {
            const now = new Date().getTime();
            const timeLeft = electionEnd - now;
            
            if (timeLeft < 0) {
                timerElements[2].textContent = '0';
                return;
            }
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Display hours only (or days + hours if more than 1 day)
            if (days > 0) {
                timerElements[2].textContent = (days * 24 + hours).toString();
            } else {
                timerElements[2].textContent = hours.toString();
            }
        }
        
        // Update immediately and then every second
        update();
        setInterval(update, 1000);
    }
    
    updateCountdown();
    
    // ========== ANIMATE STATS ON SCROLL ==========
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-num');
        
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            // Check if it's a number (not time)
            if (text.includes('+') || !isNaN(parseInt(text))) {
                const target = parseInt(text.replace('+', '')) || 0;
                if (target > 0) {
                    let current = 0;
                    const increment = target / 50;
                    const duration = 1500;
                    const stepTime = duration / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
                    }, stepTime);
                }
            }
        });
    }
    
    // Animate stats when they come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
    
    // ========== FORM VALIDATION HELPERS ==========
    function initializeFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const requiredFields = this.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = '#e53e3e';
                        
                        // Add error message
                        if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.style.color = '#e53e3e';
                            errorMsg.style.fontSize = '0.85rem';
                            errorMsg.style.marginTop = '5px';
                            errorMsg.textContent = 'Field ini wajib diisi';
                            field.parentNode.appendChild(errorMsg);
                        }
                    } else {
                        field.style.borderColor = '#38a169';
                        
                        // Remove error message if exists
                        const errorMsg = field.nextElementSibling;
                        if (errorMsg && errorMsg.classList.contains('error-message')) {
                            errorMsg.remove();
                        }
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    alert('Harap isi semua field yang diperlukan.');
                }
            });
        });
    }
    
    initializeFormValidation();
    
    // ========== BACK TO TOP BUTTON ==========
    function createBackToTopButton() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.style.position = 'fixed';
        backToTopBtn.style.bottom = '30px';
        backToTopBtn.style.right = '30px';
        backToTopBtn.style.width = '50px';
        backToTopBtn.style.height = '50px';
        backToTopBtn.style.backgroundColor = 'var(--secondary)';
        backToTopBtn.style.color = 'white';
        backToTopBtn.style.border = 'none';
        backToTopBtn.style.borderRadius = '50%';
        backToTopBtn.style.cursor = 'pointer';
        backToTopBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        backToTopBtn.style.display = 'none';
        backToTopBtn.style.zIndex = '999';
        backToTopBtn.style.transition = 'all 0.3s ease';
        
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.backgroundColor = '#2563eb';
            backToTopBtn.style.transform = 'scale(1.1)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.backgroundColor = 'var(--secondary)';
            backToTopBtn.style.transform = 'scale(1)';
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(backToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }
    
    // Only create back to top button for index page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        createBackToTopButton();
    }
    
    // ========== CURRENT YEAR IN FOOTER ==========
    function updateCurrentYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        
        yearElements.forEach(element => {
            if (element.textContent.includes('2026')) {
                element.textContent = element.textContent.replace('2026', currentYear);
            }
        });
    }
    
    updateCurrentYear();
});