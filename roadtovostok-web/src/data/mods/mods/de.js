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
  'armed-enhancement-weapon-attachment-spawner': {
    title: 'Armed Enhancement – Waffenaufsatz-Spawner',
    imageAlt: 'Mod „Armed Enhancement – Weapon Attachment Spawner“ für Road to Vostok (Nexus Mods)',
    tags: ['Gameplay', 'Waffen', 'Loot-Vielfalt', 'MCM'],
    comments: [
      {
        author: 'Loot-Lesbarkeit',
        body: 'Optik und Schalldämpfer auf Welt-Waffen machen Funde abwechslungsreicher — immer noch RNG, aber die Highlights stechen mehr hervor.',
      },
      {
        author: 'MCM',
        body: 'Kammer-Optionen nach v1.1.0 kurz lesen; ich habe Defaults gelassen, bis der Ablauf saß.',
      },
      {
        author: 'Mod-Stapel',
        body: 'Bei großen Waffen-Overhauls zuerst Nexus-Hinweise zur Ladereihenfolge lesen, bevor du alles diesem Paket anlastest.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Armed Enhancement: zufällige Waffenaufsätze & Kammer-Optionen (Peter4Master) | Road To Vostok Guide',
      description:
        'Nexus-Mod für Road to Vostok: Armed Enhancement – Weapon Attachment Spawner von Peter4Master — Waffen in Welt, Containern und bei Gegnern können Zielfernrohr, Schalldämpfer und Laser erhalten; Kammerverhalten per MCM. Metro Mod Loader; Download auf Nexus Mods.',
      keywords:
        'Road to Vostok Mod, Armed Enhancement, Weapon Attachment Spawner, Peter4Master, Nexus Mods, Waffenaufsätze, Schalldämpfer Spawn, Metro Mod Loader, MCM, Loot Vielfalt',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Diese Website <strong>hostet keine</strong> Mod-Dateien. Nutze in der Seitenleiste <strong>Auf Nexus Mods öffnen</strong>, um zur offiziellen Seite zu gelangen, dann den Reiter <strong>Files</strong> für das aktuelle Archiv, Prüfsummen und Hotfix-Hinweise.
</p>

<p><strong>Spielerperspektive</strong></p>
<ul>
  <li>Waffen in der Welt, in Containern und bei Gegnern können mit <strong>Zielfernrohr</strong>, <strong>Schalldämpfer</strong> und <strong>Laser</strong> spawnen — weniger „rohr + leeres Mag“-Monotonie.</li>
  <li>Der Autor betont <strong>glaubwürdige Zufallsvielfalt</strong>, kein garantiertes Vollpaket bei jedem Fund.</li>
  <li>Aktuelle Updates (siehe Nexus-Changelog) straffen Doppel-Aufsätze und verbessern <strong>Rohr-/Kammer</strong>-Verhalten; <strong>MCM</strong> bietet Kammer-Profile (z. B. immer vorgezogen, beim Ausrüsten automatisch, manuell — Standard ist gemischt).</li>
</ul>

<h2>Für wen</h2>
<p>
  Sinnvoll, wenn du <strong>Aufsatzvielfalt auf Zufallswaffen</strong> willst, ohne jede Büchse per Hand zu setzen. Bei Minimal-Debugging-Listen erst später aktivieren, sobald Metro Mod Loader und Basis-QoL stabil laufen.
</p>

<h2>Installation (typisch)</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> passend zu Demo oder Early Access installieren.</li>
  <li>Auf Nexus unter <strong>Files</strong> das Layout des Autors folgen — Paket meist in den <code>mods</code>-Ordner neben anderen <code>.vmz</code>-Packs.</li>
  <li>Wenn <strong>MCM</strong> gefordert ist, installieren, um Kammer und Toggles ohne Dateieditoren zu steuern.</li>
  <li>Nach großen Spiel-Patches vor langen Runs den Nexus-Reiter <strong>Posts</strong> prüfen.</li>
</ol>

<h2>Kompatibilität &amp; Ladereihenfolge</h2>
<p>
  Konflikte mit anderen Waffen-Packs gelten Nexus-Beschreibung und Posts als maßgeblich. Bei großen Gameplay-Paketen (z. B. unser Spotlight zu
  <a href="/mods/oldmans-immersive-overhaul">Oldmans Immersive Overhaul</a>)
  beide Autorenhinweise lesen, bevor Ballistik-Probleme nur diesem Spawner angelastet werden.
</p>

<h2>Sicherheitshinweis</h2>
<p>
  Nur über den Nexus-Link in der Seitenleiste laden, Versionsnummer mit dem Seitenkopf abgleichen und Saves sichern, bevor du mitten in der Kampagne die Ladereihenfolge änderst.
</p>
`,
  },
  'lootmodifier': {
    title: 'LootModifier',
    loaderName: 'Metro Mod Loader + MCM',
    imageAlt: 'LootModifier für Road to Vostok — Loot-Chancen, Container-Rerolls und Zustandsbereiche (Nexus Mods)',
    tags: ['QoL', 'Loot', 'MCM', 'Work in progress'],
    comments: [
      {
        author: 'Schwierigkeitsregler',
        body: 'Boden vs. Stash-Chancen endlich so eingestellt, dass nicht drei Gebäude leer bleiben — ohne Cheat-Gefühl; MCM-Werte sanft drehen.',
      },
      {
        author: 'Reroll-Logik',
        body: 'Min/Max-Reroll ist mein Highlight: schiebt leere Container nach, ohne große Rolls zu zerstören.',
      },
      {
        author: 'Achtung',
        body: 'Autor warnt: garantierter Boden-Loot kann selten durch die Map fallen — nur beim Routen-Test an, nicht im Ironman.',
      },
    ],
    seo: {
      title:
        'Road to Vostok LootModifier: Loot-Chancen, Container-Rerolls & Zustandsbereiche (HumbleCorpse) | Road To Vostok Guide',
      description:
        'Nexus-Mod LootModifier für Road to Vostok (HumbleCorpse): Boden- und Container-Drop-Chancen anpassen, zu leere Container zwischen Min/Max neu würfeln, Zustandsbereiche für Waffen, NVGs, Lampen usw.; optional garantierter Boden-Loot (bekanntes Kanten-Case). Benötigt MCM und Metro Mod Loader.',
      keywords:
        'Road to Vostok Mod, LootModifier, HumbleCorpse, Nexus Mods, Loot Chance, Container Reroll, Metro Mod Loader, MCM, Item Zustand, QoL Loot',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Diese Website <strong>hostet keine</strong> Mod-Dateien. Nutze <strong>Auf Nexus Mods öffnen</strong> in der Seitenleiste, lies dort <strong>Requirements</strong> und <strong>Files</strong>, bevor du installierst.
</p>

<p><strong>Spielerperspektive</strong></p>
<ul>
  <li><strong>Loot-Tuning</strong>: Häufigkeit von Boden- und Container-Loot steuern — weniger Hungerloops oder großzügiger, ohne den Seed manuell neu zu würfeln.</li>
  <li><strong>Container-Reroll</strong>: Liegt der Spawn unter deinem <strong>Minimum</strong>, kann bis zu einem Wert zwischen <strong>Minimum und Maximum</strong> neu gewürfelt werden; bereits hohe Ergebnisse oberhalb des Maximums bleiben unangetastet.</li>
  <li><strong>Zustandsbereiche</strong>: Bänder für Abnutzung bei Waffen, NVGs, Lampen und ähnlichem anpassen.</li>
  <li><strong>Optional garantierter Boden-Loot</strong>: Autor nennt seltenes Durchfallen durch den Boden — bewusst nutzen.</li>
</ul>

<p>
  Auf Nexus als <strong>Work-in-progress</strong> beschrieben; geplante Richtungen u. a. Waffen mit Aufsätzen/Magazinen und KI-Loot — die Seite ist die Roadmap.
</p>

<h2>Voraussetzungen</h2>
<p>
  Autor listet <strong>MCM</strong> und <strong>Metro Mod Loader</strong>. Beides passend zur Version installieren, dann das LootModifier-Archiv auf Nexus holen und <strong>Posts</strong> zu Kompatibilität lesen.
</p>

<h2>Installation (Autorenkurzfassung)</h2>
<ol>
  <li>Archiv in den <code>mods</code>-Ordner legen.</li>
  <li>Bei Vostok-Injector oder Metro-Workflow mit <code>.vmz</code>: <strong><code>.zip</code> in <code>.vmz</code> umbenennen</strong>, wie auf Nexus beschrieben.</li>
  <li><strong>MCM</strong> im Spiel öffnen, sobald das Paket sauber lädt — Chancen, Reroll-Grenzen, Kurven und Experimente dort stellen.</li>
</ol>

<h2>Kompatibilität</h2>
<p>
  Loot-Mods greifen Wirtschaft und Stash-Tempo an. Bei großen Gameplay-Paketen (z. B.
  <a href="/mods/oldmans-immersive-overhaul">Oldmans Immersive Overhaul</a>)
  beide Autorennotizen lesen, bevor Spawn-Probleme einem einzigen Eintrag angelastet werden.
</p>

<h2>Sicherheitshinweis</h2>
<p>
  Nur Nexus-Link in der Seitenleiste; Version mit Kopfzeile abgleichen; Saves sichern, bevor du mitten im Run Regler änderst — mehrere Mods an Loot-Tabellen können Erwartungen schnell verschieben.
</p>
`,
  },
  'suspend-save-resume-exploration': {
    title: 'Suspend Save System (oder „Resume Exploration“)',
    imageAlt: 'Suspend Save / Resume Exploration für Road to Vostok — Ausstieg ohne Shelter &amp; zurück zur letzten Karte (Nexus Mods)',
    tags: ['Gameplay', 'UI', 'QoL', 'Saves'],
    comments: [
      {
        author: 'Session-Retter',
        body: 'Endlich nach langem Raid ohne Sprint zurück zum Shelter beenden — weil es kein Quick-Save ist, bleibt die Spannung.',
      },
      {
        author: 'Map-Reset',
        body: 'Kleingedrucktes gelesen: Welt-Loot wird beim Fortsetzen neu gewürfelt — kein taktisches Pausieren zum doppelten Farmen eines Raums.',
      },
      {
        author: 'Disziplin',
        body: 'Crash oder harter Abbruch schreibt kein Suspend — nur Ingame-Menü-Quit zählt; trainiert sauberes Beenden.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Suspend Save: Außerhalb des Shelters beenden &amp; „Resume Exploration“ (Levrault) | Road To Vostok Guide',
      description:
        'Nexus-Mod Suspend Save System (Resume Exploration) von Levrault: beim Beenden über das Spielmenü Inventar und letzten Karten-Einstieg speichern; Hauptmenü-Button lädt dich zurück; einmaliger Suspend-Slot, kein Quick-Save. Tod kostet weiterhin Beute; Kartenstatus bleibt nicht eingefroren.',
      keywords:
        'Road to Vostok Mod, Suspend Save, Resume Exploration, Levrault, Nexus Mods, Save außerhalb Shelter, Metro Mod Loader, QoL Save',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Diese Website <strong>hostet keine</strong> Mod-Dateien. Nutze <strong>Auf Nexus Mods öffnen</strong> in der Seitenleiste, dann <strong>Files</strong> für Paketname und aktuelle Installationshinweise nach Patches.
</p>

<p><strong>Spielerperspektive</strong></p>
<ul>
  <li>Erlaubt <strong>Beenden über das Spielmenü</strong> in der Außenwelt ohne vorherigen Shelter-Lauf, behält <strong>Inventar-Beute</strong> und den <strong>letzten Karten-Einstiegspunkt</strong>.</li>
  <li>Neuer Menüpunkt <strong>Resume Exploration</strong>: lädt den Charakter und setzt dich am letzten Einstieg der zuletzt gespielten Karte fort.</li>
  <li>Der Suspend-Slot wird <strong>beim Laden verbraucht</strong> — ausdrücklich <strong>kein Quick-Save</strong>, Hardcore-Loop bleibt erhalten.</li>
  <li><strong>Tod kostet weiter</strong> — getragene Beute geht wie im Vanilla verloren.</li>
</ul>

<h2>Was bewusst nicht gespeichert wird</h2>
<p>
  Laut Listing bleiben nur <strong>Inventar</strong> und <strong>letzter Einstiegspunkt</strong> im Suspend. <strong>Kartenstatus</strong> — Gegner, Händler, Container in der Welt — wird nicht eingefroren; beim Fortsetzen kann <strong>Welt-Loot neu rollen</strong>, weil das Basisspiel primär Spieler und Shelter speichert. Als Designgrenze verstehen, nicht als Bug für „eingefrorene Stashes“.
</p>

<h2>Wann kein Suspend geschrieben wird</h2>
<ul>
  <li>Kein Suspend bei <strong>Crash</strong> oder <strong>Beenden außerhalb des Spielmenüs</strong> — nur der normale Quit-Pfad, den die Mod hookt.</li>
  <li>Vor neuen Mod-Stapeln <strong>manuelle Backups</strong>; Suspend ersetzt kein Kopieren des Save-Ordners.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Exakten Archivnamen und Ordnerstruktur im Nexus-Reiter <strong>Files</strong> befolgen.</li>
  <li>Die meisten Setups nutzen einen <strong>Metro Mod Loader</strong>-<code>mods</code>-Ordner; falls <code>.vmz</code>-Umbenennung nötig ist, exakt der Listing-Anleitung folgen.</li>
  <li>Nach der Installation einen Suspend-Zyklus auf einem Wegwerf-Save testen, bevor ein langer Ironman startet.</li>
</ol>

<h2>Kompatibilität</h2>
<p>
  Menü-, Death- oder Shelter-Save-Mods können mit Suspend-Logik kollidieren. Bei großen Packs (z. B.
  <a href="/mods/oldmans-immersive-overhaul">Oldmans Immersive Overhaul</a>)
  beide Autoren und Nexus-<strong>Posts</strong> lesen, bevor ein sauberes Resume garantiert wird.
</p>

<h2>Sicherheitshinweis</h2>
<p>
  Nur Nexus-Link in der Seitenleiste; Archivversion mit Kopfzeile abgleichen; Reserve-Saves — Suspend berührt dieselben Nerven wie Permadeath-Design, also zuerst auf deinem Build verifizieren.
</p>
`,
  },
}
