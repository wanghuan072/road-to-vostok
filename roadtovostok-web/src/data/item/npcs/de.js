/**
 * Deutsch: Patch zu `en.js` (Schlüssel = addressBar). Vollständige `detailsHtml` für SEO & Lesbarkeit.
 * Quest- und Itemnamen größtenteils wie im Spiel (Englisch), Fließtext auf Deutsch.
 */
export default {
  bandits: {
    title: 'Banditen',
    role: 'Feindliche Fraktion',
    imageAlt: 'Verschiedene Banditenmodelle — je nach Karte unterschiedlich',
    summary:
      'Hauptgegner auf allen Karten: zufällige Ausrüstung, Zwei-Waffen-Setups, Deckungs-, Hinterhalt- und Stalking-KI sowie community-dokumentierte Eigenheiten.',
    location: {
      title: 'Dorf · Gebiet 05',
      imageAlt: 'Dorf-Hub — Kartenkontext Gebiet 05',
      content:
        'Banditen patrouillieren und lauern in Gebiet 05; die Dorflinie ist ein typischer früher Hub, wo feindliche Spawns mit Händler- und Plünderrouten kollidieren. Dichte variiert je nach Karte — Kartenpin nutzen und im Build prüfen.',
    },
    seo: {
      title: 'Banditen: feindliche KI, Ausrüstung & bekannte Eigenheiten',
      description:
        'Road To Vostok Banditen: zufällige Loadouts, Hinterhalt-KI, zwei Waffen, Deckung, Sichtgrenzen und dokumentierte Verhaltenshinweise. Kampfreferenz; im Spiel verifizieren.',
      keywords:
        'Road To Vostok, Banditen, feindliche KI, Survival-Shooter, NPC-Kampf, Spawns',
    },
    detailsHtml: `
<p class="npc-lead">Banditen sind die <strong>Hauptgegner</strong>, die auf den Karten spawnen.</p>
<p class="npc-see-also">Hinweis: <strong>Spawnorte und -raten</strong> variieren je nach Karte — im Spiel prüfen.</p>

<h2>Ausrüstung</h2>
<ul>
  <li>Banditen spawnen mit unterschiedlichen <strong>Waffen, Ausrüstung und Beute</strong>. Die Ausstattung hängt von der <strong>Karte</strong> und dem <strong>zufälligen Loot-Pool</strong> beim Spawn ab.</li>
  <li>Banditen können <strong>zwei Waffen</strong> tragen: eine in der Hand, eine zweite am <strong>Tragegurt</strong> auf dem Rücken.</li>
  <li>Neben Schusswaffen tragen sie ggf. <strong>Kopfbedeckung</strong> (z. B. Polaris) oder <strong>Rucksäcke</strong>, die du von Leichen nehmen kannst.</li>
</ul>

<h2>Verhalten</h2>
<dl class="npc-dl">
  <dt>Flucht</dt>
  <dd>Wird ausgelöst, wenn der Spieler den Banditen mit Schüssen erschreckt oder stark verwundet.</dd>
  <dt>Deckung</dt>
  <dd>Banditen feuern oft hinter Schutz — z. B. aus einem Fenster.</dd>
  <dt>Hinterhalt</dt>
  <dd>Der Bandit hockt an einer Stelle (häufig in einem Raum mit geschlossener Tür) und will den Spieler überraschen.</dd>
  <dt>Stalking</dt>
  <dd>Der Bandit schleicht oder geht langsam zur letzten bekannten Position des Spielers, gestützt auf Sicht oder Schritte.</dd>
</dl>

<h2>Weitere Hinweise</h2>
<ul>
  <li>Banditen feuern manchmal <strong>nur einen Schuss</strong> und rennen dann zur nächsten Deckung oder ins Gebäude.</li>
  <li>Sie haben ein <strong>begrenztes Sichtfeld</strong> — von hinten kommend werden sie den Spieler oft nicht sehen.</li>
</ul>

<h2>Bugs (Community)</h2>
<p class="npc-muted">Community-Berichte; in deinem Build evtl. behoben oder geändert.</p>
<ul class="npc-bug-list">
  <li>Spieler in <strong>Büschen oder kleinen Bäumen</strong> sind fast unsichtbar — Banditen schießen evtl. nicht, können aber weiter zur ungefähren Position laufen.</li>
  <li>Schaut der Spieler <strong>von außen durch ein Fenster</strong>, während ein Bandit drinnen im <strong>Hinterhalt</strong> hockt, wirkt er fast <strong>eingefroren</strong> / ahnungslos.</li>
  <li>Einige Banditen reagieren auf Schrittgeräusche <strong>sehr langsam</strong> und wirken, als würden sie weggehen, obwohl der Spieler nur Meter entfernt steht.</li>
</ul>
`,
  },
  generalist: {
    title: 'Generalist',
    role: 'Freundlicher Händler · Dorfregion',
    imageAlt: 'Generalist-Händler',
    summary:
      'Freundlicher NPC: Valuables gegen Händlerbestand tauschen; 10-Minuten-Nachfüllzyklus; nach Safehouse-Aufenthalt kann Zufallsbestand erneuern; Liefermissionen Stufe 1–4.',
    location: {
      title: 'Dorf',
      imageAlt: 'Regionaler Hub / Händlerkontext (Fandom)',
      content:
        'Start-Hub in Gebiet 05: Generalist, Plündern, Essen und Medizin. Banditen können auf allen Karten von Gebiet 05 spawnen — auf Routen achtgeben.',
    },
    seo: {
      title: 'Generalist: Händlermissionen & Dorfrouten',
      description:
        'Generalist-Händler: Valuables gegen Gear, 10-Minuten-Nachschub, Safehouse-Refresh, Liefermissionen 1–4 und Dorfrouten. Road To Vostok NPC-Ratgeber.',
      keywords:
        'Road To Vostok, Generalist, Händler-NPC, Dorf, Liefermissionen, Nachschub',
    },
    detailsHtml: `
<p class="npc-lead">Der <strong>Generalist</strong> ist ein <strong>freundlicher NPC</strong> in Road to Vostok und tauscht Waren gegen verschiedene Gegenstände.</p>

<h2>Item-Handel</h2>
<p>Du kannst <strong>wertvolle Items</strong> aus dem Inventar verkaufen und erhältst Gegenstände aus dem Händlerbestand, z. B.:</p>
<ul>
  <li>Verbrauchsgüter (Essen, Wasser)</li>
  <li>Quest-Items (z. B. Polaris)</li>
  <li>Crafting-Material (z. B. Drahtrolle, Kochplatte)</li>
  <li>Medizin (Verbände, Medkits)</li>
  <li>Waffen (z. B. Makarov)</li>
</ul>

<h2>Nachschub</h2>
<ul>
  <li>Der NPC <strong>füllt alle 10 Minuten</strong> nach.</li>
  <li>Bei <strong>0:00</strong> wird nachgefüllt, das vorherige Angebot <strong>überschrieben</strong>, der Timer startet neu.</li>
  <li>Items sind nach jedem Nachschub <strong>zufällig</strong>.</li>
  <li>Schneller: zurück ins <strong>Shelter</strong>, sofort wieder raus — beim Verlassen kann der Generalist mit <strong>neuem Zufallsbestand</strong> spawnen.</li>
  <li>Höheres <strong>Level</strong> ändert nur <strong>Gebühren</strong>, <strong>nicht</strong> die Warentabellen.</li>
</ul>

<h2>Missions-Items</h2>
<p class="npc-muted">Namen und Items aus Community-Quellen. Lieferwaffen oft nicht bei 100 % Zustand nötig.</p>

<h3>Stufe 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM (nicht zwingend 100 %)</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>Hinweis:</strong> Waffen müssen nicht bei 100 % Zustand sein.</p>

<h2>Standort</h2>
<p>Der Generalist steht knapp außerhalb der <strong>Dorf</strong>-Spawnzone. Weg:</p>
<ol class="npc-steps">
  <li>Nach dem Verlassen des Dorf-Shelters die <strong>Rampe</strong> hinunter.</li>
  <li><strong>Rechts</strong> in die Passage zwischen den Garagen.</li>
  <li>Erneut <strong>rechts</strong> und geradeaus an den Garagen entlang.</li>
  <li>Zuletzt <strong>rechts</strong> in halb offene Türen neben einem Container mit Steinen.</li>
</ol>
`,
  },
  doctor: {
    title: 'Arzt',
    role: 'Freundlicher Händler · Werftregion',
    imageAlt: 'Arzt-Händler',
    summary:
      'Medizin-Händler: Verbände, Medkits, Tourniquets usw.; 10-Minuten-Nachschub; Liefermissionen 1–4; im Keller von Hamikot Logistics an der Werft.',
    location: {
      title: 'Werft',
      imageAlt: 'Arzt-Händlerkontext (Fandom)',
      content:
        'Größere Karte in Gebiet 05: Arzt-Händler im Keller von Hamikot Logistics; Beute-Routen schwerer, Risiko oft höher als auf der Dorflinie.',
    },
    seo: {
      title: 'Arzt: Medizinbestand & Werftstandort',
      description:
        'Road To Vostok Arzt-Händler: Medizin, Nachschubzyklus, Liefermissionen, Route zum Keller von Hamikot Logistics. NPC-Ratgeber.',
      keywords: 'Road To Vostok, Arzt, Händler, Werft, Medizin, Missionen',
    },
    detailsHtml: `
<p class="npc-lead">Der <strong>Arzt</strong> ist ein <strong>freundlicher NPC</strong> und handelt nur <strong>medizinische Items</strong>.</p>

<h2>Item-Handel</h2>
<p>Er tauscht ausschließlich <strong>Medizin</strong> — Verband, Medkit, Tourniquet usw. (Manche Community-Texte schreiben „medial“; hier: <em>medizinisch</em>.)</p>

<h2>Nachschub</h2>
<ul>
  <li><strong>Alle 10 Minuten</strong> Nachschub.</li>
  <li>Bei <strong>0:00</strong> neues Angebot, vorheriges wird <strong>überschrieben</strong>, Timer neu.</li>
  <li>Items danach <strong>zufällig</strong>.</li>
  <li>Höheres <strong>Level</strong> = nur <strong>Gebühren</strong>, keine anderen Tabellen.</li>
</ul>

<h2>Missions-Items</h2>

<h3>Stufe 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>Stufe 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Aufgabe</th><th>Abgeben</th><th>Erhalt</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>Standort</h2>
<p>Auf der Karte <strong>Werft</strong>, im Keller von <strong>Hamikot Logistics</strong> — das <strong>erste Gebäude links</strong>, wenn du von Dorf kommend die Karte betrittst.</p>
<div style="display: flex; justify-content: space-between;">
<ol class="npc-steps">
  <li>Geradeaus bis zum <strong>ersten Gittertor</strong>.</li>
  <li>Rein und <strong>links</strong>.</li>
  <li>Beim Betreten <strong>auf Gegner achten</strong>.</li>
  <li>An der gegenüberliegenden Ecke die <strong>Treppe runter</strong>.</li>
  <li>Das Arztzimmer ist der <strong>letzte Raum im Keller</strong>.</li>
</ol>
  <img src="/images/wiki/npc/doctor-01.webp" alt="Arzt-Standort" style="width: 100%; max-width: 300px;">
</div>

`,
  },
  cat: {
    title: 'Katze (Begleiter)',
    role: 'Shelter-Begleiter · systemnahe Funktion',
    summary:
      'Shelter-Haustier, freigeschaltet über eine zeitkritische Rettungskette (Community: „vermisste Katze“): Außenposten-Bunker / Brunnen, große Transportbox, Hütte platzieren und regelmäßig füttern — kein Händler, keine Fraktion.',
    location: {
      title: 'Shelter · Teleportkette Gebiet 05',
      content:
        'Kein Karten-NPC: laut Community Rettungskette über Dorf, Schule, Außenposten usw.; Händler dort Generalist & Arzt — Bestand und Quests siehe jeweilige Artikel.',
    },
    seo: {
      title: 'Katzenbegleiter: Shelter-Haustier im Überblick',
      description:
        'Road To Vostok Katze: Shelter-Pet, Ereignis wie „vermisste Katze“, Außenposten-Rettung, Transportbox, Fütterung. Kurzreferenz; im Spiel prüfen.',
      keywords:
        'Road To Vostok, Katze, Shelter, vermisste Katze, Außenposten, Transportbox, Early Access',
    },
    detailsHtml: `
<p class="npc-lead">Die <strong>Katze</strong> ist ein <strong>Shelter-Begleiter</strong> — eine <strong>systemnahe Funktion</strong>, kein Händler und kein Bandit. Offizielle Updates zeigten eine detaillierte, vertonte Katze zum <strong>Adoptieren</strong>; Community-Berichte ergänzen <strong>questartiges Timing</strong>, <strong>Rettung über mehrere Karten</strong> und <strong>Pflege in der Hütte</strong>.</p>
<p class="npc-see-also">Schritt-für-Schritt-Routen, Vorbereitung und Save-Besonderheiten gehören in einen <strong>langen Guide</strong> (geplant unter <a href="/guides">Ratgeber</a>); diese Seite bleibt eine Kurzreferenz.</p>

<h2>Rolle</h2>
<ul>
  <li>Nach Adoption ist die Katze in Berichten mit deiner <strong>Hütte / dem Shelter</strong> als <strong>dauerhafter Begleiter</strong> verknüpft.</li>
  <li>Sie funktioniert nicht wie <strong>Generalist</strong> oder <strong>Arzt</strong> — kein Tausch-UI; stattdessen <strong>Füttern</strong> und <strong>Platzieren</strong>.</li>
</ul>

<h2>Freischaltung (Kurz)</h2>
<ul>
  <li>Community verbindet das oft mit einer <strong>„vermissten Katze“</strong>-Phase über mehrere In-Game-Tage, vorangetrieben durch Spiel und <strong>Schlaf</strong>.</li>
  <li>Die Rettung umfasst typischerweise <strong>mehrere Kartenwechsel</strong> (häufig <strong>Dorf → Schule → Außenposten</strong>), eine <strong>Bunker</strong>-Szene am <strong>Außenposten</strong> (Brunnen / Bretter / Kiste) und Tragen einer großen <strong>Transportbox</strong> zur Hütte.</li>
  <li><strong>Welcher Bunker</strong> triggert, kann zwischen Spielern und Patches variieren — im Client prüfen.</li>
</ul>

<h2>Im Shelter</h2>
<ul>
  <li>Die <strong>Transportbox</strong> wird <strong>in der Hütte</strong> platziert; nach kurzer Wartezeit <strong>öffnet</strong> sie sich.</li>
  <li><strong>Füttern</strong> in Community-Notizen etwa alle <strong>~36 In-Game-Stunden</strong>; z. B. <strong>Katzenfutter</strong>, <strong>Fisch</strong>, <strong>Fleisch</strong>; Vorräte können in <strong>Hüttenlager</strong> liegen.</li>
  <li><strong>Streicheln</strong> je nach Build evtl. nicht vorhanden.</li>
</ul>

<h2>Siehe auch</h2>
<ul>
  <li><a href="/wiki/npcs/generalist">Generalist</a> · <a href="/wiki/npcs/doctor">Arzt</a> — Händler auf derselben Transferkette.</li>
  <li><a href="/wiki/fishing">Angeln</a> — Fisch als Futter.</li>
  <li><a href="/map">Karte</a> — Hubs und Ausgänge.</li>
  <li><a href="/guides">Ratgeber</a> — ausführlicher Katzen-Walkthrough, sobald veröffentlicht.</li>
</ul>

<p class="npc-muted">Community-Notizen, kein offizieller Patch-Text. Bei Widerspruch zum Spiel gelten Client und Erstquellen.</p>
`,
  },
}
