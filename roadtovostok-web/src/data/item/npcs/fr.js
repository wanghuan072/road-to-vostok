/**
 * FR : fusion par addressBar avec en.js. Noms de quêtes et objets dans les tableaux — EN comme en jeu.
 */
export default {
  bandits: {
    title: 'Bandits',
    role: 'Faction hostile',
    imageAlt: 'Modèles de bandits variables — selon la carte',
    summary:
      'Principaux ennemis sur les cartes : équipement aléatoire, deux armes, IA avec couverture, embuscades et pistage, plus retours de la communauté.',
    location: {
      title: 'Village · zone 05',
      imageAlt: 'Hub village — contexte carte zone 05',
      content:
        'Les bandits patrouillent et tendent des embuscades en zone 05 ; la ligne village est un hub précoce typique où les spawns hostiles croisent routes marchands et loot. La densité dépend de la carte — voir le marqueur carte et vérifiez dans votre build.',
    },
    seo: {
      title: 'Bandits : IA, équipement et points d’attention',
      description:
        'Bandits dans Road To Vostok : équipement aléatoire, pistage et embuscade, deux armes, couverture, champ de vision limité et comportements rapportés par la communauté. Guide combat ; vérifiez en jeu.',
      keywords:
        'Road To Vostok, bandits, IA ennemie, survival shooter, NPC, combat, spawn',
    },
    detailsHtml: `
<p class="npc-lead">Les bandits sont les <strong>principaux adversaires</strong> qui apparaissent sur les cartes.</p>
<p class="npc-see-also">Voir aussi : <strong>lieux et densité de spawn</strong> selon la carte — vérifiez dans le client.</p>

<h2>Équipement</h2>
<ul>
  <li>Les bandits peuvent avoir diverses <strong>armes, équipements et loot</strong> ; le set dépend de la <strong>carte</strong> et du <strong>pool de loot aléatoire</strong> au spawn du PNJ.</li>
  <li>Un bandit peut porter <strong>deux armes</strong> : une en main, l’autre à la <strong>ceinture</strong> dans le dos.</li>
  <li>Notamment un <strong>couvre-chef</strong> (ex. Polaris) ou des <strong>sacs</strong> récupérables sur le corps.</li>
</ul>

<h2>Comportement</h2>
<dl class="npc-dl">
  <dt>Fuite</dt>
  <dd>Tirs ou blessure grave peuvent effrayer un bandit et le faire fuir.</dd>
  <dt>Couverture</dt>
  <dd>Souvent tir depuis couvert — ex. fenêtre.</dd>
  <dt>Embuscade</dt>
  <dd>Le bandit se cache (souvent pièce fermée) pour une attaque surprise.</dd>
  <dt>Pistage</dt>
  <dd>Se cache ou avance lentement vers la dernière position connue du joueur (vue ou bruits de pas).</dd>
</dl>

<h2>Autres</h2>
<ul>
  <li>Parfois un bandit tire <strong>une salve</strong> puis court au plus proche abri ou bâtiment.</li>
  <li><strong>Champ de vision limité</strong> — approche par l’arrière possible sans être vu.</li>
</ul>

<h2>Traits connus (communauté)</h2>
<p class="npc-muted">Retours joueurs ; peut être corrigé dans votre version.</p>
<ul class="npc-bug-list">
  <li><strong>Dans les buissons ou petits arbres</strong> le joueur est presque invisible — le bandit ne tire pas toujours, mais marcher vers le point approximatif reste dangereux.</li>
  <li>En regardant <strong>depuis le toit vers une fenêtre</strong> avec un bandit en <strong>embuscade</strong> à l’intérieur, il peut « geler » et ne pas réagir.</li>
  <li>Certains bandits ont une réaction aux pas <strong>très lente</strong> — comme s’ils partaient alors que le joueur est proche.</li>
</ul>
`,
  },
  generalist: {
    title: 'Généraliste',
    role: 'Marchand amical · zone village',
    imageAlt: 'Généraliste (marchand)',
    summary:
      'PNJ amical : échange d’objets de valeur contre la sélection du marchand, réapprovisionnement toutes les 10 min, astuce abri pour un nouveau set aléatoire, livraisons jusqu’au niveau 4.',
    location: {
      title: 'Village',
      imageAlt: 'Contexte hub / marchand (Fandom)',
      content:
        'Hub de départ en zone 05 : généraliste, loot, nourriture et soins. Les bandits peuvent apparaître sur les cartes zone 05 — restez vigilant aux approches.',
    },
    seo: {
      title: 'Généraliste : quêtes marchand et itinéraire village',
      description:
        'Généraliste dans Road To Vostok : échange objets de valeur contre équipement, réappro toutes les 10 min, refresh via abri, livraisons niveaux 1–4 et chemin dans le village. Guide PNJ.',
      keywords:
        'Road To Vostok, généraliste, marchand NPC, village, livraisons, réappro',
    },
    detailsHtml: `
<p class="npc-lead">Le Généraliste (Generalist) est un <strong>PNJ amical</strong> avec lequel on peut <strong>échanger de nombreux objets</strong>.</p>

<h2>Échange</h2>
<p>Tout <strong>objet de valeur</strong> de l’inventaire peut être vendu contre la sélection du marchand. Souvent disponible :</p>
<ul>
  <li>Consommables (nourriture, eau)</li>
  <li>Objets de quête (ex. Polaris)</li>
  <li>Mats de craft (ex. fil de canne, tôle)</li>
  <li>Soins (bandages, trousses)</li>
  <li>Armes (ex. Makarov)</li>
</ul>

<h2>Réapprovisionnement</h2>
<ul>
  <li>Le PNJ <strong>réapprovisionne le stock toutes les 10 minutes</strong>.</li>
  <li>Quand le compte à rebours est à <strong>0:00</strong>, la vitrine <strong>change</strong>, le timer repart.</li>
  <li>Après refresh, le set est <strong>aléatoire</strong>.</li>
  <li>Plus vite : entrez dans un <strong>abri</strong> et sortez tout de suite — au chargement le généraliste peut avoir un <strong>nouveau set aléatoire</strong>.</li>
  <li>Le <strong>niveau</strong> n’affecte que la <strong>commission</strong>, <strong>pas</strong> la table d’objets.</li>
</ul>

<h2>Quêtes</h2>
<p class="npc-muted">Noms et objets issus de la communauté ; les armes de livraison n’exigent souvent pas 100 % d’état.</p>

<h3>Niveau 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM (pas forcément 100%)</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>Note :</strong> l’arme n’a pas besoin d’être à 100 %.</p>

<h2>Comment le trouver</h2>
<p>Le généraliste se tient sur le côté du <strong>point de spawn du village</strong>. Itinéraire :</p>
<ol class="npc-steps">
  <li>En sortant de l’abri du village, descendez la <strong>rampe</strong>.</li>
  <li>À <strong>droite</strong> dans le passage entre les garages.</li>
  <li>Encore à <strong>droite</strong>, tout droit le long des garages.</li>
  <li>Dernier virage à <strong>droite</strong> — portes entrouvertes du bunker avec des pierres.</li>
</ol>
`,
  },
  doctor: {
    title: 'Médecin',
    role: 'Marchand amical · chantier naval',
    imageAlt: 'Marchand médecin',
    summary:
      'Marchand médical : bandages, trousses, garrots ; réappro toutes les 10 min ; commission selon niveau ; livraisons médicales niveau 4 ; sous-sol Hamikot Logistics au chantier.',
    location: {
      title: 'Chantier naval',
      imageAlt: 'Contexte marchand médecin (Fandom)',
      content:
        'Grande carte zone 05 : le médecin au sous-sol Hamikot Logistics ; routes de loot plus lourdes et risque souvent plus élevé que la ligne village.',
    },
    seo: {
      title: 'Médecin : catalogue soins et emplacement chantier',
      description:
        'Marchand médecin Road To Vostok : soins, cycle de réappro, livraisons, chemin vers le sous-sol Hamikot Logistics. Guide PNJ.',
      keywords:
        'Road To Vostok, médecin, marchand, chantier, soins, quêtes',
    },
    detailsHtml: `
<p class="npc-lead">Le Médecin (Doctor) est un <strong>PNJ amical</strong> qui vend des <strong>objets médicaux</strong>.</p>

<h2>Échange</h2>
<p>Uniquement du <strong>médical</strong> — bandages, trousses, garrots, etc.</p>

<h2>Réapprovisionnement</h2>
<ul>
  <li>Toutes les <strong>10 minutes</strong>.</li>
  <li>À <strong>0:00</strong> — nouveau set, l’ancien <strong>disparaît</strong>, timer relancé.</li>
  <li>La vitrine est <strong>aléatoire</strong>.</li>
  <li>Le <strong>niveau</strong> n’affecte que la <strong>commission</strong>, pas la table d’objets.</li>
</ul>

<h2>Quêtes</h2>

<h3>Niveau 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>Niveau 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Quête</th><th>Donner</th><th>Recevoir</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>Comment le trouver</h2>
<p>Sur la carte du <strong>chantier</strong>, sous-sol <strong>Hamikot Logistics</strong> — <strong>premier bâtiment à gauche</strong> en venant du côté village.</p>
<div style="display: flex; justify-content: space-between;">
<ol class="npc-steps">
  <li>Marchez droit vers la <strong>première grille</strong>.</li>
  <li>Entrez et tournez à <strong>gauche</strong>.</li>
  <li>En entrant dans le bâtiment, <strong>attention aux ennemis</strong>.</li>
  <li>Dans le coin opposé, <strong>escaliers vers le bas</strong>.</li>
  <li>La salle du médecin est la <strong>dernière du sous-sol</strong>.</li>
</ol>
  <img src="/images/wiki/npc/doctor-01.webp" alt="Emplacement du médecin" style="width: 100%; max-width: 300px;">
</div>

`,
  },
  cat: {
    title: 'Chat (compagnon)',
    role: 'Animal de l’abri · mécanique système',
    summary:
      'Animal à l’abri, chaîne événementielle chronométrée (souvent « chat perdu ») : bunker avant-poste / puits, grande caisse de transport, placement cabane et nourrissage régulier — ni marchand ni ennemi.',
    location: {
      title: 'Abri · transitions zone 05',
      content:
        'PNJ hors carte : la communauté indique que le chat finit en cabane après une chaîne village, école, avant-poste. Marchands sur ces cartes : généraliste et médecin ; leurs stocks et quêtes ont leurs propres articles.',
    },
    seo: {
      title: 'Compagnon chat : animal à l’abri',
      description:
        'Chat compagnon Road To Vostok : animal d’abri, événement « chat perdu », sauvetage avant-poste, caisse de transport, nourrissage. Court guide ; vérifiez en jeu.',
      keywords:
        'road to vostok, chat, compagnon abri, quête, bunker, survival',
    },
    detailsHtml: `
<p class="npc-lead">Le <strong>chat</strong> est un <strong>compagnon d’abri</strong> et une <strong>fonction système</strong>, pas un marchand ni un bandit. Les devlogs montrent un chat détaillé enregistré pour <strong>adoption</strong> ; les retours joueurs ajoutent un <strong>timing façon quête</strong>, un <strong>sauvetage sur plusieurs cartes</strong> et des <strong>soins en cabane</strong>.</p>
<p class="npc-see-also">Itinéraire pas à pas, préparation et nuances de sauvegarde — <strong>guide dédié</strong> (prévu dans <a href="/guides">Guides</a>) ; ici un aperçu court.</p>

<h2>Rôle</h2>
<ul>
  <li>Après adoption, le chat est lié à la <strong>cabane / abri</strong> comme <strong>compagnon permanent</strong> dans les builds décrits.</li>
  <li>Pas comme le <strong>généraliste</strong> ou le <strong>médecin</strong> — pas d’interface de troc ; les soins passent par <strong>nourrir</strong> et <strong>placer</strong>.</li>
</ul>

<h2>Acquisition (bref)</h2>
<ul>
  <li>La communauté relie le déclenchement à un événement type <strong>« chat perdu »</strong> sur plusieurs jours de jeu pendant que le jeu et le <strong>sommeil</strong> avancent.</li>
  <li>Il faut souvent <strong>plusieurs transitions de carte</strong> (souvent <strong>village → école → avant-poste</strong> et retour), une rencontre dans un <strong>bunker</strong> à l’<strong>avant-poste</strong> (puits / trappe / caisse) et une grande <strong>caisse de transport chat</strong> vers la cabane.</li>
  <li><strong>Quel bunker</strong> — peut varier selon joueurs et patchs ; vérifiez dans le client.</li>
</ul>

<h2>À l’abri</h2>
<ul>
  <li>La <strong>caisse de transport</strong> se place <strong>à l’intérieur de la cabane</strong> ; après un court délai elle <strong>s’ouvre</strong>.</li>
  <li><strong>Nourrissage</strong> dans les notes communauté environ toutes les <strong>~36 h de jeu</strong> : <strong>nourriture chat</strong>, <strong>poisson</strong>, <strong>viande</strong> ; peut aller au <strong>stock cabane</strong>, pas seulement aux poches.</li>
  <li>La <strong>caresse</strong> peut manquer selon certains builds.</li>
</ul>

<h2>Voir aussi</h2>
<ul>
  <li><a href="/wiki/npcs/generalist">Généraliste</a> · <a href="/wiki/npcs/doctor">Médecin</a> — marchands sur la même chaîne de transitions.</li>
  <li><a href="/wiki/fishing">Pêche</a> — poisson comme nourriture.</li>
  <li><a href="/map">Carte</a> — hubs et sorties.</li>
  <li><a href="/guides">Guides</a> — analyse chat complète à la publication.</li>
</ul>

<p class="npc-muted">Synthèse communautaire, pas texte de patch officiel. En cas d’écart, fiez-vous au client et aux sources primaires.</p>
`,
  },
}
