/** FR : mêmes id et ordre des entries qu’en.js — champs texte uniquement */
export default {
  cabin: {
    title: 'Cabane (abri)',
    content:
      'Abri du joueur : sommeil, réserve et systèmes d’abri — nœud des quêtes précoces.',
    entries: [
      {
        title: 'Boucle abri',
        content:
          'Stockez l’équipement, récupérez et bifurquez vers les quêtes précoces depuis un point sûr fixe.',
      },
    ],
  },
  village: {
    title: 'Village',
    content:
      'Hub de départ en zone 05 : marchand généraliste, fouille, nourriture et soins. Des bandits hostiles peuvent apparaître sur les cartes de la zone 05 — restez vigilant sur les approches.',
    imageAlt: 'Hub régional / contexte marchand (Fandom)',
    entries: [
      {
        title: 'Généraliste',
        content:
          'Marchand amical : consommables, soins, matériaux de craft et armes ; réapprovisionnement toutes les 10 minutes ; livraisons niveaux 1–4.',
        imageAlt: 'Marchand généraliste (Fandom)',
      },
      {
        title: 'Bandits',
        content:
          'Faction hostile principale : équipements variés, couverture, embuscades et traque — les spawns dépendent de la carte et des pools.',
        imageAlt: 'Bandits — apparence selon la carte (Fandom)',
      },
      {
        title: 'Fouille et soins',
        content:
          'Nourriture précoce, soins et camelote à vendre — profil de butin typique du hub de départ.',
      },
      {
        title: 'Quêtes du marchand',
        content: 'Lignes de livraison du généraliste (niveaux 1–4) ; listes d’objets sur le wiki.',
      },
    ],
  },
  shipyard: {
    title: 'Chantier naval',
    content:
      'Grande carte zone 05 : marchand Docteur au sous-sol Hamikot Logistics, routes de butin plus lourdes et risque plus élevé que la ligne Village (cartes communautaires).',
    imageAlt: 'Contexte marchand Docteur (Fandom)',
    entries: [
      {
        title: 'Docteur',
        content:
          'Marchand médical : bandages, kits, garrots ; réapprovisionnement toutes les 10 minutes ; livraisons jusqu’au niveau 4.',
        imageAlt: 'Marchand Docteur (Fandom)',
      },
      {
        title: 'Routes plus lourdes',
        content:
          'Meilleur rendement que la route ouverte — planifiez poids, soins et sortie.',
      },
      {
        title: 'Accès sous-sol',
        content:
          'Hamikot Logistics : entrée côté village, attention aux ennemis dans les escaliers vers la salle du Docteur.',
      },
    ],
  },
  highway: {
    title: 'Route',
    content:
      'Couloir ouvert depuis la ligne Village ; déplacement exposé, spots de farm plus légers.',
    entries: [
      {
        title: 'Patrouilles de bandits',
        content:
          'Le terrain dégagé favorise la ligne de vue — bruit et mouvement attirent l’attention.',
      },
      {
        title: 'Fouille en bord de route',
        content: 'Butin léger le long des liaisons ; équilibrez vitesse et exposition.',
      },
    ],
  },
  school: {
    title: 'École',
    content: 'École : accès précoce aux quêtes sciences et ingénierie.',
    entries: [
      {
        title: 'Quêtes sciences & ingénierie',
        content:
          'Crochets de quête liés au cadre école — confirmez les objectifs dans votre build.',
      },
      {
        title: 'Butin institutionnel',
        content: 'Livres, outils et butin lié au craft varient selon les patches.',
      },
    ],
  },
  outpost: {
    title: 'Avant-poste',
    content: 'Avant-poste : accès précoce aux quêtes et au butin de la zone frontalière.',
    entries: [
      {
        title: 'Progression vers la frontière',
        content:
          'Étape avant des franchissements plus durs — voir la page Quêtes pour les règles.',
      },
      {
        title: 'Équipement niveau frontière',
        content: 'Mieux que le début zone 05 ; préparez-vous aux gardes et dangers.',
      },
    ],
  },
  'border-crossing': {
    title: 'Passage frontalier',
    content:
      'Point de contrôle style Finlande–Russie ; gardes, obstacles ou eau selon la route.',
    entries: [
      {
        title: 'Gardes et appui aérien',
        content:
          'Pitch officiel : gardes corrompus, postes armés, possible appel aérien.',
      },
      {
        title: 'Quêtes de passage',
        content: 'Conseils pratiques frontière / Vostok — voir la page Quêtes.',
      },
    ],
  },
  minefield: {
    title: 'Champ de mines',
    content:
      'Danger zone frontalière : bandes minées — planifiez l’itinéraire et l’endurance avant de franchir.',
    entries: [
      {
        title: 'Franchir le danger',
        content:
          'Mouvement lent et délibéré ; évitez de sprinter aveuglément sur un sol suspect.',
      },
    ],
  },
  'water-crossing': {
    title: 'Franchissement d’eau',
    content:
      'Certaines cartes frontalières : bateaux ou gués — préparez la route et le poids de l’équipement.',
    entries: [
      {
        title: 'Bateaux / gués',
        content:
          'Poids et endurance comptent plus quand l’eau est le goulet d’étranglement.',
      },
    ],
  },
  vostok: {
    title: 'Vostok',
    content:
      'Côté russe, fin de partie : enjeux élevés ; le texte boutique lie un risque type permadeath à cet arc.',
    entries: [
      {
        title: 'Armée',
        content:
          'Armes lourdes et pression blindée — dosez soins, munitions et repli.',
      },
      {
        title: 'Butin de fin',
        content: 'Récompenses les plus précieuses ; règles de mort plus sévères qu’en zone 05.',
      },
      {
        title: 'Règles Vostok',
        content: 'Lisez la page Quêtes avant un run bien équipé.',
      },
    ],
  },
  'vostok-military': {
    title: 'Pression militaire (est)',
    content:
      'Opposition et butin plus lourds en poussant à l’est — dosez soins et munitions.',
    entries: [
      {
        title: 'Pression à l’est',
        content:
          'IA plus serrée et meilleur équipement sur les corps — ne restez pas sans réserves.',
      },
      {
        title: 'Butin haut niveau',
        content:
          'La qualité du butin monte avec le risque ; enjeux permadeath sur les cartes Vostok.',
      },
    ],
  },
}
