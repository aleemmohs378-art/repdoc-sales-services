// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover animations for cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Basic form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        const inputs = form.querySelectorAll('input[required]');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill all required fields.');
        }
    });
});