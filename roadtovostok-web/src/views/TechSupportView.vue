<template>
  <article class="tech-support-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <p class="hero-kicker">Steam demo · download · backup save</p>
          <h1>Road To Vostok — tech support (PC)</h1>
          <p class="hero-lead">
            Steam demo install, backup saves, and quick stability tips. Paths match the usual Godot userdata
            layout players report — if a patch moves folders, search your drive for “Road to Vostok” or check
            the latest Steam thread.
          </p>
          <nav class="hero-jump" aria-label="On this page">
            <button type="button" class="hero-jump-btn" @click="jump('steam-demo')">Steam demo</button>
            <button type="button" class="hero-jump-btn" @click="jump('backup-save')">Backup save</button>
            <button type="button" class="hero-jump-btn" @click="jump('lost-saves')">Lost saves</button>
            <button type="button" class="hero-jump-btn" @click="jump('common-fixes')">Common fixes</button>
          </nav>
        </div>
      </div>
    </section>

    <div ref="railScrollRoot" class="container tech-support-body">
      <PageRail
        aside-label="PC briefing"
        title="On this page"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="steam-demo" class="panel-section">
          <header class="section-head">
          <p class="section-kicker">Download &amp; install</p>
          <h2>Steam demo — how to download &amp; install</h2>
          <p class="section-intro">
            The public client is distributed through <strong>Steam</strong> (same app hub as the full
            product). Use the store page’s demo entry so Steam handles updates and file integrity for you.
          </p>
        </header>
        <ol class="step-list">
          <li>
            Open the
            <a
              href="https://store.steampowered.com/app/1963610/Road_to_Vostok/"
              rel="noopener noreferrer"
              target="_blank"
              >Road To Vostok Steam store page</a
            >
            (AppID <strong>1963610</strong>).
          </li>
          <li>
            If a <strong>Download demo</strong> / <strong>Play demo</strong> option is shown, use it to add
            the demo to your library. If you only see <strong>Early Access</strong> purchase, that reflects
            whatever Valve and the developer currently expose on the store — the demo button appears when
            the demo branch is live for your region.
          </li>
          <li>
            In the Steam client: <strong>Library</strong> → select Road To Vostok (demo or EA) →
            <strong>Install</strong>. Pick the install disk; Steam will download the build and create
            shortcuts if you enable them.
          </li>
          <li>
            First launch: let the game finish any shader or cache steps, then quit cleanly once before
            copying saves or toggling beta branches — fewer “file in use” errors on Windows.
          </li>
        </ol>
        <p class="panel-note">
          Reinstalling through Steam usually keeps userdata in <strong>AppData</strong>; uninstalling
          manually or using “delete local content” can still leave saves in
          <code>%AppData%\Godot\app_userdata\…</code> — but always
          <button type="button" class="text-jump" @click="jump('backup-save')">backup first</button>.
        </p>
        </section>

        <section data-nav-anchor="backup-save" class="panel-section alt">
          <header class="section-head">
          <p class="section-kicker">How to backup save</p>
          <h2>Backup saves &amp; settings on Windows</h2>
          <p class="section-intro">
            <strong>Backup save</strong> here means copying the whole userdata folder while the game is
            <strong>closed</strong>. Settings (sensitivity, audio, etc.) normally live beside character
            saves in the same tree.
          </p>
        </header>

        <div class="path-card">
          <p class="path-card-label">Typical save &amp; settings folder (Godot)</p>
          <code class="path-line" translate="no">%AppData%\Godot\app_userdata\Road to Vostok</code>
          <p class="path-card-hint">
            Press <kbd>Win</kbd> + <kbd>R</kbd>, paste <code>%AppData%</code>, Enter — then open
            <strong>Godot</strong> → <strong>app_userdata</strong> → <strong>Road to Vostok</strong>.
          </p>
        </div>

        <ol class="step-list">
          <li>Quit the game completely (check the system tray so no launcher is still running).</li>
          <li>
            Copy the entire <strong>Road to Vostok</strong> folder above to another drive, USB stick, or
            cloud folder. Zipping it (<code>.zip</code>) keeps timestamps tidy.
          </li>
          <li>
            Name backups with the date, e.g. <code>rtv-save-2026-03-26.zip</code>, so you can roll back
            after a bad patch or mod experiment.
          </li>
          <li>
            Many players report the game committing progress around <strong>loads</strong> (map change,
            shelter transitions). If a backup looks “one step behind,” grab another copy a few seconds after
            the next loading screen finishes.
          </li>
        </ol>

        <p class="panel-note">
          Files you may see (names can change by build): character / shelter data, NPC state, and
          <strong>Preferences</strong> or similar for graphics and controls. Treat the folder as one unit —
          do not hand-edit while the game runs.
        </p>
        </section>

        <section data-nav-anchor="lost-saves" class="panel-section">
          <header class="section-head">
          <p class="section-kicker">Recovery</p>
          <h2>Save lost? Demo reinstall?</h2>
          <p class="section-intro">
            Short checklist when progress disappears or you only wanted a fresh <strong>Steam demo</strong>
            install without losing hours.
          </p>
        </header>
        <ul class="check-cards" role="list">
          <li class="check-card">
            <h3>Restore from backup</h3>
            <p>
              If you kept a zip, extract it back into
              <code>%AppData%\Godot\app_userdata\Road to Vostok</code> (merge/replace when prompted) with
              the game closed. That is the most reliable fix for “how do I get my
              <strong>backup save</strong> back.”
            </p>
          </li>
          <li class="check-card">
            <h3>Steam Cloud</h3>
            <p>
              In Steam: <strong>Properties</strong> → <strong>General</strong> → check whether
              <strong>Steam Cloud</strong> is enabled for this app. If it is, Steam may offer an older
              cloud copy — compare timestamps before overwriting local files.
            </p>
          </li>
          <li class="check-card">
            <h3>Wrong Windows user</h3>
            <p>
              Saves are per Windows account. If you “lost” everything after switching users or PCs, the
              folder under the other account’s <code>AppData</code> may still contain the old
              <strong>Road to Vostok</strong> data.
            </p>
          </li>
          <li class="check-card">
            <h3>Demo vs EA build</h3>
            <p>
              Demo and Early Access can use different branches or userdata layouts after major updates.
              After opting into betas or migrating from <strong>demo</strong> to paid, verify which folder
              the running build actually writes to before deleting anything.
            </p>
          </li>
        </ul>
        </section>

        <section data-nav-anchor="common-fixes" class="panel-section alt">
          <header class="section-head">
          <p class="section-kicker">Performance &amp; stability</p>
          <h2>Common fixes</h2>
        </header>
        <ul class="fix-list" role="list">
          <li>
            <strong>Stutter on traversal:</strong> cap frame rate slightly below monitor refresh, pause
            background capture tools, update GPU drivers.
          </li>
          <li>
            <strong>Input lag:</strong> use exclusive fullscreen where available; disable Windows “enhance
            pointer precision” for mouse playtests.
          </li>
          <li>
            <strong>Audio desync:</strong> restart the session after long pauses; when reporting bugs, note
            build ID and attach logs from the game folder if the developer requests them.
          </li>
        </ul>
        <p class="cross-links">
          More gameplay help:
          <RouterLink to="/getting-started">Start here</RouterLink>
          ·
          <RouterLink to="/dev-updates">Road ahead</RouterLink>
        </p>
        </section>

        <section class="footnote-section" aria-label="Disclaimer">
          <p class="footnote">
            Fan-maintained tips, not official support. For authoritative policy and refunds, use
            <a href="https://help.steampowered.com/en/wizard/HelpWithGame/?appid=1963610" rel="noopener noreferrer" target="_blank">Steam Help for AppID 1963610</a>
            and the developer’s channels.
          </p>
        </section>
      </PageRail>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageRail from '../components/PageRail.vue'
