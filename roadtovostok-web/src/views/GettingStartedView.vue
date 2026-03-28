<template>
  <article class="page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">/</span>
            <span>Start here</span>
          </nav>
          <h1>
            How to play Road To Vostok — what to do first (PC &amp; Steam demo)
          </h1>
          <p>
            This page matches searches like <strong>how to play Road To Vostok</strong> and
            <strong>what to do in Road To Vostok</strong>: core loop on PC, default-style controls
            (verify in your build), <strong>how to load shotgun</strong> and other
            <strong>weapons</strong>, survival and medical when you
            <strong>died from a broken bone</strong> or bleed out, plus where to read about
            <strong>crafting</strong> below. Facts follow the public Steam listing and community
            write-ups — always confirm in your installed demo or Early Access build.
          </p>
        </div>
      </div>
    </section>

    <div ref="railScrollRoot" class="container getting-started-body">
      <PageRail
        aside-label="Field briefing"
        title="Jump to"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="core-loop" class="page-body-section">
          <div class="page-body-content">
          <h2>How to play — core loop</h2>
          <p>
            On the official <strong>Steam</strong> store listing for the game, the developer describes
            <strong>Road To Vostok</strong> as a hardcore single-player
            survival game in a post-apocalyptic border region between Finland and Russia: you
            <strong>survive, loot, plan, and prepare</strong> to reach <strong>Vostok</strong>, where
            mistakes can end a run (including permadeath rules for that zone as described there).
          </p>
          <ul>
            <li>
              <strong>Area 05:</strong> shelters, traders, tasks, and starter loot — often the first
              sandbox before pushing east.
            </li>
            <li>
              <strong>Border Zone:</strong> guarded crossings with varied hazards (mines, obstacles,
              boats on some routes, hostile guards with air support — per store description).
            </li>
            <li>
              <strong>Vostok:</strong> high risk and high reward; store text states that dying in
              Vostok costs your full progression context for that run, unlike losses limited to what
              you carry elsewhere.
            </li>
            <li>
              <strong>Shelters:</strong> described as safe zones and the way to
              <strong>save</strong>; loot can be stored and furniture customized in decoration mode.
            </li>
            <li>
              <strong>Traders:</strong> barter economy (no cash); traders sell themed gear and offer
              <strong>tasks and services</strong> including <strong>medical care</strong> and
              <strong>weapon maintenance</strong> (same store page).
            </li>
            <li>
              <strong>Loot &amp; UI:</strong> physics-based loot, tetris-style inventories, combining
              and stacking items.
            </li>
          </ul>
          <p class="callout">
            A separate <strong>Road To Vostok Demo</strong> is linked from Steam (AppID
            <strong>2141300</strong> on the same page). Public demos have included a
            <strong>tutorial map</strong> that introduces mechanics such as medical care, trading,
            shelter, and looting before the main sandbox — prioritize that before reading guides
            alone.
          </p>
          </div>
        </section>

        <section data-nav-anchor="controls" class="page-body-section">
          <div class="page-body-content">
          <h2>Basic controls &amp; how to move (PC)</h2>
          <p>
            Default bindings change between builds. Use <strong>Settings → Controls</strong> in your
            installed copy as the source of truth. The table below is a
            <strong>reference layout</strong> aggregated from a third-party PC controls write-up
            (Magic Game World, first published 2021, since revised) so you know what to look for —
            not a guarantee for your patch.
          </p>
          <div class="table-wrap">
            <table class="data-table">
              <caption class="sr-only">
                Default-style PC controls for Road To Vostok (reference)
              </caption>
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                  <th scope="col">Typical binding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="7">Movement</td>
                  <td>Move</td>
                  <td>W A S D</td>
                </tr>
                <tr>
                  <td>Run / sprint</td>
                  <td>Shift / Ctrl (per guide)</td>
                </tr>
                <tr>
                  <td>Jump</td>
                  <td>Space</td>
                </tr>
                <tr>
                  <td>Crouch</td>
                  <td>C</td>
                </tr>
                <tr>
                  <td>Lean</td>
                  <td>Q / E</td>
                </tr>
                <tr>
                  <td>Ladder</td>
                  <td>Middle mouse (per guide)</td>
                </tr>
                <tr>
                  <td>Interact</td>
                  <td>Middle mouse (per guide)</td>
                </tr>
                <tr>
                  <td rowspan="6">Weapons</td>
                  <td>Fire / aim</td>
                  <td>LMB / RMB</td>
                </tr>
                <tr>
                  <td>Primary / secondary</td>
                  <td>1 / 2</td>
                </tr>
                <tr>
                  <td>Reload</td>
                  <td>R</td>
                </tr>
                <tr>
                  <td>Inspect weapon</td>
                  <td>X (per guide)</td>
                </tr>
                <tr>
                  <td>Fire mode</td>
                  <td>F</td>
                </tr>
                <tr>
                  <td>Low / high ready (scroll)</td>
                  <td>Mouse wheel</td>
                </tr>
                <tr>
                  <td rowspan="3">Inventory</td>
                  <td>Grab item</td>
                  <td>G</td>
                </tr>
                <tr>
                  <td>Move / drop / rotate item</td>
                  <td>LMB / Shift+LMB / R (context)</td>
                </tr>
                <tr>
                  <td>Main UI</td>
                  <td>Tab</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The same guide lists extra weapon-UI shortcuts (attachments, hiding UI elements, optic
            adjustments while aiming). If a key does nothing, your build may have remapped it —
            check the in-game binding screen.
          </p>
          </div>
        </section>

        <section data-nav-anchor="weapons-loading" class="page-body-section">
          <div class="page-body-content">
          <h2>
            Road To Vostok: how to load shotgun, weapons &amp; magazines
          </h2>

          <h3>Magazine-fed weapons</h3>
          <p>
            Steam community discussions often explain that <strong>R</strong> is not a magic “fill
            gun” key: you need
            <strong>magazines loaded with cartridges</strong> in your kit. A common player-described
            flow is: remove a magazine, feed rounds into it in the inventory UI, re-seat the
            magazine, then use <strong>R</strong> to swap to a ready magazine during combat. Carrying
            a <strong>spare filled magazine</strong> is widely recommended so you can tap
            <strong>R</strong> under pressure. Details vary by weapon — see our
            <RouterLink to="/guides/load-weapon">Load weapon guide</RouterLink> for a written
            checklist.
          </p>

          <h3>Shotguns, bolt-actions, and other non-magazine guns</h3>
          <p>
            These weapons use <strong>manual, per-round</strong> loading. In Steam discussion threads
            about shotgun loading (late 2024), several players state that the
            <strong>in-game tutorial</strong> explicitly demonstrates the sequence
            for shotgun and sniper-style weapons (one reply: pick tutorial weapons and ammo, then
            follow on-screen steps).
          </p>
          <p>
            Because keybindings differ by layout and patch, treat the following only as
            <strong>examples of what players reported</strong> in that thread — not universal facts:
          </p>
          <ul>
            <li>Hold <strong>Alt</strong> and use <strong>right mouse button</strong> to load (one
              commenter).</li>
            <li>
              Hold <strong>Ctrl</strong> or <strong>right Alt</strong> and click
              <strong>left mouse</strong> repeatedly to feed shells (another commenter).
            </li>
            <li>
              One player wrote that in their tutorial it was: press <strong>P</strong>, then load
              each round with <strong>LMB</strong>, and after firing use <strong>R</strong> to cycle
              the manual reload step — this may match a specific demo build only.
            </li>
          </ul>
          <p class="callout callout-warn">
            If you spawn with an empty chamber, you can be killed before you finish loading. Do the
            tutorial segment for these weapons first, then confirm the same keys under
            <strong>Settings → Controls</strong> in your build.
          </p>
          </div>
        </section>

        <section data-nav-anchor="medical" class="page-body-section">
          <div class="page-body-content">
          <h2>Survival &amp; medical — bleeding, fractures, healing</h2>
          <p>
            Steam’s feature list positions medical supplies alongside food, tools, and weapons, and
            states traders can provide <strong>medical care</strong> as a service. For item-level
            numbers (heal amount, use time, which affliction each item clears), common reference
            points come from the community-run <strong>Road To Vostok</strong> wiki on Fandom
            (Medical and Afflictions articles). <strong>Those values can change with patches</strong>
            — verify against your in-game tooltips.
          </p>

          <h3>Fractures (“died from broken bone” situations)</h3>
          <p>
            Per the Fandom <strong>Afflictions</strong> page, a <strong>fracture</strong> causes
            ongoing health drain (listed as <strong>−1 health unit every 5 seconds</strong> in that
            article), plus heavy movement penalties (e.g. movement, swim, and jump reductions
            described there). Treat it as urgent: stabilize before you bleed stamina trying to
            sprint out.
          </p>
          <p>
            The same wiki lists cures for fractures as <strong>Splint</strong>,
            <strong>Medkit</strong>, <strong>IFAK</strong>, and <strong>AFAK</strong>. The Medical
            table lists <strong>Splint</strong> as <strong>4 seconds</strong> to apply,
            <strong>0 direct health restored</strong> — it addresses the fracture condition rather
            than topping your HP bar by itself.
          </p>

          <h3>Bleeding and restoring health</h3>
          <p>
            Fandom’s affliction summary ties <strong>bleeding</strong> to faster health loss than a
            fracture and lists cures such as <strong>bandage</strong>, <strong>tourniquet</strong>,
            <strong>medkit</strong>, <strong>IFAK</strong>, and <strong>AFAK</strong>. The Medical
            item table (same wiki) lists example values such as
            <strong>Bandage — 4 s use, +20 health</strong> (and notes it addresses bleeding/burn in
            that row), <strong>Medkit / IFAK — 4 s, +50 health</strong>, with broader cure lists per
            item.
          </p>
          <p>
            Long-term survival also depends on <strong>energy and hydration</strong>: the Afflictions
            page states that at <strong>0 energy</strong> or <strong>0 hydration</strong> you take
            passive health damage over time until you eat or drink appropriately — separate from
            gunshot fractures but just as lethal if ignored.
          </p>

          <div class="table-wrap">
            <table class="data-table data-table-compact">
              <caption>
                Selected medical items (community wiki, April 2025 snapshot — verify in-game)
              </caption>
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Use time</th>
                  <th scope="col">Health (wiki)</th>
                  <th scope="col">Notes (wiki)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bandage</td>
                  <td>4 s</td>
                  <td>+20</td>
                  <td>Bleeding / burn (per wiki table)</td>
                </tr>
                <tr>
                  <td>Tourniquet</td>
                  <td>4 s</td>
                  <td>0</td>
                  <td>Bleeding focus</td>
                </tr>
                <tr>
                  <td>Splint</td>
                  <td>4 s</td>
                  <td>0</td>
                  <td>Fracture</td>
                </tr>
                <tr>
                  <td>Medkit</td>
                  <td>4 s</td>
                  <td>+50</td>
                  <td>Multiple severe afflictions per wiki</td>
                </tr>
                <tr>
                  <td>IFAK</td>
                  <td>4 s</td>
                  <td>+50</td>
                  <td>Advanced field kit per wiki</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            More detail and icons:
            <RouterLink to="/guides/medical">Medical guide</RouterLink> on this site (narrative
            walkthrough).
          </p>
          </div>
        </section>

        <section data-nav-anchor="crafting" class="page-body-section">
          <div class="page-body-content">
          <h2>How to craft in Road To Vostok</h2>
          <p>
            Many players search <strong>how to craft in Road To Vostok</strong> (including the common
            typo “crasft”). Recipes and workbenches expand across Early Access patches — use in-game
            UI and patch notes as the source of truth. Our
            <RouterLink to="/wiki">Wiki</RouterLink> lists loot that often feeds
            crafting loops (materials, tools, cables).
          </p>
          </div>
        </section>
      </PageRail>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageRail from '../components/PageRail.vue'

