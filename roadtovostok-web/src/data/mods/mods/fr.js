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
}
