// JavaScript for contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Example: Process form submission here (e.g., send data to server)
    // For demonstration, we'll just log the form data to console
    const formData = new FormData(contactForm);
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Clear the form after submission (optional)
    contactForm.reset();
});
