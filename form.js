document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signup');
    const submitButton = document.getElementById('btn1');

    // Validation functions
    const validateFullName = () => {
        const fullName = document.getElementById('fullName');
        const error = document.getElementById('fullNameError');
        const regex = /^[a-zA-Z\s]{3,}$/;

        if (regex.test(fullName.value)) {
            fullName.classList.add('valid');
            fullName.classList.remove('invalid');
            error.textContent = '';
            return true;
        } else {
            fullName.classList.add('invalid');
            fullName.classList.remove('valid');
            error.textContent = 'Full Name must be at least 3 alphabetic characters.';
            return false;
        }
    };

    const validateEmail = () => {
        const email = document.getElementById('email');
        const error = document.getElementById('emailError');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(email.value)) {
            email.classList.add('valid');
            email.classList.remove('invalid');
            error.textContent = '';
            return true;
        } else {
            email.classList.add('invalid');
            email.classList.remove('valid');
            error.textContent = 'Please enter a valid email address.';
            return false;
        }
    };

    const validatePassword = () => {
        const password = document.getElementById('password');
        const error = document.getElementById('passwordError');
        const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

        if (regex.test(password.value)) {
            password.classList.add('valid');
            password.classList.remove('invalid');
            error.textContent = '';
            return true;
        } else {
            password.classList.add('invalid');
            password.classList.remove('valid');
            error.textContent = 'Password must be at least 8 characters long and contain both letters and numbers.';
            return false;
        }
    };

    const validateConfirmPassword = () => {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const error = document.getElementById('confirmPasswordError');

        if (confirmPassword.value === password.value) {
            confirmPassword.classList.add('valid');
            confirmPassword.classList.remove('invalid');
            error.textContent = '';
            return true;
        } else {
            confirmPassword.classList.add('invalid');
            confirmPassword.classList.remove('valid');
            error.textContent = 'Passwords do not match.';
            return false;
        }
    };

    
    // Check all fields on form submit
    const validateForm = () => {
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        

        return isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid ;
    };

    form.addEventListener('input', () => {
        validateFullName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
       
        submitButton.disabled = !validateForm();
    });

    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault(); // Prevent form submission if invalid
        }
    });
});
