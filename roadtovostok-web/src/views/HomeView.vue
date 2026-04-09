<template>
  <div ref="homeRoot" class="home-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-deco hero-deco-compass" aria-hidden="true">
        <svg
          class="compass-svg"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="currentColor"
            stroke-width="0.75"
            opacity="0.35"
          />
          <circle
            cx="100"
            cy="100"
            r="72"
            stroke="currentColor"
            stroke-width="0.5"
            opacity="0.2"
            stroke-dasharray="4 6"
          />
          <path
            d="M100 28v144M28 100h144"
            stroke="currentColor"
            stroke-width="0.5"
            opacity="0.25"
          />
          <path
            d="M100 44l18 52 52 18-52 18-18 52-18-52-52-18 52-18 18-52z"
            fill="currentColor"
            opacity="0.12"
          />
        </svg>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-copy">
            <p class="hero-eyebrow">{{ $t('homePage.hero.eyebrow') }}</p>
            <h1 class="hero-title">
              {{ $t('homePage.hero.title') }}
            </h1>
            <p class="hero-strip" aria-hidden="true">
              <span>{{ $t('homePage.hero.stripShotguns') }}</span>
              <span class="hero-strip-div" />
              <span>{{ $t('homePage.hero.stripTasks') }}</span>
              <span class="hero-strip-div" />
              <span>{{ $t('homePage.hero.stripMedical') }}</span>
            </p>
            <p class="hero-lead">
              {{ $t('homePage.hero.leadBeforeLinks') }}
              <a :href="getLocalizedPath('/getting-started')">{{ $t('homePage.hero.linkStartHere') }}</a>
              {{ $t('homePage.hero.leadAfterStart') }}
              <a :href="getLocalizedPath('/map')">{{ $t('homePage.hero.linkMap') }}</a>
              {{ $t('homePage.hero.leadMid') }}
              <a :href="getLocalizedPath('/tasks')">{{ $t('homePage.hero.linkTasks') }}</a>
              {{ $t('homePage.hero.leadEnd') }}
            </p>
            <div class="hero-actions">
              <a :href="getLocalizedPath('/getting-started')" class="btn btn-primary">{{ $t('homePage.hero.linkStartHere') }}</a>
              <a :href="getLocalizedPath('/guides')" class="btn btn-hero-guides">{{ $t('homePage.hero.btnAdvancedGuides') }}</a>
              <a :href="getLocalizedPath('/map')" class="btn btn-hero-map">{{ $t('homePage.hero.btnInteractiveMap') }}</a>
            </div>
          </div>
          <div class="hero-visual">
            <figure class="hero-frame">
              <span class="hero-frame-corner hero-frame-corner--tl" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--tr" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--bl" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--br" aria-hidden="true" />
              <img
                src="/images/bg.webp"
                alt=""
                width="640"
                height="640"
                class="hero-img"
                decoding="async"
              />
              <figcaption class="hero-caption">
                {{ $t('homePage.hero.caption') }}
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- adx-PC 横幅广告-1 -->
        <aside
          v-if="!isMobile"
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_ban1"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-tag-src="gamtg"
          ></ins>
        </aside>

        <!-- adx-移动 横幅广告-1 -->
        <aside
          v-if="isMobile"
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: inline-block; width: 336px; height: 280px"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_RS_ban3"
            data-tag-src="gamtg"
          >
          </ins>
        </aside>
      </div>
    </section>

    <!-- adx-PC 左侧 skyscraper -->
    <!-- <aside
      v-if="!isMobile"
      style="position: fixed; left: 0; top: 50%; transform: translateY(-50%); z-index: 9999"
    >
      <ins
        class="adsbygoogle"
        style="display: inline-block; width: 300px; height: 600px"
        data-ad-client="ca-pub-9435047454967498"
        data-ad-slot="roadtovostok_Adx_R_R_ban2"
        data-tag-src="gamtg"
      ></ins>
    </aside> -->

    <!-- adx-PC 右侧 skyscraper：若与左侧要不同订单/素材，请在后台使用另一个 ad slot，勿与左侧共用同一单元 -->
    <!-- <aside
      v-if="!isMobile"
      style="position: fixed; right: 0; top: 50%; transform: translateY(-50%); z-index: 9999"
    >
      <ins
        class="adsbygoogle"
        style="display: inline-block; width: 300px; height: 600px"
        data-ad-client="ca-pub-9435047454967498"
        data-ad-slot="roadtovostok_Adx_R_R_ban2"
        data-tag-src="gamtg"
      ></ins>
    </aside> -->

    <!-- Site compass: main nav + deep links (matches live routes) -->
    <section class="home-compass-section">
      <div class="container">
        <div class="home-compass reveal-on-scroll">
          <header class="section-head home-compass__head">
            <span class="section-kicker">{{ $t('homePage.compass.kicker') }}</span>
            <h2>{{ $t('homePage.compass.title') }}</h2>
            <p>
              {{ $t('homePage.compass.intro') }}
            </p>
          </header>

          <div class="home-compass__board">
            <p class="home-compass__board-label" id="home-compass-hubs-label">{{ $t('homePage.compass.boardLabel') }}</p>
            <ul class="home-compass-hubs" role="list" aria-labelledby="home-compass-hubs-label">
              <li>
                <a :href="getLocalizedPath('/getting-started')" class="home-compass-hub">
                  <span class="home-compass-hub__idx" aria-hidden="true">01</span>
                  <span class="home-compass-hub__body">
                    <span class="home-compass-hub__title">{{ $t('homePage.compass.hubs.gettingStarted.title') }}</span>
                    <span class="home-compass-hub__hint">{{ $t('homePage.compass.hubs.gettingStarted.hint') }}</span>
                    <span class="home-compass-hub__path">/getting-started</span>
                  </span>
                  <span class="home-compass-hub__go" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a :href="getLocalizedPath('/wiki')" class="home-compass-hub">
                  <span class="home-compass-hub__idx" aria-hidden="true">02</span>
                  <span class="home-compass-hub__body">
                    <span class="home-compass-hub__title">{{ $t('homePage.compass.hubs.wiki.title') }}</span>
                    <span class="home-compass-hub__hint">{{ $t('homePage.compass.hubs.wiki.hint') }}</span>
                    <span class="home-compass-hub__path">/wiki</span>
                  </span>
                  <span class="home-compass-hub__go" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a :href="getLocalizedPath('/guides')" class="home-compass-hub">
                  <span class="home-compass-hub__idx" aria-hidden="true">03</span>
                  <span class="home-compass-hub__body">
                    <span class="home-compass-hub__title">{{ $t('homePage.compass.hubs.guides.title') }}</span>
                    <span class="home-compass-hub__hint">{{ $t('homePage.compass.hubs.guides.hint') }}</span>
                    <span class="home-compass-hub__path">/guides</span>
                  </span>
                  <span class="home-compass-hub__go" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a :href="getLocalizedPath('/map')" class="home-compass-hub">
                  <span class="home-compass-hub__idx" aria-hidden="true">04</span>
                  <span class="home-compass-hub__body">
                    <span class="home-compass-hub__title">{{ $t('homePage.compass.hubs.map.title') }}</span>
                    <span class="home-compass-hub__hint">{{ $t('homePage.compass.hubs.map.hint') }}</span>
                    <span class="home-compass-hub__path">/map</span>
                  </span>
                  <span class="home-compass-hub__go" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a :href="getLocalizedPath('/tasks')" class="home-compass-hub">
                  <span class="home-compass-hub__idx" aria-hidden="true">05</span>
                  <span class="home-compass-hub__body">
                    <span class="home-compass-hub__title">{{ $t('homePage.compass.hubs.tasks.title') }}</span>
                    <span class="home-compass-hub__hint">{{ $t('homePage.compass.hubs.tasks.hint') }}</span>
                    <span class="home-compass-hub__path">/tasks</span>
                  </span>
                  <span class="home-compass-hub__go" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- GAM 广告位 1 -->
        <div
          ref="gptBannerRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
      </div>
    </section>

    <div class="container">
      <!-- adx-PC 横幅广告-2（与 Hero 内 ban1 同结构） -->
      <aside
        v-if="!isMobile"
        style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
      >
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-9435047454967498"
          data-ad-slot="roadtovostok_Adx_ban1"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-tag-src="gamtg"
        ></ins>
      </aside>

      <!-- adx-移动 横幅广告-2 -->
      <aside
          v-if="isMobile"
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: inline-block; width: 336px; height: 280px"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_RS_ban3"
            data-tag-src="gamtg"
          >
          </ins>
        </aside>
    </div>

    <!-- Wiki + guides: editorial intro + compact entry list; cards only for deep links -->
    <section class="featured-section">
      <div class="container">
        <div class="featured-split reveal-on-scroll">
          <div class="featured-split-intro">
            <header class="section-head">
              <span class="section-kicker">{{ $t('homePage.featured.kicker') }}</span>
              <h2>{{ $t('homePage.featured.title') }}</h2>
              <p>
                {{ $t('homePage.featured.introBeforeGuides') }}
                <a :href="getLocalizedPath('/guides')">{{ $t('homePage.featured.linkGuides') }}</a>{{ $t('homePage.featured.introBeforeMap') }}
                <a :href="getLocalizedPath('/map')">{{ $t('homePage.featured.linkMap') }}</a>
                {{ $t('homePage.featured.leadMid') }}
                <a :href="getLocalizedPath('/tasks')">{{ $t('homePage.featured.linkTasks') }}</a>
                {{ $t('homePage.featured.introEnd') }}
              </p>
            </header>
            <p id="gear-cross-label" class="gear-cross-label">{{ $t('homePage.featured.entryPointsLabel') }}</p>
            <ul class="gear-cross-list" role="list" aria-labelledby="gear-cross-label">
              <li>
                <a :href="getLocalizedPath('/wiki')" class="gear-cross-link">{{ $t('homePage.featured.crossWikiLabel') }}</a>
                <span class="gear-cross-hint">{{ $t('homePage.featured.crossWikiHint') }}</span>
              </li>
              <li>
                <a :href="getLocalizedPath('/guides')" class="gear-cross-link">{{ $t('homePage.featured.crossGuidesLabel') }}</a>
                <span class="gear-cross-hint">{{ $t('homePage.featured.crossGuidesHint') }}</span>
              </li>
              <li>
                <a :href="getLocalizedPath('/map')" class="gear-cross-link">{{ $t('homePage.featured.crossMapLabel') }}</a>
                <span class="gear-cross-hint">{{ $t('homePage.featured.crossMapHint') }}</span>
              </li>
              <li>
                <a :href="getLocalizedPath('/tasks')" class="gear-cross-link">{{ $t('homePage.featured.crossTasksLabel') }}</a>
                <span class="gear-cross-hint">{{ $t('homePage.featured.crossTasksHint') }}</span>
              </li>
            </ul>
          </div>
          <div class="featured-catalog-wrap">
            <p id="gear-catalog-label" class="gear-catalog-label">{{ $t('homePage.featured.popularPicksLabel') }}</p>
            <ul class="featured-catalog" role="list" aria-labelledby="gear-catalog-label">
              <li class="featured-catalog-item">
                <a :href="getLocalizedPath('/wiki/weapons')" class="featured-catalog-link">
                  <span class="featured-catalog-accent" aria-hidden="true" />
                  <div class="featured-catalog-body">
                    <span class="featured-catalog-kicker">{{ $t('homePage.featured.catalog.weapons.kicker') }}</span>
                    <h3 class="featured-catalog-title">
                      {{ $t('homePage.featured.catalog.weapons.title') }}
                    </h3>
                    <p class="featured-catalog-blurb">
                      {{ $t('homePage.featured.catalog.weapons.blurb') }}
                    </p>
                    <span class="featured-catalog-path">/wiki/weapons</span>
                  </div>
                  <span class="featured-catalog-go" aria-hidden="true">→</span>
                </a>
              </li>
              <li class="featured-catalog-item">
                <a :href="getLocalizedPath('/wiki/npcs')" class="featured-catalog-link">
                  <span class="featured-catalog-accent" aria-hidden="true" />
                  <div class="featured-catalog-body">
                    <span class="featured-catalog-kicker">{{ $t('homePage.featured.catalog.npcs.kicker') }}</span>
                    <h3 class="featured-catalog-title">
                      {{ $t('homePage.featured.catalog.npcs.title') }}
                    </h3>
                    <p class="featured-catalog-blurb">
                      {{ $t('homePage.featured.catalog.npcs.blurb') }}
                    </p>
                    <span class="featured-catalog-path">/wiki/npcs</span>
                  </div>
                  <span class="featured-catalog-go" aria-hidden="true">→</span>
                </a>
              </li>
              <li class="featured-catalog-item">
                <a :href="getLocalizedPath('/wiki/core-tasks')" class="featured-catalog-link">
                  <span class="featured-catalog-accent" aria-hidden="true" />
                  <div class="featured-catalog-body">
                    <span class="featured-catalog-kicker">{{ $t('homePage.featured.catalog.coreTasks.kicker') }}</span>
                    <h3 class="featured-catalog-title">
                      {{ $t('homePage.featured.catalog.coreTasks.title') }}
                    </h3>
                    <p class="featured-catalog-blurb">
                      {{ $t('homePage.featured.catalog.coreTasks.blurb') }}
                    </p>
                    <span class="featured-catalog-path">/wiki/core-tasks</span>
                  </div>
                  <span class="featured-catalog-go" aria-hidden="true">→</span>
                </a>
              </li>
              <li class="featured-catalog-item">
                <a :href="getLocalizedPath('/guides/surviving-the-Minefield')" class="featured-catalog-link">
                  <span class="featured-catalog-accent" aria-hidden="true" />
                  <div class="featured-catalog-body">
                    <span class="featured-catalog-kicker">{{ $t('homePage.featured.catalog.minefield.kicker') }}</span>
                    <h3 class="featured-catalog-title">
                      {{ $t('homePage.featured.catalog.minefield.title') }}
                    </h3>
                    <p class="featured-catalog-blurb">
                      {{ $t('homePage.featured.catalog.minefield.blurb') }}
                    </p>
                    <span class="featured-catalog-path">/guides/surviving-the-Minefield</span>
                  </div>
                  <span class="featured-catalog-go" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Questline -->
    <section class="questline-section">
      <div class="container">
        <div class="questline-content reveal-on-scroll">
          <header class="section-head">
            <span class="section-kicker">{{ $t('homePage.quest.progression.kicker') }}</span>
            <h2>{{ $t('homePage.quest.progression.title') }}</h2>
            <p>
              {{ $t('homePage.quest.official.leadBefore') }}
              <a href="https://www.roadtovostok.com/game" rel="noopener noreferrer" target="_blank"
                >{{ $t('homePage.quest.official.linkLabel') }}</a
              ><span v-html="$t('homePage.quest.official.afterLinkHtml')"></span>
            </p>
            <p>
              <span v-html="$t('homePage.quest.sandbox.beforeLinksHtml')"></span>
              <a :href="getLocalizedPath('/map')">{{ $t('homePage.quest.inline.linkMap') }}</a>{{ $t('homePage.quest.inline.commaAfterMap') }}
              <a :href="getLocalizedPath('/tasks')">{{ $t('homePage.quest.inline.linkTasks') }}</a>{{ $t('homePage.quest.inline.midAndNpcs') }}
              <a :href="getLocalizedPath('/wiki/npcs')">{{ $t('homePage.quest.inline.linkNpcs') }}</a>{{ $t('homePage.quest.inline.beforeStartHere') }}
              <a :href="getLocalizedPath('/getting-started')">{{ $t('homePage.quest.inline.linkStartHere') }}</a>{{ $t('homePage.quest.inline.periodEnd') }}
            </p>
          </header>

          <div class="quest-zones" :aria-label="$t('homePage.quest.zonesAriaLabel')">
            <div class="quest-zone">
              <span class="quest-zone-kicker">{{ $t('homePage.quest.zones.area05.kicker') }}</span>
              <strong class="quest-zone-title">{{ $t('homePage.quest.zones.area05.title') }}</strong>
              <p>
                {{ $t('homePage.quest.zones.area05.text') }}
              </p>
            </div>
            <div class="quest-zone">
              <span class="quest-zone-kicker">{{ $t('homePage.quest.zones.border.kicker') }}</span>
              <strong class="quest-zone-title">{{ $t('homePage.quest.zones.border.title') }}</strong>
              <p>
                {{ $t('homePage.quest.zones.border.text') }}
              </p>
            </div>
            <div class="quest-zone">
              <span class="quest-zone-kicker">{{ $t('homePage.quest.zones.vostok.kicker') }}</span>
              <strong class="quest-zone-title">{{ $t('homePage.quest.zones.vostok.title') }}</strong>
              <p>{{ $t('homePage.quest.zones.vostok.text') }}</p>
            </div>
          </div>

          <div class="quest-demo-block">
            <h3 class="quest-demo-heading">{{ $t('homePage.quest.demo.heading') }}</h3>
            <p class="quest-demo-lead">
              {{ $t('homePage.quest.demo.lead') }}
            </p>
          </div>

          <div class="quest-panel">
            <div
              class="quest-flow"
              role="img"
              :aria-label="$t('homePage.quest.flow.ariaLabel')"
            >
              <div class="quest-track">
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">{{ $t('homePage.quest.flow.shelter') }}</span>
                </div>
                <span class="quest-line" aria-hidden="true" />
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">{{ $t('homePage.quest.flow.area05') }}</span>
                </div>
                <span class="quest-line" aria-hidden="true" />
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">{{ $t('homePage.quest.flow.traders') }}</span>
                </div>
                <span class="quest-line quest-line-accent" aria-hidden="true" />
                <div class="quest-node quest-node-hub">
                  <span class="quest-dot quest-dot-hub" />
                  <span class="quest-name">{{ $t('homePage.quest.flow.allTasks') }}</span>
                  <span class="quest-badge">{{ $t('homePage.quest.flow.journalBadge') }}</span>
                </div>
              </div>
              <p class="quest-caption" v-html="$t('homePage.quest.flow.captionHtml')"></p>
            </div>
          </div>

          <nav class="quest-related" :aria-label="$t('homePage.quest.relatedNavAria')">
            <span class="quest-related-label">{{ $t('homePage.quest.related.label') }}</span>
            <ul class="quest-related-list" role="list">
              <li>
                <a :href="getLocalizedPath('/map')" class="quest-related-link">{{ $t('homePage.quest.related.map') }}</a>
              </li>
              <li>
                <a :href="getLocalizedPath('/tasks')" class="quest-related-link">{{ $t('homePage.quest.related.tasks') }}</a>
              </li>
              <li>
                <a :href="getLocalizedPath('/wiki/npcs')" class="quest-related-link">{{ $t('homePage.quest.related.npcs') }}</a>
              </li>
              <li>
                <a :href="getLocalizedPath('/getting-started')" class="quest-related-link">{{ $t('homePage.quest.related.startHere') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- adx-PC 横幅广告-3（与 Hero 内 ban1 同结构） -->
      <aside
        v-if="!isMobile"
        style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
      >
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-9435047454967498"
          data-ad-slot="roadtovostok_Adx_ban1"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-tag-src="gamtg"
        ></ins>
      </aside>

      <!-- adx-移动 横幅广告-1 -->
      <aside
          v-if="isMobile"
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: inline-block; width: 336px; height: 280px"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_RS_ban3"
            data-tag-src="gamtg"
          >
          </ins>
        </aside>
    </div>

    <!-- Devlog -->
    <section class="devlog-section">
      <div class="container">
        <div class="devlog-content reveal-on-scroll">
          <header class="section-head">
            <span class="section-kicker">{{ $t('homePage.devlog.kicker') }}</span>
            <h2>{{ $t('homePage.devlog.title') }}</h2>
            <p>
              {{ $t('homePage.devlog.introBefore') }}
              <a :href="getLocalizedPath('/guides')">{{ $t('homePage.devlog.linkGuides') }}</a>
              {{ $t('homePage.devlog.afterGuides') }}
              <a :href="getLocalizedPath('/guides/an-analytical-deep-dive-into-its-real-world-geography')"
                >{{ $t('homePage.devlog.linkGeography') }}</a
              >
              {{ $t('homePage.devlog.betweenGeoMine') }}
              <a :href="getLocalizedPath('/guides/surviving-the-Minefield')">{{ $t('homePage.devlog.linkMinefield') }}</a>{{ $t('homePage.devlog.afterMinefield') }}
              <a :href="getLocalizedPath('/dev-updates')">{{ $t('homePage.devlog.linkRoadAhead') }}</a>
              {{ $t('homePage.devlog.afterRoadAhead') }}
              <a :href="getLocalizedPath('/wiki/fishing')">{{ $t('homePage.devlog.linkFishing') }}</a>{{ $t('homePage.devlog.afterFishing') }}
            </p>
          </header>
          <div class="devlog-layout">
            <div class="devlog-video">
              <span class="devlog-video-scan" aria-hidden="true" />
              <iframe
                :title="$t('homePage.devlog.iframeTitle')"
                src="https://www.youtube-nocookie.com/embed/4q6ZuNdGvus"
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
              />
            </div>
            <div class="devlog-summary">
              <h3>{{ $t('homePage.devlog.summaryHeading') }}</h3>
              <ul>
                <li>{{ $t('homePage.devlog.summaryBullet1') }}</li>
                <li>{{ $t('homePage.devlog.summaryBullet2') }}</li>
                <li>{{ $t('homePage.devlog.summaryBullet3') }}</li>
                <li>{{ $t('homePage.devlog.summaryBullet4') }}</li>
              </ul>
              <p>
                {{ $t('homePage.devlog.footerBeforeRoad') }}
                <a :href="getLocalizedPath('/dev-updates')">{{ $t('homePage.devlog.footerLinkRoadAhead') }}</a>{{ $t('homePage.devlog.footerMid') }}
                <a :href="getLocalizedPath('/mods')">{{ $t('homePage.devlog.footerLinkMods') }}</a>{{ $t('homePage.devlog.footerEnd') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About (SEO) -->
    <section class="about-section">
      <div class="container">
        <div class="about-content reveal-on-scroll">
          <span class="section-kicker">{{ $t('homePage.about.kicker') }}</span>
          <h2>{{ $t('homePage.about.title') }}</h2>
          <p>
            {{ $t('homePage.about.text1') }}
          </p>
          <p>
            {{ $t('homePage.about.text2') }}
          </p>
          <nav class="about-hub-links" :aria-label="$t('homePage.about.hubNavAria')">
            <a :href="getLocalizedPath('/getting-started')" class="about-hub-link">{{ $t('homePage.about.linkStartHere') }}</a>
            <a :href="getLocalizedPath('/wiki')" class="about-hub-link">{{ $t('homePage.about.linkWiki') }}</a>
            <a :href="getLocalizedPath('/guides')" class="about-hub-link">{{ $t('homePage.about.linkGuides') }}</a>
            <a :href="getLocalizedPath('/about')" class="about-hub-link">{{ $t('homePage.about.linkAboutUs') }}</a>
          </nav>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-content reveal-on-scroll">
          <span class="section-kicker">{{ $t('homePage.faq.kicker') }}</span>
          <h2>{{ $t('homePage.faq.title') }}</h2>
          <dl class="faq-list">
            <div
              v-for="id in [
                'releaseEa',
                'multiplayer',
                'demoSteam',
                'whatFirst',
                'loadWeapons',
                'inverter',
                'fracture',
                'allTasks',
                'roadmap',
                'mods',
                'backup',
                'crafting',
                'fishing',
                'officialSite',
              ]"
              :key="id"
              class="faq-item"
            >
              <dt>{{ $t('homePage.faq.items.' + id + '.q') }}</dt>
              <dd>{{ $t('homePage.faq.items.' + id + '.a') }}</dd>
            </div>
          </dl>
          <nav class="faq-hub" :aria-label="$t('homePage.faq.hubNavAria')">
            <span class="faq-hub-label">{{ $t('homePage.faq.relatedLabel') }}</span>
            <ul class="faq-hub-list" role="list">
              <li>
                <a :href="getLocalizedPath('/getting-started')" class="faq-hub-link">{{ $t('homePage.faq.hubStartHere') }}</a>
              </li>
              <li>
                <a :href="getLocalizedPath('/guides/surviving-the-Minefield')" class="faq-hub-link">{{ $t('homePage.faq.hubMinefield') }}</a>
              </li>
              <li>
                <a
                  :href="getLocalizedPath('/guides/an-analytical-deep-dive-into-its-real-world-geography')"
                  class="faq-hub-link"
                  >{{ $t('homePage.faq.hubGeography') }}</a
                >
              </li>
              <li>
                <a :href="getLocalizedPath('/tasks')" class="faq-hub-link">{{ $t('homePage.faq.hubTasks') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useDeviceDetection } from '../utils/useDeviceDetection'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()

const homeRoot = ref(null)
let revealObserver = null

const { isMobile } = useDeviceDetection()

// ---------- GAM 位 1（仅 GPT / googletag，与下方 ADX 完全分开）----------
const gptBannerRoot = ref(null)

function mountGptBan1Display() {
  const root = gptBannerRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

// ---------- ADX / adsbygoogle（每个 <ins.adsbygoogle> 必须各 push 一次，与 GAM 完全分开）----------
function pushAllHomeAdxSlots() {
  const root = homeRoot.value
  if (!root) return
  const units = root.querySelectorAll('ins.adsbygoogle')
  units.forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountGptBan1Display()
  } catch (e) {
    console.error('GAM 初始化失败:', e)
  }
  // ADX：等 DOM 稳定 + 给 head 里 async 的 adsbygoogle_direct.js 留出加载时间，再对每个 <ins> push
  void nextTick(() => {
    try {
      pushAllHomeAdxSlots()
    } catch (e) {
      console.error('ADX 初始化失败:', e)
    }
  })

  const root = homeRoot.value
  if (!root) return
  const nodes = root.querySelectorAll('.reveal-on-scroll')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    return
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
  )
  nodes.forEach((el) => revealObserver.observe(el))
})

onUnmounted(() => {
  revealObserver?.disconnect()
  revealObserver = null
})
</script>

<style scoped>
.home-page {
  overflow-x: clip;
  position: relative;
}

/* 滚动进入：探险「发现」感 */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(28px) scale(0.99);
  filter: blur(6px);
  transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), filter 0.65s ease;
}

