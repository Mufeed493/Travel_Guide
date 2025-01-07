// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Highlight active navigation link based on scroll position
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section');
//     const scrollPosition = window.scrollY + 75; // Adjust for navbar height

//     sections.forEach(section => {
//         if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
//             document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
//             const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
//             if (activeLink) {
//                 activeLink.classList.add('active');
//             }
//         }
//     });
// });
