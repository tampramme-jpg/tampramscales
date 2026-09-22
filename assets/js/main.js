/**
 * TamPramScale — Main Interactive Controller
 * Static-friendly & GitHub Pages optimized.
 */

// CENTRAL GITHUB PAGES CONFIGURATION
// If deployed at https://USERNAME.github.io/REPOSITORY-NAME/, set:
// const SITE_BASE = "/REPOSITORY-NAME";
// For a root domain or user page (https://USERNAME.github.io/), leave as "":
const SITE_BASE = "";

function siteUrl(path) {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  return `${SITE_BASE}${cleanPath}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Drawer Toggle
  const toggleBtn = document.querySelector('.tps-mobile-toggle');
  const mobileMenu = document.querySelector('.tps-mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Intersection Observer Scroll Reveal
  const reveals = document.querySelectorAll('.tps-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

  // 3. Accessible FAQ Accordion
  const faqItems = document.querySelectorAll('.tps-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.tps-faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.tps-faq-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 4. WhatsApp Tooltip Timer
  const waTooltip = document.querySelector('.tps-wa-tooltip');
  const waBtn = document.querySelector('.tps-wa-btn');
  if (waTooltip && waBtn) {
    setTimeout(() => {
      waTooltip.classList.add('show');
      setTimeout(() => waTooltip.classList.remove('show'), 5000);
    }, 2500);

    waBtn.addEventListener('mouseenter', () => waTooltip.classList.add('show'));
    waBtn.addEventListener('mouseleave', () => waTooltip.classList.remove('show'));
  }

  // 5. Formspree AJAX Submission Handling
  const contactForm = document.getElementById('tpsForm');
  const formStatus = document.getElementById('tpsFormStatus');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      const endpoint = contactForm.getAttribute('action');
      if (endpoint === 'YOUR_FORMSPREE_ENDPOINT' || !endpoint.startsWith('https://formspree.io/')) {
        e.preventDefault();
        formStatus.innerHTML = `<span style="color:#ffbd2e;">⚠️ Please configure your Formspree endpoint in contact/index.html to enable direct inbox routing to tampram.me@gmail.com</span>`;
        formStatus.style.display = 'block';
        return;
      }
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';

      try {
        const data = new FormData(contactForm);
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          contactForm.reset();
          formStatus.innerHTML = `<span style="color:#66FF00;">✓ Message sent successfully to tampram.me@gmail.com! We will reach out shortly.</span>`;
        } else {
          formStatus.innerHTML = `<span style="color:#ff5f56;">Error sending message. Please contact us on WhatsApp directly.</span>`;
        }
      } catch (err) {
        formStatus.innerHTML = `<span style="color:#ff5f56;">Connection error. Please message us on WhatsApp (+91 90028 72727).</span>`;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message →';
        formStatus.style.display = 'block';
      }
    });
  }
});