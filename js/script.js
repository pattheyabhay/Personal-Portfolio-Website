
// // JavaScript Code
// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('nav ul li a').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Form validation
//     const contactForm = document.getElementById('contact-form');
//     contactForm.addEventListener('submit', function (e) {
//         e.preventDefault();



//         // Simple email validation
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             alert('Please enter a valid email address!');
//             return;
//         }

//         // If all validations pass
//         // alert('Message sent successfully!');
//         contactForm.reset();
//     });
// });
