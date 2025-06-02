const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
const preloaderWrapper = document.querySelector('.preloader-wrapper');
const mainContent = document.querySelector('.container');

// Simulate loading time and then hide the preloader
setTimeout(() => {
    preloaderWrapper.style.display = 'none';
    mainContent.style.display = 'flex'; // Show the main content
}, 3000); // Adjust the time as needed

showPasswordCheckbox.addEventListener('change', function() {
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Function to handle form submission
