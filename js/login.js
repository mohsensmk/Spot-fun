document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("login-form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform validation (you can add more validation logic here)
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        // If validation passes, you can perform further actions like sending data to a server
        // For now, let's just log the input values
        console.log("Username:", username);
        console.log("Password:", password);

        // Reset the form
        form.reset();
    });
});
