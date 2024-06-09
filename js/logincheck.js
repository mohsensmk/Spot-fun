document.addEventListener('DOMContentLoaded', function() {
    const createEventLink = document.getElementById('create-event-link');
    createEventLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Check if the user is logged in
        const isLoggedIn = checkLoggedIn();

        if (isLoggedIn) {
            // If logged in, redirect to create event page
            window.location.href = "createevent.html";
        } else {
            // If not logged in, show login or signup modal
            const confirmAction = confirm("You need to log in or sign up to create an event. Do you want to proceed?");
            if (confirmAction) {
                // Redirect to login page
                window.location.href = "login.html";
            } else {
                // Do nothing or show signup modal
            }
        }
    });

    // Function to check if the user is logged in
    function checkLoggedIn() {
        // Example: Check if a token exists in localStorage
        const token = localStorage.getItem('token');
        return !!token; // Returns true if token exists, false otherwise
    }
});
