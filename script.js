/* =========================================================
   SHERWIN RAMOS — PORTFOLIO SCRIPT (v2)
   Edit the DATA section below to plug in your real projects,
   skills, and education/experience history.
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA — edit these to make the site yours
   --------------------------------------------------------- */

// level: 1-5, how many dots get filled in the Bill of Materials table
const SKILLS = [
  { name: "Java", category: "Language", level: 4 },
  { name: "PHP", category: "Language", level: 4 },
  { name: "JavaScript", category: "Language", level: 4 },
  { name: "Python", category: "Language", level: 3 },
  { name: "C#", category: "Language", level: 3 },
  { name: "SQL", category: "Language", level: 4 },
  { name: "HTML5 / CSS3", category: "Web", level: 5 },
  { name: "React", category: "Web", level: 3 },
  { name: "Node.js", category: "Web", level: 3 },
  { name: "Bootstrap", category: "Web", level: 4 },
  { name: "MySQL", category: "Database", level: 4 },
  { name: "Firebase", category: "Database", level: 3 },
  { name: "Git & GitHub", category: "Tools", level: 4 },
  { name: "Figma", category: "Tools", level: 3 },
  { name: "Android Studio", category: "Tools", level: 3 },
];

// category: "web" | "desktop" | "mobile" | "database" — used by the view filters
const PROJECTS = [
  {
    title: "Provincial Disease Reporting and Outbreak Alert System",
    category: ["web", "mobile"],
    tags: ["TypeScript", "Vue", "Laravel", "SQLite"],
    desc: "A capstone web app for monitoring disease outbreaks in Pangasinan and notifying residents when cases appear in the province.",
    github: "#",
    live: "#",
  },
  {
    title: "Membership Receiving Monitoring System",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A monitoring system for PhilHealth Region 1 that tracks daily membership transactions and helps audit staff compliance.",
    github: "#",
    live: "https://pacd-omega.vercel.app/",
  },
  {
    title: "ER2 Monitoring System",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A monitoring system similar to the PhilHealth project, built for tracking daily transaction compliance in ER2 operations.",
    github: "#",
    live: "https://er2-monitoring1.vercel.app/",
  },
];

const CERTIFICATIONS = [
  {
    title: "Master the Basics: How to Go Digital with your Imagination (WIX: Website Design and Building training)",
    date: "May 2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT training on website design and building using Wix, focused on bringing imaginative website ideas to life.",
    image: "asset/1.png",
  },
  {
    title: "Robotics Training Using Arduino",
    date: "September 2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT seminar introducing robotics fundamentals using Arduino hardware and programming.",
    image: "asset/2.png",
  },
  {
    title: "DICT-WD001 Principles of Web Development and Introduction to HTML",
    date: "2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT certification covering web development principles and the basics of HTML.",
    image: "asset/3.png",
  },
  {
    title: "WD002 Using HTML and CSS to Design a Website",
    date: "2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT certification on using HTML and CSS to create responsive website layouts.",
    image: "asset/4.png",
  },
  {
    title: "WD003 Basic JavaScript for Web Development",
    date: "2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT certification teaching basic JavaScript concepts for interactive web pages.",
    image: "asset/5.png",
  },
  {
    title: "WD004 Project 1: Developing a Static Website",
    date: "2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT project-based certification focused on building a static website from scratch.",
    image: "asset/6.png",
  },
  {
    title: "DICT-ICT 014: Basic Level of Cloud Computing",
    date: "2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT certification on cloud computing fundamentals and basic cloud services.",
    image: "asset/7.png",
  },
  {
    title: "Cybersecurity is for Everyone",
    date: "April 2024",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT seminar introducing the basics of cybersecurity for individuals and organizations.",
    image: "asset/8.png",
  },
  {
    title: "Unleash Your Imagination: Canva and CapCut Magic",
    date: "August 2023",
    issuer: "DICT",
    category: "DICT",
    desc: "A DICT training on using Canva and CapCut for creative design and video editing.",
    image: "asset/9.png",
  },
  {
    title: "Computer Hardware Basic Course",
    date: "January 2026",
    issuer: "Cisco",
    category: "Cisco",
    desc: "A Cisco certification covering fundamental computer hardware concepts and system components.",
    image: "asset/10.png",
  },
  {
    title: "Operating Systems Basic Course",
    date: "January 7, 2026",
    issuer: "Cisco",
    category: "Cisco",
    desc: "A Cisco certification introducing basic operating system principles and usage.",
    image: "asset/11.png",
  },
];

