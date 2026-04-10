/**
 * Deutsch: Overrides zu en.js (addressBar). Kein Hosting von .vmz — Download über ModWorkshop.
 */
export default {
  'item-spawner': {
    title: 'Gegenstandsspawner (Item Spawner)',
    imageAlt: 'Road to Vostok Item-Spawner-Mod-Vorschaubild',
    tags: ['Spielkomfort (QoL)', 'Selbstaktualisierend', 'Next-Fest-Demo (Godot 4.6)'],
    comments: [
      {
        author: 'Inventarfluss',
        body: 'Insert öffnet das Panel, ohne die Plünder-Schleife zu verlassen — praktisch zum Testen von Ausrüstung mit neuem Charakter.',
      },
      {
        author: 'Persistenz',
        body: 'Das Spawn-UI bleibt beim nächsten Inventar offen — passt zu meinem Raid-Tempo, ein Hotkey weniger.',
      },
      {
        author: 'Ladereihenfolge',
        body: 'Bei großen Gameplay-Paketen vor dem Aktivieren die Inkompatibilitäts-Hinweise im Workshop lesen.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Gegenstandsspawner (Ryhon): QoL-Spawnmenü & Installation | Road To Vostok Guide',
      description:
        'Road to Vostok Mod: Gegenstandsspawner (Item Spawner) von Ryhon — Insert öffnet ein Spawn-Menü im Inventar (ItemSpawner.vmz). Metro Mod Loader, Installation und Kompatibilität mit Overhaul-Paketen.',
      keywords:
        'Road to Vostok Mod, Gegenstandsspawner, Item Spawner, Ryhon, QoL, Metro Mod Loader, Inventar Spawn, ItemSpawner vmz, Next Fest',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Diese Website <strong>hostet keine</strong> Mod-Dateien. Nutze in der Seitenleiste <strong>Auf ModWorkshop öffnen</strong>, lade <strong>ItemSpawner.vmz</strong> herunter und prüfe die Übereinstimmung mit Next-Fest-Demo oder Early-Access-Build.
</p>

<p><strong>Funktion</strong></p>
<ul>
  <li>Bei geöffnetem <strong>Inventar</strong> <strong>Insert</strong> drücken, um das Spawn-Menü zu öffnen.</li>
  <li>Das Fenster bleibt bis zum nächsten Inventar <strong>sichtbar</strong>, bis du erneut <strong>Insert</strong> drückst.</li>
  <li>Kleines Paket auf der Autorenseite; als selbstaktualisierend markiert — nach großen Spiel-Patches erneut testen.</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Road to Vostok Item Spawner Screenshot" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>Installation (üblich)</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> laut aktueller Spielanleitung installieren.</li>
  <li><code>ItemSpawner.vmz</code> in den <code>mods</code>-Ordner des Spiels legen (falls abweichend: Autorenseite).</li>
  <li>Bei Mod Organizer 2 den Anweisungen des Autors folgen.</li>
</ol>

<h2>Kompatibilität</h2>
<p>
  Große Overhauls können je nach Ladereihenfolge inkompatibel sein (z. B.
  <a href="/mods/oldmans-immersive-overhaul">Oldmans Immersive Overhaul</a> — manche Spieler nutzen fest v1.1.0).
  Vor dem Stapeln immer den Kompatibilitäts-Abschnitt des Autors lesen.
</p>
`,
  },
  'oldmans-immersive-overhaul': {
    title: 'Oldmans Immersive Overhaul (Paket)',
    imageAlt: 'Oldmans Immersive Overhaul Vorschaubild',
    tags: ['Gameplay', 'Sammlung', 'Next-Fest-Demo', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop-Stammgast',
        body: 'MCM für KI-Anzahl, NVG usw. — vor langen Runs alle Seiten durchklicken.',
      },
      {
        author: 'Ladereihenfolge',
        body: 'Einzelpakete des Autors zuerst entfernen, dann dieses Bundle; doppelte Ladung verursacht schnell Konflikte.',
      },
      {
        author: 'Gameplay',
        body: 'Stufenweise Nachladen sitzt nach einer Runde — unter Druck Waffe wechseln statt komplettes Mag zu verlieren, wirkt fair.',
      },
      {
        author: 'Kompatibilität',
        body: 'Vor QoL-Mods die Inkompatibilitätsliste lesen; Uhrzeit-Mods können gebündelte Waffenlogik stören.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Immersive Overhaul (Oldman): KI, NVG, MCM & Waffen | Road To Vostok Guide',
      description:
        'Road to Vostok Mod: Oldmans ImmersiveXP — Ladehemmungen, stufenweises Nachladen, KI-Sinne, immersives NVG, MCM-Schalter. Metro Mod Loader, vmz-Installation und Ladereihenfolge.',
      keywords:
        'Road to Vostok Mod, Immersive Overhaul, ImmersiveXP, Oldman, Metro Mod Loader, MCM, Ladehemmung, KI-Mod',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Diese Website <strong>hostet keine</strong> Mod-Dateien. Nutze in der Seitenleiste <strong>Auf ModWorkshop öffnen</strong>, lade <strong>ImmersiveXP.vmz</strong> herunter und prüfe Demo- oder EA-Version.
</p>

<p><strong>Vor der Installation</strong></p>
<ul>
  <li>Mischen mit anderen Mods kann Saves gefährden — Inkompatibilitätsliste des Autors lesen.</li>
  <li>Die meisten Einzelpakete des Autors sind hier integriert — Duplikate aus der Ladereihenfolge entfernen.</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="Gameplay-Video 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Waffen & Bedienung</h2>
<ul>
  <li>Waffenzustand &amp; Ladehemmungen: beeinflussen Präzision, Rückstoß und Klemmwahrscheinlichkeit; mit Werkzeugkasten reparierbar.</li>
  <li>Stufenweises Nachladen: Waffenwechsel unterbricht und setzt an derselben Stelle fort (bei vollem Inventar können Magazine fallen).</li>
  <li>Leere Slots rüsten Waffe, Messer, Granate automatisch; mit leeren Händen wird gezogen.</li>
  <li>Immersive Interaktion: Türen, Behälter, Aufheben mit niedriger Waffe und kurzer Verzögerung.</li>
</ul>

<h2>KI-Overhaul (Kurz)</h2>
<ul>
  <li>Sicht: Entfernung abhängig von Licht, Wetter, Bewegung, Innenräumen, Taschenlampe, Schalldämpfer usw.; Kegel verengt sich zuerst, dann weitet sich in Maximaldistanz.</li>
  <li>Gehör: Untergrund, Innen, Interaktion, Wetter (z. B. Gewitter); KI reagiert auf Schüsse/Explosionen anderer KI; ungedämpfte Spielerschüsse tragen weiter.</li>
  <li>Nachladen (MCM): realistischere Magazinkapazität, leeres-Mag-Reload mit Sound, gelegentliches taktisches Nachladen, Entscheidungen nach Restmunition.</li>
  <li>Unterdrückung (MCM): mehr Vollautomodus; Kurzfeuer auf letzte bekannte Position bei Sichtverlust.</li>
  <li>Anzahl &amp; Verhalten (MCM): höheres Aktivitäts-/Kartenlimit, Reaktion auf Feuer und Türen, Feinjustierung von Präzision und Bewegung.</li>
  <li>Überschallprojektile: Knall beim Vorbeifliegen, Verzögerung skaliert mit Distanz.</li>
</ul>

<h2>NVG, Karte &amp; QoL</h2>
<ul>
  <li>Immersives NVG: großes Glas kollidiert mit NVG (Red Dot ok), Waffenunschärfe, Rauschreduktion (teilweise per MCM abschaltbar).</li>
  <li>Apartments: mehr Wegpunkte, damit KI Innenräume nutzt.</li>
  <li>Taschenlampe, Wetter, Zielfernrohr-Zoom und viele UI-/Interaktionsfixes (z. B. kein automatisches Durchladen aus dem Inventar, Patronen-in-Kammer-Animation, Sprint-Sprung beendet Ducken, Sprint mit niedriger Waffe, Finisher, Munitions-Check-Fixes, sichtbare Magazine nach Waffenwechsel usw.).</li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> installieren (aktueller Autorenleitfaden).</li>
  <li><code>ImmersiveXP.vmz</code> in den <code>mods</code>-Ordner der Spielinstallation kopieren.</li>
  <li><strong>MCM (Mod Configuration Menu)</strong> nutzen, um Feature-Gruppen ein-/auszuschalten.</li>
</ol>
<p>Nicht alle Systeme auf einmal aktivieren müssen.</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="Gameplay-Video 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Update-Hinweis (2.2.2)</h2>
<p>Fix für Always-Permadeath-Herausforderung; Spieler nahe Feuer leichterer sichtbar; Rollback eines Wegpunkt-Changes, der fehlende Apartment-Türen verursachte — vollständiges Changelog beim Autor.</p>

<h2>Bekannte inkompatible Mods (Auszug)</h2>
<p>Online-Listen ändern sich; maßgeblich ist die Autorenseite.</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — Reload-Crash; ab 2.1.5+ Workaround per Umbenennung/Ladereihenfolge testen.</li>
  <li><strong>(Bigger) Font Size</strong> — stört stufenweises Nachladen; nach ImmersiveXP laden.</li>
  <li><strong>Fly mode</strong> — Konflikt mit Controller.gd; Flug ist in diesem Paket enthalten.</li>
  <li><strong>Inventory Improvements</strong> — stört Werkzeugkasten-Reparatur; ggf. vor ImmersiveXP laden.</li>
  <li><strong>Item Spawner</strong> — Crash-Berichte; manche Nutzer bleiben bei v1.1.0.</li>
  <li><strong>Quest Marker</strong> — zusammen mit diesem Paket starke FPS-Einbrüche möglich.</li>
  <li><strong>Shelter Anywhere</strong> — Nutzer melden Konflikte.</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — stört Ladehemmungen, stufenweises Nachladen und Waffenlogik.</li>
  <li><strong>Smooth Hold Reload</strong> — Konflikt; mit Erlaubnis integriert — MCM nutzen.</li>
</ul>
`,
  },
}
