document.getElementById('tps-footer-placeholder').innerHTML = `
<!-- GLOBAL FOOTER START -->
<footer id="tps-footer">
  <style>
    #tps-footer {
      --tps-white: #ffffff; --tps-green: #66ff00;
      --tps-charcoal-1: #0a0a0a; --tps-charcoal-2: #111111;
      --tps-border: rgba(255,255,255,0.15); --tps-border-hover: rgba(102,255,0,0.6);
      --tps-max: 1600px; --tps-gutter: clamp(20px, 5vw, 64px);
      background: var(--tps-charcoal-1); color: var(--tps-white); font-family: 'Inter', sans-serif;
      border-top: 1px solid var(--tps-border);
    }
    #tps-footer * { box-sizing: border-box; }
    #tps-footer a { color: var(--tps-white); text-decoration: none; }
    #tps-footer .tps-footer-container { max-width: var(--tps-max); margin: 0 auto; padding: clamp(48px,7vw,80px) var(--tps-gutter) 0; }
    #tps-footer .tps-footer-top { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1.2fr; gap: clamp(28px,5vw,40px); padding-bottom: clamp(40px,6vw,56px); }
    #tps-footer .tps-service-location { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: var(--tps-green); background: rgba(102, 255, 0, 0.08); border: 1px solid rgba(102, 255, 0, 0.25); padding: 6px 12px; border-radius: 6px; margin-bottom: 20px; text-transform: uppercase; }
    #tps-footer .tps-footer-blurb { font-size: 14px; color: var(--tps-white); line-height: 1.7; max-width: 320px; margin-bottom: 22px; opacity: 0.95; }
    #tps-footer .tps-social-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; align-items: center; }
    #tps-footer .tps-social-icon, #tps-footer .tps-footer-wa-btn { height: 38px; border-radius: 10px; border: 1px solid var(--tps-border); background: var(--tps-charcoal-2); display: flex; align-items: center; justify-content: center; color: var(--tps-white); text-decoration: none; }
    #tps-footer .tps-social-icon { width: 38px; }
    #tps-footer .tps-footer-wa-btn { background-color: #25D366; border-color: #25D366; padding: 0 14px; gap: 8px; font-size: 13px; font-weight: 700; }
    #tps-footer .tps-footer-heading { font-size: 13px; font-weight: 700; text-transform: uppercase; color: var(--tps-white); margin-bottom: 20px; }
    #tps-footer .tps-footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 13px; }
    #tps-footer .tps-footer-links a { font-size: 14px; color: var(--tps-white); opacity: 0.9; }
    #tps-footer .tps-footer-links a:hover { color: var(--tps-green); opacity: 1; }
    #tps-footer .tps-contact-item { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--tps-white); margin-bottom: 16px; opacity: 0.95; }
    #tps-footer .tps-contact-item svg { width: 16px; height: 16px; color: var(--tps-green); flex-shrink: 0; margin-top: 2px; }
    #tps-footer .tps-footer-bottom { border-top: 1px solid var(--tps-border); padding: 22px var(--tps-gutter); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; max-width: var(--tps-max); margin: 0 auto; font-size: 13px; color: var(--tps-white); opacity: 0.9; }
    #tps-footer .tps-footer-bottom-links { display: flex; gap: 20px; flex-wrap: wrap; }
    @media (max-width: 900px) { #tps-footer .tps-footer-top { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { #tps-footer .tps-footer-top { grid-template-columns: 1fr; } }
  </style>

  <div class="tps-footer-container">
    <div class="tps-footer-top">
      <div>
        <a href="./index.html" class="tps-footer-logo">
          <svg width="170" height="42" viewBox="0 0 520 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 22L12 37L42 52L72 37L42 22Z" fill="#66FF00"/>
            <text x="95" y="65" font-family="Inter, sans-serif" font-weight="800" font-size="46" fill="#FFFFFF">TamPram<tspan fill="#66FF00">Scale</tspan></text>
            <text x="96" y="98" font-family="Inter, sans-serif" font-weight="700" font-size="16" fill="#FFFFFF" opacity="0.9" letter-spacing="4">DIGITAL GROWTH AGENCY</text>
          </svg>
        </a>
        <div class="tps-service-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          Serving Clients Worldwide
        </div>
        <p class="tps-footer-blurb">A digital growth agency helping businesses build, automate, and grow through websites, marketing, design, automation, and AI.</p>
        <div class="tps-social-row">
          <a href="https://wa.me/919002872727?text=Hello%20TamPramScale,%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20services." target="_blank" rel="noopener noreferrer" class="tps-footer-wa-btn">WhatsApp</a>
          <a href="#" class="tps-social-icon">FB</a>
          <a href="#" class="tps-social-icon">IG</a>
          <a href="#" class="tps-social-icon">IN</a>
        </div>
      </div>
      <div>
        <div class="tps-footer-heading">Quick Links</div>
        <ul class="tps-footer-links">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./projects.html">Projects</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="tps-footer-heading">Our Services</div>
        <ul class="tps-footer-links">
          <li><a href="./web-designing.html">Web Designing</a></li>
          <li><a href="./web-development.html">Web Development</a></li>
          <li><a href="./seo.html">SEO</a></li>
          <li><a href="./digital-marketing.html">Digital Marketing</a></li>
          <li><a href="./graphics-designing.html">Graphics Designing</a></li>
          <li><a href="./ai-automation.html">AI Automation</a></li>
          <li><a href="./ai-agent.html">AI Agent</a></li>
        </ul>
      </div>
      <div>
        <div class="tps-footer-heading">Contact</div>
        <div class="tps-contact-item"><a href="mailto:tampram.me@gmail.com">tampram.me@gmail.com</a></div>
        <div class="tps-contact-item"><a href="tel:+919002872727">+91 90028 72727</a></div>
      </div>
    </div>
  </div>
  <div class="tps-footer-bottom">
    <div class="tps-footer-credit">© 2026 TamPramScale. All rights reserved.</div>
    <div class="tps-footer-bottom-links">
      <a href="./index.html">Home</a>
      <a href="./about.html">About</a>
      <a href="./contact.html">Contact</a>
    </div>
  </div>
</footer>
<!-- GLOBAL FOOTER END -->
`;