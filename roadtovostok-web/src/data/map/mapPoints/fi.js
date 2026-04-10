/** FI: samat id:t ja entries-järjestys kuin en.js — vain tekstikentät */
export default {
  cabin: {
    title: 'Mökki (suoja)',
    content:
      'Pelaajan majake: uni, varasto ja suojajärjestelmät — solmu varhaisiin tehtäviin.',
    entries: [
      {
        title: 'Majakesykli',
        content:
          'Talleta varusteet, toivu ja haarautu varhaisiin tehtäviin kiinteästä turvapisteestä.',
      },
    ],
  },
  village: {
    title: 'Kylä',
    content:
      'Aloitushubi alueella 05: yleiskauppias, lootaus, ruoka ja lääkkeet. Vihamieliset rosvot voivat ilmestyä alueen 05 kartoilla — pysy valppaana lähestymisreiteillä.',
    imageAlt: 'Alueen hub / kauppiaan konteksti (Fandom)',
    entries: [
      {
        title: 'Yleiskauppias',
        content:
          'Ystävällinen kauppias: kulutustavaroita, lääkkeitä, craft-materiaaleja ja aseita; täydennys 10 minuutin välein; toimitustehtävät tasoille 1–4.',
        imageAlt: 'Yleiskauppias (Fandom)',
      },
      {
        title: 'Rosvot',
        content:
          'Pääasiallinen vihollisfaktio kartoilla: vaihtelevat varusteet, suoja, väijytykset ja seuranta — spawnit riippuvat kartasta ja pooleista.',
        imageAlt: 'Rosvot — ulkoasu vaihtelee kartan mukaan (Fandom)',
      },
      {
        title: 'Lootaus ja lääkkeet',
        content:
          'Varhainen ruoka, lääkintä ja romu myyntiin — tyypillinen aloitushubin loot-profiili.',
      },
      {
        title: 'Kauppiaan tehtävät',
        content: 'Yleiskauppiaan toimituslinjat (tasot 1–4); esineluettelot wikissä.',
      },
    ],
  },
  shipyard: {
    title: 'Telakka',
    content:
      'Suurempi alueen 05 kartta: Lääkäri-kauppias Hamikot Logisticsin kellarissa, raskaammat loot-reitit ja korkeampi riski kuin kylälinjalla (yhteisön kartat).',
    imageAlt: 'Lääkärikauppiaan konteksti (Fandom)',
    entries: [
      {
        title: 'Lääkäri',
        content:
          'Lääkintäkauppias: sideharsoja, ensiapupakkauksia, turniiketteja; täydennys 10 minuutin välein; toimitustehtävät tasolle 4 asti.',
        imageAlt: 'Lääkärikauppias (Fandom)',
      },
      {
        title: 'Raskaammat reitit',
        content:
          'Parempi tuotto kuin avoimella maantiellä — suunnittele paino, lääkkeet ja poistumisaika.',
      },
      {
        title: 'Kellariin sisään',
        content:
          'Hamikot Logistics: sisään kylän puolelta, varo vihollisia portaita alas lääkärin huoneeseen.',
      },
    ],
  },
  highway: {
    title: 'Valtatie',
    content:
      'Avoin yhteys kylälinjalta; altis liikkuminen, kevyemmät farmipaikat.',
    entries: [
      {
        title: 'Rosvojen partiot',
        content:
          'Avoin maasto antaa näköetäisyyden — melu ja liike kiinnittävät huomion.',
      },
      {
        title: 'Tienvarren lootaus',
        content: 'Kevyttä lootia yhdistimien varrella; tasapainota nopeus ja paljastuminen.',
      },
    ],
  },
  school: {
    title: 'Koulu',
    content: 'Koulu: varhainen pääsy tieteen- ja insinööritehtäviin.',
    entries: [
      {
        title: 'Tiede- ja insinööritehtävät',
        content:
          'Tehtäväkoukut koulumiljöössä — vahvista tavoitteet omassa buildissasi.',
      },
      {
        title: 'Laitosloot',
        content: 'Kirjat, työkalut ja craftiin liittyvä loot vaihtelee patchin mukaan.',
      },
    ],
  },
  outpost: {
    title: 'Etuvartio',
    content: 'Etuvartio: varhainen pääsy rajavyöhykkeen tehtäviin ja lootiin.',
    entries: [
      {
        title: 'Eteneminen rajalle',
        content:
          'Askele ennen vaikeampia ylityksiä — tarkista säännöt Tehtävät-sivulta.',
      },
      {
        title: 'Rajatason varusteet',
        content: 'Parempaa kuin alueen 05 aloitustaso; valmistaudu vartijoihin ja vaaroihin.',
      },
    ],
  },
  'border-crossing': {
    title: 'Rajanylitys',
    content:
      'Suomi–Venäjä-tyylinen tarkastuspiste; vartijat, esteet tai vesi reitistä riippuen.',
    entries: [
      {
        title: 'Vartijat ja ilmatuki',
        content:
          'Virallinen kuvaus: korruptoituneet vartijat, aseistetut tarkastuspisteet, mahdollinen ilmahälytys.',
      },
      {
        title: 'Ylitystehtävät',
        content: 'Käytännön neuvoja rajasta ja Vostokista — katso Tehtävät-sivu.',
      },
    ],
  },
  minefield: {
    title: 'Miinakenttä',
    content:
      'Rajavyöhykkeen vaara: miinavyöhykkeet — suunnittele reitti ja kestävyys ennen ylitystä.',
    entries: [
      {
        title: 'Vaaran läpäisy',
        content:
          'Hidas, harkittu liike; älä sprinttaa sokeasti epäilyttävään maahan.',
      },
    ],
  },
  'water-crossing': {
    title: 'Vesiylitys',
    content:
      'Joillakin rajakartoilla veneitä tai kahluupaikkoja — tarkista reitin valmistelu ja varusteen paino.',
    entries: [
      {
        title: 'Veneet / kahluu',
        content:
          'Paino ja kestävyys tärkeämpiä, kun vesieste on pullonkaula.',
      },
    ],
  },
  vostok: {
    title: 'Vostok',
    content:
      'Venäjän puoli, loppupeli: korkeat panokset; kaupan kuvaus sitoo permadeath-tyylisen riskin tähän kaareen.',
    entries: [
      {
        title: 'Armeija',
        content:
          'Raskaat aseet ja panssaroitu paine — annostele lääkkeitä, patruunoita ja vetäytymistä.',
      },
      {
        title: 'Loppupelin loot',
        content: 'Arvokkaimmat palkinnot; kuoleman säännöt ankarampia kuin alueella 05.',
      },
      {
        title: 'Vostokin säännöt',
        content: 'Lue Tehtävät-sivu ennen täysin varustettua juoksua.',
      },
    ],
  },
  'vostok-military': {
    title: 'Sotilaallinen paine (itä)',
    content:
      'Raskaampi vastustus ja loot itään työntyessä — annostele lääkkeitä ja patruunoita.',
    entries: [
      {
        title: 'Itäinen paine',
        content:
          'Tiukempi tekoäly ja paremmat varusteet ruumiilla — älä viivy ilman varastoa.',
      },
      {
        title: 'Korkeatason loot',
        content:
          'Lootin laatu nousee riskin mukana; permadeath-panokset koskevat Vostokin karttoja.',
      },
    ],
  },
}