import { scrollToNavAnchor } from '../composables/scrollToNavAnchor.js'

const railScrollRoot = ref(null)

const asideLinks = [
  { label: 'Steam demo', scrollKey: 'steam-demo' },
  { label: 'Backup save', scrollKey: 'backup-save' },
  { label: 'Lost saves', scrollKey: 'lost-saves' },
  { label: 'Common fixes', scrollKey: 'common-fixes' },
]

function jump(key) {
  scrollToNavAnchor(railScrollRoot, key)
}
</script>

<style scoped>
.tech-support-page.page-article {
  padding-bottom: 4rem;
}

.page-hero-section {
  padding: 3rem 0 1.5rem;
  background: radial-gradient(
    ellipse 80% 70% at 50% -20%,
    color-mix(in srgb, var(--color-ice) 16%, transparent),
    transparent
  );
}

.hero-kicker {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.page-hero-content h1 {
  margin: 0 0 0.65rem;
  font-size: clamp(1.55rem, 3vw, 2.2rem);
  line-height: 1.12;
}

.hero-lead {
  margin: 0 0 1rem;
  font-size: 0.98rem;
  line-height: 1.62;
  color: var(--color-muted);
}

.hero-jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: 0.82rem;
}

.hero-jump-btn {
  font: inherit;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
  background: none;
  border: none;
  padding: 0.25rem 0.15rem;
  cursor: pointer;
  text-decoration: none;
}