// Showcase images — images you uploaded in the `showcase` folder (a1..a10)
const SHOWCASE = [
  "showcase/a1.jpg",
  "showcase/a2.jpg",
  "showcase/a3.jpg",
  "showcase/a4.jpg",
  "showcase/a5.png",
  "showcase/a6.jpg",
  "showcase/a7.jpg",
  "showcase/a8.jpg",
  "showcase/a9.jpg",
  "showcase/a10.jpg",
];


// Listed most-recent first — rev numbers are assigned automatically below
const LOG = [
  {
    date: "2026",
    title: "BS Information Technology, Graduate",
    org: "Pangasinan State University — Lingayen Campus",
    desc: "Focused on web and mobile systems development; completed a capstone project KabuteSenso: Smart Mushroom Cultivation.",
  },
  {
    date: "2026",
    title: "On-the-Job Training — System Developer",
    org: "PhilHealth Regional Office 1, Dagupan City",
    desc: "Developed a web-based membership receiving monitoring system to track daily transactions and compliance. and ER2 Monitoring System to track daily transaction compliance in ER2 operations.",
  },
  {
    date: "2018",
    title: "Senior High School, TVL — ICT Strand",
    org: "Pangasinan National High School, Lingayen",
    desc: "Finished and obtained NC2 Computer Systems Servicing.",
  },
];

/* ---------------------------------------------------------
   2. RENDER — turns the data above into HTML
   --------------------------------------------------------- */

