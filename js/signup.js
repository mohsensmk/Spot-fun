document.addEventListener("DOMContentLoaded", function() {
    // Get the signup form element
    const signupForm = document.getElementById("signup-form");

    // Add event listener for form submission
    signupForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform validation (you can add more validation logic here)
        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // If validation passes, you can perform further actions like sending data to a server
        // For now, let's just log the input values
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        // Reset the form
        signupForm.reset();
    });
});
