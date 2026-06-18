# Soumik Adhikary — Portfolio v3

Single-page portfolio with dark/light/system theme, ambient music, filterable sections, lightbox, and a single content file for all updates.

---

## 🗂 File Structure

```
portfolio-v2/
├── index.html        ← The website (don't need to edit this)
├── CONTENT.js        ← ALL your content lives here ← EDIT THIS
├── vercel.json       ← Security headers + routing
├── README.md
└── assets/
    ├── theme.mp3     ← Drop your ambient music here
    ├── Soumik_Adhikary_Resume.pdf
    ├── img/
    │   ├── shaders/  ← Shader preview images (optional, WebGL built-in)
    │   ├── cgi/      ← CGI render images
    │   ├── market/   ← Marketplace product thumbnails
    │   └── logos/    ← Company logos for experience section
```

---

## ✏️ How to Edit Content

**Open `CONTENT.js` in any text editor. That's the only file you'll ever need to change.**

### Add a new shader
```js
// In CONTENT.shaders array, add:
{
  id: "myshader",
  title: "My New Shader",
  category: "HLSL",       // URP | VFX | ShaderGraph | HLSL
  tags: ["HLSL", "Custom"],
  desc: "What it does.",
  preview: "assets/img/shaders/myshader.jpg",  // or "webgl:toon" for built-in
  link: "https://github.com/...",
  featured: false,
},
```

### Add a CGI render
```js
// In CONTENT.cgi array, add:
{
  title: "My Environment",
  category: "Environment",   // Breakdown | Environment | Character | FX
  tags: ["Blender", "Cycles"],
  image: "assets/img/cgi/env.jpg",
  desc: "Short description.",
  link: "",
},
```

### Add a blog post
```js
// In CONTENT.blog array, add:
{
  title: "My Article Title",
  date: "2025-09-01",
  tags: ["Shaders", "URP"],
  excerpt: "Short excerpt shown on card.",
  readTime: "5 min",
  link: "blog/my-article.html",  // link to your article
  published: true,               // false = shows "Coming soon"
},
```

### Add a marketplace product
```js
// In CONTENT.marketplace array, add:
{
  title: "My Tool",
  platform: "Blender Market",
  price: "$9.99",
  image: "assets/img/market/tool.jpg",
  tags: ["Blender", "Addon"],
  desc: "What it does.",
  link: "https://blendermarket.com/...",
},
```

### Change contact info
```js
// In CONTENT.contact:
email: "your@real-email.com",
resume: "assets/Your_Resume.pdf",
links: [
  { label: "GitHub", icon: "github", url: "https://github.com/YOUR_USERNAME" },
  // add or remove links here
],
```

### Add theme music
1. Drop an MP3 file into `assets/` folder, name it `theme.mp3`
2. In `CONTENT.music`: `src: "assets/theme.mp3"`
3. The music icon (♪) in the nav will activate it

### Add video previews for shaders / CGI (recommended over images)
Each shader and CGI entry supports three media types, checked in priority order:

```js
// In a shader or cgi entry:
video:   "assets/video/toon.mp4",   // looping muted clip shown in the grid — BEST for shaders/VFX
poster:  "assets/img/toon.jpg",     // still shown before video loads (shaders only)
youtube: "dQw4w9WgXcQ",             // YouTube ID — opens full breakdown in lightbox on click
```

- **Self-hosted video** (`video`) — drop an MP4 into `assets/video/`. Keep clips short (5–10s), compressed (~1Mbps, 720–1080p) so the page stays fast. Autoplays muted and loops in the grid.
- **YouTube** (`youtube`) — just the video ID from the URL (`youtube.com/watch?v=XXXX` → `XXXX`). Shows the thumbnail with a play button; clicking opens the video in the lightbox. Zero bandwidth cost to you. Good for narrated breakdowns.
- If both are set, `video` is used for the grid loop and `youtube` for the click-through.

### Edit the Stack section (Software / Languages / Skills)
```js
// In CONTENT.stack — add/remove freely:
software: [
  { name: "Unity", icon: "🎮" },
  // For a real logo instead of emoji:
  { name: "Unity", icon: "assets/img/logos/unity.svg" },
],
```
The grids reflow automatically. Icons can be emoji or image paths.

### Highlighted sections
Marketplace and Contact are visually emphasised with a glow frame and accent badge — no config needed. The first marketplace product automatically gets a "featured" glow border.

---

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "portfolio v3"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import repo → Deploy
# Live in ~30 seconds
```

**To update later:** edit `CONTENT.js` → save → commit → push. Vercel auto-redeploys.

---

## 🎨 Themes

- **Dark** (default) — deep dark with acid-lime accent
- **Light** — clean white
- **System** — follows your OS setting

Toggle with the 🌙 button in the nav. Your choice is saved across sessions.

---

## 🔒 Security

The `vercel.json` sets these headers on every response:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Strict-Transport-Security` — forces HTTPS
- `Content-Security-Policy` — restricts what scripts/styles can load
- `Permissions-Policy` — disables camera, microphone, geolocation

No external tracking, no ads, no third-party scripts except Google Fonts.
