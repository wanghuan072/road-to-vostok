/**
 * RU: слияние по addressBar с en.js. Названия квестов и предметов в таблицах — EN как в клиенте.
 */
export default {
  bandits: {
    title: 'Бандиты',
    role: 'Враждебная фракция',
    imageAlt: 'Разные модели бандитов — зависят от карты',
    summary:
      'Основные враги на картах: случайные комплекты, два ствола, ИИ с укрытиями, засадами и преследованием, плюс заметки сообщества.',
    location: {
      title: 'Деревня · зона 05',
      imageAlt: 'Хаб деревни — контекст карты зоны 05',
      content:
        'Бандиты патрулируют и устраивают засады по зоне 05; линия «Деревня» — типичный ранний хаб, где враждебные спавны пересекаются с маршрутами торговцев и обыска. Плотность зависит от карты — смотрите метку на карте и проверяйте в своей сборке.',
    },
    seo: {
      title: 'Бандиты: ИИ врагов, снаряжение и замечания',
      description:
        'Бандиты в Road To Vostok: случайные комплекты, преследование и засада, два оружия, укрытия, ограниченный обзор и поведение из заметок сообщества. Справка по бою; сверяйте с игрой.',
      keywords:
        'Road To Vostok, бандиты, ИИ врагов, survival shooter, NPC, бой, спавн',
    },
    detailsHtml: `
<p class="npc-lead">Бандиты — <strong>основные противники</strong> игры, появляющиеся на картах.</p>
<p class="npc-see-also">См. также: <strong>места и частота спавна</strong> зависят от карты — уточняйте в клиенте.</p>

<h2>Снаряжение</h2>
<ul>
  <li>У бандитов может быть разное <strong>оружие, снаряжение и лут</strong>; набор зависит от <strong>карты</strong> и <strong>случайного пула лута</strong> при появлении NPC.</li>
  <li>Бандит может нести <strong>два оружия</strong>: одно в руках, второе на <strong>ремне</strong> за спиной.</li>
  <li>Помимо стрелкового — <strong>голова</strong> (напр. Polaris) или <strong>рюкзаки</strong>, которые можно снять с трупа.</li>
</ul>

<h2>Поведение</h2>
<dl class="npc-dl">
  <dt>Бегство</dt>
  <dd>Срабатывает, если игрок напугал выстрелами или сильно ранил бандита.</dd>
  <dt>Укрытие</dt>
  <dd>Часто стрельба из-за укрытия — например из окна.</dd>
  <dt>Режим засады</dt>
  <dd>Бандит сидит в засаде (часто в комнате здания, дверь закрыта), чтобы внезапно атаковать.</dd>
  <dt>Преследование</dt>
  <dd>Крадётся или медленно идёт к последней известной позиции игрока, ориентируясь на зрение или шаги.</dd>
</dl>

<h2>Дополнительно</h2>
<ul>
  <li>Иногда бандит делает <strong>один выстрел</strong> и бежит к ближайшему укрытию или зданию.</li>
  <li><strong>Поле зрения ограничено</strong> — сзади можно подойти незамеченным.</li>
</ul>

<h2>Известные особенности (сообщество)</h2>
<p class="npc-muted">Сообщения игроков; в вашей версии могут быть исправлены.</p>
<ul class="npc-bug-list">
  <li>В <strong>кустах или мелких деревьях</strong> игрок почти невидим — бандит может не стрелять, но идти к примерной точке всё равно опасно.</li>
  <li>Если смотреть <strong>с улицы в окно</strong>, а внутри бандит в <strong>режиме засады</strong>, он может «зависнуть» и не реагировать.</li>
  <li>У части бандитов очень <strong>медленная</strong> реакция на шаги — кажется, что они уходят, хотя игрок рядом.</li>
</ul>
`,
  },
  generalist: {
    title: 'Универсал',
    role: 'Дружелюбный торговец · зона деревни',
    imageAlt: 'Торговец-универсал',
    summary:
      'Дружелюбный NPC: продавайте ценности за товары из ассортимента, цикл пополнения раз в 10 минут, трюк с убежищем для нового случайного набора, доставки уровней 1–4.',
    location: {
      title: 'Деревня',
      imageAlt: 'Региональный хаб / контекст торговца (Fandom)',
      content:
        'Стартовый хаб зоны 05: универсал, обыск, еда и медикаменты. Бандиты могут появляться на картах зоны 05 — будьте бдительны на подходах.',
    },
    seo: {
      title: 'Универсал: задания торговца и маршрут в деревне',
      description:
        'Торговец-универсал Road To Vostok: обмен ценностей на снаряжение, пополнение раз в 10 минут, обновление через убежище, доставки 1–4 уровня и путь в деревне. Справочник NPC.',
      keywords:
        'Road To Vostok, универсал, торговец NPC, деревня, доставки, пополнение',
    },
    detailsHtml: `
<p class="npc-lead">Универсал (Generalist) — <strong>дружелюбный NPC</strong>, с которым можно <strong>торговать разными предметами</strong>.</p>

<h2>Обмен</h2>
<p>Любые <strong>ценные предметы</strong> из инвентаря можно продать за товары из ассортимента торговца. Часто в наличии:</p>
<ul>
  <li>Расходники (еда, вода)</li>
  <li>Квестовые предметы (напр. Polaris)</li>
  <li>Материалы для крафта (напр. катушка провода, плита)</li>
  <li>Медикаменты (бинты, аптечки)</li>
  <li>Оружие (напр. Makarov)</li>
</ul>

<h2>Пополнение</h2>
<ul>
  <li>NPC <strong>пополняет запасы каждые 10 минут</strong>.</li>
  <li>Когда таймер доходит до <strong>0:00</strong>, ассортимент <strong>заменяется</strong>, отсчёт начинается снова.</li>
  <li>После пополнения набор <strong>случайный</strong>.</li>
  <li>Быстрее: вернуться в <strong>убежище</strong> и сразу выйти — при загрузке универсал может получить <strong>новый случайный набор</strong>.</li>
  <li>Повышение <strong>уровня</strong> влияет только на <strong>комиссию</strong>, <strong>не</strong> на таблицу товаров.</li>
</ul>

<h2>Задания</h2>
<p class="npc-muted">Названия и предметы из сообщества; оружие для доставок часто не требует 100% состояния.</p>

<h3>Уровень 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM (не обязательно 100%)</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>Примечание:</strong> оружие не обязано быть на 100% состояния.</p>

<h2>Как найти</h2>
<p>Универсал стоит чуть в стороне от точки появления в <strong>деревне</strong>. Маршрут:</p>
<ol class="npc-steps">
  <li>Выйдя из убежища деревни, спуститесь по <strong>пандусу</strong>.</li>
  <li><strong>Направо</strong> в проход между гаражами.</li>
  <li>Снова <strong>направо</strong> и прямо вдоль гаражей.</li>
  <li>Последний <strong>поворот направо</strong> — полуоткрытые двери у бункера с камнями.</li>
</ol>
`,
  },
  doctor: {
    title: 'Врач',
    role: 'Дружелюбный торговец · верфь',
    imageAlt: 'Торговец-врач',
    summary:
      'Медторговец: бинты, аптечки, жгуты; пополнение раз в 10 минут; комиссия от уровня; медицинские доставки до 4 уровня; подвал Hamikot Logistics на верфи.',
    location: {
      title: 'Верфь',
      imageAlt: 'Контекст торговца-врача (Fandom)',
      content:
        'Крупная карта зоны 05: врач в подвале Hamikot Logistics; маршруты лута тяжелее и риск обычно выше, чем у линии деревни.',
    },
    seo: {
      title: 'Врач: медицинский ассортимент и место на верфи',
      description:
        'Торговец-врач Road To Vostok: медикаменты, цикл пополнения, доставки, путь в подвал Hamikot Logistics. Справочник NPC.',
      keywords:
        'Road To Vostok, врач, торговец, верфь, медикаменты, задания',
    },
    detailsHtml: `
<p class="npc-lead">Врач (Doctor) — <strong>дружелюбный NPC</strong>, торгующий <strong>медицинскими предметами</strong>.</p>

<h2>Обмен</h2>
<p>Только <strong>медицина</strong> — бинты, аптечки, жгуты и т.п.</p>

<h2>Пополнение</h2>
<ul>
  <li>Каждые <strong>10 минут</strong>.</li>
  <li>В <strong>0:00</strong> — новый набор, предыдущий <strong>сбрасывается</strong>, таймер с нуля.</li>
  <li>Ассортимент <strong>случайный</strong>.</li>
  <li><strong>Уровень</strong> влияет на <strong>комиссию</strong>, не на таблицу товаров.</li>
</ul>

<h2>Задания</h2>

<h3>Уровень 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>Уровень 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Задание</th><th>Сдать</th><th>Получить</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>Как найти</h2>
<p>На карте <strong>верфи</strong>, подвал <strong>Hamikot Logistics</strong> — <strong>первое здание слева</strong> при входе со стороны деревни.</p>
<div style="display: flex; justify-content: space-between;">
<ol class="npc-steps">
  <li>Идите прямо до <strong>первых ворот в решётке</strong>.</li>
  <li>Войдите и идите <strong>влево</strong>.</li>
  <li>При входе в здание <strong>осторожно — враги</strong>.</li>
  <li>В противоположном углу <strong>вниз по лестнице</strong>.</li>
  <li>Комната врача — <strong>последняя в подвале</strong>.</li>
</ol>
  <img src="/images/wiki/npc/doctor-01.webp" alt="Расположение врача" style="width: 100%; max-width: 300px;">
</div>

`,
  },
  cat: {
    title: 'Кот (компаньон)',
    role: 'Питомец убежища · системная механика',
    summary:
      'Питомец в убежище, цепочка спасения на время (в сообществе часто «пропавший кот»): бункер на форпосте / колодец, большая кошачья переноска, размещение в избушке и периодический корм — не торговец и не враг.',
    location: {
      title: 'Убежище · переходы зоны 05',
      content:
        'Не NPC на карте: по отчётам сообщества кот попадает в избушку после цепочки через деревню, школу и форпост. Торговцы на этих картах — универсал и врач; их ассортимент и задания — в отдельных статьях.',
    },
    seo: {
      title: 'Кот-компаньон: питомец убежища',
      description:
        'Кот-компаньон Road To Vostok: питомец убежища, событие в духе «пропавшего кота», спасение на форпосте, переноска, кормление. Краткая справка; сверяйте с игрой.',
      keywords:
        'Road To Vostok, кот, питомец убежища, пропавший кот, форпост, переноска, ранний доступ',
    },
    detailsHtml: `
<p class="npc-lead"><strong>Кот</strong> — <strong>компаньон убежища</strong> и <strong>системная фича</strong>, не торговец и не бандит. В обновлениях разработчика показывали детализированного озвученного кота для <strong>усыновления</strong>; отчёты игроков добавляют <strong>квестоподобный тайминг</strong>, <strong>спасение на нескольких картах</strong> и <strong>уход в избушке</strong>.</p>
<p class="npc-see-also">Пошаговый маршрут, подготовка и нюансы сохранений — в <strong>отдельном гайде</strong> (планируется в разделе <a href="/guides">Гайды</a>); здесь краткая справка.</p>

<h2>Роль</h2>
<ul>
  <li>После усыновления кот привязан к <strong>избушке / убежищу</strong> как <strong>постоянный компаньон</strong> в описанных сборках.</li>
  <li>Не как <strong>универсал</strong> или <strong>врач</strong> — нет интерфейса бартера; уход — <strong>кормление</strong> и <strong>размещение</strong>.</li>
</ul>

<h2>Получение (кратко)</h2>
<ul>
  <li>В сообществе связывают разблокировку с битом в духе <strong>«пропавший кот»</strong> через несколько игровых дней, продвигаемых игрой и <strong>сном</strong>.</li>
  <li>Обычно нужны <strong>несколько переходов между картами</strong> (часто <strong>деревня → школа → форпост</strong> и обратно), сцена в <strong>бункере</strong> на <strong>форпосте</strong> (колодец / крышка / ящик) и перенос большой <strong>кошачьей переноски</strong> в избушку.</li>
  <li><strong>Какой именно бункер</strong> — может отличаться у игроков и патчей; проверяйте в клиенте.</li>
</ul>

<h2>В убежище</h2>
<ul>
  <li><strong>Переноску</strong> ставят <strong>внутри избушки</strong>; через короткое время она <strong>открывается</strong>.</li>
  <li><strong>Кормление</strong> в заметках сообщества примерно раз в <strong>~36 игровых часов</strong>: <strong>корм для кошек</strong>, <strong>рыба</strong>, <strong>мясо</strong>; можно класть в <strong>хранилище избушки</strong>, не только в карман.</li>
  <li><strong>Поглаживание</strong> в некоторых билдах может отсутствовать.</li>
</ul>

<h2>См. также</h2>
<ul>
  <li><a href="/wiki/npcs/generalist">Универсал</a> · <a href="/wiki/npcs/doctor">Врач</a> — торговцы на той же цепочке переходов.</li>
  <li><a href="/wiki/fishing">Рыбалка</a> — рыба как корм.</li>
  <li><a href="/map">Карта</a> — хабы и выходы.</li>
  <li><a href="/guides">Гайды</a> — полный разбор кота, когда выйдет.</li>
</ul>

<p class="npc-muted">Сводка по сообществу, не официальный текст патча. При расхождении с игрой ориентируйтесь на клиент и первоисточники.</p>
`,
  },
}