.reveal-on-scroll.is-revealed {
  opacity: 1;
  transform: none;
  filter: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}

/* —— Hero：等高线 + 罗盘装饰 + 相框角标 —— */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: clamp(2.75rem, 6vw, 5rem) 0 clamp(3rem, 5vw, 4.25rem);
  background-color: transparent;
  background-image: repeating-linear-gradient(
      -12deg,
      transparent,
      transparent 38px,
      color-mix(in srgb, var(--color-ice) 5%, transparent) 38px,
      color-mix(in srgb, var(--color-ice) 5%, transparent) 39px
    ),
    radial-gradient(
      ellipse 90% 60% at 100% 0%,
      color-mix(in srgb, var(--color-signal) 10%, transparent),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-surface) 88%, transparent) 0%,
      transparent 72%
    );
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
}

.hero-deco-compass {
  position: absolute;
  right: -6%;
  top: 50%;
  width: min(52vw, 420px);
  aspect-ratio: 1;
  transform: translateY(-50%);
  color: var(--color-ice);
  opacity: 0.16;
  pointer-events: none;
}

.compass-svg {
  width: 100%;
  height: auto;
  animation: fx-compass-spin 140s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .compass-svg {
    animation: none;
  }
}

@media (max-width: 1023px) {
  .hero-deco-compass {
    right: -20%;
    opacity: 0.09;
    width: 70vw;
  }
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: 3.5rem;
  align-items: center;
}

