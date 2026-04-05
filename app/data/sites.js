// ── SITE DATA ─────────────────────────────────────────────────────
export const SITES = [
  { name: 'Material UI', desc: "A comprehensive React component library implementing Google's Material Design visual language. Features robust components with seamless interactions and a clean, adaptable layout system.", url: 'https://material-ui-16-fe.vercel.app/', col: 'dblue', rot: -4 },
  { name: 'Cybercore', desc: 'A futuristic cyberpunk-themed web interface featuring an interactive 3D robot with mouse tracking capabilities. Showcases a Neural Link prototype system with real-time visual tracking, glowing neon elements, and a 3D environment with particle effects.', url: 'https://cybercore-fe.vercel.app/', col: 'ink', rot: 3 },
  { name: 'Lumina UI', desc: 'A Material You Experience — A modern, interactive frontend showcasing depth in motion with advanced UI animations. Features a dynamic theme system, glassmorphism effects, magnetic buttons, and a draggable 3D artifact with real-time physics.', url: 'https://lumina-ui-fe.vercel.app/', col: 'gold', rot: -6 },
  { name: '404 War', desc: 'An intense, war-themed custom 404 error page. Features dramatic atmospheric effects and immersive visuals designed to turn a simple broken link into a cinematic and highly aesthetic experience.', url: 'https://404-war-theme.vercel.app/', col: 'burg', rot: 5 },
  { name: 'Brutalism', desc: 'A bold Brutalist React interface that intentionally breaks conventional design patterns. Features sharp edges, glitch animations, aggressive box-shadows, and high-contrast typography to create a raw, deconstructed aesthetic.', url: 'https://deconstruction-brutalism-ui.vercel.app/', col: 'moss', rot: -3 },
  { name: 'Aura UI', desc: 'Where Technology Disappears. A meticulously crafted design system prioritizing elegance and seamless user experiences. Features warm, muted tones, thoughtful typography combining Crimson Pro and Manrope, and atmospheric dust and light effects.', url: 'https://aura-ui-wine.vercel.app/', col: 'tc', rot: 4 },
  { name: 'Frame Buffer', desc: 'Build New Worlds. A retro-pixel-art themed landing page for a lightweight 2D web game engine. Emphasizes performance and nostalgic 8-bit aesthetics, featuring custom glitch effects, CRT scanlines, and mouse-tracked floating pixel animations.', url: 'https://frame-buffer-ui.vercel.app/', col: 'sage', rot: -2 },
  { name: 'Particle Physics', desc: 'Neural Reactor V4.0. A browser-based particle physics simulation styled as a sci-fi reactor control interface. Features real-time matter/antimatter dynamics, kinetic shockwaves, and a fully animated 3D parallax HUD with a CRT scanline overlay.', descShort: 'particle interactions', url: 'https://particle-physics-ui.vercel.app/', col: 'dblue', rot: 3 },
  { name: 'Teracotta UI', desc: 'Sound from the Earth. A premium single-page UI for a fictional high-end ceramic speaker brand. Grounded in material honesty, it features an animated wave canvas, an interactive frequency visualizer, and a brutalist grid layout over a tactile grain texture.', url: 'https://teracotta-ui.vercel.app/', col: 'tc', rot: -5 },
  { name: 'Wabi Sabi UI', desc: 'The Art of Imperfection. A meditative frontend experience inspired by the Japanese philosophy of wabi-sabi. Features a washi-paper palette, a canvas-based sumi-e ink cursor, hand-drawn UI elements, and a Kintsugi gallery where fractured lines mend with gold.', url: 'https://wabi-sabi-ui.vercel.app/', col: 'sage', rot: 2 },
  { name: 'Sakura UI', desc: 'Interactive Digital Garden. An elegant WebGL experience featuring an interactive sakura tree with dynamic wind effects and falling petals. Combines Japanese minimalist design with procedural fractal tree generation and fluid particle shaders.', url: 'https://sakura-interactive-ui.vercel.app/', col: 'burg', rot: -4 },
  { name: 'Deep Ocean UI', desc: 'Abyssal ROV Interface. A sophisticated deep-sea research HUD featuring real-time environmental telemetry, sonar mapping, and pressure-resistant sub-systems. Showcases bioluminescent visual feedback, fluid UI transitions, and a tactile marine-grade command center.', url: 'https://deep-ocean-ui.vercel.app/', col: 'dblue', rot: 6 },
  { name: 'Japan UI', desc: 'A professional Japanese-inspired interface blending traditional aesthetics with modern web design. Features elegant typography, refined layouts, and a serene visual language rooted in Japanese design principles.', url: 'https://professional-japan-ui.vercel.app/', col: 'sage', rot: -3 },
];

export const PAL = {
  dblue: { b: '#5e7896', bg: '#eef1f6', hv: 'rgba(94,120,150,0.08)', tx: '#3d5a78' },
  ink: { b: '#3a3028', bg: '#edeae4', hv: 'rgba(58,48,40,0.08)', tx: '#1c1712' },
  gold: { b: '#b8963c', bg: '#faf5e8', hv: 'rgba(184,150,60,0.08)', tx: '#7a6020' },
  burg: { b: '#7a3535', bg: '#f5eded', hv: 'rgba(122,53,53,0.08)', tx: '#5a2020' },
  moss: { b: '#4e6652', bg: '#edf2ee', hv: 'rgba(78,102,82,0.08)', tx: '#334836' },
  tc: { b: '#b8623e', bg: '#faf0ea', hv: 'rgba(184,98,62,0.08)', tx: '#7a3820' },
  sage: { b: '#6e8060', bg: '#f2f4f0', hv: 'rgba(110,128,96,0.08)', tx: '#3d4a35' },
};

// Spread positions (fraction of viewport)
export const POS = [
  { x: 0.07, y: 0.18 },
  { x: 0.70, y: 0.10 },
  { x: 0.80, y: 0.52 },
  { x: 0.60, y: 0.76 },
  { x: 0.06, y: 0.63 },
  { x: 0.38, y: 0.12 },
  { x: 0.25, y: 0.40 },
  { x: 0.35, y: 0.80 },
  { x: 0.52, y: 0.45 },
  { x: 0.75, y: 0.30 },
  { x: 0.15, y: 0.80 },
  { x: 0.85, y: 0.75 },
  { x: 0.45, y: 0.25 },
];

export const FLOAT_ANIMS = ['fa', 'fb', 'fc', 'fd'];
