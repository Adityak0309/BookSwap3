document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    // Redirect to the welcome page after clicking Login
    window.location.href = "welcome.html";
});
