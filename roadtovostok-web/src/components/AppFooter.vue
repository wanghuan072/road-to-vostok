<template>
  <footer class="app-footer" role="contentinfo">
    <div class="container">
      <div class="app-footer-content">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img
              class="footer-logo"
              :src="brandLogoSrc"
              width="36"
              height="36"
              alt=""
              loading="lazy"
              decoding="async"
            >
            <p class="footer-title">Road To Vostok</p>
          </div>
          <p class="footer-tagline">
            Reference notes for loadouts, loot, maps, and routes across Area 05, the Border Zone, and
            Vostok.
          </p>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          <a v-for="item in quick" :key="item.to" :href="item.to" class="footer-link">
            {{ item.label }}
          </a>
        </nav>
        <nav class="footer-legal" aria-label="Site and legal">
          <a v-for="item in legal" :key="item.to" :href="item.to" class="footer-legal-link">
            {{ item.label }}
          </a>
        </nav>
        <p class="footer-meta">
          Not affiliated with the official Road To Vostok game or its developer. Game © respective
          rights holders. Guides reflect community knowledge and may change with updates and the
          public
          <a href="/dev-updates">Road ahead &amp; roadmap digest</a>
          .
        </p>
        <p class="footer-copy">© {{ year }} Road To Vostok Guide — Survival FPS wiki &amp; task help.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const brandLogoSrc = '/images/logo.webp'

const quick = [
  { label: 'Start here', to: '/getting-started' },
  { label: 'Wiki', to: '/wiki' },
  { label: 'Map', to: '/map' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Guides', to: '/guides' },
  { label: 'Road ahead', to: '/dev-updates' },
  { label: 'Mods', to: '/mods' },
]

const legal = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms-of-service' },
  { label: 'Copyright', to: '/copyright' },
]
</script>

<style scoped>
.app-footer {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 2.5rem 0 2rem;
  border-top: 1px solid var(--color-border);
  background: linear-gradient(180deg, var(--color-panel) 0%, var(--color-surface) 45%);
  box-shadow: 0 -24px 48px rgba(0, 0, 0, 0.25);
}

.app-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-ice-dim),
    var(--color-signal),
    var(--color-ice-dim),
    transparent
  );
  background-size: 200% 100%;
  animation: footer-glow 8s linear infinite;
  opacity: 0.65;
}

@keyframes footer-glow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-footer::before {
    animation: none;
    background-size: 100% 100%;
  }
}

.app-footer-content {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.footer-brand-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
  background: color-mix(in srgb, var(--color-panel) 65%, transparent);
}

.footer-title {
  font-family: var(--font-display);
  font-size: 1rem;
  margin: 0 0 0.35em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
}

.footer-tagline {
  margin: 0;
  max-width: 52ch;
  color: var(--color-muted);
  font-size: 0.9rem;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
}

.footer-link {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-signal-soft);
}

.footer-legal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1rem;
  padding: 0.65rem 0 0;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
}

.footer-legal-link {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-text));
  transition: color 0.2s ease;
}

.footer-legal-link:hover {
  color: var(--color-primary-soft);
}

.footer-meta,
.footer-copy {
  margin: 0;
  font-size: 0.78rem;
  color: var(--color-muted);
  max-width: 70ch;
  line-height: 1.55;
}

.footer-copy {
  padding-top: 0.65rem;
  border-top: 1px solid var(--color-border);
  color: color-mix(in srgb, var(--color-muted) 85%, var(--color-text));
}
</style>
