const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = process.cwd();
const fontB64 = fs.readFileSync(path.join(root, 'public/fonts/Norwester.woff2')).toString('base64');
const W = 1200, H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'Norwester'; src: url(data:font/woff2;base64,${fontB64}) format('woff2'); font-weight: 400; }
    </style>
    <radialGradient id="glow" cx="50%" cy="-10%" r="80%">
      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.28"/>
      <stop offset="45%" stop-color="#bae6fd" stop-opacity="0.10"/>
      <stop offset="70%" stop-color="#0a0c14" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="55%" stop-color="#7dd3fc"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0a0c14"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)"/>

  <!-- wordmark -->
  <text x="80" y="150" font-family="Norwester" font-size="40" letter-spacing="6" fill="#f5f7fb">AT THE MERIDIAN</text>

  <!-- headline -->
  <text x="80" y="300" font-family="Norwester" font-size="96" letter-spacing="1" fill="#f5f7fb">WEBSITES &amp; SYSTEMS</text>
  <text x="80" y="410" font-family="Norwester" font-size="96" letter-spacing="1" fill="#f5f7fb">THAT CONVERT <tspan fill="url(#accent)">SEARCH</tspan></text>
  <text x="80" y="520" font-family="Norwester" font-size="96" letter-spacing="1" fill="url(#accent)">TO SALE.</text>

  <!-- footer tag -->
  <text x="80" y="588" font-family="Norwester" font-size="26" letter-spacing="4" fill="#7dd3fc" opacity="0.85">FOR SERVICE BUSINESSES</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(root, 'public/og-image.png'))
  .then(() => console.log('wrote public/og-image.png'))
  .catch((e) => { console.error(e); process.exit(1); });