.hero-visual {
  justify-self: end;
}

@media (max-width: 1023px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  .hero-visual {
    justify-self: stretch;
  }
}

.hero-copy {
  min-width: 0;
}

.hero-title {
  font-family: var(--font-journey);
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.02em;
  line-height: 1.08;
  background: linear-gradient(
    105deg,
    var(--color-text) 0%,
    var(--color-primary-soft) 42%,
    var(--color-text) 78%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: title-shine 8s ease-in-out infinite alternate;
}

@keyframes title-shine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title {
    color: var(--color-text);
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    animation: none;
  }
}

.hero-eyebrow {
  margin: 0 0 0.65rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.hero-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin: 0 0 1.25rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ice-dim);
}

.hero-strip-div {
  width: 6px;
  height: 6px;
  background: var(--color-rust);
  opacity: 0.75;
  transform: rotate(45deg);
}

.hero-lead {
  margin-bottom: 0;
  color: var(--color-muted);
  font-size: 1rem;
  max-width: min(72ch, 100%);
}

.hero-lead strong {
  color: var(--color-text);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.65rem;
}

.btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.25rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.25s ease;
}

.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    color-mix(in srgb, white 18%, transparent) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.55s ease;
  pointer-events: none;
}

.btn:hover::after {
  transform: translateX(100%);
}

