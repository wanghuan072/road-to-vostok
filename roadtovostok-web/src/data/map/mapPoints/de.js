/** Kartenpins: gleiche ids und entries-Reihenfolge wie en.js; nur Textfelder übersetzt. */
export default {
  cabin: {
    title: 'Hütte (Shelter)',
    content:
      'Spieler-Shelter: Schlaf, Lager und Shelter-Systeme — früher Quest-Hub.',
    entries: [
      {
        title: 'Shelter-Schleife',
        content:
          'Ausrüstung lagern, Status erholen und frühe Quests vom festen Safe aus.',
      },
    ],
  },
  village: {
    title: 'Dorf',
    content:
      'Start-Hub in Gebiet 05: Generalist, Plündern, Essen und Medizin. Banditen können auf allen Karten von Gebiet 05 spawnen — auf Routen achtgeben.',
    imageAlt: 'Regionaler Hub / Händlerkontext (Fandom)',
    entries: [
      {
        title: 'Generalist',
        content:
          'Freundlicher Händler: Verbrauchsmaterial, Medizin, Crafting-Zutaten und Waffen; 10-Minuten-Nachschub; gestufte Liefermissionen.',
        imageAlt: 'Generalist-Händler (Fandom)',
      },
      {
        title: 'Banditen',
        content:
          'Hauptfeindfraktion: zufällige Ausrüstung, Deckung, Hinterhalt und Stalking — Spawns je nach Karte und Pool.',
        imageAlt: 'Banditen — Optik je nach Karte (Fandom)',
      },
      {
        title: 'Plündern & Medizin',
        content:
          'Frühes Essen, Medizin und verkaufbare Kleinkram — typische Starter-Beute.',
      },
      {
        title: 'Händlermissionen',
        content: 'Generalist-Lieferlinie (Stufe 1–4); Itemlisten im Wiki.',
      },
    ],
  },
  shipyard: {
    title: 'Werft',
    content:
      'Größere Karte in Gebiet 05: Arzt-Händler im Keller von Hamikot Logistics; Beute-Routen schwerer, Risiko oft höher als Dorf (Community-Karten).',
    imageAlt: 'Arzt-Händlerkontext (Fandom)',
    entries: [
      {
        title: 'Arzt',
        content:
          'Medizin-Händler: Verbände, Medkits, Tourniquets; 10-Minuten-Nachschub; Liefermissionen 1–4.',
        imageAlt: 'Arzt-Händler (Fandom)',
      },
      {
        title: 'High-Risk-Routen',
        content:
          'Lohnender als offene Landstraße — Gewicht, Medizin und Extraktion planen.',
      },
      {
        title: 'Kellereingang',
        content:
          'Hamikot Logistics: vom Dorf her eintreten, Treppe zum Arzt — Feinde im Blick.',
      },
    ],
  },
  highway: {
    title: 'Landstraße',
    content:
      'Offene Verbindung zur Dorflinie; exponierte Bewegung, leichtere Beute-Spots.',
    entries: [
      {
        title: 'Banditenstreifen',
        content: 'Freie Sicht — Geräusch und Bewegung ziehen Aufmerksamkeit.',
      },
      {
        title: 'Straßenrand-Plündern',
        content: 'Leichte Funde entlang der Route; Tempo vs. Deckung abwägen.',
      },
    ],
  },
  school: {
    title: 'Schule',
    content:
      'Schule: frühe Wissenschafts- und Ingenieursquests.',
    entries: [
      {
        title: 'Wissenschafts- & Ingenieursquests',
        content:
          'Quest-Knoten am Schul-Setting — Ziele im Spiel prüfen.',
      },
      {
        title: 'Institutions-Beute',
        content: 'Bücher, Werkzeuge und Crafting-Spawns ändern sich mit Patches.',
      },
    ],
  },
  outpost: {
    title: 'Außenposten',
    content:
      'Außenposten: früher Zugang zu Grenzquests und -beute.',
    entries: [
      {
        title: 'Vorstoß zur Grenze',
        content: 'Sprungbrett vor dem Übergang — Regeln auf der Aufgaben-Seite.',
      },
      {
        title: 'Grenz-Ausrüstung',
        content:
          'Besser als Startausrüstung in Gebiet 05; dennoch Wachen und Umweltgefahren einplanen.',
      },
    ],
  },
  'border-crossing': {
    title: 'Grenzübergang',
    content:
      'Finnisch-russisch inspirierte Checkpoint-Karten; Wachen, Hindernisse oder Wasser je nach Route.',
    entries: [
      {
        title: 'Wachen & Luftunterstützung',
        content:
          'Offizielle Beschreibung: korrupte Wachen, bewaffnete Kontrollpunkte, ggf. Luftunterstützung.',
      },
      {
        title: 'Grenzquests',
        content:
          'Praktische Hinweise zu Grenze / Wladiwostok auf der Aufgaben-Seite.',
      },
    ],
  },
  minefield: {
    title: 'Minenfeld',
    content:
      'Gefahr in der Grenzregion: Minenlinien — Route und Ausdauer vor dem Übergang planen.',
    entries: [
      {
        title: 'Vorsichtiges Durchqueren',
        content: 'Langsam und vorsichtig; kein blindes Sprinten über verdächtigen Boden.',
      },
    ],
  },
  'water-crossing': {
    title: 'Wasserübergang',
    content:
      'Manche Grenzkarten nutzen Boot oder Furt — Gewicht und Ausdauer beachten.',
    entries: [
      {
        title: 'Boot / Furt',
        content: 'Wenn Wasser zum Engpass wird, zählen Last und Ausdauer doppelt.',
      },
    ],
  },
  vostok: {
    title: 'Vostok',
    content:
      'Russische Seite, endgame-lastig: hohes Risiko; Shop-Texte knüpfen Permadeath-Regeln an diese Phase.',
    entries: [
      {
        title: 'Militär',
        content:
          'Starker Druck durch Feuerkraft und Panzerung — Medizin, Munition und Extraktion im Takt.',
      },
      {
        title: 'Endgame-Beute',
        content: 'Höchste Belohnung; strengere Todesregeln als in Gebiet 05.',
      },
      {
        title: 'Vostok-Regeln',
        content: 'Voll ausgerüstet losziehen? Zuerst die Aufgaben-Seite lesen.',
      },
    ],
  },
  'vostok-military': {
    title: 'Militärdruck (Osten)',
    content:
      'Je weiter ostwärts, desto härter Gegner und bessere Beute — Medizin und Munition kontrollieren.',
    entries: [
      {
        title: 'Druck nach Osten',
        content:
          'Aggressivere KI, bessere Drops an Leichen — nicht ohne Nachschub verweilen.',
      },
      {
        title: 'High-Tier-Beute',
        content:
          'Qualität steigt mit Risiko; auf Vostok-Karten gelten strengere Todesregeln.',
      },
    ],
  },
}
