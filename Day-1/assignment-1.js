// Portfolio JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Typing Effect for Hero Section =====
    const typingText = document.querySelector('.more-info-main-heading h1');
    const roles = ['Full Stack Developer', 'Web Developer', 'UI/UX Enthusiast', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect
    typeEffect();

    // ===== Smooth Scroll for Navigation =====
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href === '#' ? 'body' : href;
                const targetElement = href === '#' ? document.body : document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== Active Navigation Highlight =====
    const sections = document.querySelectorAll('section[id], .hero, .contact-card');
    const navItems = document.querySelectorAll('.nav-links li');

    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id') || 'home';
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('a');
            const href = link.getAttribute('href').replace('#', '');
            
            if (href === currentSection || (href === '' && currentSection === 'home')) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ===== Navbar Background on Scroll =====
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Scroll Reveal Animation =====
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.skill, .project-card, .experience-div');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // ===== Skills Counter Animation =====
    const skills = document.querySelectorAll('.skill');
    let skillsAnimated = false;

    function animateSkills() {
        const skillsSection = document.querySelector('.skills-section');
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && !skillsAnimated) {
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add('animate');
                }, index * 100);
            });
            skillsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);

    // ===== Project Cards Hover Effect =====
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // ===== Resume Button Click =====
    const resumeBtn = document.querySelector('.resume-btn button');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Add your resume link here
            alert('Resume download will be available soon!');
            // window.open('your-resume-link.pdf', '_blank');
        });
    }

    // ===== Contact Button Effect =====
    const contactBtn = document.querySelector('.contact-btn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can replace this with your email or contact form
            window.location.href = 'mailto:rajeev@example.com';
        });
    }

    // ===== Certificate Button Click =====
    const certificateBtn = document.querySelector('.cerficate-btn');
    
    if (certificateBtn) {
        certificateBtn.addEventListener('click', function() {
            // Add your certificate link here
            alert('Certificate will be displayed soon!');
            // window.open('your-certificate-link.pdf', '_blank');
        });
    }

    // ===== Back to Top Button =====
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== Social Icons Hover Animation =====
    const socialIcons = document.querySelectorAll('.icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('bounce');
        });
        
        icon.addEventListener('animationend', function() {
            this.classList.remove('bounce');
        });
    });

    // ===== Image Lazy Loading =====
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ===== Dark Mode Toggle =====
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeBtn.className = 'dark-mode-toggle';
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // ===== Console Easter Egg =====
    console.log('%c👋 Hello, Developer!', 'font-size: 24px; font-weight: bold; color: #432dd7;');
    console.log('%cWant to collaborate? Reach out to me!', 'font-size: 14px; color: #666;');

});