.btn-primary {
  color: #0a0b0a;
  background: linear-gradient(180deg, var(--color-rust-bright) 0%, var(--color-rust) 100%);
  border-color: color-mix(in srgb, var(--color-rust-bright) 70%, black);
  box-shadow: var(--fx-glow-rust);
}

.btn-primary:hover {
  background: linear-gradient(180deg, #e8845c 0%, var(--color-rust-bright) 100%);
  border-color: var(--color-rust-bright);
}

.btn-secondary {
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-panel) 60%, transparent);
  border-color: var(--color-border-strong);
}

.btn-secondary:hover {
  border-color: var(--color-frost);
  color: var(--color-primary-soft);
  box-shadow: var(--fx-glow-frost);
}

/* Map CTA: ice / cyan vs rust primary — reads as “open atlas” */
.btn-hero-map {
  color: #04080c;
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--color-primary-soft) 92%, white) 0%,
    var(--color-ice) 48%,
    color-mix(in srgb, var(--color-ice) 55%, var(--color-ice-dim)) 100%
  );
  border-color: color-mix(in srgb, var(--color-primary-soft) 45%, var(--color-border-strong));
  box-shadow: var(--fx-glow-frost), inset 0 1px 0 color-mix(in srgb, white 22%, transparent);
}

.btn-hero-map:hover {
  color: #020508;
  background: linear-gradient(
    165deg,
    var(--color-primary-soft) 0%,
    color-mix(in srgb, var(--color-primary-soft) 35%, var(--color-ice)) 100%
  );
  border-color: var(--color-primary-soft);
  box-shadow: 0 0 52px color-mix(in srgb, var(--color-ice) 38%, transparent),
    inset 0 1px 0 color-mix(in srgb, white 35%, transparent);
}

