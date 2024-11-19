document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;


    const user = {
        firstName,
        lastName,
        email,
        password,
        gender
    };

    localStorage.setItem('user', JSON.stringify(user));

    this.reset();

    alert('Registration successful! You can now log in.');
});