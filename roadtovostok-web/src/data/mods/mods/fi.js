export default {
  'item-spawner': {
    title: 'Item Spawner',
    imageAlt: 'Item Spawner -modin pikkukuva Road to Vostokille',
    tags: ['Laatu-of-life', 'Itse päivittyvä', 'Next Fest Demo (Godot 4.6)'],
    comments: [
      {
        author: 'Inventaario',
        body: 'Insert avaa paneelin poistumatta loot-syklistä — kätevää testata varusteita uudella hahmolla.',
      },
      {
        author: 'Tilan tallennus',
        body: 'Spawn-ikkuna pysyy seuraavalla inventaarion avauksella — vähemmän pikanäppäimiä reissun keskellä.',
      },
      {
        author: 'Latausjärjestys',
        body: 'Jos asennat isoja pelattavuuspaketteja, lue ensin Workshop-yhteensopivuushuomiot.',
      },
    ],
    seo: {
      title:
        'Item Spawner -modi Road to Vostokille (Ryhon): spawn-valikko QoL ja asennus | Road To Vostok Guide',
      description:
        'Road to Vostok -modi: Item Spawner Ryhonilta — Insert avaa esineiden spawn-valikon inventaarissa (ItemSpawner.vmz). Metro Mod Loader, asennusvaiheet ja yhteensopivuus overhaul-pakettien kanssa.',
      keywords:
        'Road to Vostok mod, Item Spawner, Ryhon, QoL, Metro Mod Loader, spawn inventaarissa, ItemSpawner vmz, Next Fest',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Tämä sivusto <strong>ei isännöi</strong> moditiedostoja. Käytä sivupaneelissa <strong>Avaa ModWorkshopissa</strong> -painiketta ladataksesi <strong>ItemSpawner.vmz</strong> ja varmista, että build vastaa Next Fest -demoasi tai varhaista käyttöä.
</p>

<p><strong>Mitä tekee</strong></p>
<ul>
  <li><strong>Inventaario</strong> auki: paina <strong>Insert</strong> avataksesi spawn-valikon.</li>
  <li>Spawn-ikkuna <strong>pysyy käytettävissä</strong> seuraavalla inventaarion avauksella, kunnes painat <strong>Insert</strong> uudelleen.</li>
  <li>Pieni koko tekijän sivulla; merkitty itse päivittyväksi — tarkista suurten pelipatchien jälkeen.</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Item Spawner -modin kuvakaappaus Road to Vostokille" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>Asennus (tyypillisesti)</h2>
<ol>
  <li>Asenna <strong>Metro Mod Loader</strong> pelin ajantasaisen ohjeen mukaan.</li>
  <li>Aseta <code>ItemSpawner.vmz</code> kansioon <code>mods</code> (jos tekijä muuttaa vaiheita — katso modisivu).</li>
  <li>Mod Organizer 2:lle seuraa tekijän ohjeita.</li>
</ol>

<h2>Yhteensopivuus</h2>
<p>
  Isot paketit voivat merkitä modin yhteensopimattomaksi tietyissä latausjärjestyksissä (esim.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a> mainitsee kaatuksia tietyissä pinossa — osa pelaajista pysyy v1.1.0:ssa).
  Lue tekijän yhteensopivuusosio ennen pakettien pinontaa.
</p>
`,
  },
  'oldmans-immersive-overhaul': {
    title: "Oldman's Immersive Overhaul (modikokoelma)",
    imageAlt: 'Oldman’s Immersive Overhaul -pikkukuva',
    tags: ['Pelattavuus', 'Kokoelma', 'Next Fest Demo', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop',
        body: 'MCM:ssä on helppo säätää bottien ja NVG:n määrää — käy kaikki välilehdet ennen pitkää juoksua.',
      },
      {
        author: 'Latausjärjestys',
        body: 'Poistin ensin tekijän erilliset paketit — duplikaatit aiheuttavat nopeasti konflikteja.',
      },
      {
        author: 'Pelattavuus',
        body: 'Vaiheittainen lataus istuntoa kohden tuntuu reilulta — keskeytys paineen alla reilumpaa kuin koko lipaan menetys.',
      },
      {
        author: 'Yhteensopivuus',
        body: 'Ennen QoL-moodeja tarkista yhteensopimattomuuslista; herätyskellon kelloon katsomisen modi rikkoo tämän paketin ase-logiikan.',
      },
    ],
    seo: {
      title:
        'Immersive Overhaul -modi Road to Vostokille (Oldman): tekoäly, NVG, MCM ja aseet | Road To Vostok Guide',
      description:
        'Road to Vostok -modi: Oldman’s Immersive Overhaul (ImmersiveXP) — vikatilanteet, vaiheittainen lataus, tekoälyn kuulo/näkö, immersiivinen NVG, MCM-kytkimet. Metro Mod Loader, vmz ja latausjärjestys.',
      keywords:
        'Road to Vostok mod, Immersive Overhaul, ImmersiveXP, Oldman, Metro Mod Loader, MCM, vikatilanteet, tekoäly',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Tämä sivusto <strong>ei isännöi</strong> moditiedostoja. Avaa <strong>ModWorkshop</strong> sivupaneelista ja lataa <strong>ImmersiveXP.vmz</strong>, varmista versio demoon tai varhaiseen käyttöön.
</p>

<p><strong>Ennen asennusta</strong></p>
<ul>
  <li>Muiden modien sekoittaminen voi rikkoa juoksun; yhteensopimattomuuslista tekijän sivulla.</li>
  <li>Tekijän erilliset paketit on upotettu tähän — poista duplikaatit latausjärjestyksestä.</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="Pelivideo 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Aseet ja ohjaus</h2>
<ul>
  <li>Aseen kunto ja vikatilanteet: tarkkuus, rekyyli, jumittumisen todennäköisyys; korjaus työkalulaatikolla.</li>
  <li>Vaiheittainen lataus: keskeytys aseen vaihdolla, jatkaminen vaiheesta (lipas voi pudota, jos tilaa ei ole).</li>
  <li>Automaattinen aseiden, veitsien ja kranaattien varustus vapaaseen slottiin; automaattinen ottaminen tyhjillä käsillä.</li>
  <li>Immersiiviset vuorovaikutukset: aseen laskeminen ja lyhyt viive ovilla, säiliöillä ja nostolla.</li>
</ul>

<h2>Tekoälyn overhaul (lyhyesti)</h2>
<ul>
  <li>Näkö: etäisyys valosta, säästä, liikkeestä, sisätiloista, taskulampusta, vaimentimesta; kartio kapenee maksimietäisyydellä ja laajenee sitten.</li>
  <li>Kuulo: pinnat, sisätilat, vuorovaikutukset, sää (ukkonen); reaktio muiden tekoälyjen laukauksiin/räjähdyksiin; vaimentamaton tuli kuuluu kauemmas.</li>
  <li>Lataus (MCM): realistiset lippaskoot, kuivalataus (ääni), taktiset lataukset, päätökset patruunoiden mukaan.</li>
  <li>Tukitus (MCM): enemmän sarjoja; lyhyet purskeet viimeiseen tunnettuun pisteeseen tavoitteen kadotessa.</li>
  <li>Määrä ja käytös (MCM): korkeammat rajat kartalla, reaktiot tulitukseen ja oviin, tarkkuus ja liike.</li>
  <li>Yliäänipamaus luotien lentäessä ohi, viive skaalautuu etäisyydellä.</li>
</ul>

<h2>NVG, kartat ja QoL</h2>
<ul>
  <li>Immersiivinen NVG: suuret tähtäimet törmäävät NVG:hen (piste ok), aseen sumennus, vähemmän kohinaa (osa MCM:ssä).</li>
  <li>Asunnot: enemmän waypointeja, jotta tekoäly menee huoneisiin.</li>
  <li>Taskulamppu, sää, zoom tähtäyksestä ja lukuisia UI/inventaarion muutoksia (lipas repussa ei syötä patruunaa kammioon, animaatio patruunalla piipussa, sprintti/hyppy nousee kyykystä, sprintti laskee aseen, teloitus, patruunatarkistusten korjaukset, patruunoiden näkyvyys lipaassa aseen vaihdon jälneen jne.).</li>
</ul>

<h2>Asennus</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> — vaiheet tekijän ajantasaisella sivulla.</li>
  <li><code>ImmersiveXP.vmz</code> pelin <code>mods</code>-kansioon.</li>
  <li><strong>MCM</strong> — ota käyttöön ja poista käytöstä ominaisuusryhmiä.</li>
</ol>
<p>Ei tarvitse ottaa kaikkea kerralla käyttöön.</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="Pelivideo 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Changelog (2.2.2)</h2>
<p>Korjattu Always Permadeath -haaste; pelaajan havaittavuus tulen äärellä korkeampi; asuntojen waypointtien peruutus, joka vei ovet — täysi lista tekijän sivulla.</p>

<h2>Tunnettuja yhteensopimattomia moodeja (ote)</h2>
<p>Elävä lista tekijällä voi erota.</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — kaatuminen uudelleenlatauksessa; 2.1.5+ kiertotie uudelleennimeämisellä ja järjestyksellä.</li>
  <li><strong>(Bigger) Font Size</strong> — rikkoo vaiheittaisen latauksen; lataa ImmersiveXP:n jälkeen.</li>
  <li><strong>Fly mode</strong> — Controller.gd -konflikti; lentäminen jo tässä paketissa.</li>
  <li><strong>Inventory Improvements</strong> — rikkoo laatikkokorjauksen; kokeile ennen ImmersiveXP:ää.</li>
  <li><strong>Item Spawner</strong> — kaatumisilmoituksia; osa v1.1.0:ssa.</li>
  <li><strong>Quest Marker</strong> — yhdessä voi olla vakava FPS-lasku.</li>
  <li><strong>Shelter Anywhere</strong> — konflikti-ilmoituksia.</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — rikkoo vikatilanteet, vaiheittaisen latauksen ja ase-logiikan.</li>
  <li><strong>Smooth Hold Reload</strong> — konflikti; sisällytetty tähän luvalla — käytä MCM:ää.</li>
</ul>
`,
  },
  'armed-enhancement-weapon-attachment-spawner': {
    title: 'Armed Enhancement – aseen lisävarustespawneri',
    imageAlt: 'Armed Enhancement – Weapon Attachment Spawner -modi Road to Vostokille (Nexus Mods)',
    tags: ['Pelattavuus', 'Aseet', 'Loot-vaihtelu', 'MCM'],
    comments: [
      {
        author: 'Lootin luettavuus',
        body: 'Tähtäimet ja vaimentimet maailma-aseissa tekevät löydöistä vähemmän samanlaisia — RNG säilyy, mutta huiput tuntuvat paremmilta.',
      },
      {
        author: 'MCM',
        body: 'Kammiokäyttäytymisen asetukset kannattaa silmäillä 1.1.0:n jälkeen; pidin oletuksia, kunnes rytmi tuntui varmalta.',
      },
      {
        author: 'Modipino',
        body: 'Jos käytössä isoja ase-overhaul-paketteja, lue Nexusista latausjärjestys ennen kuin syytät vain tätä pakettia.',
      },
    ],
    seo: {
      title:
        'Armed Enhancement -modi Road to Vostokille: lisävarusteet spawneissa ja MCM-kammiot (Peter4Master) | Road To Vostok Guide',
      description:
        'Nexus-modi Road to Vostokille: Armed Enhancement – Weapon Attachment Spawner (Peter4Master) — maailmassa, konteissa ja vihollisilla olevat aseet voivat saada tähtäimiä, vaimentimia ja lasereita; kammiokäyttäytyminen MCM:llä. Metro Mod Loader; lataus Nexus Modsissa.',
      keywords:
        'Road to Vostok mod, Armed Enhancement, Weapon Attachment Spawner, Peter4Master, Nexus Mods, aseen lisävarusteet, vaimennin loot, Metro Mod Loader, MCM, loot-vaihtelu',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Tämä sivusto <strong>ei isännöi</strong> moditiedostoja. Käytä sivupaneelissa <strong>Avaa Nexus Modsissa</strong> siirtyäksesi viralliselle sivulle, sitten välilehteä <strong>Files</strong> uusimman paketin, tarkistussummien ja hotfix-huomioiden vuoksi.
</p>

<p><strong>Pelaajalle</strong></p>
<ul>
  <li>Maailmassa, konteissa ja vihollisilla olevilla aseilla voi olla <strong>tähtäimiä</strong>, <strong>vaimentimia</strong> ja <strong>lasereita</strong> — vähemmän „tyhjä putki + tyhjä lipas” -tunnetta.</li>
  <li>Tekijä korostaa <strong>uskottavaa satunnaista vaihtelua</strong>, ei täyttä pakettia joka nostosta.</li>
  <li>Uudemmat korjaukset (katso Nexus-changelog) tiukentavat duplikaattilisäkkeitä ja parantavat <strong>putki-/kammiokäyttäytymistä</strong>; <strong>MCM</strong> tarjoaa kammiovaihtoehdot (esim. aina valmiina, automaattisesti varustaessa, manuaalisesti — oletuksissa sekoitus).</li>
</ul>

<h2>Kenelle</h2>
<p>
  Kun haluat <strong>lisävarustevaihtelua satunnaisissa aseissa</strong> ilman että asetat jokaisen kiväärin käsin. Jätä pois minimimodilistaa debugatessa; lisää vasta kun Metro Mod Loader ja perus-QoL ovat vakaat.
</p>

<h2>Asennus (tyypillisesti)</h2>
<ol>
  <li>Asenna <strong>Metro Mod Loader</strong> buildisi mukaan (demo vs. early access).</li>
  <li>Nexusissa <strong>Files</strong>-välilehti: seuraa tekijän nykyistä asettelua — paketti yleensä kansioon <code>mods</code> muiden <code>.vmz</code>-tiedostojen viereen.</li>
  <li>Jos listauksessa vaaditaan <strong>MCM</strong>, asenna se säätääksesi kammiota ja kytkimiä ilman tiedostomuokkauksia.</li>
  <li>Isojen pelipäivitysten jälkeen tarkista Nexusin <strong>Posts</strong> ennen pitkää runia.</li>
</ol>

<h2>Yhteensopivuus ja järjestys</h2>
<p>
  Ristiriidat muiden asepakettien kanssa: Nexus-kuvaus ja postaukset ovat totuuslähde. Jos käytät isoja pelattavuuspaketteja (esimerkiksi valokeilamme
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  lue molempien tekijöiden huomiot ennen kuin syytät outoa ballistiikkaa vain tähän spawneriin.
</p>

<h2>Turvallisuus</h2>
<p>
  Lataa vain sivupaneelin Nexus-linkistä; tarkista versionumero sivun otsikosta; varmuuskopioi tallennukset ennen kuin vaihdat latausjärjestystä kesken kampanjan.
</p>
`,
  },
  'lootmodifier': {
    title: 'LootModifier',
    loaderName: 'Metro Mod Loader + MCM',
    imageAlt: 'LootModifier Road to Vostokille — loot-todennäköisyydet, konttien uudelleenheitot ja kuntoalueet (Nexus Mods)',
    tags: ['Laatu-of-life', 'Loot', 'MCM', 'Keskeneräinen'],
    comments: [
      {
        author: 'Vaikeusvipu',
        body: 'Lattian vs. kätkön todennäköisyyksien säätö lopetti „kolme tyhjää rakennusta” -putken ilman huijaustunnetta — MCM-lukuja kannattaa kääntää kevyesti.',
      },
      {
        author: 'Uudelleenheitto',
        body: 'Min/max-reroll on tähti: tönäisee surullisia kaappeja rikkomatta jo isoja heittoja.',
      },
      {
        author: 'Huomio',
        body: 'Tekijä varoittaa: taattu lattialoot voi harvoin pudota maan läpi — käytin vain reittitesteissä, en ironman-tallennuksilla.',
      },
    ],
    seo: {
      title:
        'LootModifier-modi Road to Vostokille: loot-todennäköisyydet, konttien rerollit ja kuntoalueet (HumbleCorpse) | Road To Vostok Guide',
      description:
        'Nexus-modi LootModifier Road to Vostokille (HumbleCorpse): säädä lattia- ja konttilootin todennäköisyyksiä, rerollaa liian tyhjät kontit min–max-välillä, muuta esineiden kuntovyöhykkeitä (aseet, NVG, valot); valinnainen taattu lattialoot (tunnettu reunatapaus). Vaatii MCM:n ja Metro Mod Loaderin.',
      keywords:
        'Road to Vostok mod, LootModifier, HumbleCorpse, Nexus Mods, loot todennäköisyys, kontti reroll, Metro Mod Loader, MCM, esineen kunto, QoL loot',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Tämä sivusto <strong>ei isännöi</strong> moditiedostoja. Käytä <strong>Avaa Nexus Modsissa</strong> -painiketta ja lue Nexus-sivulla <strong>Requirements</strong> ja <strong>Files</strong> ennen asennusta.
</p>

<p><strong>Pelaajalle</strong></p>
<ul>
  <li><strong>Loot-säätö</strong>: kuinka usein lattia- ja konttiloot ilmestyy — vähemmän nälkäkiukkua tai anteliaampaa ilman koko siemenen uudelleenkäynnistystä.</li>
  <li><strong>Kontin reroll</strong>: jos määrä jää alle asetetun <strong>minimin</strong>, modi voi heittää uudelleen <strong>min–max</strong>-välillä; jo maksimin ylittäviä tuloksia ei kosketa.</li>
  <li><strong>Kuntoalueet</strong>: säädä kuluvien esineiden (aseet, NVG, valot jne.) luontokäyttäytymistä.</li>
  <li><strong>Valinnainen taattu lattialoot</strong>: tekijä mainitsee harvinaisen maan läpi putoamisen — käytä tietoisesti.</li>
</ul>

<p>
  Nexus-sivulla kuvattu <strong>kesken oleva</strong> työkalu; suunniteltuja suuntia mm. aseet lisävarusteilla/lippailla ja AI-loot — sivu on elävä tiekartta.
</p>

<h2>Vaatimukset</h2>
<p>
  Tekijä listaa <strong>MCM</strong>:n ja <strong>Metro Mod Loader</strong>in. Asenna molemmat buildisi mukaan, hae LootModifier-arkisto Nexusista ja lue <strong>Posts</strong> yhteensopivuudesta.
</p>

<h2>Asennus (tekijän tiivistelmä)</h2>
<ol>
  <li>Lataa arkisto pelin <code>mods</code>-kansioon.</li>
  <li>Jos Vostok-injektori tai uudempi Metro-työnkulku vaatii <code>.vmz</code>:n, <strong>nimeä <code>.zip</code> → <code>.vmz</code></strong> kuten Nexus-sivulla.</li>
  <li>Avaa <strong>MCM</strong> pelissä säädelläksesi todennäköisyyksiä, reroll-kynnyksiä, käyriä ja kokeellisia kytkimiä, kun paketti latautuu puhtaasti.</li>
</ol>

<h2>Yhteensopivuus</h2>
<p>
  Loot-modit vaikuttavat talouteen ja stash-tempoon. Jos käytössä isoja pelattavuuspaketteja (esim.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  lue molempien tekijöiden huomiot ennen kuin syytät yksittäistä modia outoihin spawneihin.
</p>

<h2>Turvallisuus</h2>
<p>
  Vain Nexus-linkki sivupaneelista; arkiston versio vastaa sivun otsikkoa; varmuuskopioi ennen liukusäätimien säätöä kesken runin — useat modit loot-tauluilla sekoittavat odotukset nopeasti.
</p>
`,
  },
  'suspend-save-resume-exploration': {
    title: 'Suspend Save System (tai „Resume Exploration”)',
    imageAlt: 'Suspend Save / Resume Exploration Road to Vostokille — poistu ilman suojaa ja palaa viimeiselle kartalle (Nexus Mods)',
    tags: ['Pelattavuus', 'Käyttöliittymä', 'Laatu-of-life', 'Tallennukset'],
    comments: [
      {
        author: 'Istuntojen pelastaja',
        body: 'Vihdoin voin lopettaa pitkän raidin ilman sprinttiä suojaan — kun tiedän ettei kyseessä ole pikatallennus, jännite säilyy.',
      },
      {
        author: 'Kartan nollaus',
        body: 'Luin pienellä: maailman loot arvotaan uudelleen jatkaessa — en käytä taktisena taukona saman huoneen kahdesti farmaamiseen.',
      },
      {
        author: 'Kuri',
        body: 'Kaatuminen tai kova sulkeminen ei kirjoita suspendia — vain pelin sisäinen valikko; opetti sulkemaan aina oikein.',
      },
    ],
    seo: {
      title:
        'Suspend Save -modi Road to Vostokille: poistu suojan ulkopuolelta ja „Resume Exploration” (Levrault) | Road To Vostok Guide',
      description:
        'Nexus-modi Suspend Save System (Resume Exploration) Levraultilta: pelin sisäisellä poistumisella tallennetaan inventaario ja viimeinen kartan sisääntulopiste; päävalikon Resume Exploration palauttaa sinne; suspend-paikka kertakäyttöinen, ei pikatallennus. Kuolema vie yhä kannettavan lootin; karttatilaa ei jäädytetä.',
      keywords:
        'Road to Vostok mod, Suspend Save, Resume Exploration, Levrault, Nexus Mods, tallennus suojan ulkopuolella, Metro Mod Loader, QoL tallennus',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Tämä sivusto <strong>ei isännöi</strong> moditiedostoja. Käytä <strong>Avaa Nexus Modsissa</strong> ja hae välilehti <strong>Files</strong> tarkalle arkistonimelle ja päivitysten jälkeisille ohjeille.
</p>

<p><strong>Pelaajalle</strong></p>
<ul>
  <li>Mahdollistaa <strong>poistumisen pelin valikosta</strong> avoimessa maailmassa ilman pakollista suojajuoksua, säilyttäen <strong>inventaarilootin</strong> ja <strong>viimeisen käytetyn sisääntulopisteen</strong>.</li>
  <li>Lisää päävalikkoon <strong>Resume Exploration</strong>: lataa hahmon ja asettaa sinut takaisin viimeiselle sisääntulolle viimeksi pelatulla kartalla.</li>
  <li>Suspend-paikka <strong>kuluu ladattaessa</strong> — tekijän mukaan <strong>ei pikatallennus</strong>, hardcore-silmukka säilyy.</li>
  <li><strong>Kuolema maksaa yhä</strong> — kannettava loot katoaa kuten vaniljassa.</li>
</ul>

<h2>Mitä ei tarkoituksella tallenneta</h2>
<p>
  Listauksen mukaan suspend-tiedostoon jäävät vain <strong>inventaario</strong> ja <strong>viimeinen sisääntulopiste</strong>. <strong>Karttatilaa</strong> — viholliset, kauppiaat, konttien sisältö — ei jäädytetä; jatettaessa <strong>maailman loot voi arvota uudelleen</strong>, koska pelin tallennusmalli keskittyy pelaajaan ja suojaan. Ota reunaehdoksi, ei vikana „jäädytetylle kätkölle”.
</p>

<h2>Milloin suspendia ei kirjoiteta</h2>
<ul>
  <li>Ei suspendia <strong>kaatumisessa</strong> tai <strong>poistuessa pelin valikon ulkopuolelta</strong> — vain modin koukuttama normaali poistumispolku.</li>
  <li>Pidä <strong>manuaalisia varmuuskopioita</strong> ennen uusia modipinoja; suspend ei korvaa tallennuskansion kopioimista.</li>
</ul>

<h2>Asennus</h2>
<ol>
  <li>Noudata Nexusin <strong>Files</strong>-välilehden tarkkaa arkistonimeä ja rakennetta.</li>
  <li>Useimmat Road to Vostok -setit käyttävät <strong>Metro Mod Loader</strong> -tyylistä <code>mods</code>-kansiota; jos tarvitaan <code>.vmz</code>-nimenmuutos, tee täsmälleen kuten tekijä listaa.</li>
  <li>Testaa yksi suspend-sykli heittotallennuksella ennen pitkää ironman-hahmoa.</li>
</ol>

<h2>Yhteensopivuus</h2>
<p>
  Valikko-, kuolema- tai suojatallennusmodit voivat törmätä suspend-logiikkaan. Jos pinoissa raskaita paketteja (esim.
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  lue molempien tekijöiden huomiot ja Nexus-<strong>Posts</strong> ennen kuin oletat puhtaan jatkamisen joka kerta.
</p>

<h2>Turvallisuus</h2>
<p>
  Vain Nexus-linkki sivupaneelista; arkiston versio vastaa Nexus-otsikkoa; pidä ylimääräisiä tallennuksia — suspend koskettaa samoja hermoja kuin permadeath-suunnittelu, joten vakauden vahvistus omalla buildilla ensin.
</p>
`,
  },
}