/* Hero: long-form guides — amber / gold tier */
.btn-hero-guides {
  color: #141008;
  background: linear-gradient(
    152deg,
    color-mix(in srgb, var(--color-amber) 78%, #fff4cc) 0%,
    var(--color-amber) 52%,
    color-mix(in srgb, var(--color-amber) 45%, #8a6a1e) 100%
  );
  border-color: color-mix(in srgb, var(--color-amber) 55%, #5c4510);
  box-shadow: 0 0 44px color-mix(in srgb, var(--color-amber) 26%, transparent),
    inset 0 1px 0 color-mix(in srgb, white 28%, transparent);
}

.btn-hero-guides:hover {
  color: #0f0c06;
  background: linear-gradient(
    152deg,
    color-mix(in srgb, var(--color-amber) 92%, white) 0%,
    color-mix(in srgb, var(--color-amber) 88%, #f0d060) 100%
  );
  border-color: color-mix(in srgb, var(--color-amber) 70%, #a88420);
  box-shadow: 0 0 56px color-mix(in srgb, var(--color-amber) 34%, transparent),
    inset 0 1px 0 color-mix(in srgb, white 40%, transparent);
}

.hero-visual {
  width: 100%;
  max-width: 320px;
}

@media (max-width: 1023px) {
  .hero-visual {
    max-width: none;
  }
}

.hero-frame {
  position: relative;
  margin: 0;
  padding: 0;
  border: 1px solid var(--color-border-strong);
  background: var(--color-panel);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35), 0 16px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px color-mix(in srgb, var(--color-frost) 15%, transparent);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.hero-frame:hover {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35), 0 20px 48px rgba(0, 0, 0, 0.55),
    0 0 32px color-mix(in srgb, var(--color-frost) 18%, transparent);
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .hero-frame:hover {
    transform: none;
  }
}

.hero-frame-corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--color-rust);
  border-style: solid;
  z-index: 2;
  pointer-events: none;
  opacity: 0.85;
}

.hero-frame-corner--tl {
  top: 6px;
  left: 6px;
  border-width: 2px 0 0 2px;
}

.hero-frame-corner--tr {
  top: 6px;
  right: 6px;
  border-width: 2px 2px 0 0;
}

.hero-frame-corner--bl {
  bottom: 6px;
  left: 6px;
  border-width: 0 0 2px 2px;
}

.hero-frame-corner--br {
  bottom: 6px;
  right: 6px;
  border-width: 0 2px 2px 0;
}

.hero-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.05);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
}

