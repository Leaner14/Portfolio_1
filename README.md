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

## 🎨 Customization

### Update your info
- **Name, role, bio:** edit the `<section class="hero">` block in `index.html`.
- **Profile photo:** replace the `src` on `.portrait-img` with your own image in `assets/images/`.
- **Resume:** replace `assets/resume.pdf` with your actual PDF (same filename, or update the `href` in both the navbar and hero buttons).
- **Social links:** update the `href` attributes on the GitHub/LinkedIn/email icons (hero, contact section, footer).

### Colors & theme
All colors live as CSS custom properties at the top of `css/style.css`:

```css
:root {
  --bg: #0f172a;       /* page background */
  --card: #1e293b;     /* card surfaces */
  --primary: #38bdf8;  /* accent / sky blue */
  --text: #f8fafc;     /* primary text */
  --text-secondary: #94a3b8;
}
```
Change these values to re-theme the entire site.

### Skills
Edit the `<section id="skills">` markup — update `data-pct` on `.bar-fill` (0–100) and on `.ring` elements to change the animated progress values.

### Projects
Duplicate a `<article class="project-card">` block inside `#projects`, updating the image, title, description, tech stack tags, and `data-tags` attribute (used by the filter buttons — space-separated, lowercase).

### Experience & Certifications
Duplicate a `.timeline-item` block inside `#experience` with a new icon, date, title, and description.

### Contact form
The form currently validates client-side only and simulates a successful submission (see `script.js`). To make it functional, wire the `submit` handler to your backend/service of choice (e.g. Formspree, EmailJS, or your own API endpoint) and send the collected field values.

---

## 🌐 Deployment

This is a fully static site — deploy it anywhere that serves static files:

- **GitHub Pages:** push the repo, enable Pages on the `main` branch (root or `/docs`), done.
- **Netlify / Vercel:** drag-and-drop the folder or connect the repo; no build command needed (or set the publish directory to the project root).
- **AWS S3 + CloudFront:** upload the folder to an S3 bucket configured for static website hosting, front it with CloudFront for HTTPS/CDN — a fitting deployment target for a cloud-engineer portfolio.

---

## ✅ Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari) — uses CSS Grid, custom properties, `backdrop-filter`, and the Canvas API. Gracefully degrades animations when `prefers-reduced-motion` is enabled.

---

## 📄 License

Free to use, modify, and deploy for personal or professional portfolio purposes.
