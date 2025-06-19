// Email form handling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Get all email forms
    const emailForms = document.querySelectorAll('.email-form');
    
    // Handle form submissions
    emailForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('.email-input').value;
            const button = form.querySelector('.cta-button');
            
            // Validate email
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const originalText = button.textContent;
            button.textContent = 'Please wait...';
            button.disabled = true;
            
            // Simulate API call (replace with actual endpoint)
            setTimeout(() => {
                // Store email in localStorage for demo purposes
                const emails = JSON.parse(localStorage.getItem('takeoffEmails') || '[]');
                if (!emails.includes(email)) {
                    emails.push(email);
                    localStorage.setItem('takeoffEmails', JSON.stringify(emails));
                }
                
                // Show success message
                showMessage('🎉 You\'re on the waitlist! Check your email for updates.', 'success');
                
                // Reset form
                form.reset();
                button.textContent = originalText;
                button.disabled = false;
                
                // Track conversion (replace with actual analytics)
                trackConversion(email);
                
            }, 1500);
        });
    });
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show success/error messages
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        
        // Style the message
        messageEl.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 600;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(messageEl);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
    
    // Track conversions (replace with actual analytics)
    function trackConversion(email) {
        // Google Analytics 4 event (if GA4 is set up)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'sign_up', {
                method: 'email',
                custom_parameter_1: 'waitlist'
            });
        }
        
        // Facebook Pixel (if FB Pixel is set up)
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Waitlist Signup'
            });
        }
        
        // Console log for demo
        console.log('Conversion tracked:', email);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.step, .feature-card, .pricing-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .form-message {
            animation: slideIn 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Add loading states to buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.textContent.includes('Outrank')) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a brief delay
        setTimeout(typeWriter, 500);
    }
    
    // Handle mobile menu (if needed for future expansion)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Add scroll-to-top functionality
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });
    
    // Scroll to top functionality
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});