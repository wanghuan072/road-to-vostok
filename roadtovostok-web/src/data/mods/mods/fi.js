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
}
