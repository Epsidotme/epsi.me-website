
// Initialize feather icons and contact form
document.addEventListener('DOMContentLoaded', function() {
    // Setup contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formDataObj = Object.fromEntries(formData.entries());
            
            // Here you would normally send the form data to your server
            // For demo purposes, we'll just show the success message
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('successMessage').classList.remove('hidden');
            
            // In a real implementation, you would use:
            // fetch('/send-email', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formDataObj)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if(data.success) {
            //         document.getElementById('contactForm').style.display = 'none';
            //         document.getElementById('successMessage').classList.remove('hidden');
            //     }
            // });
        });
    }

// Random glitch effects on text elements
    const glitchElements = document.querySelectorAll('.glitch-effect');
    setInterval(() => {
        glitchElements.forEach(el => {
            if(Math.random() > 0.8) {
                el.classList.add('glitch-active');
                setTimeout(() => {
                    el.classList.remove('glitch-active');
                }, 200);
            }
        });
    }, 3000);

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tertiary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    // Mission dropdown toggle functionality
    const missionToggles = document.querySelectorAll('.mission-toggle');
    missionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const missionItem = this.closest('.mission-item');
            missionItem.classList.toggle('active');
            
            // Update icon
            const icon = this.querySelector('i');
            if (missionItem.classList.contains('active')) {
                feather.icons['chevron-up'].replace(icon);
            } else {
                feather.icons['chevron-down'].replace(icon);
            }
        });
    });

    // Close all other mission details when opening one
    document.querySelectorAll('.mission-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't close if clicking inside the mission details
            if (e.target.closest('.mission-details') || e.target.classList.contains('mission-toggle')) {
                return;
            }
            
            const allMissions = document.querySelectorAll('.mission-item');
            allMissions.forEach(mission => {
                if (mission !== this && mission.classList.contains('active')) {
                    mission.classList.remove('active');
                    const toggle = mission.querySelector('.mission-toggle i');
                    feather.icons['chevron-down'].replace(toggle);
                }
            });
        });
    });
// Add scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});