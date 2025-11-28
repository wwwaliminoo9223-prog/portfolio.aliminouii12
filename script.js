
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-card, .testimonial-card, .timeline-item').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    // Contact form
    function handleContactForm(e) {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      setTimeout(() => {
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        e.target.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    }
