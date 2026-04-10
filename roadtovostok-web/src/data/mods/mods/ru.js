export default {
  'item-spawner': {
    title: 'Item Spawner',
    imageAlt: 'Миниатюра мода Item Spawner для Road to Vostok',
    tags: ['Качество жизни', 'Самообновление', 'Next Fest Demo (Godot 4.6)'],
    comments: [
      {
        author: 'Инвентарь',
        body: 'Insert открывает панель, не выходя из цикла лута — удобно тестировать снаряжение на новом персонаже.',
      },
      {
        author: 'Сохранение состояния',
        body: 'Окно спавна остаётся при следующем открытии инвентаря — меньше хоткеев посреди рейда.',
      },
      {
        author: 'Порядок загрузки',
        body: 'Если ставите крупные геймплей-паки, сначала прочитайте заметки о несовместимости в Workshop.',
      },
    ],
    seo: {
      title:
        'Мод Item Spawner для Road to Vostok (Ryhon): меню спавна QoL и установка | Road To Vostok Guide',
      description:
        'Мод Road to Vostok: Item Spawner от Ryhon — Insert открывает меню спавна предметов в инвентаре (ItemSpawner.vmz). Metro Mod Loader, шаги установки и совместимость с оверхолами.',
      keywords:
        'Road to Vostok мод, Item Spawner, Ryhon, QoL, Metro Mod Loader, спавн в инвентаре, ItemSpawner vmz, Next Fest',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Этот сайт <strong>не хостит</strong> файлы модов. Используйте кнопку <strong>Открыть на ModWorkshop</strong> в боковой панели, чтобы скачать <strong>ItemSpawner.vmz</strong> и убедиться, что сборка совпадает с вашей демо Next Fest или ранним доступом.
</p>

<p><strong>Что делает</strong></p>
<ul>
  <li>При открытом <strong>инвентаре</strong> нажмите <strong>Insert</strong>, чтобы открыть меню спавна.</li>
  <li>Окно спавна <strong>остаётся доступным</strong> при следующем открытии инвентаря, пока снова не нажмёте <strong>Insert</strong>.</li>
  <li>Небольшой размер на странице автора; помечен как самообновляющийся — перепроверяйте после крупных патчей игры.</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Скриншот мода Item Spawner для Road to Vostok" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>Установка (типично)</h2>
<ol>
  <li>Установите <strong>Metro Mod Loader</strong> по актуальной инструкции к игре.</li>
  <li>Положите <code>ItemSpawner.vmz</code> в папку <code>mods</code> (если автор изменил шаги — смотрите страницу мода).</li>
  <li>Для Mod Organizer 2 следуйте инструкциям автора.</li>
</ol>

<h2>Совместимость</h2>
<p>
  Крупные сборки могут помечать мод несовместимым при некоторых порядках загрузки (например,
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a> упоминает краши в определённых стеках — часть игроков остаётся на v1.1.0).
  Читайте раздел совместимости у автора перед стакингом паков.
</p>
`,
  },
  'oldmans-immersive-overhaul': {
    title: "Oldman's Immersive Overhaul (сборник модов)",
    imageAlt: 'Миниатюра Oldman’s Immersive Overhaul',
    tags: ['Геймплей', 'Сборник', 'Next Fest Demo', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop',
        body: 'В MCM удобно крутить число ботов и ПНВ — пробегите все вкладки перед длинным забегом.',
      },
      {
        author: 'Порядок загрузки',
        body: 'Сначала убрал отдельные пакеты автора — дубликаты быстро дают конфликты.',
      },
      {
        author: 'Геймплей',
        body: 'Поэтапная перезарядка за сессию привыкается — прерывание под давлением честнее, чем потерять весь магазин.',
      },
      {
        author: 'Совместимость',
        body: 'Перед QoL-модами смотрите список несовместимых; мод с часами на будильнике ломает оружейную логику сборки.',
      },
    ],
    seo: {
      title:
        'Мод Immersive Overhaul для Road to Vostok (Oldman): ИИ, ПНВ, MCM и оружие | Road To Vostok Guide',
      description:
        'Мод Road to Vostok: Oldman’s Immersive Overhaul (ImmersiveXP) — осечки, поэтапная перезарядка, слух/зрение ИИ, иммерсивный ПНВ, переключатели MCM. Metro Mod Loader, vmz и порядок загрузки.',
      keywords:
        'Road to Vostok мод, Immersive Overhaul, ImmersiveXP, Oldman, Metro Mod Loader, MCM, осечки, ИИ',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  Этот сайт <strong>не хостит</strong> файлы модов. Откройте <strong>ModWorkshop</strong> из боковой панели и скачайте <strong>ImmersiveXP.vmz</strong>, сверив версию с демо или ранним доступом.
</p>

<p><strong>Перед установкой</strong></p>
<ul>
  <li>Смешивание с другими модами может сломать забег; список несовместимых — на странице автора.</li>
  <li>Отдельные пакеты автора вшиты сюда — уберите дубликаты из порядка загрузки.</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="Геймплейное видео 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Оружие и управление</h2>
<ul>
  <li>Состояние оружия и осечки: точность, отдача, шанс заклинивания; ремонт ящиком с инструментами.</li>
  <li>Поэтапная перезарядка: прерывание сменой оружия, продолжение с этапа (магазин может выпасть, если нет места).</li>
  <li>Автоэкипировка оружия, ножей и гранат при свободном слоте; автодоставание при пустых руках.</li>
  <li>Иммерсивные взаимодействия: опускание оружия и короткая задержка у дверей, контейнеров и подбора.</li>
</ul>

<h2>Оверхол ИИ (кратко)</h2>
<ul>
  <li>Зрение: дистанция от света, погоды, движения, помещений, фонаря, глушителя; конус сужается на максимальной дальности, затем расширяется.</li>
  <li>Слух: поверхности, помещения, взаимодействия, погода (грозы); реакция на выстрелы/взрывы других ИИ; несглушённый огонь игрока слышится дальше.</li>
  <li>Перезарядка (MCM): реалистичные ёмкости магазинов, перезарядка с сухого (звук), тактические перезарядки, решения с учётом патронов.</li>
  <li>Подавление (MCM): больше очередей; короткие залпы в последнюю известную точку при потере цели.</li>
  <li>Численность и поведение (MCM): выше лимиты на карте, реакции на огонь и двери, точность и движение.</li>
  <li>Сверхзвуковой хлопок при пролёте снарядов мимо игрока, задержка масштабируется дистанцией.</li>
</ul>

<h2>ПНВ, карты и QoL</h2>
<ul>
  <li>Иммерсивный ПНВ: крупные прицелы конфликтуют с ПНВ (коллиматоры ок), размытие оружия, меньше шума (часть в MCM).</li>
  <li>Апартаменты: больше вейпоинтов, чтобы ИИ заходил в комнаты.</li>
  <li>Фонарь, погода, зум от прицеливания и множество правок UI/инвентаря (магазин в рюкзаке не досылает патрон в патронник, анимация с патроном в стволе, спринт/прыжок выходят из приседа, спринт опускает оружие, добивание, фиксы проверки патронов, видимость патронов в магазине после смены оружия и т.д.).</li>
</ul>

<h2>Установка</h2>
<ol>
  <li><strong>Metro Mod Loader</strong> — шаги на актуальной странице автора.</li>
  <li><code>ImmersiveXP.vmz</code> в папку <code>mods</code> установки игры.</li>
  <li><strong>MCM</strong> — включайте и выключайте группы функций.</li>
</ol>
<p>Не обязательно включать всё сразу.</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="Геймплейное видео 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Changelog (2.2.2)</h2>
<p>Исправлен челлендж Always Permadeath; выше заметность игрока у огня; откат вейпоинтов апартаментов, из-за которых пропадали двери — полный список на странице автора.</p>

<h2>Известные несовместимые моды (выдержка)</h2>
<p>Живой список у автора может отличаться.</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — краш при перезагрузке; в 2.1.5+ обход переименованием и порядком.</li>
  <li><strong>(Bigger) Font Size</strong> — ломает поэтапную перезарядку; грузить после ImmersiveXP.</li>
  <li><strong>Fly mode</strong> — конфликт Controller.gd; полёт уже в этом паке.</li>
  <li><strong>Inventory Improvements</strong> — ломает ремонт ящиком; попробовать до ImmersiveXP.</li>
  <li><strong>Item Spawner</strong> — сообщения о крашах; часть на v1.1.0.</li>
  <li><strong>Quest Marker</strong> — вместе возможен сильный просад FPS.</li>
  <li><strong>Shelter Anywhere</strong> — сообщения о конфликтах.</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — ломает осечки, поэтапную перезарядку и логику оружия.</li>
  <li><strong>Smooth Hold Reload</strong> — конфликт; включено сюда с разрешения — используйте MCM.</li>
</ul>
`,
  },
}
