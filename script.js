document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Basic validation
    if (!name || !email) {
        alert('Please fill out all fields.');
        return;
    }

    const data = {
        name: name,
        email: email
    };

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'Form submitted successfully!';
        document.getElementById('userForm').reset();
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Error submitting form.';
        console.error('Error:', error);
    });
});
