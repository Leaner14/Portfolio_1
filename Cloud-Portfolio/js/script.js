/* ==========================================================================
   Cloud Engineer Portfolio — Script
   Navbar, typing effect, scroll animations, skill bars, project filter,
   contact form validation, back-to-top, topology canvas background.
   ========================================================================== */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Sticky navbar + scroll route progress ---------------- */
  const navbar = document.getElementById("navbar");
  const routeFill = document.getElementById("routeFill");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    navbar.classList.toggle("is-scrolled", scrollY > 40);
    backToTop.classList.toggle("is-visible", scrollY > 480);

    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
    routeFill.style.width = pct + "%";
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Scroll spy ---------------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll('[data-nav]');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => spyObserver.observe(section));

  /* ---------------- Typing animation ---------------- */
  const typedTextEl = document.getElementById("typedText");
  const phrases = [
    "deploying cloud infrastructure...",
    "automating CI/CD pipelines...",
    "provisioning with terraform apply",
    "kubectl get pods --watch",
  ];

  function typeLoop() {
    if (prefersReducedMotion) {
      typedTextEl.textContent = phrases[0];
      return;
    }
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charIndex++;
        typedTextEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        typedTextEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 55);
    }
    tick();
  }
  typeLoop();

  /* ---------------- Reveal on scroll + skill bar / ring animation ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const barFills = document.querySelectorAll(".bar-fill");
  const rings = document.querySelectorAll(".ring");
  const RING_CIRCUMFERENCE = 2 * Math.PI * 52;

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");

        entry.target.querySelectorAll(".bar-fill").forEach((fill) => {
          fill.style.width = fill.dataset.pct + "%";
        });
        entry.target.querySelectorAll(".ring").forEach((ring) => {
          const pct = parseFloat(ring.dataset.pct) / 100;
          const fg = ring.querySelector(".ring-fg");
          if (fg) fg.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - pct));
        });

        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------------- Project filtering ---------------- */
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const filter = chip.dataset.filter;
      projectCards.forEach((card) => {
        const tags = card.dataset.tags || "";
        const show = filter === "all" || tags.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------------- Contact form validation ---------------- */
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const validators = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
    subject: (v) => v.trim().length >= 3 || "Please add a short subject.",
    message: (v) => v.trim().length >= 10 || "Message should be at least 10 characters.",
  };

  function setFieldError(fieldName, message) {
    const input = form.elements[fieldName];
    const errorEl = document.getElementById(`${fieldName}Error`);
    const field = input.closest(".form-field");
    if (message) {
      field.classList.add("has-error");
      errorEl.textContent = message;
    } else {
      field.classList.remove("has-error");
      errorEl.textContent = "";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    Object.keys(validators).forEach((fieldName) => {
      const value = form.elements[fieldName].value;
      const result = validators[fieldName](value);
      if (result !== true) {
        setFieldError(fieldName, result);
        isValid = false;
      } else {
        setFieldError(fieldName, "");
      }
    });

    if (!isValid) {
      formStatus.textContent = "Please fix the highlighted fields.";
      formStatus.className = "form-status is-error";
      return;
    }

    // No backend wired up — simulate a successful send.
    formStatus.textContent = "Message sent! I'll get back to you soon.";
    formStatus.className = "form-status is-success";
    form.reset();
  });

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      if (validators[input.name]) setFieldError(input.name, "");
    });
  });

  /* ---------------- Topology canvas (signature ambient background) ---------------- */
  const canvas = document.getElementById("topoCanvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let width, height, nodes;

    function resize() {
      const hero = canvas.parentElement;
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
      const count = Math.max(18, Math.min(46, Math.floor((width * height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      const maxDist = Math.min(width, height) * 0.16;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.16 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
  }
})();
