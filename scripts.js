document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-now');
    const formSection = document.getElementById('form-section');
    const bookingForm = document.getElementById('booking-form');
    const packageInput = document.getElementById('package');

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageName = this.getAttribute('data-package');
            packageInput.value = packageName;
            formSection.classList.remove('hidden');
            formSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const packageName = document.getElementById('package').value;

        alert(`Thank you, ${name}! You have successfully booked the ${packageName} package. We will contact you at ${email} or ${phone}.`);

        formSection.classList.add('hidden');
        bookingForm.reset();
    });
});
