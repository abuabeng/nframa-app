# Nframa — Prototype Web App

Ghana's shared commute network. Built with Next.js, deployable to Vercel in under 2 minutes.

---

## 🚀 Deploy to Vercel (fastest path)

### Option A — Vercel CLI (recommended)
```bash
# 1. Install dependencies
npm install

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
vercel

# Follow the prompts — accept all defaults.
# Your live URL appears in ~60 seconds.
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — no configuration needed
5. Done. Vercel auto-detects Next.js.

### Option C — Netlify
```bash
npm run build
# Then drag the `out/` folder to netlify.com/drop
```

---

## 🛠 Local development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project structure

```
nframa/
├── pages/
│   ├── _app.js          # Global CSS loader
│   ├── _document.js     # HTML head (viewport, title, favicon)
│   └── index.js         # Main prototype page
├── styles/
│   └── globals.css      # All prototype CSS
├── lib/
│   ├── prototype.js     # Extracted JS (reference copy)
│   └── body.html        # Extracted HTML (reference copy)
├── public/
│   └── favicon.svg      # Nframa icon
├── next.config.js       # Static export config
├── vercel.json          # Vercel deployment config
└── package.json
```

---

## 🔑 Key prototype flows

| Role | Entry | Shortcut |
|---|---|---|
| Rider | Get started → Phone → OTP → Rider | Splash → Get started |
| Car Owner | Get started → Phone → OTP → Car Owner | Same splash |
| HR Admin | Get started → Phone → OTP → HR / Corporate Admin | Same splash |
| Parent/Guardian | Get started → Phone → OTP → Parent / Guardian | Same splash |

**Demo OTP code:** `4827` (pre-filled)  
**Corporate code:** `GHL-2025` (in corp-link screen)

---

## 🌐 Custom domain (optional)

After deploying to Vercel:
1. Go to your project → Settings → Domains
2. Add `nframa.app` or `nframa.com.gh`
3. Follow the DNS instructions (takes ~10 minutes)

Domain registration:
- `nframa.app` — ~$14/year on Google Domains or Namecheap
- `nframa.com.gh` — ~₵150/year from a Ghana registrar

---

## 📝 Notes

- This is a **static export** — no server needed, works on any CDN
- The app is a single-page prototype with all screens in one component
- All navigation is client-side JS (no page reloads)
- Works fully offline once loaded (cached by the browser)
- To update: edit `pages/index.js`, rebuild, redeploy
