// JavaScript for contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form data
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }
        
        // Process form submission here (e.g., send data to server)
        // For demonstration, we'll log the form data to console
        const formData = new FormData(contactForm);
        
        fetch('/submit-form', { // Replace with your server endpoint
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            showFeedback('Form submitted successfully!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
            showFeedback('There was an error submitting the form. Please try again.', 'error');
        });
    });

    function validateForm() {
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required.');
            } else {
                clearError(input);
            }
        });
        
        return isValid;
    }

    function showError(input, message) {
        let error = input.nextElementSibling;
        
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('div');
            error.className = 'error-message';
            input.parentElement.appendChild(error);
        }
        
        error.textContent = message;
        error.style.color = 'red';
    }

    function clearError(input) {
        const error = input.nextElementSibling;
        
        if (error && error.classList.contains('error-message')) {
            error.textContent = '';
        }
    }

    function showFeedback(message, type) {
        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${type}`;
        feedback.textContent = message;
        contactForm.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 5000); // Remove feedback message after 5 seconds (5000ms)
    }
});
