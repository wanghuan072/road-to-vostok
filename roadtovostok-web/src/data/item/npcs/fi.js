/**
 * FI: yhdistä addressBarin mukaan en.js:ään. Tehtävien ja esineiden nimet taulukoissa — EN kuten pelissä.
 */
export default {
  bandits: {
    title: 'Rosvot',
    role: 'Vihamielinen faktio',
    imageAlt: 'Eri rosvomalleja — riippuu kartasta',
    summary:
      'Pääasialliset viholliset kartoilla: satunnaiset varusteet, kaksi asetta, tekoäly suojilla, väijytyksillä ja seurannalla sekä yhteisön huomiot.',
    location: {
      title: 'Kylä · alue 05',
      imageAlt: 'Kylän hub — alueen 05 kartan konteksti',
      content:
        'Rosvot partioivat ja väijyttävät alueella 05; kylälinja on tyypillinen varhainen hub, jossa vihamieliset spawnit leikkaavat kauppiaiden ja lootauksen reittejä. Tiheys riippuu kartasta — katso karttamerkki ja tarkista omassa buildissasi.',
    },
    seo: {
      title: 'Rosvot: vihollisten tekoäly, varusteet ja huomiot',
      description:
        'Rosvot Road To Vostokissa: satunnaiset varusteet, seuranta ja väijytys, kaksi asetta, suojat, rajoitettu näkökenttä ja yhteisön havaintojen käytös. Taisteluopas; varmista pelistä.',
      keywords:
        'Road To Vostok, rosvot, vihollisten tekoäly, survival shooter, NPC, taistelu, spawn',
    },
    detailsHtml: `
<p class="npc-lead">Rosvot ovat pelin <strong>päävastustajat</strong>, jotka ilmestyvät kartoille.</p>
<p class="npc-see-also">Katso myös: <strong>paikat ja spawn-tiheys</strong> riippuvat kartasta — tarkista asiakasohjelmasta.</p>

<h2>Varusteet</h2>
<ul>
  <li>Rosvoilla voi olla eri <strong>aseet, varusteet ja loot</strong>; setti riippuu <strong>kartasta</strong> ja <strong>satunnaisesta loot-poolista</strong> NPC:n ilmestyessä.</li>
  <li>Rosvo voi kantaa <strong>kahta asetta</strong>: yksi käsissä, toinen <strong>vyöllä</strong> selässä.</li>
  <li>Muun muassa <strong>päähine</strong> (esim. Polaris) tai <strong>reppuja</strong>, jotka voi ottaa ruumiilta.</li>
</ul>

<h2>Käytös</h2>
<dl class="npc-dl">
  <dt>Pako</dt>
  <dd>Laukaisut tai vakava vamma voivat säikäyttää rosvon pakenemaan.</dd>
  <dt>Suoja</dt>
  <dd>Usein ampuminen suojasta — esim. ikkunasta.</dd>
  <dt>Väijytystila</dt>
  <dd>Rosvo väijyy (usein rakennuksen huoneessa, ovi kiinni) yllätyshyökkäystä varten.</dd>
  <dt>Seuranta</dt>
  <dd>Väijyy tai kävelee hitaasti viimeiseen tunnettuun pelaajan sijaintiin näön tai askelten perusteella.</dd>
</dl>

<h2>Lisää</h2>
<ul>
  <li>Joskus rosvo ampuu <strong>yhden laukauksen</strong> ja juoksee lähimpään suojaan tai rakennukseen.</li>
  <li><strong>Näkökenttä on rajoitettu</strong> — takaa voi lähestyä huomaamattomasti.</li>
</ul>

<h2>Tunnettuja piirteitä (yhteisö)</h2>
<p class="npc-muted">Pelaajien viestit; versiossasi voi olla korjattu.</p>
<ul class="npc-bug-list">
  <li><strong>Pensaissa tai pienissä puissa</strong> pelaaja on lähes näkymätön — rosvo ei välttämättä ammu, mutta likimääräiseen pisteeseen kävely on silti vaarallista.</li>
  <li>Jos katsot <strong>katolta ikkunaan</strong> ja sisällä rosvo on <strong>väijytystilassa</strong>, se voi «jäätyä» eikä reagoi.</li>
  <li>Osalla rosvoista erittäin <strong>hidas</strong> reaktio askeliin — näyttää kuin he lähtisivät, vaikka pelaaja on lähellä.</li>
</ul>
`,
  },
  generalist: {
    title: 'Yleiskauppias',
    role: 'Ystävällinen kauppias · kylän alue',
    imageAlt: 'Yleiskauppias',
    summary:
      'Ystävällinen NPC: myy arvoesineitä tavaroista valikoimasta, täydennys 10 minuutin välein, suojan temppu uuteen satunnaissettiin, toimitukset tasoille 1–4.',
    location: {
      title: 'Kylä',
      imageAlt: 'Alueen hub / kauppiaan konteksti (Fandom)',
      content:
        'Aloitushubi alueella 05: yleiskauppias, lootaus, ruoka ja lääkkeet. Rosvot voivat ilmestyä alueen 05 kartoilla — pysy valppaana lähestymisissä.',
    },
    seo: {
      title: 'Yleiskauppias: kauppiaan tehtävät ja reitti kylässä',
      description:
        'Yleiskauppias Road To Vostokissa: arvoesineiden vaihto varusteisiin, täydennys 10 minuutin välein, päivitys suojan kautta, toimitukset tasoille 1–4 ja reitti kylässä. NPC-opas.',
      keywords:
        'Road To Vostok, yleiskauppias, kauppias NPC, kylä, toimitukset, täydennys',
    },
    detailsHtml: `
<p class="npc-lead">Yleiskauppias (Generalist) on <strong>ystävällinen NPC</strong>, jonka kanssa voi <strong>vaihtaa monenlaisia esineitä</strong>.</p>

<h2>Vaihto</h2>
<p>Mikä tahansa <strong>arvoesine</strong> inventaariosta voidaan myydä kauppiaan valikoimaa vastaan. Usein saatavilla:</p>
<ul>
  <li>Kulutustavarat (ruoka, vesi)</li>
  <li>Tehtäväesineet (esim. Polaris)</li>
  <li>Craft-materiaaleja (esim. kelalanka, levy)</li>
  <li>Lääkkeitä (sideharsoja, ensiapupakkauksia)</li>
  <li>Aseita (esim. Makarov)</li>
</ul>

<h2>Täydennys</h2>
<ul>
  <li>NPC <strong>täydentää varastoa 10 minuutin välein</strong>.</li>
  <li>Kun ajastin on <strong>0:00</strong>, valikoima <strong>vaihtuu</strong>, laskuri alkaa alusta.</li>
  <li>Täydennyksen jälkeen setti on <strong>satunnainen</strong>.</li>
  <li>Nopeammin: palaa <strong>suojaan</strong> ja poistu heti — latauksessa yleiskauppias voi saada <strong>uuden satunnaissetin</strong>.</li>
  <li><strong>Tason</strong> nousu vaikuttaa vain <strong>komissioon</strong>, <strong>ei</strong> tavarataulukkoon.</li>
</ul>

<h2>Tehtävät</h2>
<p class="npc-muted">Nimet ja esineet yhteisöstä; toimitusaseet eivät usein vaadi 100 % kuntoa.</p>

<h3>Taso 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM (ei välttämättä 100%)</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>Taso 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>Taso 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>Taso 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>Huom:</strong> aseen ei tarvitse olla 100 % kunnossa.</p>

<h2>Miten löytää</h2>
<p>Yleiskauppias seisoo hieman sivussa <strong>kylän</strong> spawn-pisteestä. Reitti:</p>
<ol class="npc-steps">
  <li>Kun tulet kylän suojasta, laskeudu <strong>ramppia</strong> pitkin.</li>
  <li><strong>Oikealle</strong> käytävään autotallien väliin.</li>
  <li>Uudelleen <strong>oikealle</strong> ja suoraan autotallien viertä.</li>
  <li>Viimeinen <strong>käänne oikealle</strong> — puoliauki ovet bunkkerissa kivien kanssa.</li>
</ol>
`,
  },
  doctor: {
    title: 'Lääkäri',
    role: 'Ystävällinen kauppias · telakka',
    imageAlt: 'Lääkärikauppias',
    summary:
      'Lääkintäkauppias: sideharsoja, ensiapupakkauksia, turniiketteja; täydennys 10 minuutin välein; komissio tasosta; lääkintätoimitukset tasolle 4; Hamikot Logisticsin kellari telakalla.',
    location: {
      title: 'Telakka',
      imageAlt: 'Lääkärikauppiaan konteksti (Fandom)',
      content:
        'Suuri alueen 05 kartta: lääkäri Hamikot Logisticsin kellarissa; loot-reitit raskaampia ja riski yleensä korkeampi kuin kylälinjalla.',
    },
    seo: {
      title: 'Lääkäri: lääkintävalikoima ja sijainti telakalla',
      description:
        'Lääkärikauppias Road To Vostokissa: lääkkeet, täydennyssykli, toimitukset, reitti Hamikot Logisticsin kellariin. NPC-opas.',
      keywords:
        'Road To Vostok, lääkäri, kauppias, telakka, lääkkeet, tehtävät',
    },
    detailsHtml: `
<p class="npc-lead">Lääkäri (Doctor) on <strong>ystävällinen NPC</strong>, joka myy <strong>lääkintäesineitä</strong>.</p>

<h2>Vaihto</h2>
<p>Vain <strong>lääkintä</strong> — sideharsoja, ensiapupakkauksia, turniiketteja jne.</p>

<h2>Täydennys</h2>
<ul>
  <li>Joka <strong>10 minuuttia</strong>.</li>
  <li><strong>0:00</strong> — uusi setti, edellinen <strong>nollautuu</strong>, ajastin alusta.</li>
  <li>Valikoima <strong>satunnainen</strong>.</li>
  <li><strong>Taso</strong> vaikuttaa <strong>komissioon</strong>, ei tavarataulukkoon.</li>
</ul>

<h2>Tehtävät</h2>

<h3>Taso 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>Taso 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>Taso 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>Taso 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Tehtävä</th><th>Luovuta</th><th>Saat</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>Miten löytää</h2>
<p><strong>Telakan</strong> kartalla, <strong>Hamikot Logisticsin</strong> kellari — <strong>vasemmanpuoleinen ensimmäinen rakennus</strong>, kun tulet kylän puolelta.</p>
<div style="display: flex; justify-content: space-between;">
<ol class="npc-steps">
  <li>Kävele suoraan <strong>ensimmäiseen ristikkoporttiin</strong>.</li>
  <li>Mene sisään ja <strong>vasemmalle</strong>.</li>
  <li>Rakennukseen tullessa <strong>varo vihollisia</strong>.</li>
  <li>Vastakkaisessa kulmassa <strong>alas portaita</strong>.</li>
  <li>Lääkärin huone on <strong>kellarin viimeinen</strong>.</li>
</ol>
  <img src="/images/wiki/npc/doctor-01.webp" alt="Lääkärin sijainti" style="width: 100%; max-width: 300px;">
</div>

`,
  },
  cat: {
    title: 'Kissa (kumppani)',
    role: 'Suojan lemmikki · järjestelmäominaisuus',
    summary:
      'Lemmikki suojassa, pelastusketju ajastuksella (yhteisössä usein «kadonnut kissa»): bunkkeri etuvartiossa / kaivo, iso kissankuljetuslaatikko, sijoitus mökkiin ja säännöllinen ruokinta — ei kauppias eikä vihollinen.',
    location: {
      title: 'Suoja · alueen 05 siirtymät',
      content:
        'Ei kartalla oleva NPC: yhteisön mukaan kissa päätyy mökkiin ketjun jälkeen kylän, koulun ja etuvartion kautta. Kauppiaat näillä kartoilla ovat yleiskauppias ja lääkäri; heidän valikoimansa ja tehtävänsä ovat omissa artikkeleissaan.',
    },
    seo: {
      title: 'Kissakumppani: lemmikki suojassa',
      description:
        'Kissakumppani Road To Vostokissa: suojan lemmikki, «kadonneen kissan» tapahtuma, pelastus etuvartiossa, kuljetuslaatikko, ruokinta. Lyhyt opas; varmista pelistä.',
      keywords:
        'Road To Vostok, kissa, suojan lemmikki, kadonnut kissa, etuvartio, kuljetuslaatikko, varhainen käyttö',
    },
    detailsHtml: `
<p class="npc-lead"><strong>Kissa</strong> on <strong>suojan kumppani</strong> ja <strong>järjestelmäominaisuus</strong>, ei kauppias eikä rosvo. Kehittäjän päivityksissä on näytetty yksityiskohtainen äänitetty kissa <strong>adoptointiin</strong>; pelaajaraportit lisäävät <strong>tehtävätyylisen ajoituksen</strong>, <strong>pelastuksen useilla kartoilla</strong> ja <strong>hoidon mökissä</strong>.</p>
<p class="npc-see-also">Vaiheittainen reitti, valmistautuminen ja tallennusvivahteet — <strong>erillisessä oppaassa</strong> (suunnitteilla osiossa <a href="/guides">Oppaat</a>); tässä lyhyt katsaus.</p>

<h2>Rooli</h2>
<ul>
  <li>Adoptoinnin jälkeen kissa on sidottu <strong>mökkiin / suojaan</strong> <strong>pysyvänä kumppanina</strong> kuvatuissa buildeissa.</li>
  <li>Ei kuten <strong>yleiskauppias</strong> tai <strong>lääkäri</strong> — ei barter-käyttöliittymää; hoito on <strong>ruokinta</strong> ja <strong>sijoitus</strong>.</li>
</ul>

<h2>Hankinta (lyhyesti)</h2>
<ul>
  <li>Yhteisö yhdistää avautumisen <strong>«kadonnut kissa»</strong> -tyyppiseen tapahtumaan useiden pelipäivien kuluessa, joita peli ja <strong>uni</strong> etenevät.</li>
  <li>Tarvitaan yleensä <strong>useita karttasiirtymiä</strong> (usein <strong>kylä → koulu → etuvartio</strong> ja takaisin), kohtaus <strong>bunkkerissa</strong> <strong>etuvartiossa</strong> (kaivo / kansi / laatikko) ja iso <strong>kissankuljetuslaatikko</strong> mökkiin.</li>
  <li><strong>Mikä bunkkeri</strong> — voi vaihdella pelaajien ja patchien mukaan; tarkista asiakasohjelmasta.</li>
</ul>

<h2>Majakkeessa</h2>
<ul>
  <li><strong>Kuljetuslaatikko</strong> asetetaan <strong>mökin sisälle</strong>; lyhyen ajan kuluttua se <strong>avautuu</strong>.</li>
  <li><strong>Ruokinta</strong> yhteisön muistiinpanoissa noin <strong>~36 pelituntia</strong> välein: <strong>kissanruoka</strong>, <strong>kala</strong>, <strong>liha</strong>; voi laittaa <strong>mökin varastoon</strong>, ei vain taskuun.</li>
  <li><strong>Silitys</strong> voi puuttua joissain buildeissa.</li>
</ul>

<h2>Katso myös</h2>
<ul>
  <li><a href="/wiki/npcs/generalist">Yleiskauppias</a> · <a href="/wiki/npcs/doctor">Lääkäri</a> — kauppiaat samalla siirtymäketjulla.</li>
  <li><a href="/wiki/fishing">Kalastus</a> — kala ruokana.</li>
  <li><a href="/map">Kartta</a> — hubit ja poistumiset.</li>
  <li><a href="/guides">Oppaat</a> — täysi kissan analyysi, kun julkaistaan.</li>
</ul>

<p class="npc-muted">Yhteisön yhteenveto, ei virallinen patch-teksti. Eroissa peliin luota asiakkaaseen ja alkuperäislähteisiin.</p>
`,
  },
}