.hero-frame:hover .hero-img {
  transform: scale(1.04);
  filter: saturate(0.95) contrast(1.08);
}

@media (prefers-reduced-motion: reduce) {
  .hero-frame:hover .hero-img {
    transform: none;
  }
}

.hero-caption {
  margin: 0;
  padding: 0.45rem 0.65rem;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

/* —— 区块标题：战地手册侧条 + kicker —— */
.section-kicker {
  display: block;
  margin-bottom: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-signal);
}

.section-head {
  margin-bottom: 2rem;
  max-width: none;
  padding: 0.35rem 0 0.35rem 1.15rem;
  border-left: 3px solid var(--color-ice-dim);
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-ice) 8%, transparent) 0%,
    transparent 58%
  );
  border-radius: 0 4px 4px 0;
}

.section-head h2 {
  margin-bottom: 0.4em;
}

.section-head p {
  margin: 0;
  color: var(--color-muted);
}

.about-content .section-kicker,
.faq-content .section-kicker {
  margin-bottom: 0.35rem;
}

.about-content h2,
.faq-content h2 {
  margin-left: 0;
}

.about-content,
.faq-content {
  padding-left: 1rem;
  border-left: 3px solid var(--color-ice-dim);
}

.home-compass-section,
.featured-section,
.questline-section,
.devlog-section,
.about-section,
.faq-section {
  padding: clamp(2.75rem, 5vw, 3.75rem) 0;
}

.home-compass-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.featured-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-bottom: 1px solid var(--color-border);
}

/* —— Site compass：简报板式主区 + 次行深链 —— */
.home-compass__head {
  margin-bottom: 1.75rem;
}

.home-compass__board {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.35rem 1.25rem 1.5rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, var(--color-amber) 8%);
  border-radius: 6px;
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--color-panel) 94%, var(--color-bg)) 0%,
    color-mix(in srgb, var(--color-surface) 88%, var(--color-bg)) 100%
  );
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-text) 5%, transparent),
    0 20px 48px rgba(0, 0, 0, 0.22);
}

.home-compass__board-label {
  margin: 0 0 0.65rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 82%, var(--color-signal));
}

/* Main sections: 2 hubs top + 3 bottom on a 6-col track (edges align with container) */
.home-compass-hubs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.5rem 0.65rem;
  align-items: stretch;
}

.home-compass-hubs > li {
  min-width: 0;
}

.home-compass-hubs > li:nth-child(1) {
  grid-column: 1 / span 3;
}

.home-compass-hubs > li:nth-child(2) {
  grid-column: 4 / span 3;
}

.home-compass-hubs > li:nth-child(3) {
  grid-column: 1 / span 2;
}

.home-compass-hubs > li:nth-child(4) {
  grid-column: 3 / span 2;
}

