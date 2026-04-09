<template>
  <article ref="gettingStartedAdsRoot" class="page-article">
    <section class="page-hero-section">
      <div class="container">
        <!-- GAM：放在 page-hero-content 上方 -->
        <div
          ref="gettingStartedGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Start here</span>
          </nav>
          <h1>
            Road To Vostok — How to play &amp; what to do first (PC &amp; Steam demo)
          </h1>
          <p>
            Core loop on PC, default-style controls (verify in your build), loading shotguns and
            other firearms (this page,
            <a href="/getting-started#weapons-loading">weapon loading</a>),
            survival and medical when you fracture or bleed (
            <a href="/getting-started#medical">medical section below</a>), and crafting context
            (<a href="/wiki">Wiki</a>,
            <a href="/wiki/gathering">Gathering</a>). Facts follow the public Steam
            listing and community write-ups — always confirm in your installed demo or Early Access
            build.
          </p>
        </div>
        <!-- ADX：page-hero-content 下方 -->
        <aside
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_ban1"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-tag-src="gamtg"
          ></ins>
        </aside>
      </div>
    </section>

    <div ref="railScrollRoot" class="container getting-started-body">
      <PageRail
        aside-label="Field briefing"
        title="Jump to"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <template #aside-extra>
          <aside
            style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
          >
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-9435047454967498"
              data-ad-slot="roadtovostok_Adx_ban1"
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-tag-src="gamtg"
            ></ins>
          </aside>
        </template>
        <section data-nav-anchor="core-loop" class="page-body-section">
          <div class="page-body-content">
          <h2>How to play — core loop</h2>
          <p>
            On the official Steam store listing for the game, the developer describes Road To
            Vostok as a hardcore single-player survival game in a post-apocalyptic border region
            between Finland and Russia: you survive, loot, plan, and prepare to reach Vostok, where
            mistakes can end a run (including permadeath rules for that zone as described there).
            On this site, pair the overview with
            <a href="/tasks">Tasks</a>,
            <a href="/map">Map</a>, and
            <a href="/wiki/npcs">NPCs</a> when you want locations and trader context.
          </p>
          <ul>
            <li>
              Area 05: shelters, traders, tasks, and starter loot — often the first sandbox before
              pushing east.
            </li>
            <li>
              Border Zone: guarded crossings with varied hazards (mines, obstacles, boats on some
              routes, hostile guards with air support — per store description).
            </li>
            <li>
              Vostok: high risk and high reward; store text states that dying in Vostok costs your
              full progression context for that run, unlike losses limited to what you carry
              elsewhere.
            </li>
            <li>
              Shelters: described as safe zones and the way to save; loot can be stored and
              furniture customized in decoration mode.
            </li>
            <li>
              Traders: barter economy (no cash); themed gear, tasks and services including medical
              care and weapon maintenance (same store page). See also
              <a href="/wiki/npcs">NPCs &amp; traders</a>.
            </li>
            <li>
              Loot and UI: physics-based loot, tetris-style inventories, combining and stacking
              items. Item tables live under <a href="/wiki">Wiki</a>.
            </li>
          </ul>
          <p class="callout">
            A separate Road To Vostok Demo is linked from Steam (AppID 2141300 on the same page).
            Public demos have included a tutorial map that introduces mechanics such as medical care,
            trading, shelter, and looting before the main sandbox — prioritize that before reading
            guides alone. Afterward, use
            <a href="/guides">Guides</a> for written walkthroughs.
          </p>
          </div>
        </section>

        <section data-nav-anchor="controls" class="page-body-section">
          <div class="page-body-content">
          <h2>Basic controls &amp; how to move (PC)</h2>
          <p>
            Default bindings change between builds. Use Settings → Controls in your installed copy
            as the source of truth. The table below is a reference layout aggregated from a
            third-party PC controls write-up (Magic Game World, first published 2021, since revised)
            so you know what to look for — not a guarantee for your patch. Weapon UI details also
            appear in the <a href="/getting-started#weapons-loading">weapon loading section</a> on this page.
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

        <div class="container">
          <aside
            style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
          >
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-9435047454967498"
              data-ad-slot="roadtovostok_Adx_ban1"
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-tag-src="gamtg"
            ></ins>
          </aside>
        </div>

        <section data-nav-anchor="weapons-loading" class="page-body-section">
          <div class="page-body-content">
          <h2>
            Road To Vostok: how to load shotgun, weapons &amp; magazines
          </h2>

          <h3>Magazine-fed weapons</h3>
          <p>
            Steam community discussions often explain that R is not a magic “fill gun” key: you need
            magazines loaded with cartridges in your kit. A common player-described flow is: remove
            a magazine, feed rounds into it in the inventory UI, re-seat the magazine, then use R to
            swap to a ready magazine during combat. Carrying a spare filled magazine is widely
            recommended so you can tap R under pressure. Details vary by weapon — see our
            <a href="/getting-started#weapons-loading">weapon loading section</a> and the
            <a href="/wiki/ammunition">Ammunition</a> table for cartridge planning.
          </p>

          <h3>Shotguns, bolt-actions, and other non-magazine guns</h3>
          <p>
            These weapons use manual, per-round loading. In Steam discussion threads about shotgun
            loading (late 2024), several players state that the in-game tutorial explicitly
            demonstrates the sequence for shotgun and sniper-style weapons (one reply: pick tutorial
            weapons and ammo, then follow on-screen steps).
          </p>
          <p>
            Because keybindings differ by layout and patch, treat the following only as examples of
            what players reported in that thread — not universal facts:
          </p>
          <ul>
            <li>Hold Alt and use right mouse button to load (one commenter).</li>
            <li>
              Hold Ctrl or right Alt and click left mouse repeatedly to feed shells (another
              commenter).
            </li>
            <li>
              One player wrote that in their tutorial it was: press P, then load each round with
              LMB, and after firing use R to cycle the manual reload step — this may match a specific
              demo build only.
            </li>
          </ul>
          <p class="callout callout-warn">
            If you spawn with an empty chamber, you can be killed before you finish loading. Do the
            tutorial segment for these weapons first, then confirm the same keys under Settings →
            Controls in your build.
          </p>
          </div>
        </section>

        <section data-nav-anchor="medical" class="page-body-section">
          <div class="page-body-content">
          <h2>Survival &amp; medical — bleeding, fractures, healing</h2>
          <p>
            Steam’s feature list positions medical supplies alongside food, tools, and weapons, and
            states traders can provide medical care as a service. For item-level numbers (heal
            amount, use time, which affliction each item clears), common reference points come from the
            community-run Road To Vostok wiki on Fandom (Medical and Afflictions articles). Those
            values can change with patches — verify against your in-game tooltips. For weapon planning
            use <a href="/wiki/weapons">Weapons</a>; for mined borders and regional
            context see
            <a href="/guides/surviving-the-Minefield">Minefield tactics</a> and
            <a href="/guides/an-analytical-deep-dive-into-its-real-world-geography">border geography</a>.
          </p>

          <h3>Fractures (“died from broken bone” situations)</h3>
          <p>
            Per the Fandom Afflictions page, a fracture causes ongoing health drain (listed as −1
            health unit every 5 seconds in that article), plus heavy movement penalties (e.g.
            movement, swim, and jump reductions described there). Treat it as urgent: stabilize before
            you bleed stamina trying to sprint out.
          </p>
          <p>
            The same wiki lists cures for fractures as Splint, Medkit, IFAK, and AFAK. The Medical
            table lists Splint as 4 seconds to apply, 0 direct health restored — it addresses the
            fracture condition rather than topping your HP bar by itself.
          </p>

          <h3>Bleeding and restoring health</h3>
          <p>
            Fandom’s affliction summary ties bleeding to faster health loss than a fracture and lists
            cures such as bandage, tourniquet, medkit, IFAK, and AFAK. The Medical item table (same
            wiki) lists example values such as Bandage — 4 s use, +20 health (and notes it addresses
            bleeding/burn in that row), Medkit / IFAK — 4 s, +50 health, with broader cure lists per
            item.
          </p>
          <p>
            Long-term survival also depends on energy and hydration: the Afflictions page states
            that at 0 energy or 0 hydration you take passive health damage over time until you eat or
            drink appropriately — separate from gunshot fractures but just as lethal if ignored.
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
            Task-related loot is summarized under
            <a href="/wiki/core-tasks">Core task items</a>.
          </p>
          </div>
        </section>

        <div class="container">
          <aside
            style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
          >
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-9435047454967498"
              data-ad-slot="roadtovostok_Adx_ban1"
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-tag-src="gamtg"
            ></ins>
          </aside>
        </div>

        <section data-nav-anchor="crafting" class="page-body-section">
          <div class="page-body-content">
          <h2>How to craft in Road To Vostok</h2>
          <p>
            Many players search how to craft in Road To Vostok (including the common typo
            “crasft”). Recipes and workbenches expand across Early Access patches — use in-game UI
            and patch notes as the source of truth. Our
            <a href="/wiki">Wiki</a> lists loot that often feeds crafting loops:
            <a href="/wiki/gathering">Gathering</a>,
            <a href="/wiki/fishing">Fishing</a> when your build includes it, and
            <a href="/wiki/core-tasks">Core task items</a> for shelter
            cabling questions. Build announcements sit in
            <a href="/dev-updates">Road ahead</a>.
          </p>
          </div>
        </section>
      </PageRail>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import PageRail from '../components/PageRail.vue'

const railScrollRoot = ref(null)
const gettingStartedAdsRoot = ref(null)
const gettingStartedGptRoot = ref(null)

function mountGettingStartedGptDisplay() {
  const root = gettingStartedGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushGettingStartedAdx() {
  const root = gettingStartedAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('GettingStarted ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountGettingStartedGptDisplay()
  } catch (e) {
    console.error('GettingStarted GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushGettingStartedAdx()
    } catch (e) {
      console.error('GettingStarted ADX failed:', e)
    }
  })
})

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
