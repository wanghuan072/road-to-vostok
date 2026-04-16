/**
 * FI — same row shape as guides/articles/en.js.
 */
export default [
  {
    id: 1,
    title: "Road to Vostok: analyyttinen sukellus todelliseen maantieteeseen",
    iframeUrl: "https://www.youtube.com/embed/RsDE26kkAtU",
    description: "Miten kova survival-ammuntapeli nojaa fiktion sijaan Suomen ja Venäjän rajan todelliseen topografiaan ja arkkitehtuuriin — Salpa-linjasta kaupunkirappioon.",
    tags: ["Road to Vostok"],
    publishDate: "2026-03-27",
    imageUrl: "/images/guides/guides01.webp",
    imageAlt: "Road to Vostok — todellisen maailman maantiede",
    seo: {
      title: "Road to Vostok: todellinen maantiede ja karttojen inspiraatio",
      description: "Salpa-linjasta rajanylityspaikkoihin ja Viipuriin: miten Road To Vostok siirtää oikean maiseman ja rakennukset tasoihin ja tunnelmaan.",
      keywords: "Road to Vostok, survival shooter, Salpa Line, Suomen ja Venäjän raja, Viipuri, kova FPS, maantiede, Tenebris Infinite",
    },
    addressBar: "an-analytical-deep-dive-into-its-real-world-geography",
    detailsHtml: `
      <p>Kovissa survival-ammunnoissa ympäristö on harvoin vain tausta — usein se on päävastustaja. <strong>Road to Vostok</strong> rakentaa ahdistavan tunnelman ilman sci-fiä, vaan maantieteellisellä realismilla. Tekijän <em>Tenebris Infinite</em> analyysin mukaan topografia ja arkkitehtuuri ammentavat Suomen ja Venäjän raja-alueesta.</p>
  <p>Todellisen historian ja geopoliittisen jännitteen siirtäminen virtuaalimaisemaan antaa harvinaisen syvyyden yhden kehittäjän projektille. Alla — miten nämä prototyypit tukevat mekaniikkoja ja tunnelmaa.</p>
  <h2><strong>Peli ja konteksti</strong></h2>
  <p>Lyhyesti</p>
  <p> <strong>Nimi</strong></p>
  <p>Road to Vostok</p>
  <p><strong>Kehittäjä</strong></p>
  <p>Antti (solo / Road to Vostok)</p>
  <p><strong>Julkaisu</strong></p>
  <p>TBA (aktiivinen kehitys / varhainen käyttö)</p>
  <p><strong>Genre</strong></p>
  <p>Kova yksinpeli survival-ammunta</p>
  <p><strong>Maailma</strong></p>
  <p>Post-apokalyptinen suomalais-venäläinen raja-alue</p>
  <p><strong>Lähdevideo</strong></p>
  <p>Tenebris Infinite: &quot;The Real World Location Of Road To Vostok&quot;</p>
  <h2><strong>Suomen raja: alue 05 ja Salpan perintö</strong></h2>
  <p>Varhainen pääalue <strong>Area 5</strong> on suhteellisen turvallinen satama ennen vaarallista rajaa; se nojaa kehittäjän juuriseutuihin ja historialliseen <strong>Salpa-linjaan</strong>.</p>
  <p><img src="/images/guides/guides01-01.webp" alt="Suomen rajamaisema ja Salpa-konteksti (kuva 1)" width="50%" style="width: 50%;" /></p>
  <p>Salpa rakennettiin 1940-luvulla jatkosodan aikana: massiivinen bunkkeriverkosto, joka näki vähän taistelua mutta oli lähes valmis. <em>Road to Vostokissa</em> se on satoja betonisia suojia, juoksuhautoja ja tiheää metsää — orgaaninen, historiallisesti perusteltu ympäristö leireille, kauppiaille ja taktiikalle.</p>
  <h3><strong>Todelliset rajanylityspaikat</strong></h3>
  <p>Titteleimiseen Vostokiin tarvitaan rajan ylitys. Todelliset ylitykset <strong>Vaalimaa</strong> ja <strong>Nuijamaa</strong> antavat kontrastin suunnitteluun:</p>
  <p><img src="/images/guides/guides01-02.webp" alt="Vaalimaan rajanylitys — tunnelma" width="50%" style="width: 50%;" /></p>
  <ol>
   <li><strong>Vaalimaa:</strong> kauppa-alueet ja outletit — pelissä tiheä kaupunkimainen lootaus korkealla riskillä.</li>
   <li><strong>Nuijamaa:</strong> maaseuturajaseutu, jossa asutus ja luonto sulautuvat — ahdistava eristyneisyys, metsä luonnollisena suojana.</li>
  </ol>
  <p><img src="/images/guides/guides01-03.webp" alt="Vaalimaan rajanylitys — tunnelma" width="50%" style="width: 50%;" /></p>
  <h2><strong>Venäjän puoli: Vostokin kaupunkirappio</strong></h2>
  <p>Rajan takana selviytymisparadigma muuttuu: metsänaamiosta klaustrofobiseen kaupunkikaaokseen. Tenebris Infinite yhdistää useita todellisia pisteitä Vostokin koviin mekaniikkasiirtymiin:</p>
  <ol>
   <li><strong>Seleznyovo (Celestavo):</strong> brutalistiset tornit, äärimmäinen vertikaalisuus, riskialtis loot ja CQB porraskäytävissä — katso <a href="/guides/apartments-complete-survival-loot-guid">asuntojen opas</a>.</li>
   <li><strong>Viipuri:</strong> rannikkokaupunki historiallisella linnalla — keskiaika ja post-apokaalinen kaupunki ankkurina; vesi yhdistää maan ja taistelut rannalla.</li>
  </ol>
  <p>&quot;Siirtymä alueen 05 metsäsissisodan suhteellisesta turvallisuudesta Vostokin kaupunki-CQB:hen on vahva mekaaninen ja tunnelmallinen dikotomia.&quot;</p>
  <h2><strong>Kritiikki: maantiede sanelee tempoa</strong></h2>
  <p><em>Road to Vostokissa</em> maantiede sanelee suoraan rytmin: karttasuunnittelu pakottaa vaihtamaan selviytymistaktiikkaa.</p>
  <p>Alueella 05 suomalainen maisema ja bunkkerit vaativat kärsivällisyyttä, suojia ja resurssien keruuta; Vostokin kaupunki»lihamylly» poistaa metsälinjan — ahtaat kohdat ja permadeath tekevät virheestä kohtalokkaan.</p>
  <h2><strong>Yhteenveto</strong></h2>
  <p><em>Road to Vostok</em> käyttää todellista maantiedettä konkreettisesti uhkaavaan maailmaan: Salpan historia plus arkkitehtoninen kontrasti rajalla. Kovien survival-fanien kannalta sekä opettavainen että hermoja kiristävä kokemus.</p>
    `,
  },

  {
    id: 2,
    title: "Selviytyminen miinakentästä: taktiikkaopas Road to Vostokiin",
    iframeUrl: "https://www.youtube.com/embed/zmF0pO8h2vk",
    description: "Raja-alueen miinakartta: tunnista miinat, räjäytä ne tulituksella turvalliselta etäisyydeltä ja läpäise portti permadeath-vyöhykkeeseen.",
    tags: ["Road to Vostok miinakenttä"],
    publishDate: "2026-03-27",
    imageUrl: "/images/guides/guides02.webp",
    imageAlt: "Road to Vostok — miinakenttä",
    seo: {
      title: "Miinakenttä Road to Vostokissa: taktiikka ja läpäisy",
      description: "Miinakentän puhdistus: visuaalinen tunnistus, ballistinen detonaatio, tekoälyn asymmetria ja akustiset peitteet — painotus aktiiviseen puhdistukseen.",
      keywords: "Road to Vostok miinakenttä, miinanraivaus, laukaus miinaan, permadeath, FPS-taktiikka, StarVox, miinat",
    },
    addressBar: "surviving-the-Minefield",
    detailsHtml: `
    <p> <strong>Fokus:</strong> taktiikka «Minefield»-kartalle ja räjähteiden neutraloinnille tulituksella.</p>
  <p>Kovassa survivalissa tarvitaan fyysinen kynnys vaikean pelin ja lopullisen rangaistuksen välillä. <em>Road to Vostokissa</em> se on <strong>miinakenttä</strong>. StarVoxin analyysin mukaan viimeiset portit ennen Vostokia: permadeath-vyöhyke, jossa kuolema vie tallennuksen ja varaston. Rajan kuvaa kannattaa tarkastella <a href="/map">interaktiivisella kartalla</a> (Border Zone).</p>
  <p>Täällä tarvitaan malttia ja suunnistusta. Miinakenttä poistaa run-and-gunin ja korvaa sen ballistisella pulmalla ja aistirajoituksilla. Alla <strong>aktiivinen puhdistus laukauksilla</strong>.</p>
  <h2><strong>1. Havaitseminen ja aktiivinen puhdistus</strong></h2>
  <p>Pääuhka ovat miinat, mutta suunnittelu palkitsee havainnoinnin ja toiminnan, ei pelkkää satunnaisuutta.</p>
  <h3><strong>Visuaaliset merkit</strong></h3>
  <p>Miinat eivät ole täysin lumen alla. Etsi lumiselta/roskaiselta pinnalta tummia sylintereitä ja litteitä kohoumia — kosketusräjähdys; liian lähellä vakava vamma, side ei riitä, tarvitaan vakavampaa lääkintää.</p>
  <h3><strong>Ballistinen detonaatio</strong></h3>
  <p><img src="/images/guides/guides02-01.webp" alt="Miinan laukaiseminen Road to Vostokissa" width="50%" style="width: 50%;" /></p>
  <p>Ilman miinanraivausvälineitä jää <strong>ampuminen miinoihin</strong>. Luotettavin tapa — tähdätä näkyvään runkoon/kohoumalle etäältä.</p>
  <p>Tämä antaa:</p>
  <ol>
   <li><strong>Käytävä:</strong> poista välitön uhka ja etene kuolemanvyöhykkeellä.</li>
   <li><strong>Murtuma:</strong> räjähdys voi repiä piikkilangan metsään johtavan ylityksen luona — laukaus miinaan aidan luona avaa läpikulun.</li>
  </ol>
  <p>&quot;Ammun miinoihin päästäkseni läpi… ja repiäkseni verkon&quot; — tyypillinen taktiikka analyyseistä.</p>
  <h2><strong>2. Tekoälyn asymmetria</strong></h2>
  <p>Ydin — staattisten miinojen ja dynaamisten bottien liitto. <em>Road to Vostokissa</em> tekoälyllä ja pelaajalla on eri säännöt.</p>
  <ol>
   <li><strong>Immuniteetti miinoihin:</strong> viholliset eivät laukaise samoja antureita ja liikkuvat metsässä, kun sinut rajoittaa kenttä.</li>
   <li><strong>Geometriset ansat:</strong> tekoäly painaa ristitulella metsälinjalta — seisoa ja ampua miinoihin tekee sinusta maalin; syöksy suojaan — riski piilomiinoista.</li>
   <li><strong>Tornit:</strong> loot ylhäällä, mutta nousu on ansa; tekoäly murskaa ahtaassa portaikossa.</li>
  </ol>
  <h2><strong>3. Aistikuormitus</strong></h2>
  <p>Kovissa peleissä askeleet, lataus, kahina — tässä <strong>kuuloa</strong> käytetään sinua vastaan.</p>
  <p>Helikopteri ympyrässä peittää askeleet ja laukauksen suunnan; yhdessä mäntyjen ja verkon kanssa pakottaa paranoijaiseen 360°-skannaukseen.</p>
  <h2><strong>4. Lääkintä ja kuluma</strong></h2>
  <p>Selviytyminen on resurssisotaa; vamma on raskas.</p>
  <p>Tarkat laukaukset metsästä nopeasti iskevät kypärään, sitten yksi osuma päähän riittää. Tekoälyn aiheuttamat vammat plus omat räjähdysosat vaativat harvoja ensiapupakkauksia ja turniiketteja — muuten et ehdi tutka-aseman ylitykseen.</p>
  <p><strong>Taktiikka:</strong> suunnittele patruunat sekä tekoälytaisteluun että miinojen räjäyttämiseen. Älä mene ilman patruunavarastoa, raskasta lääkintää, kipsiä ja varakypärää. Kaliiperit — <a href="/wiki/ammunition">ammustaulukko</a>.</p>
  <h2><strong>Yhteenveto: viimeinen suodatin</strong></h2>
  <p><em>Road to Vostokin</em> miinakenttä on julma mutta reilu koe: tarvitaan sekä tulitaistelua että metodista miinojen puhdistusta. Tekoälyn asymmetria, helikopterin melu ja kosketusmiinat johtavat Vostokin permadeath-panoksiin — ilman huomiota, kärsivällisyyttä ja tarkkuutta ei läpäistä.</p>
    `,
  },

  {
    id: 3,
    title: "Road to Vostok — asunnot: selviytyminen ja täydellinen loot-opas",
    description: "Vostokin asunnot: reitit, turvalliset pisteet, tynnyrit lämpöön, eliittiloot ja kaupankäyntisykli Generalistin kanssa.",
    tags: ["Road to Vostok asunnot", "loot", "CQB", "kauppias"],
    publishDate: "2026-03-30",
    imageUrl: "/images/guides/guides03.webp",
    imageAlt: "Road to Vostok — asuntoalue",
    seo: {
      title: "Asunnot Road to Vostokissa: loot ja selviytyminen",
      description: "Täysi sykli: yö ja NVG, lämmitys tynnyreillä, sotilaslaatikot ja vihollisten droppi, aseiden vaihto The Generalistille. Varmista Vostok-merkintä kartalta.",
      keywords: "Road to Vostok, asunnot, loot, CQB, Generalist, opas",
    },
    addressBar: "apartments-complete-survival-loot-guid",
    detailsHtml: `
    <iframe name="rtvApartmentsGuideYt" src="https://www.youtube.com/embed/ttvN5s0cdBI" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3><strong>Tärkeät aikaleimat:</strong></h3>
  <ol>
   <li><a href="https://www.youtube.com/embed/ttvN5s0cdBI?start=336&amp;autoplay=1&amp;playsinline=1" target="rtvApartmentsGuideYt">[05:36]</a> — <strong>Sisääntulo alueelle:</strong> tiedustelu NVG:llä ja ensimmäisen talon isku.</li>
   <li><a href="https://www.youtube.com/embed/ttvN5s0cdBI?start=766&amp;autoplay=1&amp;playsinline=1" target="rtvApartmentsGuideYt">[12:46]</a> — <strong>Kylmyys:</strong> sytytä tynnyri ettei jäädy.</li>
   <li><a href="https://www.youtube.com/embed/ttvN5s0cdBI?start=782&amp;autoplay=1&amp;playsinline=1" target="rtvApartmentsGuideYt">[13:02]</a> — <strong>Kauppias:</strong> The Generalist — aseet lääkintää vastaan.</li>
  </ol>
    <p><strong>Tarvitaan kurinalainen CQB, kylmän hallinta tynnyreillä ja kauppias The Generalist. VSS, AK-12 ja vastaavat — raskaista vihollisista ja piilotetuista sotilaslaatikoista.</strong></p>
  <h2><strong>Aluesuunnitelma ja taktiikka</strong></h2>
  <p>Ennen sisääntuloa — <a href="/guides/surviving-the-Minefield">miinakenttä</a> ja juoksuhaut. Sisällä valtava vertikaalisuus. Yö antaa edun partioita vastaan, mutta tarvitaan NVG; pimeissä porraskäytävissä — taskulamppu aseessa, joka paljastaa ulkoa. Tyhjennä huoneet yksi kerrallaan; katolla tarkka-ampujat leikkaavat pihan — suunnittele lähestyminen <a href="/map">kartan</a> mukaan (Vostok-merkintä).</p>
  <p><img src="/images/guides/guides03-01.webp" alt="Kartta ja asuntojen pohja Road to Vostokissa" width="50%" style="width: 50%;" /></p>
  <h2><strong>Suojat ja lepo</strong></h2>
  <p>Kylmyys ja tulitaistelut kuluttavat nopeasti resursseja. Reunalla — majoja ja telttoja. Päämajassa makuupussi: uni palauttaa väsymyksen; telineille voi levittää varusteita ilman repun ylikuormaa.</p>
  <h2><strong>Eliittiloot, sotilaslaatikot, droppi</strong></h2>
  <p>Alueen talous perustuu lootaukseen ja taisteluun. Huoneet antavat arkea, arvo on ylhäällä olevissa sotilaslaatikoissa ja wc-tiloissa. Raskaat rosvot/sotilaat — vakaa lähde AK-12, MP7, VSS, RK-95:lle (luvut — <a href="/wiki/weapons">ase-wiki</a>). IFAK ja kivunlievittäjät harvinaisia — lääkintäkaapit ja ruumiit.</p>
  <p><img src="/images/guides/guides03-02.webp" alt="Tulitaistelu ja loot asunnoissa" width="50%" style="width: 50%;" /></p>
  <h3><strong>Loot lyhyesti</strong></h3>
  <p><strong><a href="/wiki/weapons">Aseet</a></strong></p>
  <p>AK-12, MP7, VSS, RK-95, Glock</p>
  <p>Ruumiit, telineet, katolla tarkka-ampujat</p>
  <p><strong><a href="/getting-started#medical">Lääkintä</a></strong></p>
  <p>IFAK, kivunlievittäjät, sideharsoja, ensiapupakkauksia</p>
  <p>Lääkintäkaapit, droppi, <a href="/wiki/npcs">kauppiaat</a></p>
  <p><strong><a href="/wiki/gathering">Selviytyminen</a></strong></p>
  <p>Ruokavarastoja, makuupussi, talvivaatteet</p>
  <p>Kotikalusteet, majat</p>
  <h2><strong>Tulitynnyrit</strong></h2>
  <p>Jatkuva kylmyys leikkaa taistelukykyä. Sytytä tynnyrit pihalla ja turvallisilla alueilla — ei koriste, vaan lämpötilan palautus ennen kylmän betonin sisään menoa.</p>
  <p><img src="/images/guides/guides03-03.webp" alt="Lämpeneminen tynnyrin äärellä pihalla" width="50%" style="width: 50%;" /></p>
  <h2><strong>Kaupankäynti The Generalistin kanssa</strong></h2>
  <p>Vahvistetussa huoneessa — <a href="/wiki/npcs/generalist">The Generalist</a> (sininen pipo, lasit). Sykli: ylimääräiset ja kuluneet aseet kentältä — arvokasta lääkintää ja patruunoita. Aseiden rahtaaminen tiskille — osa HP:n ylläpitoa.</p>
  <h2><strong>FAQ</strong></h2>
  <h3><strong>Nukkuuko missä vain?</strong></h3>
  <p>Ei — vain merkityissä lepopisteissä (esim. makuupussi majassa).</p>
  <h3><strong>Missä VSS / AK-12?</strong></h3>
  <p>Useimmiten raskaista NPC:istä, erityisesti katolla olevista tarkka-ampujista.</p>
  <h3><strong>Mitä Generalist ottaa?</strong></h3>
  <p>Huoltajan rooli: ylimääräiset aseet kulutustavaroiksi; IFAK ja <a href="/wiki/ammunition">patruunat</a> — kaliiperi-wikin mukaan.</p>
    `,
  },

  {
    id: 4,
    head: `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Road to Vostok: kalastus — pisteet ja hauki",
        "description": "Kalastusopas: vedenalaiset vyöhykkeet, heitto, hauki ja markkinahinnat.",
        "uploadDate": "2024-01-01T00:00:00Z",
        "duration": "PT17M3S",
        "contentUrl": "https://www.youtube.com/watch?v=QVdZjWBqMH4",
        "embedUrl": "https://www.youtube.com/embed/QVdZjWBqMH4",
        "thumbnailUrl": "https://img.youtube.com/vi/QVdZjWBqMH4/maxresdefault.jpg",
        "hasPart": [
          {
            "@type": "Clip",
            "name": "Vedenalaiset kalavyöhykkeet",
            "startOffset": 235,
            "endOffset": 483,
            "url": "https://www.youtube.com/watch?v=QVdZjWBqMH4&t=235s"
          },
          {
            "@type": "Clip",
            "name": "Piste sadevesiputken luona",
            "startOffset": 483,
            "endOffset": 750,
            "url": "https://www.youtube.com/watch?v=QVdZjWBqMH4&t=483s"
          },
          {
            "@type": "Clip",
            "name": "Laiturit ja suuri vyöhyke",
            "startOffset": 750,
            "endOffset": 989,
            "url": "https://www.youtube.com/watch?v=QVdZjWBqMH4&t=750s"
          },
          {
            "@type": "Clip",
            "name": "Markkinahinnat",
            "startOffset": 989,
            "endOffset": 1023,
            "url": "https://www.youtube.com/watch?v=QVdZjWBqMH4&t=989s"
          }
        ]
      }
      </script>`,
    title: "Kalastus Road to Vostokissa: pisteet, onki ja hauki",
    description: "Piilotetut vedenalaiset «kalavyöhykkeet», heitto putken ja laiturin luona — vakaa hauki tehtäviin ja myyntiin kovassa permadeathissa.",
    tags: ["Road to Vostok kalastus", "pisteet", "onki", "hauki"],
    publishDate: "2026-03-30",
    imageUrl: "/images/guides/guides04.webp",
    imageAlt: "Road to Vostok — kalastus",
    seo: {
      title: "Kalastus Road to Vostokissa: pisteet ja hinnat",
      description: "Kalatalous: vyöhykkeet veden alla, putki ja laiturit, hauen farmi. Luvut — kalastus-wikissä.",
      keywords: "Road to Vostok, kalastus, hauki, permadeath, survival",
    },
    addressBar: "how-to-fish",
    detailsHtml: `
<iframe name="rtvFishGuideYt" src="https://www.youtube.com/embed/QVdZjWBqMH4" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<p>Hyppää kohtiin:</p>
<ol>
<li><a href="https://www.youtube.com/embed/QVdZjWBqMH4?start=235&amp;autoplay=1&amp;playsinline=1" target="rtvFishGuideYt">[03:55]</a> — piilotetut vedenalaiset vyöhykkeet</li>
<li><a href="https://www.youtube.com/embed/QVdZjWBqMH4?start=483&amp;autoplay=1&amp;playsinline=1" target="rtvFishGuideYt">[08:03]</a> — putki</li>
<li><a href="https://www.youtube.com/embed/QVdZjWBqMH4?start=750&amp;autoplay=1&amp;playsinline=1" target="rtvFishGuideYt">[12:30]</a> — laiturit</li>
<li><a href="https://www.youtube.com/embed/QVdZjWBqMH4?start=989&amp;autoplay=1&amp;playsinline=1" target="rtvFishGuideYt">[16:29]</a> — hinnat (hauki, ahven jne.)</li>
</ol>
    <p>Kalastus nojaa näkymättömiin vedenalaisiin <strong>vyöhykkeisiin</strong> kiinteällä kalamäärällä. Heitto putken ja laitureiden luona vähentää turhia odotuksia; hauki — tehtäviin ja rahaan permadeathissa. Tiivistelmä — <a href="/wiki/fishing">wiki · kalastus</a>.</p>
  <p><img src="/images/guides/guides04-01.webp" alt="Kalastuskäyttöliittymä" width="50%"></p>
  <h2>Mekaniikan ydin</h2>
  <p>Veden alla staattiset kolliderit-«parvet»; yhdessä vyöhykkeessä yhdestä kalasta parveen. Ohiheitto — pitkä odotus. Ilman kalaa — käänny, peru animaatio, kelaa siima ja heitä toisesta kulmasta.</p>
  <h2>Minne heittää</h2>
  <p>Todetut pisteet — käytä rantaa ja <a href="/map">karttaa</a>.</p>
  <ol>
  <li><strong>Metsä veden äärellä:</strong> tähtäin latvojen yläpuolelle — pitkä heitto staattiseen vyöhykkeeseen.</li>
  <li><strong>Sadevesiputki:</strong> seiso betonilla, tähtäin poijujen väliin, täysi heitto.</li>
  <li><strong>Laiturit:</strong> pää taitettavan tuolin kanssa, linja poijujen välissä — yksi suurimmista vyöhykkeistä.</li>
  </ol>
  <p><img src="/images/guides/guides04-02.webp" alt="Pisteet vedellä" width="50%"></p>
  <h2>Varusteet</h2>
  <p>Ota pois konepistooli/haulikko, onki pääslottiin (<a href="/wiki/weapons">aseet</a>). Kantama ja kaari hiirellä; siima ajautuu takaisin; läpikulku kalallisella vyöhykkeellä antaa nykimisen ilman monimutkaista QTE:tä.</p>
  <h2>Hauki</h2>
  <p>Kallis loot ja tehtäväesine. Osut haukipitoiseen vyöhykkeeseen — nykiminen taattu, kunnes kala on valittu. Laiturit ja metsävyöhykkeet vakaita.</p>
  <p><img src="/images/guides/guides04-03.webp" alt="Hauki" width="50%"></p>
  <h3>Hintaviitteet</h3>
  <p><br>
      <table>
          <thead>
              <tr>
                  <th>Kala</th>
                  <th>Perushinta</th>
                  <th>Mihin</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Pike (hauki)</td>
                  <td>$250</td>
                  <td>Tehtävät / myynti</td>
              </tr>
              <tr>
                  <td>Perch</td>
                  <td>$150</td>
                  <td>Raha</td>
              </tr>
              <tr>
                  <td>Bream</td>
                  <td>$120</td>
                  <td>Raha</td>
              </tr>
              <tr>
                  <td>Roach</td>
                  <td>$50</td>
                  <td>Pieni käteinen</td>
              </tr>
          </tbody>
      </table>
  </p>
  <h3>FAQ</h3>
  <ol>
  <li>Loputon kalan uudelleensynty?</li>
  <li>Ei: jokaisessa vyöhykkeessä kiinteä määrä; voi olla yksi kala.</li>
  <li>Miten tietää, ettei osunut vyöhykkeeseen?</li>
  <li>Ei nykimistä koko siiman matkalla — kelaa ja vaihda kulmaa.</li>
  <li>Miksi hauki?</li>
  <li>$250 kauppiaalla ja usein tehtävissä — kannattaa säästää.</li>
  </ol>`,
  },

  {
    id: 5,
    head: `<script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "VideoObject",
        "name": "Road to Vostok: harjoitusalue — kaikki piiput",
        "description": "Aseiden esittely: vamma, läpäisy, parhaat piiput, kuluma ja korjaus.",
        "uploadDate": "2024-01-01T12:00:00Z",
        "duration": "PT5M52S",
        "contentUrl": "https://www.youtube.com/watch?v=R5721mXs4lY",
        "embedUrl": "https://www.youtube.com/embed/R5721mXs4lY",
        "thumbnailUrl": "https://img.youtube.com/vi/R5721mXs4lY/maxresdefault.jpg",
        "hasPart": [
          {
            "@type": "Clip",
            "name": "Pistoolit ja käyttöliittymä",
            "startOffset": 1,
            "endOffset": 128,
            "url": "https://www.youtube.com/watch?v=R5721mXs4lY&t=1s"
          },
          {
            "@type": "Clip",
            "name": "Pulttilukot korkealla läpäisyllä",
            "startOffset": 128,
            "endOffset": 306,
            "url": "https://www.youtube.com/watch?v=R5721mXs4lY&t=128s"
          },
          {
            "@type": "Clip",
            "name": "Legendaarinen ase",
            "startOffset": 306,
            "endOffset": 352,
            "url": "https://www.youtube.com/watch?v=R5721mXs4lY&t=306s"
          }
        ]
      }
      </script>`,
    title: "Aseet Road to Vostokissa: täydellinen lista ja tehot",
    iframeUrl: "https://www.youtube.com/embed/R5721mXs4lY",
    description: "Noin 20 piipun katsaus: harvinaisuus, kuluma ja korjaus, legendaarit ja läpäisytasot — data harjoitusalueelta loadoutille.",
    tags: ["Road to Vostok aseet", "taulukko", "korjaus", "meta"],
    publishDate: "2026-03-30",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1774839128/cms-uploads/cms-1774839128469-38628608.webp",
    imageAlt: "Road to Vostok — aseet",
    seo: {
      title: "Aseet Road to Vostokissa: luvut ja buildit",
      description: "Kaliiperit, vamma, läpäisy, harvinaisuus, KP-31 ja M78. Taulukot vastaavat wiki-ase-sivua buildisi mukaan.",
      keywords: "Road to Vostok, aseet, lista, legendaarinen, läpäisy, korjaus",
    },
    addressBar: "weapons-list",
    detailsHtml: `<p><strong>Road to Vostokissa</strong> asepaneelit ovat mahdollisimman «kuivia». Harjoitusalueella ~20 piippua: kaliiperi, vamma, läpäisy, kuluma. Ennen vyöhykkeelle lähtöä opi käyttöliittymä ja valitse läpäisy vihollisen panssaria vasten. Hinta, kauppa ja harvinaisuus — <a href="/wiki/weapons">wiki · aseet</a>.</p>
  <iframe name="rtvWeaponsGuideYt" src="https://www.youtube.com/embed/R5721mXs4lY" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <p>Aikaleimat:</p>
  <ol>
  <li><a href="https://www.youtube.com/embed/R5721mXs4lY?start=0&amp;autoplay=1&amp;playsinline=1" target="rtvWeaponsGuideYt">[00:00]</a> — Makarov ja kuluma</li>
  <li><a href="https://www.youtube.com/embed/R5721mXs4lY?start=196&amp;autoplay=1&amp;playsinline=1" target="rtvWeaponsGuideYt">[03:16]</a> — legendaarinen KP-31</li>
  <li><a href="https://www.youtube.com/embed/R5721mXs4lY?start=337&amp;autoplay=1&amp;playsinline=1" target="rtvWeaponsGuideYt">[05:37]</a> — M78 ja läpäisy</li>
  </ol>
  <h2>Taulukko ja harvinaisuus</h2>
  <p>Vostokissa piippujen tuntemus on osa selviytymistä. On selkeä <strong>harvinaisuus</strong>: tavallisesta (Makarov) epätavalliseen, harvinaiseen ja legendaariseen.</p>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1775199602/cms-uploads/cms-1775199602075-445545533.webp" alt="Aseen kunto (Condition)" width="50%"></p>
  <h2>Huolto</h2>
  <p>Etsitään «miten korjata ase»: katso vihreä <strong>Condition: 100%</strong> -indikaattori. Kuluma johtaa vikoihin ja tarkkuuden laskuun — tarvitaan osia/korjaussarjoja.</p>
  <h2>Mikä on «vahvin»?</h2>
  <p>Videon mukaan kaksi huippua:</p>
  <ol>
  <li><strong>KP-31:</strong> legendaarinen; läpäisy 1, mutta rumpu ja tulitaajuus painavat lähietäisyydellä.</li>
  <li><strong>M78:</strong> legendaarinen; vamma 50 ja läpäisy 4 demossa — raskasta panssaria vastaan SVD:n ja Mosinin kanssa.</li>
  </ol>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1775199629/cms-uploads/cms-1775199629391-201412167.webp" alt="Mosin harjoitusalueella" width="50%"></p>
  <h2>Lyhyt taulukko</h2>
  <table>
  <tbody>
  <tr>
  <td>Ase</td>
  <td>Harvinaisuus</td>
  <td>Vamma</td>
  <td>Läpäisy</td>
  </tr>
  <tr><td>Makarov</td><td>Tavallinen</td><td>25</td><td>1</td></tr>
  <tr><td>RM-870</td><td>Epätavallinen</td><td>40</td><td>2</td></tr>
  <tr><td>AK-12</td><td>Epätavallinen</td><td>30</td><td>3</td></tr>
  <tr><td>MP5SD</td><td>Harvinainen</td><td>25</td><td>1</td></tr>
  <tr><td>SVD</td><td>Harvinainen</td><td>50</td><td>4</td></tr>
  <tr><td>KP-31</td><td>Legendaarinen</td><td>25</td><td>1</td></tr>
  <tr><td>M78</td><td>Legendaarinen</td><td>50</td><td>4</td></tr>
  </tbody>
  </table>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1775199649/cms-uploads/cms-1775199649008-580842117.webp" alt="MK18 jne. harjoitusalueella" width="50%"></p>
  <h3>FAQ</h3>
  <p><strong>Virallinen tasoituslista?</strong></p>
  <p>Pelissä on objektiivinen harvinaisuus; Common / Uncommon / Rare / Legendary demosta — viite, M78 ja KP-31 vahvistetut legendaarit.</p>
  <p><strong>Kuinka kriittinen kuluma?</strong></p>
  <p>Käyttöliittymä näyttää 100 %; ajan myötä laskee — korjaa ettei tehokkuus kärsi.</p>
  <p><strong>Panssaria vastaan?</strong></p>
  <p>SVD, Mosin, M78 läpäisyllä 4; M78:lla ja SVD:llä vamma 50 — vahvempi raskaita kohteita vastaan.</p>`,
  },

  {
    id: 6,
    title: "Lataus Road to Vostokissa: haulikot, pulttilukot ja lipastarkistus",
    description: "RM-870 ja Mosin: Ctrl + vasen hiiri patruunaan, laukauksen jälkeen R. Lipastarkistus V-näppäimellä — ei arcadea.",
    tags: ["Road to Vostok", "lataus", "RM-870", "Mosin"],
    publishDate: "2026-04-09",
    imageUrl: "/images/guides/guides06.webp",
    imageAlt: "Road to Vostok — lataus",
    seo: {
      title: "Lataus Road to Vostokissa: haulikko ja pulttilukko",
      description: "Taktinen lataus: Ctrl avaa sulkimen, vasen hiiri syöttää, laukauksen jälkeen R. Harjoittele tutoriaalissa.",
      keywords: "Road to Vostok, lataus, RM-870, Mosin, lipas, V, kova peli",
    },
    addressBar: "reload-shotguns-bolt-actions-magazine-checks",
    detailsHtml: `<h1>Lataus: pulttilukot ja haulikko</h1>
  <p><strong>Lähde:</strong> yhteisön tiivistelmä ja pelaajatestit (esim. MasterDeBunker) — ei arcade; paniikissa unohtunut patruunakammio = kuolema.</p>
  <h2>Perussykli</h2>
  <p>Pulttilukot ja kolmen askeleen manuaalinen sykli:</p>
  <ol>
  <li><strong>Avaa:</strong> <strong>Ctrl</strong> — sulkija/sulkijan runko.</li>
  <li><strong>Syötä:</strong> <strong>vasen hiiri</strong> — yksi patruuna kerrallaan.</li>
  <li><strong>Sulje:</strong> uudelleen <strong>Ctrl</strong>.</li>
  </ol>
  <p><strong>V</strong> — katso jäljellä oleva määrä lipaassa/piipussa.</p>
  <h2>Aseittain</h2>
  <h3>RM-870</h3>
  <p><img src="/images/guides/guides06-01.webp" alt="RM-870 lataus" width="50%"></p>
  <ol>
  <li>Ota RM-870.</li>
  <li>Ctrl — avaa.</li>
  <li>Vasen hiiri 8 patruunaan asti.</li>
  <li>Ctrl — sulje.</li>
  <li>Laukauksen jälkeen <strong>R</strong> — syötä seuraava.</li>
  </ol>
  <h3>Mosin</h3>
  <p>«Miksi ei ammu laukauksen jälkeen?»</p>
  <p><img src="/images/guides/guides06-02.webp" alt="Mosin lataus" width="50%"></p>
  <ol>
  <li>Ota Mosin.</li>
  <li>Ctrl — vedä sulkija taakse.</li>
  <li>Vasen hiiri sisäiseen lippaaseen, 5 patruunaan asti.</li>
  <li>Ctrl — sulkija eteen.</li>
  <li>Laukauksen jälkeen <strong>R</strong>.</li>
  </ol>
  <h2>Tarkistus ja pistoolit</h2>
  <p>Sisäänrakennettu lipas syötetään myös vasemmalla hiirellä yksi kerrallaan; ennen taistelua — <strong>V</strong>.</p>
  <p>Pistoolit yksinkertaisemmat, mutta harjoittele <strong>tutoriaalissa</strong> automaatioksi.</p>`,
  },

  {
    id: 7,
    title: "Kissa Road to Vostokissa: miten löytää ja hoitaa suojassa",
    description: "«Kadonneen kissan» tapahtuma, bunkkeri etuvartiossa, kuljetuslaatikko 3×5, paluu mökkiin — varusteet, reitti ja yhteisön korjaukset.",
    tags: ["Road to Vostok", "kissa", "suoja", "tehtävä"],
    publishDate: "2026-04-09",
    imageUrl: "/images/guides/guides07.webp",
    imageAlt: "Musta kissa laatikossa — suojan kumppani",
    seo: {
      title: "Kissa Road to Vostokissa: etsintä ja hoito",
      description: "4. pelipäivästä tapahtuma, ketju kylä—koulu—etuvartio, mentaali ja reppu; parempi yhdellä juoksulla.",
      keywords: "road to vostok, kissa, suoja, tehtävä, bunkkeri, survival",
    },
    addressBar: "cat-guide-find-care-shelter-companion",
    detailsHtml: `<h1>Kissa: täysi opas</h1>
  <p><strong>Perusta:</strong> useat yhteisön juoksut; kovassa survivalissa «elävä» maksaa — reitti, loot ja tyypilliset virheet.</p>
  <h2>«Kadonnut kissa» -tapahtuman alku</h2>
  <p>Viisi karttasiirtymää (kylä → koulu → etuvartio → koulu → kylä) — vesi ja kestävyys jokaiseen hyppyyn.</p>
  <p><strong>Ehdot</strong></p>
  <ol>
  <li><strong>4. pelipäivästä</strong> tapahtuma saatavilla; voi nopeuttaa unella.</li>
  </ol>
  <p><img src="/images/guides/guides07-01.webp" alt="Kissatapahtuman käyttöliittymä" width="50%"></p>
  <ol>
  <li><strong>Loot:</strong> ruoka ja hoito; osta yleiskauppiaalta <strong>Mental</strong>-tasoa nostavaa — sitä vaikein palauttaa.</li>
  <li><strong>Reppu:</strong> kuljetuslaatikko vie <strong>3×5</strong> — vapauta tila etukäteen.</li>
  <li><strong>Yksi juoksu:</strong> älä poistu pelistä ketjun keskeltä — edistyminen voi nollautua (buildistä riippuen).</li>
  </ol>
  <h2>Reitti: bunkkeri etuvartiossa</h2>
  <p><img src="/images/guides/guides07-02.webp" alt="Reittikartta" width="50%"></p>
  <h3>Vaihe 1: kylä → koulu</h3>
  <p>Yleiskauppiaan täydennyksen jälkeen kierrä järvi oikealta, valtatiellä etsi <strong>koulun</strong> opaste.</p>
  <p>Koulussa sillan yli; keltainen rakennus — <strong>lääkäri</strong> (korkeat maksut). Toivottavasti kipsi ja kivunlievitys.</p>
  <h3>Vaihe 2: koulu → etuvartio</h3>
  <p>Päätie pysäkin ja auton ohi (kuskinpenkissä joskus loot) <strong>etuvartio</strong>-alueelle.</p>
  <p>Etuvartio avoin — tekoäly osuu tarkasti, liiku varovasti.</p>
  <h3>Vaihe 3: bunkkeri</h3>
  <p><img src="/images/guides/guides07-03.webp" alt="Etuvartio ja bunkkeri" width="50%"></p>
  <ol>
  <li>Oikealta spawnista etsi kupoli-bunkkeri kummulle.</li>
  <li>Sisällä kuuluu nau'untaa.</li>
  <li>Vasemmassa huoneessa kaivo laudalla; laatikossa alhaalla musta kissa.</li>
  <li>Ota <strong>kuljetuslaatikko 3×5</strong>.</li>
  </ol>
  <p><img src="/images/guides/guides07-04.webp" alt="Kuljetuslaatikko" width="50%"></p>
  <p>⚠️ Yhteisö (GoyimSlayer2599 jne.): kissa <strong>ei aina samassa kohdassa</strong> — tarkista jopa <strong>kolme bunkkeria</strong> etuvartiossa.</p>
  <h2>Kotiin</h2>
  <p>Paluu etuvartio → koulu → kylä; kuolema kuljetuslaatikon kanssa = ketjun epäonnistuminen.</p>
  <ol>
  <li>Mökissä <strong>Place</strong> kuljetuslaatikko sisälle (ei Drop); sekunteissa avautuu — kissa kiinnitetty.</li>
  </ol>
  <h3>Ruokinta</h3>
  <ol>
  <li>Noin <strong>~36 pelituntia</strong> välein.</li>
  <li>Kissanruoka, tonnikala, liha, ahven — voi jättää mökin varastoon.</li>
  <li>Silitystä ei välttämättä ole — patchin mukaan.</li>
  </ol>
  <h2>Vinkit</h2>
  <ol>
  <li><strong>Kipsi:</strong> murtumia usein — normaali kipsi; <strong>improvisoitu</strong> raporteissa buginen.</li>
  <li><strong>Kartan uudelleensynty:</strong> älä jätä lootia maahan «myöhemmin takaisin» -toivossa.</li>
  <li><strong>Tallennus etuvartiossa:</strong> teltta suojana; Half Burnt Toastin mukaan vasemman reunan varrella.</li>
  <li><strong>Vihollisten spawn:</strong> voi ilmestyä selän taakse tyhjennyksen jälkeen.</li>
  </ol>`,
  },

  {
    id: 8,
    title: "Road to Vostok — suojat: täydellinen kartta ja avausopas",
    description: "Kaikki Road to Vostok -suojat: teltta, bunkkeri, koulu. Luokan avain ja interaktiivinen kartta selviytymiseen.",
    tags: ["Road to Vostok", "Suoja", "Kartta", "Avain"],
    publishDate: "2026-04-14",
    imageUrl: "/images/guides/guides08.webp",
    imageAlt: "Road to Vostok -suojat",
    seo: {
      title: "Road to Vostok — suojat: täydellinen kartta ja avausopas",
      description: "Suojien sijainnit, teltta ja bunkkeri etuvartiossa, koulun luokka, avaimet ja tukikohtalogistiikka; interaktiivinen kartta reiteille.",
      keywords: "road to vostok shelter, suojat, teltta, kartta, bunkkeri, koulu, kissa, luokan avain",
    },
    addressBar: "road-to-vostok-shelter-locations",
    detailsHtml: `<h1>Road to Vostok -suojat: kaikki paikat ja avaukset</h1>
  <p><strong>Road to Vostok</strong> -hardcore-maailmassa suoja on ainoa todella turvallinen tila lootille, palautumiselle ja hengissä pysymiselle — olitpa aloittelija tai loppupelin varustaja.</p>
  <p>Tämä opas kokoaa yhteen tunnetut suojat, avainreitit ja tärkeät mekaniikat yhteisön varmentamien tietojen pohjalta.</p>
  <h2>Suojien jako</h2>
  <p>Kaksi pääryhmää: <strong>avoinna alusta</strong> ja <strong>tehtävillä / avaimilla</strong>. Sijaintien hallinta nopeuttaa farmia karttojen välillä.</p>
  <h3>Aloitussuojat</h3>
  <ol>
  <li><strong>Mökki (kylä):</strong> ensimmäinen suoja — pieni mutta välttämätön varhaiselle varastolle.</li>
  <li><strong>Teltta (etuvartio):</strong> heti käytössä — vasemmalla tullessa <strong>koulusta</strong>, laakson vastapäätä isosta punaisesta navetasta.</li>
  </ol>
  <p><img src="/images/guides/guides08-01.webp" alt="Kylän mökki ja ullakko" width="50%"></p>
  <h3>Avattavat suojat ja stash-pisteet</h3>
  <ol>
  <li><strong>Bunkkeri (etuvartio):</strong> iso huipputason suoja — vaatii varustuksen, <strong>„Punisherin”</strong> kaatamisen, hatun noston ja asepelin tehtävän etuvartiossa.</li>
  </ol>
  <p><img src="/images/guides/guides08-02.webp" alt="Teltta ja bunkkeri etuvartiossa" width="50%"></p>
  <ol>
  <li><strong>Koulun luokka:</strong> <strong>koulu</strong>-kartalla — lukittu luokkahuone, tarvitsee <strong>fyysisen avaimen</strong>.</li>
  </ol>
  <p><img src="/images/guides/guides08-03.webp" alt="Koulun luokka-suoja" width="50%"></p>
  <ol>
  <li><strong>Ullakko:</strong> enemmän tilaa kuin alkumökissä — avain <strong>kauppiaan viimeisestä tehtävästä</strong>.</li>
  </ol>
  <p><br></p>
  <p>!!! <strong>Moottoritietunnelin stash:</strong> piilotettu tunnelissa <strong>Highway</strong>-kartalla — ennemminkin lukittu <strong>stash</strong> kuin täysi suoja, mutta vaatii oman avaimen.</p>
  <h2>Luokan avain ja muut avaimet</h2>
  <ol>
  <li><strong>Kauppiaiden ketjut:</strong> eteneminen — esim. ullakon avain viimeisen tehtävän jälkeen.</li>
  <li><strong>Loot kuumissa paikoissa:</strong> avaimia arvokkaissa vyöhykkeissä — vahvistettu koulun <strong>salissa</strong>, joskus syvällä <strong>Vostokissa</strong> loppupelissä.</li>
  </ol>
  <p><img src="/images/guides/guides08-04.webp" alt="Road to Vostok -avaimet" width="50%"></p>
  <h2>Suojan hallinta</h2>
  <h3>1. F1-sijoittelu</h3>
  <p>Osta kalusteita ja säiliöitä kauppiailta (<strong>lääkäri</strong> hyllyihin suositeltu). Suojassa: <strong>F1</strong> sijoitustilaan; rulla + oikea klikki kiertoon.</p>
  <h3>2. Henkinen tila</h3>
  <p>Tulitaistelujen jälkeen <strong>tuli suojassa</strong> nostaa mental-nopeasti.</p>
  <h3>3. Esineiden menetys</h3>
  <p>Jos kuolema lähestyy suojassa (verenvuoto, tauti), pudota arvokas <strong>lattialle</strong> ennen kuolemaa vähentääksesi varustemenetystä (patchista riippuen).</p>
  <h2>Interaktiivinen kartta</h2>
  <p>Karttayhteydet ratkaisevat — esim. koulun läpi etuvartioon.</p>
  <p>Käytä <a href="https://roadtovostok.org/map">interaktiivista Road to Vostok -karttaa</a> avaimille, spawneille ja turvalliselle reitille bunkkeriin.</p>
  <h2>Yhteisömodit: kissa ja QoL</h2>
  <ol>
  <li><strong>Immortal Cat -tyyppiset:</strong> suojan kissa ei kuole — vähemmän hallintaa.</li>
  <li><strong>Ei nälkää/janoa suojassa:</strong> sopii järjestelyyn ja hyllyihin ilman ruoan tuhlausta.</li>
  </ol>
  <p>(Lisää oppaita: <a href="http://roadtovostok.org/">https://roadtovostok.org/</a>)</p>`,
  }
]
