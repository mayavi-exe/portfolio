document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            const navList = document.querySelector('.nav-list');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                document.querySelector('.menu-toggle i').classList.remove('fa-times');
                document.querySelector('.menu-toggle i').classList.add('fa-bars');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Scroll To Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Optional: Add an active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset for fixed header height
            if (pageYOffset >= sectionTop - 90) { // 90px roughly accounts for header height
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.href.includes(current)) {
                link.classList.add('active-link');
            }
        });
    });

    // Add a simple hover effect for project cards (CSS handles most, but JS could add more complex ones)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // console.log('Hovered over project:', card.querySelector('h3').textContent);
            // Example: could change a specific element's style or trigger an animation
        });
        card.addEventListener('mouseleave', () => {
            // console.log('Left project:', card.querySelector('h3').textContent);
        });
    });

    // Simple form submission (for demonstration, you'd need a backend for actual email sending)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you'd send this data to a server
            // using fetch() or XMLHttpRequest.
            console.log('Form submitted!');
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));
            console.log(data);

            alert('Thank you for your message! (Note: This is a demo. Actual email sending requires a backend.)');
            contactForm.reset(); // Clear the form
        });
    }
});