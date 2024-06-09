document.addEventListener('DOMContentLoaded', function() {
    const createEventLink = document.getElementById('food.html');
    createEventLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Show a "Coming Soon" message
        alert("This feature is coming soon. Stay tuned!");
    });
});
