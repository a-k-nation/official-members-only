 function passcheck2(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value of the password input
    var password = document.getElementById('pass2').value;

    // Perform your password validation here
    if (password === 'helloaknation') {
        // Redirect to the protected page
        window.location.href = 'june-mission.html';
    } else {
        alert('Incorrect password! Please try again.');
        // Clear the password field
        document.getElementById('pass2').value = '';
    }
}