const railScrollRoot = ref(null)

const asideLinks = [
  { label: 'Core loop', scrollKey: 'core-loop' },
  { label: 'Controls', scrollKey: 'controls' },
  { label: 'Load weapons', scrollKey: 'weapons-loading' },
  { label: 'Medical', scrollKey: 'medical' },
  { label: 'Crafting', scrollKey: 'crafting' },
]
</script>

<style scoped>
.page-article {
  padding-bottom: 4rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.page-body-section {
  padding: 1.5rem 0;
}

.page-body-section + .page-body-section {
  border-top: 1px solid var(--color-border);
}

.page-body-content h2 {
  margin-top: 0;
}

.page-body-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary-soft);
}

.page-body-content > p,
.page-body-content > ul {
  color: var(--color-muted);
}

.page-body-content ul {
  padding-left: 1.2rem;
}

.page-body-content a {
  color: var(--color-primary-soft);
}

.callout {
  margin: 1.25rem 0 0;
  padding: 1rem 1.15rem;
  border-left: 3px solid var(--color-ice);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  border-radius: 0 4px 4px 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.callout-warn {
  border-left-color: var(--color-signal);
}

.table-wrap {
  margin: 1.25rem 0;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-panel);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  color: var(--color-text);
}

.data-table th,
.data-table td {
  padding: 0.55rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

.data-table th {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-primary-soft);
  background: color-mix(in srgb, var(--color-surface) 80%, transparent);
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table caption {
  caption-side: bottom;
  padding: 0.6rem 0.75rem;
  font-size: 0.78rem;
  color: var(--color-muted);
  text-align: left;
}

.data-table-compact caption {
  caption-side: top;
  padding-bottom: 0.5rem;
}

.page-body-content img {
  margin-top: 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
