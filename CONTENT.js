/**
 * ╔══════════════════════════════════════════════╗
 * ║   SOUMIK ADHIKARY — PORTFOLIO CONTENT FILE   ║
 * ║                                              ║
 * ║  Edit ONLY this file to update the site.     ║
 * ║  No HTML/CSS knowledge needed.               ║
 * ╚══════════════════════════════════════════════╝
 *
 * HOW TO ADD / EDIT / DELETE CONTENT:
 *  - Shaders: add/remove objects in SHADERS array
 *  - Tools: add/remove in TOOLS array
 *  - CGI: add/remove in CGI array
 *  - Experience: add/remove in EXPERIENCE array
 *  - Blog: add/remove in BLOG array
 *  - Marketplace: add/remove in MARKETPLACE array
 *  - Contact links: edit CONTACT object
 *  - Music: edit MUSIC.src to point to your file
 */

const CONTENT = {

  /* ── HERO ─────────────────────────────────────────── */
  hero: {
    name: "Soumik Adhikary",
    roles: ["Technical Artist", "Shader Developer", "Tool Builder", "CGI Artist"],
    tagline: "I build the invisible layer between artists and engineers.",
    sub: "URP shaders · Editor tooling · VFX pipelines · CGI renders",
    location: "Pune, India",
    available: true,            // shows green dot + "Open to work"
    showReel: "",               // optional: path to a video file e.g. "assets/reel.mp4"
  },

  /* ── MUSIC ────────────────────────────────────────── */
  music: {
    src: "assets/theme.mp3",    // put your MP3 here. Leave "" to disable.
    label: "Ambient",
  },

  /* ── SHADERS & PARTICLES ──────────────────────────────
   *  preview options (checked in this order):
   *    video:   "assets/video/toon.mp4"   ← self-hosted looping clip (BEST for shaders/VFX)
   *    youtube: "dQw4w9WgXcQ"              ← YouTube ID, opens full breakdown in lightbox
   *    preview: "assets/img/shader.jpg"    ← static image
   *    preview: "webgl:toon"               ← built-in live WebGL (toon|stencil|particles|highlight)
   *  Set the ones you want; leave the rest as "". Video/poster are used in the grid,
   *  youtube is the "Watch breakdown" button.
   */
  shaders: [
    {
      id: "toon",
      title: "URP Toon Shader",
      category: "URP",          // used for filter: URP | VFX | ShaderGraph | HLSL
      tags: ["HLSL", "URP", "MatCap", "ShaderGUI"],
      desc: "Cel shading via MatCap UV lookup. Inverted-hull geometry outline pass. Explicit URP shadow caster. Custom ShaderGUI inspector.",
      video: "",                // e.g. "assets/video/toon.mp4"
      poster: "",               // e.g. "assets/img/toon-poster.jpg" (shows before video loads)
      youtube: "",              // e.g. "dQw4w9WgXcQ" — full breakdown
      preview: "webgl:toon",    // fallback if no video/image
      link: "",
      featured: true,
    },
    {
      id: "stencil",
      title: "Stencil X-Ray FX",
      category: "URP",
      tags: ["Stencil Buffer", "Camera Stack", "URP"],
      desc: "X-ray reveal and portal effects using the stencil buffer and a custom URP camera stack overlay.",
      video: "", poster: "", youtube: "",
      preview: "webgl:stencil",
      link: "",
      featured: false,
    },
    {
      id: "particles",
      title: "GPU Particle VFX",
      category: "VFX",
      tags: ["VFX Graph", "Render Texture", "GPU"],
      desc: "GPU-accelerated particles with render texture integration, custom sort order logic, and artist-facing SubGraph controls.",
      video: "", poster: "", youtube: "",
      preview: "webgl:particles",
      link: "",
      featured: false,
    },
    {
      id: "highlight",
      title: "Highlight Dissolve",
      category: "ShaderGraph",
      tags: ["ShaderGraph", "SpriteMaster", "Dissolve"],
      desc: "SpriteMaster-compatible highlight pass with noise-driven dissolve edge. Custom ShaderGUI with per-feature keyword toggles.",
      video: "", poster: "", youtube: "",
      preview: "webgl:highlight",
      link: "",
      featured: false,
    },
    // ── ADD MORE SHADERS HERE ──
    // {
    //   id: "myshader",
    //   title: "My New Shader",
    //   category: "HLSL",   // URP | VFX | ShaderGraph | HLSL
    //   tags: ["HLSL", "Custom"],
    //   desc: "Description here.",
    //   video: "assets/video/myshader.mp4",   // ← best for shaders/VFX
    //   poster: "assets/img/myshader.jpg",
    //   youtube: "",                          // optional breakdown video ID
    //   preview: "",
    //   link: "https://github.com/...",
    //   featured: false,
    // },
  ],

  /* ── TOOLS & EXTENSIONS ───────────────────────────── */
  tools: [
    {
      title: "UV Shell Colorizer",
      icon: "🐍",
      status: "shipped",         // shipped | wip | planned
      platform: "Blender",
      tags: ["Blender Python", "bpy RNA", "AddonPreferences"],
      desc: "Instant per-shell UV colorization. Reduces texture layout review time by giving artists immediate visual feedback on UV island distribution.",
      link: "",                  // Blender Market or GitHub link
      progress: 100,             // 0–100, shown for wip items
    },
    {
      title: "Object Scatterer",
      icon: "🌿",
      status: "shipped",
      platform: "Blender",
      tags: ["Barycentric", "Perlin Noise", "Linked Duplicates"],
      desc: "Procedural surface scattering using face-area-weighted barycentric sampling, Perlin noise displacement, and normal-aligned rotation.",
      link: "",
      progress: 100,
    },
    {
      title: "AE → Unity Keyframe Bridge",
      icon: "🎬",
      status: "shipped",
      platform: "Unity",
      tags: ["ExtendScript", "C# Unity", "JSON Pipeline"],
      desc: "Translates After Effects keyframe curves into Unity AnimationClips via JSON. Motion designers hand off directly — no re-keying.",
      link: "",
      progress: 100,
    },
    {
      title: "Custom ShaderGUI Inspector",
      icon: "🔬",
      status: "shipped",
      platform: "Unity",
      tags: ["C# Editor", "ShaderGUI", "MaterialEditor"],
      desc: "Mirrors Unity Standard shader UX — collapsible foldouts, per-feature keyword toggles — wrapping proprietary shaders for artists.",
      link: "",
      progress: 100,
    },
    {
      title: "Render Texture Compositor",
      icon: "🎛",
      status: "wip",
      platform: "Unity",
      tags: ["C#", "Render Texture", "Graph UI"],
      desc: "Node-like graph UI for setting up multi-camera render texture pipelines inside the Unity editor.",
      link: "",
      progress: 40,
    },
    {
      title: "Shader Property Documenter",
      icon: "📄",
      status: "wip",
      platform: "Unity",
      tags: ["C#", "Reflection", "Markdown"],
      desc: "Auto-generates markdown documentation from shader property tooltips and custom attributes.",
      link: "",
      progress: 25,
    },
    // ── ADD MORE TOOLS HERE ──
  ],

  /* ── CGI RENDERS & BREAKDOWNS ─────────────────────────
   *  Each card can use (checked in order): video → youtube → image → placeholder.
   *    video:   "assets/video/render.mp4"  ← looping clip in the grid
   *    youtube: "dQw4w9WgXcQ"              ← opens full breakdown in lightbox
   *    image:   "assets/img/cgi/render.jpg"
   */
  cgi: [
    // Replace with your actual renders. Use placeholder text until you have media.
    {
      title: "Toon Shader Breakdown",
      category: "Breakdown",    // Breakdown | Environment | Character | FX
      tags: ["URP", "HLSL", "Cel Shading"],
      video: "", youtube: "", image: "",
      desc: "Full technical breakdown of the URP toon shader — MatCap setup, outline pass, inspector.",
      link: "",
    },
    {
      title: "VFX Particle System",
      category: "FX",
      tags: ["VFX Graph", "GPU", "Particles"],
      video: "", youtube: "", image: "",
      desc: "GPU particle VFX breakdown — SubGraph architecture, render texture compositing.",
      link: "",
    },
    {
      title: "Environment Render",
      category: "Environment",
      tags: ["Blender", "Cycles", "Lighting"],
      video: "", youtube: "", image: "",
      desc: "Personal environment render in Blender — lighting, shading, and compositing breakdown.",
      link: "",
    },
    // ── ADD MORE CGI WORK HERE ──
    // {
    //   title: "My New Render",
    //   category: "Environment",
    //   tags: ["Blender", "EEVEE"],
    //   video: "assets/video/render1.mp4",   // ← looping clip
    //   youtube: "",                         // or a breakdown video ID
    //   image: "assets/img/cgi/render1.jpg",
    //   desc: "Short description.",
    //   link: "https://artstation.com/...",
    // },
  ],

  /* ── CAREER EXPERIENCE ────────────────────────────── */
  experience: [
    {
      role: "Associate Technical Artist",
      company: "Light & Wonder",
      location: "Pune, India",
      period: "2023 – Present",
      type: "professional",     // professional | education
      logo: "",                 // "assets/img/logos/lnw.png" — leave "" to show initials
      bullets: [
        "URP render pipeline setup, camera stack architecture, and overlay camera management",
        "Choreography systems: TransitionMB, CinemaLightEffect coroutine chains",
        "Bink video integration with coroutine-based playback and event hooks",
        "Custom ShaderGUI inspectors for SpriteMaster, Highlight, and ParticleTransparent shaders",
        "Sprite Atlas system, TextMeshPro pipeline, stencil buffer effects",
        "Shipped: Piggy Bankin' and Power of Pyramid",
      ],
      tags: ["Unity URP", "HLSL", "C#", "ShaderGraph"],
    },
    {
      role: "B.Tech — Computer Science & Engineering",
      company: "Kalyani Government Engineering College",
      location: "West Bengal, India",
      period: "2019 – 2023",
      type: "education",
      logo: "",
      bullets: [
        "CGPA: 9.04 / 10",
        "Specialised in computer graphics, real-time rendering, and simulation",
        "GATE 2024 Score: 314",
      ],
      tags: ["Computer Graphics", "Algorithms", "GATE"],
    },
    // ── ADD MORE EXPERIENCE HERE ──
  ],

  /* ── BLOG ──────────────────────────────────────────── */
  blog: [
    {
      title: "MatCap UV for Cel Shading: Why It's Better Than N·L",
      date: "Coming Soon",
      tags: ["Shaders", "URP", "HLSL"],
      excerpt: "Why a MatCap-driven UV lookup produces more artistically controllable cel bands than a raw NdotL ramp — and how CelRotation gives directors lighting control without touching a light rig.",
      readTime: "8 min",
      link: "",
      published: false,
    },
    {
      title: "Vector3 to 42 Bits: Network Compression Without Losing Your Mind",
      date: "Coming Soon",
      tags: ["Netcode", "C#", "Bit Packing"],
      excerpt: "Quantizing world-space positions into a packed ulong, XOR delta encoding, and why 14 bits per axis is the sweet spot for most multiplayer games.",
      readTime: "6 min",
      link: "",
      published: false,
    },
    {
      title: "Building a ShaderGUI That Doesn't Embarrass You",
      date: "Coming Soon",
      tags: ["Editor Tooling", "C#", "Unity"],
      excerpt: "Recreating Unity's Standard shader inspector UX — collapsible foldouts, keyword toggles, and the subtle things that make artists trust your tools.",
      readTime: "10 min",
      link: "",
      published: false,
    },
    {
      title: "Blender Python: The bpy RNA System Explained Simply",
      date: "Coming Soon",
      tags: ["Blender", "Python", "bpy"],
      excerpt: "The RNA system is why Blender addons work across major version jumps. Understanding it makes addons 10× easier to write, debug, and maintain.",
      readTime: "7 min",
      link: "",
      published: false,
    },
    // ── ADD MORE BLOG POSTS HERE ──
    // {
    //   title: "My New Article",
    //   date: "2025-08-01",
    //   tags: ["URP"],
    //   excerpt: "Short excerpt...",
    //   readTime: "5 min",
    //   link: "blog/my-new-article.html",   // link to your article page
    //   published: true,
    // },
  ],

  /* ── STACK (Software · Languages · Skills) ─────────────
   *  Icons use emoji by default. To use real logo images instead,
   *  set icon to an image path e.g. "assets/img/logos/unity.svg".
   *  Add/remove freely — the grid reflows automatically.
   */
  stack: {
    software: [
      { name: "Unity",            icon: "🎮" },
      { name: "Unreal Engine",    icon: "🔷" },
      { name: "Blender",          icon: "🟠" },
      { name: "Houdini",          icon: "🌀" },
      { name: "Substance 3D",     icon: "🎨" },
      { name: "Photoshop",        icon: "🖌" },
      { name: "After Effects",    icon: "🎬" },
      { name: "ZBrush",           icon: "🗿" },
      { name: "RenderDoc",        icon: "🔍" },
    ],
    languages: [
      { name: "C#",        icon: "#️⃣" },
      { name: "HLSL/GLSL", icon: "🟪" },
      { name: "Python",    icon: "🐍" },
      { name: "C/C++",     icon: "➕" },
      { name: "JavaScript",icon: "🟨" },
      { name: "ShaderGraph",icon: "🕸" },
    ],
    skills: [
      { name: "Shader Development",        icon: "💎" },
      { name: "VFX & Particle Systems",    icon: "✨" },
      { name: "Editor Tooling",            icon: "🔧" },
      { name: "Realtime Optimization",     icon: "⚡" },
      { name: "Render Pipelines (URP)",    icon: "🎞" },
      { name: "Procedural Content",        icon: "🧬" },
      { name: "GPU/CPU Profiling",         icon: "📊" },
      { name: "Materials & Lighting",      icon: "💡" },
      { name: "Pipeline Automation",       icon: "🔁" },
      { name: "Technical Documentation",   icon: "📄" },
    ],
  },

  /* ── MARKETPLACE ──────────────────────────────────── */
  marketplace: [
    {
      title: "UV Shell Colorizer",
      platform: "Blender Market",
      price: "Free",            // "Free" or "$X.XX"
      image: "",                // "assets/img/market/uvcolorizer.jpg"
      tags: ["Blender", "UV", "Addon"],
      desc: "Instant per-shell UV colorization for faster texture layout review. One-click operator, AddonPreferences, works on all Blender 3.x+ versions.",
      link: "",                 // your Blender Market URL
    },
    // ── ADD MORE PRODUCTS HERE ──
    // {
    //   title: "My New Product",
    //   platform: "Blender Market",
    //   price: "$9.99",
    //   image: "assets/img/market/product.jpg",
    //   tags: ["Blender", "Tool"],
    //   desc: "Description.",
    //   link: "https://blendermarket.com/...",
    // },
  ],

  /* ── CONTACT ──────────────────────────────────────── */
  contact: {
    email: "soumik@example.com",    // ← replace with your email
    links: [
      { label: "GitHub",    icon: "github",   url: "https://github.com/soumik-adhikary" },
      { label: "LinkedIn",  icon: "linkedin", url: "https://linkedin.com/in/soumik-adhikary" },
      { label: "LeetCode",  icon: "lc",       url: "https://leetcode.com/soumik-adhikary" },
      { label: "NeetCode",  icon: "nc",       url: "https://neetcode.io" },
      { label: "YouTube",   icon: "yt",       url: "https://youtube.com/@soumik-adhikary" },
    ],
    resume: "assets/Soumik_Adhikary_Resume.pdf",   // ← drop your PDF in assets/
  },

};
