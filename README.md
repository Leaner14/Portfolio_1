# ☁️ Cloud Engineer Portfolio

A modern, fully responsive portfolio website built for a Cloud Engineer / DevOps
enthusiast, using only **HTML5, CSS3, and vanilla JavaScript** (no frameworks,
no build step). Dark, glassmorphic UI with scroll-triggered animations, an
animated network-topology hero background, typing effects, animated skill
indicators, and a validated contact form.

---

## ✨ Features

- **Responsive dark UI** — custom design system (no Bootstrap dependency) built with CSS variables for easy theming
- **Animated hero** — live network-topology canvas background, terminal-style typing animation, glowing profile ring
- **Scroll-based interactions** — sticky/blurred navbar, scroll-spy navigation highlighting, top scroll-progress bar, fade/slide reveal animations
- **Skills section** — animated linear progress bars and circular (SVG ring) indicators, triggered on scroll
- **Projects section** — filterable project grid (All / AWS / Docker / Kubernetes / CI-CD / Terraform), hover-lift cards
- **Experience & certifications timeline** — chronological, icon-based timeline
- **Contact form** — client-side validation (name, email, subject, message) with inline error messages and status feedback
- **Back-to-top button**, smooth scrolling, mobile hamburger navigation
- **Accessible** — semantic HTML, ARIA labels/roles, visible keyboard focus states, alt text on images
- **SEO-ready** — meta description/keywords, Open Graph tags, favicon, proper heading hierarchy
- **Respects reduced motion** — all animations disable gracefully for users with `prefers-reduced-motion`

---

## 🧱 Tech Stack

| Layer      | Technology                                   |
|------------|-----------------------------------------------|
| Markup     | HTML5 (semantic elements, ARIA)               |
| Styling    | CSS3 (custom properties, Grid, Flexbox)       |
| Scripting  | Vanilla JavaScript (ES6+, IntersectionObserver, Canvas API) |
| Icons      | Font Awesome 6 (CDN)                          |
| Fonts      | Google Fonts — Outfit, Inter, JetBrains Mono  |

No build tools, bundlers, or frameworks are required — open `index.html` and it works.

---

## 📁 Folder Structure

```
Cloud-Portfolio/
│
├── index.html              # Main HTML document (all sections)
├── css/
│   └── style.css           # Design tokens, layout, components, animations
├── js/
│   └── script.js           # Navbar, typing effect, scroll animations,
│                            # skill bars, filtering, form validation, canvas
├── assets/
│   ├── images/             # Project/profile images go here
│   ├── icons/               # Extra icon assets (optional, Font Awesome via CDN)
│   └── resume.pdf          # Placeholder — replace with your real resume
└── README.md
```

---

## 🚀 Installation & Local Usage

1. **Download or clone** the project folder.
2. Open `Cloud-Portfolio/index.html` directly in a browser, **or** serve it locally for the best experience (some browsers restrict local file access for fonts/images):

   ```bash
   # Python 3
   cd Cloud-Portfolio
   python -m http.server 8080
   # then visit http://localhost:8080
   ```

   ```bash
   # Node (if you have npx available)
   npx serve Cloud-Portfolio
   ```

No `npm install` or dependency setup is required — all third-party assets (Font Awesome, Google Fonts) load from CDNs.

---

## 🌐 Deployment

This is a fully static site — deploy it anywhere that serves static files:

- **GitHub Pages:** push the repo, enable Pages on the `main` branch (root or `/docs`), done.
- **Netlify / Vercel:** drag-and-drop the folder or connect the repo; no build command needed (or set the publish directory to the project root).
- **AWS S3 + CloudFront:** upload the folder to an S3 bucket configured for static website hosting, front it with CloudFront for HTTPS/CDN — a fitting deployment target for a cloud-engineer portfolio.

---

