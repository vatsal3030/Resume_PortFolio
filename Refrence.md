# VATSAL VADGAMA — PORTFOLIO BUILD PLAN
## Antigravity Agent Task Plan

---

## 🧠 PHASE 1: UNDERSTAND THE TASK

**Subject**: Vatsal Vadgama — CS Undergrad, Full Stack Developer, Nirma University
**Goal**: Build an Awwwards-quality 3D animated dark-mode portfolio that screams "techy"
**Delivery**: Single `index.html` file (zero-setup, open in browser, deploy anywhere)

---

## 🔍 PHASE 2: RESEARCH FINDINGS

After researching awwwards.com, dribbble, muzli, and top 2025 portfolios:

**Top Trends in 2025 Developer Portfolios:**
- Particle systems + interactive WebGL backgrounds (Three.js)
- Scroll-driven storytelling (GSAP ScrollTrigger)
- Terminal/code aesthetic windows
- Glitch text effects on hero headings
- Custom mouse cursors with magnetic effects
- Monospace + display font pairings
- Grain/noise texture overlays
- Glassmorphism cards with subtle borders

**Winning Stack for This Build:**
- Three.js (r128 via CDN) — 3D particle system + floating geometry
- GSAP 3.12 + ScrollTrigger — Scroll animations, hero reveal
- CSS Custom Properties — Consistent theming
- Google Fonts — Syne (display) + JetBrains Mono (code) + Outfit (body)

---

## 🎨 PHASE 3: DESIGN SYSTEM

**Color Palette:**
```
--bg:       #030303    (deep black)
--bg-2:     #080808    (card surfaces)
--bg-3:     #0f0f0f    (nested surfaces)
--text:     #e0e0e0    (primary text)
--text-dim: #888888    (secondary text)
--accent:   #00d4ff    (electric blue — primary)
--accent-2: #7b2fff    (neon violet — secondary)
--accent-3: #ff6b2b    (neon orange — tertiary)
--border:   rgba(255,255,255,0.06)
```

**Typography:**
```
Display:    Syne 800 — Hero headings, section titles
Mono:       JetBrains Mono — Labels, tags, terminal, nav
Body:       Outfit 300/400 — Descriptions, paragraphs
```

**Motion Principles:**
- Ease: power3.out / power4.out (snappy)
- Hero entrance: staggered reveal from bottom
- Scroll: translateY(50px) → 0, opacity 0 → 1
- Cards: translateY(-6px) on hover
- Cursor: Custom dot + lagging ring

---

## 📐 PHASE 4: SITE ARCHITECTURE

```
SECTIONS (in order):
├── Preloader          — Terminal-style code animation, progress bar
├── Navbar (fixed)     — Logo + links + "Hire Me" CTA
├── Hero               — Three.js particles + glitch name + stats
├── About              — Story text + terminal JSON window + stat cards
├── Skills             — 4-column tech arsenal with glow chips
├── Projects           — Featured card (Vixora) + 3 standard cards
├── Education          — Vertical timeline with achievements
├── Achievements       — 6-card metrics grid
├── Contact            — CTA section with email + social links
└── Footer             — Simple dark footer
```

---

## 🛠 PHASE 5: IMPLEMENTATION PLAN

### Step 1 — Base Structure ✅
- DOCTYPE, meta tags, font imports
- CSS reset and custom properties

### Step 2 — Custom Cursor ✅
- Dot (instant) + ring (lagging) cursor
- Expand on interactive elements

### Step 3 — Preloader ✅
- Logo fade-in → loading text → progress bar animation
- GSAP fade-out after 2.6s

### Step 4 — Navigation ✅
- Fixed navbar, compact on scroll
- Mobile hamburger + full-screen overlay menu

### Step 5 — Hero Section ✅
- Three.js: 2000 particles (multi-colored) + 5 floating 3D shapes
- Mouse parallax on camera
- GSAP stagger reveal for text elements
- Stats bar: CGPA, JEE %ile, Projects, LeetCode

### Step 6 — About Section ✅
- Two-column: story text + JSON terminal window
- 4-card stats grid (CGPA, JEE, LeetCode, Codeforces)

### Step 7 — Skills Section ✅
- 4 categories: Backend, Frontend, Databases, Languages+Tools
- Hover-glow chip cards

### Step 8 — Projects Section ✅
- Vixora: Featured (full-width, 2-column layout)
- Bookit, Soil Analyzer: Standard cards
- P2P Network: Horizontal strip card

### Step 9 — Education Timeline ✅
- B.Tech, Class 12, HackNUthon, MINeD, Build with India

### Step 10 — Achievements Grid ✅
- LeetCode 1624, Codeforces 1023, JEE 97.84%, Finalist, CGPA, 3× Hackathons

### Step 11 — Contact Section ✅
- Available indicator (pulsing green dot)
- Email link + LinkedIn + GitHub + Phone

### Step 12 — GSAP ScrollTrigger ✅
- All sections: fade + translateY on scroll
- Stagger for grid children

---

## 📁 OUTPUT FILES

```
portfolio/
└── index.html    ← THE COMPLETE PORTFOLIO (open directly in browser)
```

## 🚀 DEPLOYMENT OPTIONS

1. **GitHub Pages** — Push to repo → enable Pages
2. **Vercel** — Drop folder → auto-deploy
3. **Netlify** — Drag & drop `index.html` → live in 30s

---

*Plan approved. Implementing now...*