document.getElementById('tps-header-placeholder').innerHTML = `
<!-- GLOBAL HEADER START -->
<header class="tps-global-header" id="tpsHeader">
  <style>
    :root {
      --tps-black: #000000; --tps-white: #FFFFFF; --tps-neon: #66FF00;
      --tps-dark-01: #0A0A0A; --tps-dark-02: #111111; --tps-gray-text: #A3A3A3;
      --tps-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      --tps-font-sans: 'Inter', sans-serif;
    }
    .tps-global-header { position: sticky; top: 0; left: 0; width: 100%; z-index: 1000; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(102, 255, 0, 0.15); font-family: var(--tps-font-sans); }
    .tps-header-container { width: min(1600px, calc(100% - 40px)); margin: 0 auto; height: 95px; display: flex; align-items: center; justify-content: space-between; }
    .tps-header-logo { display: flex; align-items: center; text-decoration: none; }
    .tps-nav-menu { display: none; align-items: center; gap: 32px; list-style: none; margin: 0; padding: 0; }
    @media (min-width: 1024px) { .tps-nav-menu { display: flex; } }
    .tps-nav-link { color: var(--tps-white); text-decoration: none; font-size: 0.95rem; font-weight: 600; transition: var(--tps-transition); }
    .tps-nav-link:hover, .tps-nav-link.active { color: var(--tps-neon); }
    .tps-dropdown { position: relative; }
    .tps-dropdown-content { position: absolute; top: 100%; left: -20px; background: var(--tps-dark-01); border: 1px solid rgba(102, 255, 0, 0.2); border-radius: 12px; padding: 16px; width: 260px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); display: flex; flex-direction: column; gap: 10px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: var(--tps-transition); }
    .tps-dropdown:hover .tps-dropdown-content { opacity: 1; visibility: visible; transform: translateY(0); }
    .tps-dropdown-item { color: var(--tps-gray-text); text-decoration: none; font-size: 0.9rem; font-weight: 600; padding: 8px 12px; border-radius: 6px; transition: var(--tps-transition); }
    .tps-dropdown-item:hover { background: rgba(102, 255, 0, 0.1); color: var(--tps-neon); transform: translateX(4px); }
    .tps-header-actions { display: flex; align-items: center; gap: 16px; }
    .tps-header-cta { display: none; background-color: var(--tps-neon); color: var(--tps-black); font-weight: 700; font-size: 0.9rem; padding: 12px 24px; border-radius: 8px; text-decoration: none; transition: var(--tps-transition); }
    @media (min-width: 768px) { .tps-header-cta { display: inline-flex; } }
    .tps-header-cta:hover { background-color: #55db00; transform: translateY(-2px); }
  </style>

  <div class="tps-header-container">
    <a href="./index.html" class="tps-header-logo">
      <svg width="170" height="42" viewBox="0 0 520 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 22L12 37L42 52L72 37L42 22Z" fill="#66FF00"/>
        <text x="95" y="65" font-family="Inter, sans-serif" font-weight="800" font-size="46" fill="#FFFFFF">TamPram<tspan fill="#66FF00">Scale</tspan></text>
        <text x="96" y="98" font-family="Inter, sans-serif" font-weight="700" font-size="16" fill="#A3A3A3" letter-spacing="4">DIGITAL GROWTH AGENCY</text>
      </svg>
    </a>

    <ul class="tps-nav-menu">
      <li><a href="./index.html" class="tps-nav-link">Home</a></li>
      <li><a href="./about.html" class="tps-nav-link">About Us</a></li>
      <li class="tps-dropdown">
        <a href="#" class="tps-nav-link">Services ▾</a>
        <div class="tps-dropdown-content">
          <a href="./web-designing.html" class="tps-dropdown-item">Web Designing</a>
          <a href="./web-development.html" class="tps-dropdown-item">Web Development</a>
          <a href="./seo.html" class="tps-dropdown-item">SEO</a>
          <a href="./digital-marketing.html" class="tps-dropdown-item">Digital Marketing</a>
          <a href="./graphics-designing.html" class="tps-dropdown-item">Graphics Designing</a>
          <a href="./ai-automation.html" class="tps-dropdown-item">AI Automation</a>
          <a href="./ai-agent.html" class="tps-dropdown-item">AI Agent</a>
        </div>
      </li>
      <li><a href="./projects.html" class="tps-nav-link">Projects</a></li>
      <li><a href="./contact.html" class="tps-nav-link">Contact</a></li>
    </ul>

    <div class="tps-header-actions">
      <a href="./contact.html" class="tps-header-cta">Get Started</a>
    </div>
  </div>
</header>
<!-- GLOBAL HEADER END -->
`;