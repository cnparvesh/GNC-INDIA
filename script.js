document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.textContent.toLowerCase();
            const targetSection = document.querySelector(`.${targetId}`);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Login/Signup buttons
    const loginBtn = document.querySelector('.button button:first-child');
    const signupBtn = document.querySelector('.button button:last-child');
    
    loginBtn.addEventListener('click', function() {
        alert('Login functionality will be implemented soon!');
    });
    
    signupBtn.addEventListener('click', function() {
        alert('Sign Up functionality will be implemented soon!');
    });

    // Product "Buy Now" buttons
    const buyButtons = document.querySelectorAll('.product-item button:last-child');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h2').textContent;
            alert(`Added ${productName} to your cart!`);
        });
    });

    // Form submission
    const enquiryForm = document.querySelector('.enquiry-section form');
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Simple validation
        if (name && email) {
            alert(`Thank you, ${name}! We have received your enquiry and will contact you at ${email} shortly.`);
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Product hover effect
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.socials a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            alert(`You will be redirected to our ${platform} page (simulated).`);
        });
    });
});