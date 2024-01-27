document.addEventListener('DOMContentLoaded', function () {
    var languageSelect = document.getElementById('languageSelect');

    languageSelect.addEventListener('change', function () {
        var selectedLanguage = languageSelect.value;
        alert('Selected language: ' + selectedLanguage);
    });

    var emailInput = document.querySelector('.email');
    var getStartedButton = document.querySelector('.getstarted');

    getStartedButton.addEventListener('click', function () {
        var emailValue = emailInput.value;
        if (isValidEmail(emailValue)) {
            alert('Email is valid. Perform desired action.');
        } else {
            alert('Invalid email. Please enter a valid email address.');
        }
    });

    var signInButton = document.querySelector('.signin_button');
    var signInModal = document.getElementById('signinModal');

    signInButton.addEventListener('click', openSignInModal);

    window.closeSignInModal = function () {
        signInModal.style.display = 'none';
    };

    window.signIn = function () {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Replace this with your actual authentication logic
        // For simplicity, check if the username is 'user' and password is 'password'
        if (isValidUser(username, password)) {
            alert('Sign In Successful!');
            signInModal.style.display = 'none';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    function isValidUser(username, password) {
        // Replace this with your actual authentication logic
        // For simplicity, check if the username is 'user' and password is 'password'
        return username === 'user' && password === 'password';
    }

    function openSignInModal() {
        signInModal.style.display = 'block';
    }

    function isValidEmail(email) {
        // Replace this with your actual email validation logic
        // For simplicity, checking if the email contains '@'
        return email.includes('@');
    }
});
