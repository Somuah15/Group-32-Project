// Menu Toggle for Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            // Add a smooth sliding effect
            if (nav.classList.contains('show')) {
                nav.style.maxHeight = nav.scrollHeight + 'px';
            } else {
                nav.style.maxHeight = '0';
            }
        });
    }
});

// Simple Form Validation for Newsletter Subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const emailValue = emailInput.value.trim();
            
            if (!emailValue) {
                showError(emailInput, 'Email address is required.');
                event.preventDefault();
            } else if (!validateEmail(emailValue)) {
                showError(emailInput, 'Please enter a valid email address.');
                event.preventDefault();
            } else {
                clearError(emailInput);
            }
        });

        function showError(input, message) {
            const formGroup = input.closest('.form-group');
            let error = formGroup.querySelector('.error-message');
            
            if (!error) {
                error = document.createElement('div');
                error.className = 'error-message';
                formGroup.appendChild(error);
            }
            
            error.textContent = message;
            error.style.color = 'red';
        }

        function clearError(input) {
            const formGroup = input.closest('.form-group');
            const error = formGroup.querySelector('.error-message');
            
            if (error) {
                error.textContent = '';
            }
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    }
});
