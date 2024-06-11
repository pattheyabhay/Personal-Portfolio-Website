
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

//         // Get form fields
//         const name = document.getElementById('name').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const message = document.getElementById('message').value.trim();

//         // Basic validation
//         if (name === '' || email === '' || message === '') {
//             alert('All fields are required!');
//             return;
//         }

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