.home-compass-hubs > li:nth-child(5) {
  grid-column: 5 / span 2;
}

.home-compass-hub {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.65rem 0.75rem;
  align-items: start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: 4.35rem;
  padding: 0.75rem 0.85rem 0.8rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--color-bg) 55%, var(--color-panel));
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.22s ease;
  outline-offset: 2px;
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--color-amber) 45%, var(--color-border));
}

.home-compass-hub:hover,
.home-compass-hub:focus-visible {
  border-color: color-mix(in srgb, var(--color-ice) 32%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 72%, var(--color-bg));
  box-shadow: inset 3px 0 0 var(--color-signal), 0 6px 20px rgba(0, 0, 0, 0.2);
}

.home-compass-hub__idx {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-amber));
  padding-top: 0.15rem;
}

.home-compass-hub__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.home-compass-hub__title {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.2;
}

.home-compass-hub__hint {
  font-size: 0.72rem;
  line-height: 1.35;
  color: var(--color-muted);
}

.home-compass-hub__path {
  font-size: 0.62rem;
  font-variant-numeric: tabular-nums;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-ice));
  letter-spacing: 0.02em;
}

.home-compass-hub__go {
  font-size: 1rem;
  line-height: 1;
  color: color-mix(in srgb, var(--color-muted) 70%, var(--color-amber));
  padding-top: 0.2rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.home-compass-hub:hover .home-compass-hub__go,
.home-compass-hub:focus-visible .home-compass-hub__go {
  transform: translateX(3px);
  color: var(--color-primary-soft);
}

@media (max-width: 700px) {
  .home-compass-hubs {
    grid-template-columns: 1fr;
  }

  .home-compass-hubs > li:nth-child(n) {
    grid-column: 1 / -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-compass-hub__go {
    transition: none;
  }

  .home-compass-hub:hover .home-compass-hub__go,
  .home-compass-hub:focus-visible .home-compass-hub__go {
    transform: none;
  }
}

.featured-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 2.25rem;
  align-items: stretch;
}

@media (max-width: 1023px) {
  .featured-split {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.gear-cross-label {
  margin: 1.25rem 0 0.45rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-ice));
}

.gear-cross-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gear-cross-list li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.5rem;
  font-size: 0.86rem;
  line-height: 1.4;
  color: var(--color-muted);
}

.gear-cross-link {
  font-family: var(--font-display);
  font-weight: 650;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.72rem;
  text-decoration: none;
  color: var(--color-primary-soft);
  border-bottom: 1px solid color-mix(in srgb, var(--color-primary-soft) 35%, transparent);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.gear-cross-link:hover,
.gear-cross-link:focus-visible {
  color: var(--color-signal-soft);
  border-bottom-color: color-mix(in srgb, var(--color-signal) 55%, transparent);
}

.gear-cross-hint {
  font-size: 0.8rem;
  color: color-mix(in srgb, var(--color-muted) 95%, var(--color-text));
}

.featured-catalog-wrap {
  min-width: 0;
}

.gear-catalog-label {
  margin: 0 0 0.65rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 85%, var(--color-signal));
}

.featured-split-intro {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* —— Featured：右侧无图目录列表 —— */
.featured-catalog {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
}

.featured-catalog-item {
  margin: 0;
}

.featured-catalog-link {
  display: flex;
  align-items: stretch;
  gap: 0;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, var(--color-ice));
  background: linear-gradient(
    125deg,
    color-mix(in srgb, var(--color-panel) 94%, transparent) 0%,
    color-mix(in srgb, var(--color-surface) 88%, transparent) 100%
  );
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  transition: border-color 0.2s ease, box-shadow 0.22s ease, background 0.22s ease;
}

.featured-catalog-link:hover {
  border-color: color-mix(in srgb, var(--color-ice) 45%, var(--color-border));
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.14), 0 10px 28px rgba(0, 0, 0, 0.22);
}

.featured-catalog-link:focus-visible {
  outline: 2px solid var(--color-ice);
  outline-offset: 2px;
}

.featured-catalog-accent {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-signal) 55%, transparent),
    color-mix(in srgb, var(--color-ice) 40%, transparent)
  );
}

.featured-catalog-body {
  flex: 1;
  min-width: 0;
  padding: 0.85rem 0.9rem 0.95rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
}

.featured-catalog-kicker {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-signal);
}

.featured-catalog-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.25;
}

.featured-catalog-blurb {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.featured-catalog-path {
  margin: 0.15rem 0 0;
  font-size: 0.62rem;
  letter-spacing: 0.03em;
  font-variant-numeric: tabular-nums;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-ice));
}

.featured-catalog-go {
  flex-shrink: 0;
  align-self: center;
  padding: 0 0.85rem 0 0.25rem;
  font-size: 1.1rem;
  color: color-mix(in srgb, var(--color-primary-soft) 85%, var(--color-muted));
  transition: transform 0.2s ease, color 0.2s ease;
}

.featured-catalog-link:hover .featured-catalog-go {
  color: var(--color-primary-soft);
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .featured-catalog-link:hover .featured-catalog-go {
    transform: none;
  }
}

/* —— Quest：世界分区 + demo 时间轴 —— */
.questline-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.questline-content .section-head p + p {
  margin-top: 0.85em;
}

.quest-zones {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1.1rem);
  margin-bottom: 1.75rem;
}

@media (max-width: 1023px) {
  .quest-zones {
    grid-template-columns: 1fr;
  }
}

.quest-zone {
  padding: 1rem 1.15rem 1.1rem;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.quest-zone-kicker {
  display: block;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-signal);
  margin-bottom: 0.35rem;
}

.quest-zone-title {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  margin: 0;
}

.quest-zone p {
  margin: 0.55rem 0 0;
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.quest-demo-block {
  margin-bottom: 1.15rem;
  padding: 0 0 0 1.15rem;
  border-left: 2px solid color-mix(in srgb, var(--color-frost) 45%, var(--color-border));
}

.quest-demo-heading {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
}

.quest-demo-lead {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-muted);
  max-width: 62ch;
}

