document.addEventListener('DOMContentLoaded', () => {
    console.log('Fun Spot page loaded');

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

        // Here you can add the logic to send this data to your server
    });
});

