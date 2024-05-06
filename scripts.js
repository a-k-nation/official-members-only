function passcheck(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value of the password input
    var password = document.getElementById('pass1').value;

    // Perform your password validation here
    if (password === 'nkhaaitleonlo') {
        // Redirect to the protected page
        window.location.href = 'unscramble.html';
    } else {
        alert('Incorrect password! Please try again.');
        // Clear the password field
        document.getElementById('pass1').value = '';
    }
}