.quest-panel {
  border: 1px solid var(--color-border);
  background: var(--color-panel);
  border-radius: 2px;
  padding: 1.5rem 1.25rem 1.35rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}

.quest-flow {
  padding: 0;
}

.quest-track {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
  overflow-x: auto;
  padding-bottom: 0.35rem;
  scrollbar-width: thin;
}

.quest-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  flex: 0 0 auto;
  min-width: 92px;
}

.quest-dot {
  width: 10px;
  height: 10px;
  border-radius: 1px;
  background: var(--color-frost-dim);
  border: 1px solid var(--color-frost);
}

.quest-node-hub {
  position: relative;
}

.quest-dot-hub {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: var(--color-rust);
  border: 1px solid color-mix(in srgb, var(--color-rust-bright) 80%, black);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-rust) 25%, transparent);
  animation: fx-pulse-soft 2.8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .quest-dot-hub {
    animation: none;
  }
}

.quest-badge {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-bg);
  background: var(--color-amber);
  padding: 0.15rem 0.4rem;
  border-radius: 1px;
}

.quest-name {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-muted);
  max-width: 14ch;
  line-height: 1.25;
}

.quest-node-hub .quest-name {
  color: var(--color-text);
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quest-line {
  flex: 1 1 24px;
  min-width: 16px;
  height: 3px;
  margin-top: 4px;
  align-self: flex-start;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    var(--color-border-strong),
    var(--color-frost-dim),
    var(--color-border-strong),
    var(--color-frost-dim)
  );
  background-size: 220% 100%;
  opacity: 0.9;
  animation: fx-shimmer-line 5s linear infinite;
}

.quest-line-accent {
  background: linear-gradient(
    90deg,
    var(--color-frost-dim),
    var(--color-rust),
    var(--color-rust-bright),
    var(--color-frost-dim)
  );
  background-size: 240% 100%;
  opacity: 1;
  animation: fx-shimmer-line 3.5s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .quest-line,
  .quest-line-accent {
    animation: none;
    background-size: 100% 100%;
  }
}

.quest-caption {
  margin: 1.1rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.88rem;
  color: var(--color-muted);
}

.quest-related {
  margin-top: 1.75rem;
  padding: 1rem 1.1rem;
  border: 1px dashed color-mix(in srgb, var(--color-border) 75%, var(--color-ice));
  border-radius: 4px;
  background: color-mix(in srgb, var(--color-panel) 40%, transparent);
}

.quest-related-label {
  display: block;
  margin-bottom: 0.55rem;
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 82%, var(--color-primary-soft));
}

.quest-related-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.5rem;
}

.quest-related-link {
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.6rem;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  border-radius: 3px;
  background: color-mix(in srgb, var(--color-bg) 50%, var(--color-panel));
  transition: border-color 0.15s ease, color 0.15s ease;
}

.quest-related-link:hover,
.quest-related-link:focus-visible {
  border-color: color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
  color: var(--color-primary-soft);
}

@media (max-width: 767px) {
  .quest-line {
    min-width: 12px;
  }
}

/* —— Devlog —— */
.devlog-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.devlog-layout {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.75rem;
  align-items: start;
}

@media (max-width: 1023px) {
  .devlog-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.devlog-video {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border-strong);
  border-radius: 2px;
  aspect-ratio: 16 / 9;
  background: #000;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-rust) 22%, transparent),
    0 20px 50px rgba(0, 0, 0, 0.55);
}

.devlog-video::before,
.devlog-video::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--color-primary-soft);
  border-style: solid;
  opacity: 0.55;
  z-index: 2;
  pointer-events: none;
}

.devlog-video::before {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.devlog-video::after {
  bottom: 10px;
  right: 10px;
  border-width: 0 2px 2px 0;
}

.devlog-video-scan {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    color-mix(in srgb, var(--color-frost) 4%, transparent) 2px,
    color-mix(in srgb, var(--color-frost) 4%, transparent) 3px
  );
  opacity: 0.35;
  mix-blend-mode: overlay;
}

@media (prefers-reduced-motion: reduce) {
  .devlog-video-scan {
    opacity: 0.2;
  }
}

.devlog-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
}

.devlog-summary {
  background: var(--color-panel);
  border-radius: 2px;
  padding: 1.15rem 1.25rem;
  border: 1px solid var(--color-border);
}

.devlog-summary h3 {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 0.5em;
}

.devlog-summary ul {
  color: var(--color-muted);
  font-size: 0.92rem;
}

.devlog-summary p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

/* —— About & FAQ —— */
.about-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
}

.about-section p {
  color: var(--color-muted);
}

.about-section strong {
  color: var(--color-text);
}

.about-hub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.65rem;
  margin-top: 1.35rem;
  padding-top: 1.1rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
}

.about-hub-link {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-primary-soft));
  padding: 0.28rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-primary-soft) 28%, transparent);
  transition: color 0.15s ease, border-color 0.15s ease;
}

.about-hub-link:hover,
.about-hub-link:focus-visible {
  color: var(--color-primary-soft);
  border-bottom-color: color-mix(in srgb, var(--color-signal) 50%, transparent);
}

.faq-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-top: 1px solid var(--color-border);
}

.faq-list {
  margin: 0;
  padding: 0;
}

.faq-item {
  padding: 1.15rem 0;
  border-bottom: 1px solid var(--color-border);
}

.faq-item:first-child {
  padding-top: 0;
}

.faq-item dt {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 0.35em;
}

.faq-item dd {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.faq-hub {
  margin-top: 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
}

.faq-hub-label {
  display: block;
  margin-bottom: 0.55rem;
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.faq-hub-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.45rem;
}

.faq-hub-link {
  display: inline-flex;
  padding: 0.38rem 0.65rem;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  background: color-mix(in srgb, var(--color-panel) 70%, var(--color-bg));
  transition: border-color 0.15s ease, background 0.15s ease;
}

.faq-hub-link:hover,
.faq-hub-link:focus-visible {
  border-color: color-mix(in srgb, var(--color-ice) 40%, var(--color-border));
  background: color-mix(in srgb, var(--color-ice) 8%, var(--color-panel));
}
</style>
