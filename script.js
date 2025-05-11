// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true
});

// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const resultDiv = document.getElementById('bmi-result');

    if (weight && height) {
        const bmi = weight / (height * height);
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3498db';
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = '#2ecc71';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = '#f1c40f';
        } else {
            category = 'Obese';
            color = '#e74c3c';
        }

        resultDiv.innerHTML = `
            <div class="alert" style="background-color: ${color}; color: white; border-radius: 10px; padding: 1rem;">
                <h4>Your BMI: ${bmi.toFixed(1)}</h4>
                <p>Category: ${category}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="alert alert-danger">
                Please enter valid weight and height values.
            </div>
        `;
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '1rem 0';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 