function renderBom() {
  const body = document.getElementById("bomBody");
  body.innerHTML = SKILLS.map((s) => {
    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="bom__dot" data-filled="${i < s.level}"></span>`
    ).join("");
    return `
    <div class="bom__row">
      <span class="bom__item">${s.name}</span>
      <span class="bom__cat">${s.category}</span>
      <span class="bom__level">${dots}</span>
    </div>`;
  }).join("");
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map((p, i) => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    const hidden =
      filter !== "all" && !categories.includes(filter) ? "is-hidden" : "";
    const plateId = `A-03.${String(i + 1).padStart(2, "0")}`;
    const categoryLabel = categories.join(" / ");
    const dataCategory = categories.join(" ");
    return `
    <article class="plate ${hidden}" data-category="${dataCategory}">
      <span class="plate__fold" aria-hidden="true"></span>
      <span class="plate__id">${plateId}</span>
      <h3 class="plate__title">${p.title}</h3>
      <div class="plate__divider"><span>${categoryLabel}</span></div>
      <p class="plate__desc">${p.desc}</p>
      <div class="plate__tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="plate__links">
        <a class="plate__link" href="${p.github}" target="_blank" rel="noopener">GitHub <span class="plate__link-arrow">&#8599;</span></a>
        <a class="plate__link" href="${p.live}" target="_blank" rel="noopener">Live demo <span class="plate__link-arrow">&#8599;</span></a>
      </div>
    </article>`;
  }).join("");
}

function renderCertifications() {
  const grid = document.getElementById("certificationsGrid");
  grid.innerHTML = CERTIFICATIONS.map((cert, i) => {
    const plateId = `A-04.${String(i + 1).padStart(2, "0")}`;
    return `
    <article class="plate">
      <span class="plate__fold" aria-hidden="true"></span>
      <span class="plate__id">${plateId}</span>
      <h3 class="plate__title">${cert.title}</h3>
      <div class="plate__divider"><span>${cert.issuer} — ${cert.date}</span></div>
      <p class="plate__desc">${cert.desc}</p>
      <div class="plate__tags">
        <span class="tag">Certification</span>
        <span class="tag">Seminar/Webinar</span>
      </div>
      <div class="plate__links">
        <a class="plate__link cert-detail" href="#" data-image="${cert.image}" data-title="${cert.title}" data-issuer="${cert.issuer}" data-date="${cert.date}">View details <span class="plate__link-arrow">&#8599;</span></a>
      </div>
    </article>`;
  }).join("");
}

function renderShowcase() {
  const track = document.getElementById('showcaseTrack');
  if (!track) return;
  if (!Array.isArray(SHOWCASE) || SHOWCASE.length === 0) {
    track.innerHTML = `<div class="showcase__slide"><p class="sheet__note">No showcase images defined. Edit the SHOWCASE array in script.js to add image paths.</p></div>`;
    return;
  }
  track.innerHTML = SHOWCASE.map((src, i) => `
    <div class="showcase__slide" data-index="${i}">
      <img src="${src}" alt="Showcase ${i + 1}" />
    </div>
  `).join('');

  // set track width and slide widths so translation math is consistent
  const slides = Array.from(track.querySelectorAll('.showcase__slide'));
  const count = slides.length;
  track.style.width = `${count * 100}%`;
  slides.forEach((s) => { s.style.flex = `0 0 ${100 / count}%`; });

  // simple auto-advance
  let index = 0;
  function show(i) {
    const percent = (i * 100) / count;
    track.style.transform = `translateX(-${percent}%)`;
  }
  function next() {
    index = (index + 1) % count;
    show(index);
  }
  function prev() {
    index = (index - 1 + count) % count;
    show(index);
  }
  const nextBtn = document.getElementById('showcaseNext');
  const prevBtn = document.getElementById('showcasePrev');
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetTimer(); });

  let timer = setInterval(next, 4000);
  function resetTimer() { clearInterval(timer); timer = setInterval(next, 4000); }
}

function openCertificationModal(event) {
  event.preventDefault();
  const trigger = event.currentTarget;
  const imageSrc = trigger.dataset.image;
  const title = trigger.dataset.title;
  const issuer = trigger.dataset.issuer;
  const date = trigger.dataset.date;
  const modal = document.getElementById("certModal");
  const modalImage = document.getElementById("certModalImage");
  const caption = document.getElementById("certModalCaption");
  const modalTitle = document.getElementById("certModalTitle");
  modalImage.src = imageSrc;
  modalImage.alt = `${title} certificate`;
  caption.textContent = `${issuer} — ${date}`;
  modalTitle.textContent = title;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeCertificationModal() {
  const modal = document.getElementById("certModal");
  const modalImage = document.getElementById("certModalImage");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

function setupCertificationModal() {
  const closeBtn = document.getElementById("certModalClose");
  const modal = document.getElementById("certModal");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", closeCertificationModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeCertificationModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeCertificationModal();
    });
  }
  document.querySelectorAll(".cert-detail").forEach((link) => {
    link.addEventListener("click", openCertificationModal);
  });
}

function renderLog() {
  const list = document.getElementById("logList");
  const total = LOG.length;
  list.innerHTML = LOG.map((entry, i) => {
    const revNumber = String(total - i).padStart(2, "0");
    return `
    <div class="revtable__row">
      <span class="rev__num">R${revNumber}</span>
      <span class="rev__date">${entry.date}</span>
      <div>
        <p class="rev__title">${entry.title}</p>
        <p class="rev__org">${entry.org}</p>
        <p class="rev__desc">${entry.desc}</p>
      </div>
    </div>`;
  }).join("");
}

/* ---------------------------------------------------------
   3. INTERACTIONS
   --------------------------------------------------------- */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const _urlParams = new URLSearchParams(window.location.search);
const forceAnimate = _urlParams.get('anim') === '1' || _urlParams.get('anim') === 'true';
if (forceAnimate) console.info('Animations forced via URL param `?anim=1`');
// Auto-enable animations for all visitors (override system reduced-motion)
const savedAllow = localStorage.getItem('allowAnimations') === '1' || true;
if (savedAllow) {
  localStorage.setItem('allowAnimations', '1');
  console.info('Animations auto-enabled (override)');
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".sheet-tab").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Active tab highlight on scroll
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".sheet-tab");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

// Reveal-on-scroll (also fills BOM dots and draws dimension lines when visible)
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

function observeReveals() {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
    } else {
      revealObserver.observe(el);
    }
  });
}

// Fill BOM dots with a small stagger once the table scrolls into view
function animateBomDots() {
  const dots = document.querySelectorAll(".bom__dot");
  const dotObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = prefersReducedMotion ? 0 : Math.random() * 300;
          setTimeout(() => {
            if (el.dataset.filled === "true") el.classList.add("is-filled");
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  dots.forEach((dot) => dotObserver.observe(dot));
}

// Project filters
const filterButtons = document.querySelectorAll(".view-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});

// Copy email to clipboard
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = original), 1800);
    } catch (err) {
      btn.textContent = "Copy failed";
    }
  });
});

// Contact form validation (front-end only — connect to a backend or form service later)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function validateField(input, validator) {
  const field = input.closest(".field");
  const valid = validator(input.value.trim());
  field.classList.toggle("has-error", !valid);
  return valid;
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("fieldName");
  const email = document.getElementById("fieldEmail");
  const message = document.getElementById("fieldMessage");

  const nameValid = validateField(name, (v) => v.length > 1);
  const emailValid = validateField(email, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const messageValid = validateField(message, (v) => v.length > 5);

  if (!(nameValid && emailValid && messageValid)) {
    formStatus.textContent = "Please fix the highlighted fields above.";
    return;
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const hook = "https://discord.com/api/webhooks/1523221436943306923/nfyl00TdzhgZdNXZvQvcIVPGN9_zIJA0o4j-mQMeES7AfJMJEjrBA1UF28FsOU-ZMU_5";

  const payload = {
    content: `New contact request from the portfolio site:\nName: ${name.value.trim()}\nEmail: ${email.value.trim()}\nMessage: ${message.value.trim()}`,
  };

  try {
    submitBtn.disabled = true;
    formStatus.textContent = "Sending message...";

    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      formStatus.textContent = `Thanks, ${name.value.trim()} — your request was delivered.`;
      contactForm.reset();
    } else {
      formStatus.textContent = "Unable to send message directly from the browser (server responded with an error). Check console for details.";
      console.error("Discord webhook error", res.status, await res.text());
    }
  } catch (err) {
    // Most likely a CORS/network issue when calling Discord from the browser.
    formStatus.textContent = "Could not send message from the browser (CORS or network error). See console for details. Consider using a small server or serverless function to forward the form to Discord.";
    console.error("Webhook request failed:", err);
  } finally {
    submitBtn.disabled = false;
  }
});

// Back to top (guard when footer/button removed)
const toTopBtn = document.getElementById("toTop");
if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

// Footer year (guard if footer removed)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Crosshair cursor accent (desktop only, purely cosmetic)
const crosshair = document.getElementById("crosshair");
window.addEventListener("mousemove", (e) => {
  crosshair.style.left = `${e.clientX}px`;
  crosshair.style.top = `${e.clientY}px`;
});

/* ---------------------------------------------------------
   4. HERO — self-drawing schematic + dimension line
   --------------------------------------------------------- */

function drawSvgOnLoad() {
  const paths = document.querySelectorAll("#drawingSvg .draw-path");
  if (prefersReducedMotion) return;

  paths.forEach((path, i) => {
    let length = 40;
    try {
      length = path.getTotalLength ? path.getTotalLength() : 40;
    } catch (err) {
      length = 40;
    }
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = `stroke-dashoffset 0.9s ${i * 0.12}s ease-out`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = "0";
      });
    });
  });
}

function drawDimline() {
  const bars = document.querySelectorAll(".dimline__bar");
  if (prefersReducedMotion) return;
  bars.forEach((bar) => {
    bar.style.transform = "scaleX(0)";
    bar.style.transition = "transform 0.6s 0.4s ease-out";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transform = "scaleX(1)";
      });
    });
  });
}

/* ---------------------------------------------------------
   5. INIT
   --------------------------------------------------------- */

renderBom();
renderProjects();
renderShowcase();
renderCertifications();
setupCertificationModal();
renderLog();
observeReveals();
animateBomDots();
drawSvgOnLoad();
drawDimline();

// Trigger page-level entrance animations automatically
const shouldAnimate = !prefersReducedMotion || forceAnimate || savedAllow;
if (shouldAnimate) {
  setTimeout(() => document.body.classList.add('page-animated'), 600);
}

// Typing animation for cover name (loop: type -> pause -> erase -> repeat)
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
let _typingStarted = false;
async function loopTypeCoverName() {
  const el = document.getElementById('typingText');
  const text = "Hi I'm Sherwin T. Ramos";
  if (!el) return;
  if (_typingStarted) return;
  _typingStarted = true;

  // Respect OS reduced-motion unless explicitly overridden by URL or localStorage
  if (prefersReducedMotion && !forceAnimate && !savedAllow) {
    el.textContent = text;
    return;
  }

  const typeDelay = 80; // ms per char when typing
  const backDelay = 40; // ms per char when erasing
  const pauseAfter = 1200; // pause after full text typed

  while (true) {
    el.textContent = '';
    for (let i = 0; i < text.length; i++) {
      el.textContent += text[i];
      await sleep(typeDelay);
    }
    await sleep(pauseAfter);

    for (let i = text.length; i > 0; i--) {
      el.textContent = el.textContent.slice(0, i - 1);
      await sleep(backDelay);
    }
    await sleep(400);
  }
}

// start looping typing shortly after page animations begin
setTimeout(() => {
  loopTypeCoverName();
}, 900);
