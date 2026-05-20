export default {
  'item-spawner': {
    title: 'Item Spawner',
    imageAlt: 'Miniature du mod Item Spawner pour Road to Vostok',
    tags: ['Qualité de vie', 'Mise à jour auto', 'Next Fest Demo (Godot 4.6)'],
    comments: [
      {
        author: 'Inventaire',
        body: 'Insert ouvre le panneau sans quitter la boucle de loot — pratique pour tester l’équipement avec un nouveau personnage.',
      },
      {
        author: 'Persistance',
        body: 'La fenêtre de spawn reste à la prochaine ouverture d’inventaire — moins de raccourcis au milieu d’une sortie.',
      },
      {
        author: 'Ordre de chargement',
        body: 'Si vous empilez de gros packs gameplay, lisez d’abord les notes de compatibilité Workshop.',
      },
    ],
    seo: {
      title:
        'Mod Item Spawner pour Road to Vostok (Ryhon) : menu de spawn QoL et installation | Road To Vostok Guide',
      description:
        'Mod Road to Vostok : Item Spawner par Ryhon — Insert ouvre le menu de spawn des objets dans l’inventaire (ItemSpawner.vmz). Metro Mod Loader, étapes d’installation et compatibilité avec les packs overhaul.',
      keywords:
        'Road to Vostok mod, Item Spawner, Ryhon, QoL, Metro Mod Loader, spawn inventaire, ItemSpawner vmz, Next Fest',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Ce site <strong>n’héberge pas</strong> les fichiers de mods. Utilisez le bouton <strong>Ouvrir sur ModWorkshop</strong> dans le panneau latéral pour télécharger <strong>ItemSpawner.vmz</strong> et vérifiez que le build correspond à votre démo Next Fest ou à votre version Early Access.
</p>

<p><strong>Ce que ça fait</strong></p>
<ul>
  <li><strong>Inventaire</strong> ouvert : appuyez sur <strong>Insert</strong> pour ouvrir le menu de spawn.</li>
  <li>La fenêtre de spawn <strong>reste disponible</strong> à la prochaine ouverture d’inventaire jusqu’à ce que vous rappuyiez sur <strong>Insert</strong>.</li>
  <li>Taille modeste sur la page auteur ; marqué auto-mis à jour — revérifiez après les gros patchs jeu.</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Capture du mod Item Spawner pour Road to Vostok" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>Installation (typique)</h2>
<ol>
  <li>Installez <strong>Metro Mod Loader</strong> selon les instructions à jour du jeu.</li>
  <li>Placez <code>ItemSpawner.vmz</code> dans le dossier <code>mods</code> (si l’auteur change les étapes — voir la page du mod).</li>
  <li>Pour Mod Organizer 2, suivez les consignes de l’auteur.</li>
</ol>

<h2>Compatibilité</h2>
<p>
  Les gros packs peuvent marquer le mod comme incompatible dans certains ordres de chargement (par ex.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a> mentionne des crashs dans certaines piles — certains joueurs restent en v1.1.0).
  Lisez la section compatibilité de l’auteur avant d’empiler les packs.
</p>
`,
  },
  'oldmans-immersive-overhaul': {
    title: "Oldman's Immersive Overhaul (pack de mods)",
    imageAlt: 'Miniature Oldman’s Immersive Overhaul',
    tags: ['Gameplay', 'Collection', 'Next Fest Demo', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop',
        body: 'Le MCM permet d’ajuster facilement le nombre de bots et de NVG — parcourez tous les onglets avant une longue session.',
      },
      {
        author: 'Ordre de chargement',
        body: 'J’ai d’abord retiré les packs séparés de l’auteur — les doublons créent vite des conflits.',
      },
      {
        author: 'Gameplay',
        body: 'Le chargement progressif par session paraît équitable — une interruption sous pression est plus juste que de perdre tout le chargeur.',
      },
      {
        author: 'Compatibilité',
        body: 'Avant les mods QoL, vérifiez la liste d’incompatibilités ; le mod qui affiche l’heure sur le réveil casse la logique armes de ce pack.',
      },
    ],
    seo: {
      title:
        'Mod Immersive Overhaul pour Road to Vostok (Oldman) : IA, NVG, MCM et armes | Road To Vostok Guide',
      description:
        'Mod Road to Vostok : Oldman’s Immersive Overhaul (ImmersiveXP) — pannes, chargement progressif, ouïe / vue de l’IA, NVG immersive, bascules MCM. Metro Mod Loader, vmz et ordre de chargement.',
      keywords:
        'Road to Vostok mod, Immersive Overhaul, ImmersiveXP, Oldman, Metro Mod Loader, MCM, pannes, IA',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Ce site <strong>n’héberge pas</strong> les fichiers de mods. Ouvrez <strong>ModWorkshop</strong> depuis le panneau latéral et téléchargez <strong>ImmersiveXP.vmz</strong>, en vérifiant la version pour la démo ou l’Early Access.
</p>

<p><strong>Avant installation</strong></p>
<ul>
  <li>Mélanger d’autres mods peut casser une run ; liste d’incompatibilités sur la page auteur.</li>
  <li>Les packs séparés de l’auteur sont intégrés ici — retirez les doublons de l’ordre de chargement.</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="Vidéo gameplay 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Armes et contrôles</h2>
<ul>
  <li>État de l’arme et pannes : précision, recul, risque de blocage ; réparation avec la boîte à outils.</li>
  <li>Chargement progressif : interruption au changement d’arme, reprise à l’étape (le chargeur peut tomber si pas de place).</li>
  <li>Équipement auto des armes, couteaux et grenades sur slot libre ; prise auto mains vides.</li>
  <li>Interactions immersives : poser l’arme, léger délai sur portes, réservoirs et ramassage.</li>
</ul>

<h2>Overhaul IA (résumé)</h2>
<ul>
  <li>Vue : distance à la lumière, météo, mouvement, intérieurs, lampe torche, silencieux ; cône qui se rétrécit à portée max puis s’élargit.</li>
  <li>Ouïe : surfaces, intérieurs, interactions, météo (tonnerre) ; réaction aux tirs / explosions d’autres IA ; feu non silencé audible plus loin.</li>
  <li>Rechargement (MCM) : tailles de chargeurs réalistes, dry fire (son), rechargements tactiques, choix selon les munitions.</li>
  <li>Suppression (MCM) : plus de rafales ; courtes salves sur le dernier point connu si la cible est perdue.</li>
  <li>Quantité et comportement (MCM) : plafonds plus hauts sur la carte, réactions au feu soutenu et aux portes, précision et déplacement.</li>
  <li>Bang supersonique des balles qui frôlent, délai selon la distance.</li>
</ul>

<h2>NVG, cartes et QoL</h2>
<ul>
  <li>NVG immersive : grosses lunettes heurtent la NVG (point rouge ok), flou arme, moins de bruit (partie en MCM).</li>
  <li>Appartements : plus de waypoints pour que l’IA entre dans les pièces.</li>
  <li>Lampe, météo, zoom depuis la visée et nombreux changements UI / inventaire (chargeur au sac ne nourrit pas la chambre, animation balle en chambre, sprint / saut depuis accroupi, sprint baisse l’arme, exécutions, corrections vérif munitions, visibilité des cartouches dans le chargeur après changement d’arme, etc.).</li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> — étapes sur la page auteur à jour.</li>
  <li><code>ImmersiveXP.vmz</code> dans le dossier <code>mods</code> du jeu.</li>
  <li><strong>MCM</strong> — activez ou désactivez les groupes de fonctionnalités.</li>
</ol>
<p>Pas besoin d’activer tout d’un coup.</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="Vidéo gameplay 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Changelog (2.2.2)</h2>
<p>Correction du défi Always Permadeath ; visibilité du joueur près du feu augmentée ; annulation des waypoints appart qui bloquaient les portes — liste complète sur la page auteur.</p>

<h2>Mods connus incompatibles (extrait)</h2>
<p>La liste vivante chez l’auteur peut différer.</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — crash au rechargement ; contournement 2.1.5+ avec renommage et ordre.</li>
  <li><strong>(Bigger) Font Size</strong> — casse le chargement progressif ; charger après ImmersiveXP.</li>
  <li><strong>Fly mode</strong> — conflit Controller.gd ; vol déjà dans ce pack.</li>
  <li><strong>Inventory Improvements</strong> — casse la réparation boîte ; essayer avant ImmersiveXP.</li>
  <li><strong>Item Spawner</strong> — signalements de crash ; partie en v1.1.0.</li>
  <li><strong>Quest Marker</strong> — avec celui-ci, forte chute FPS possible.</li>
  <li><strong>Shelter Anywhere</strong> — signalements de conflit.</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — casse pannes, chargement progressif et logique armes.</li>
  <li><strong>Smooth Hold Reload</strong> — conflit ; inclus ici avec accord — utilisez le MCM.</li>
</ul>
`,
  },
  'armed-enhancement-weapon-attachment-spawner': {
    title: 'Armed Enhancement – générateur d’accessoires d’armes',
    imageAlt: 'Mod Armed Enhancement – Weapon Attachment Spawner pour Road to Vostok (Nexus Mods)',
    tags: ['Gameplay', 'Armes', 'Variété de loot', 'MCM'],
    comments: [
      {
        author: 'Lisibilité du loot',
        body: 'Optiques et silencieux sur les armes du monde rendent les fouilles moins monotones — toujours du RNG, mais les pics sont plus marqués.',
      },
      {
        author: 'MCM',
        body: 'Les options de chambre après la 1.1.0 méritent un coup d’œil ; je suis resté sur les défauts jusqu’à maîtriser le flux.',
      },
      {
        author: 'Empilement de mods',
        body: 'Avec de gros overhauls d’armes, lisez d’abord l’ordre de chargement sur Nexus avant d’imputer tout à ce pack.',
      },
    ],
    seo: {
      title:
        'Mod Armed Enhancement pour Road to Vostok : accessoires aléatoires et chambre MCM (Peter4Master) | Road To Vostok Guide',
      description:
        'Mod Nexus Road to Vostok : Armed Enhancement – Weapon Attachment Spawner par Peter4Master — armes dans le monde, conteneurs et chez les ennemis peuvent apparaître avec lunettes, silencieux et lasers ; comportement de chambre via MCM. Metro Mod Loader ; téléchargement sur Nexus Mods.',
      keywords:
        'Road to Vostok mod, Armed Enhancement, Weapon Attachment Spawner, Peter4Master, Nexus Mods, accessoires armes, silencieux loot, Metro Mod Loader, MCM, variété loot',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Ce site <strong>n’héberge pas</strong> les fichiers de mods. Utilisez <strong>Ouvrir sur Nexus Mods</strong> dans le panneau latéral pour la page officielle, puis l’onglet <strong>Files</strong> pour l’archive à jour, les sommes de contrôle et les notes de hotfix.
</p>

<p><strong>Côté joueur</strong></p>
<ul>
  <li>Les armes trouvées dans le monde, les conteneurs et sur les ennemis peuvent apparaître avec <strong>lunette</strong>, <strong>silencieux</strong> et <strong>laser</strong> — moins de sensation de « canon nu + chargeur vide » à chaque fois.</li>
  <li>L’auteur parle de <strong>variété aléatoire crédible</strong>, pas d’un kit complet garanti à chaque tirage.</li>
  <li>Les mises à jour récentes (voir changelog Nexus) resserrent les doublons d’accessoires et améliorent le comportement <strong>à tubulure / chambre</strong> ; le <strong>MCM</strong> expose des profils de chambre (toujours prêt, auto à l’équipement, manuel — mélange par défaut).</li>
</ul>

<h2>Pour qui</h2>
<p>
  Si vous voulez de la <strong>variété d’accessoires sur les armes aléatoires</strong> sans placer chaque fusil à la main. À reporter si vous déboguez une liste minimale de mods ; ajoutez une fois Metro Mod Loader et le QoL de base stables.
</p>

<h2>Installation (typique)</h2>
<ol>
  <li>Installez <strong>Metro Mod Loader</strong> selon votre build (démo vs accès anticipé).</li>
  <li>Sur Nexus, onglet <strong>Files</strong> : suivez la disposition actuelle — en général le paquet va dans <code>mods</code> à côté des autres <code>.vmz</code>.</li>
  <li>Si le listing exige le <strong>MCM</strong>, installez-le pour régler chambre et bascules sans éditer des fichiers.</li>
  <li>Après un gros patch jeu, relisez l’onglet <strong>Posts</strong> avant un long run.</li>
</ol>

<h2>Compatibilité &amp; ordre de chargement</h2>
<p>
  Les collisions avec d’autres packs d’armes se règlent sur la description et les posts Nexus. Si vous empilez de gros gameplay (par ex. notre focus sur
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  croisez les notes des deux auteurs avant d’attribuer des balistiques bizarres à ce seul spawner.
</p>

<h2>Sécurité</h2>
<p>
  Téléchargez uniquement via le lien Nexus du panneau latéral ; vérifiez la version avec l’en-tête de page ; sauvegardez avant de changer l’ordre de chargement en pleine campagne.
</p>
`,
  },
  'lootmodifier': {
    title: 'LootModifier',
    loaderName: 'Metro Mod Loader + MCM',
    imageAlt: 'LootModifier pour Road to Vostok — chances de loot, rerolls de conteneurs et plages d’état (Nexus Mods)',
    tags: ['Qualité de vie', 'Loot', 'MCM', 'En cours'],
    comments: [
      {
        author: 'Curseur de difficulté',
        body: 'Ajuster sol vs planque a enfin stoppé ma série de « trois bâtiments vides » sans sensation de cheat — les valeurs MCM se tournent doucement.',
      },
      {
        author: 'Logique de reroll',
        body: 'Le min/max est la star : pousse les conteneurs tristes sans casser les rolls déjà énormes.',
      },
      {
        author: 'Attention',
        body: 'L’auteur prévient : loot au sol garanti peut rarement traverser le sol — je ne l’active qu’en test de route, pas en ironman.',
      },
    ],
    seo: {
      title:
        'Mod LootModifier pour Road to Vostok : chances de loot, rerolls de conteneurs et états (HumbleCorpse) | Road To Vostok Guide',
      description:
        'Mod Nexus LootModifier pour Road to Vostok (HumbleCorpse) : ajuster les chances de loot au sol et en conteneur, reroll entre min/max si trop peu d’objets, modifier les plages d’état pour armes, NVG, lampes ; option de loot au sol garanti (cas limite connu). Requiert MCM et Metro Mod Loader.',
      keywords:
        'Road to Vostok mod, LootModifier, HumbleCorpse, Nexus Mods, chance loot, reroll conteneur, Metro Mod Loader, MCM, état objet, QoL loot',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Ce site <strong>n’héberge pas</strong> les fichiers de mods. Utilisez <strong>Ouvrir sur Nexus Mods</strong> dans le panneau latéral et lisez <strong>Requirements</strong> puis <strong>Files</strong> sur la page auteur avant installation.
</p>

<p><strong>Côté joueur</strong></p>
<ul>
  <li><strong>Réglage du loot</strong> : fréquence du loot au sol et en conteneur — moins de runs affamés ou plus généreux sans reroll manuel du seed entier.</li>
  <li><strong>Reroll de conteneur</strong> : si le spawn est sous votre <strong>minimum</strong>, reroll jusqu’à une valeur entre <strong>minimum et maximum</strong> ; les rolls déjà au-dessus du <strong>maximum</strong> restent intacts.</li>
  <li><strong>Plages d’état</strong> : bandes pour l’usure (armes, NVG, lampes, etc.).</li>
  <li><strong>Option loot au sol garanti</strong> : l’auteur signale un rare passage à travers le sol — à activer en connaissance de cause.</li>
</ul>

<p>
  Décrit sur Nexus comme un outil <strong>en cours</strong> ; pistes futures : armes avec accessoires/chargeurs, loot de l’IA — la page est la feuille de route vivante.
</p>

<h2>Prérequis</h2>
<p>
  L’auteur liste <strong>MCM</strong> et <strong>Metro Mod Loader</strong>. Installez-les pour votre build, récupérez l’archive LootModifier sur Nexus et consultez <strong>Posts</strong> pour la compatibilité.
</p>

<h2>Installation (résumé auteur)</h2>
<ol>
  <li>Placez l’archive dans le dossier <code>mods</code> du jeu.</li>
  <li>Si votre injecteur Vostok ou Metro attend un <code>.vmz</code>, <strong>renommez <code>.zip</code> en <code>.vmz</code></strong> comme indiqué sur Nexus.</li>
  <li>Ouvrez le <strong>MCM</strong> en jeu pour chances, seuils de reroll, courbes d’état et options expérimentales une fois le pack chargé proprement.</li>
</ol>

<h2>Compatibilité</h2>
<p>
  Les mods de loot touchent l’économie et le rythme du stash. Avec de gros packs (par ex.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  lisez les deux auteurs avant d’imputer des spawns bizarres à une seule entrée.
</p>

<h2>Sécurité</h2>
<p>
  Lien Nexus du panneau uniquement ; version alignée sur l’en-tête ; sauvegardes avant de bouger les curseurs en plein run — plusieurs mods sur les tables de loot bouleversent vite les attentes.
</p>
`,
  },
  'suspend-save-resume-exploration': {
    title: 'Suspend Save System (ou « Resume Exploration »)',
    imageAlt: 'Suspend Save / Resume Exploration pour Road to Vostok — quitter hors abri et revenir sur la carte (Nexus Mods)',
    tags: ['Gameplay', 'Interface', 'Qualité de vie', 'Sauvegardes'],
    comments: [
      {
        author: 'Sauveur de session',
        body: 'Enfin quitter après un long raid sans sprinter vers l’abri — sachant que ce n’est pas une sauvegarde rapide, la tension reste.',
      },
      {
        author: 'Reset de carte',
        body: 'J’ai lu les mentions : le loot mondial se reroll à la reprise — je ne m’en sers pas comme pause tactique pour farmer deux fois la même pièce.',
      },
      {
        author: 'Discipline',
        body: 'Crash ou fermeture brutale : pas de suspend — seul le menu in-game compte ; ça impose de quitter proprement.',
      },
    ],
    seo: {
      title:
        'Mod Suspend Save pour Road to Vostok : quitter hors abri &amp; « Resume Exploration » (Levrault) | Road To Vostok Guide',
      description:
        'Mod Nexus Suspend Save System (Resume Exploration) par Levrault : en quittant via le menu du jeu, conserve l’inventaire et le dernier point d’entrée de carte ; bouton « Resume Exploration » dans le menu principal ; emplacement suspend consommé au chargement, pas de quick-save. La mort enlève toujours le loot porté ; l’état de carte n’est pas figé.',
      keywords:
        'Road to Vostok mod, Suspend Save, Resume Exploration, Levrault, Nexus Mods, sauvegarde hors abri, Metro Mod Loader, QoL sauvegarde',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Ce site <strong>n’héberge pas</strong> les fichiers de mods. Utilisez <strong>Ouvrir sur Nexus Mods</strong> dans le panneau latéral, puis l’onglet <strong>Files</strong> pour le nom exact du paquet et les notes d’installation après patchs.
</p>

<p><strong>Côté joueur</strong></p>
<ul>
  <li>Permet de <strong>quitter via le menu du jeu</strong> en plein monde sans sprint préalable vers l’abri, en conservant le <strong>butin d’inventaire</strong> et le <strong>dernier point d’entrée</strong> utilisé sur la carte.</li>
  <li>Ajoute <strong>Resume Exploration</strong> au menu principal : recharge le personnage et vous replace au dernier point d’entrée de la dernière carte jouée.</li>
  <li>Le slot suspend est <strong>consommé au chargement</strong> — l’auteur insiste : <strong>pas de sauvegarde rapide</strong>, la boucle hardcore reste.</li>
  <li><strong>La mort coûte toujours</strong> — le loot porté se perd comme en vanilla.</li>
</ul>

<h2>Ce qui n’est pas volontairement sauvegardé</h2>
<p>
  Seuls l’<strong>inventaire</strong> et le <strong>dernier point d’entrée</strong> voyagent dans le suspend. L’<strong>état de carte</strong> — ennemis, stocks marchands, conteneurs dans le monde — n’est pas figé ; à la reprise, <strong>le loot mondial peut reroll</strong> car le jeu de base centre les saves sur le joueur et l’abri. Traitez cela comme une limite de design, pas un bug de « stash figée ».
</p>

<h2>Quand aucun suspend n’est écrit</h2>
<ul>
  <li>Pas de suspend si <strong>crash</strong> ou <strong>sortie hors menu in-game</strong> — seul le flux de sortie normal hooké par le mod est couvert.</li>
  <li>Gardez des <strong>sauvegardes manuelles</strong> avant de tester de nouvelles piles de mods ; le suspend est un filet, pas un remplacement de copie du dossier de saves.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Suivez le nom d’archive et la structure de l’onglet <strong>Files</strong> sur Nexus.</li>
  <li>La plupart des setups Road to Vostok attendent un dossier <code>mods</code> type <strong>Metro Mod Loader</strong> ; si un renommage <code>.vmz</code> est requis, reproduisez exactement la notice de la page.</li>
  <li>Après installation, testez un cycle suspend sur une sauvegarde jetable avant un ironman long.</li>
</ol>

<h2>Compatibilité</h2>
<p>
  Tout ce qui réécrit menus, mort ou sauvegardes d’abri peut croiser la logique suspend. Avec de lourds packs (par ex.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  lisez les deux auteurs et les <strong>Posts</strong> Nexus avant d’assumer une reprise propre à chaque fois.
</p>

<h2>Sécurité</h2>
<p>
  Lien Nexus du panneau uniquement ; version d’archive alignée sur l’en-tête Nexus ; gardez des saves de rechange — le suspend touche les mêmes nerfs que le permadeath, validez d’abord sur votre build.
</p>
`,
  },
}