.hero-jump-btn:hover {
  text-decoration: underline;
}

.text-jump {
  font: inherit;
  color: var(--color-primary-soft);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.text-jump:hover {
  color: var(--color-signal-soft);
}

.panel-section {
  padding: 1.75rem 0;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.panel-section.alt {
  background: color-mix(in srgb, var(--color-panel) 35%, transparent);
}

.section-head {
  margin-bottom: 1.15rem;
}

.section-kicker {
  margin: 0 0 0.4rem;
  font-family: var(--font-journey);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ice-dim);
}

.section-head h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.15rem, 2.1vw, 1.45rem);
}

.section-intro {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.step-list {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.58;
}

.step-list li {
  margin-bottom: 0.55rem;
}

.step-list a {
  color: var(--color-primary-soft);
}

.path-card {
  margin: 0 0 1.15rem;
  padding: 1rem 1.15rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-ice) 12%, transparent);
}

.path-card-label {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-family: var(--font-display);
  color: var(--color-muted);
}

.path-line {
  display: block;
  margin: 0 0 0.6rem;
  padding: 0.55rem 0.65rem;
  border-radius: 6px;
  font-size: 0.84rem;
  word-break: break-all;
  background: color-mix(in srgb, var(--color-bg) 92%, transparent);
  border: 1px solid var(--color-border);
  color: var(--color-primary-soft);
}

.path-card-hint {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
}

kbd {
  display: inline-block;
  padding: 0.12em 0.4em;
  font-size: 0.78em;
  font-family: var(--font-mono, ui-monospace, monospace);
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
}

.panel-note {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.52;
  color: var(--color-muted);
}

.panel-note a {
  color: var(--color-primary-soft);
}

.check-cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .check-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.check-card {
  margin: 0;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, transparent);
  background: color-mix(in srgb, var(--color-surface) 94%, transparent);
}

.check-card h3 {
  margin: 0 0 0.4rem;
  font-size: 0.88rem;
  letter-spacing: 0.06em;
  color: var(--color-primary-soft);
}

.check-card p {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.52;
  color: var(--color-muted);
}

.check-card code {
  font-size: 0.82em;
  word-break: break-all;
}

.fix-list {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.fix-list li {
  margin-bottom: 0.5rem;
}

.fix-list strong {
  color: var(--color-text);
}

.cross-links {
  margin: 0;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.cross-links a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.cross-links a:hover {
  text-decoration: underline;
}

.footnote-section {
  padding: 1.25rem 0 0;
}

.footnote {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-muted);
  opacity: 0.92;
}

.footnote a {
  color: var(--color-primary-soft);
}
</style>
