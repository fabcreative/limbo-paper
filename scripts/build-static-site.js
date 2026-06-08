const fs = require("node:fs");
const path = require("node:path");
const { languages, locales, sections, siteUrl } = require("../content/locales");

const rootDir = path.resolve(__dirname, "..");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteUrl(pagePath) {
  return `${siteUrl}${pagePath}`;
}

function alternateLinks() {
  const languageLinks = Object.entries(languages)
    .map(
      ([, language]) =>
        `<link rel="alternate" hreflang="${language.hreflang}" href="${absoluteUrl(language.path)}" />`,
    )
    .join("\n    ");

  return `${languageLinks}\n    <link rel="alternate" hreflang="x-default" href="${absoluteUrl(
    languages.it.path,
  )}" />`;
}

function languageSwitcher(activeLocale) {
  const activeLanguage = languages[activeLocale];
  const links = Object.entries(languages)
    .map(([locale, language]) => {
      const isActive = locale === activeLocale;
      const aria = isActive ? ' aria-current="true"' : "";
      const label = isActive
        ? `${language.name} (${locales[activeLocale].accessibility.currentLanguage})`
        : language.name;

      return `<li><a href="${language.path}" lang="${language.lang}" hreflang="${language.hreflang}" data-language-link${aria} aria-label="${escapeHtml(
        label,
      )}">${escapeHtml(language.name)}</a></li>`;
    })
    .join("\n          ");

  return `<details class="language-switcher" aria-label="${escapeHtml(
    locales[activeLocale].accessibility.language,
  )}">
        <summary aria-label="${escapeHtml(locales[activeLocale].accessibility.language)}">
          <span class="language-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="language-menu-current">${escapeHtml(activeLanguage.name)}</span>
        </summary>
        <ul>
          ${links}
        </ul>
      </details>`;
}

function renderPage(locale, outputPath) {
  const language = languages[locale];
  const t = locales[locale];
  const canonicalPath = outputPath === "/" ? languages.it.path : outputPath;
  const canonicalUrl = absoluteUrl(canonicalPath);
  const ogAlternates = Object.entries(languages)
    .filter(([key]) => key !== locale)
    .map(([, item]) => `<meta property="og:locale:alternate" content="${item.ogLocale}" />`)
    .join("\n    ");

  const navLinks = sections
    .map(({ id, key }) => `<a href="#${id}">${escapeHtml(t.nav[key])}</a>`)
    .join("\n        ");

  const philosophy = t.philosophy.paragraphs.map((copy) => `<p>${escapeHtml(copy)}</p>`).join("\n            ");
  const features = t.materials.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("\n              ");
  const heroCopy = t.hero.copy.map((copy) => `<p>${escapeHtml(copy)}</p>`).join("\n            ");
  const productionSteps = t.production.steps
    .map(
      (step, index) => `<div>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(step.title)}</strong>
            <p>${escapeHtml(step.copy)}</p>
          </div>`,
    )
    .join("\n          ");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Limbo Paper",
    url: canonicalUrl,
    logo: `${siteUrl}/assets/limbo-paper-logo.svg`,
    email: "info@limbopaper.it",
    telephone: "+39 366 216 1991",
    inLanguage: language.hreflang,
  };

  return `<!doctype html>
<html lang="${language.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escapeHtml(t.seo.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    ${alternateLinks()}
    <meta property="og:site_name" content="Limbo Paper" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:locale" content="${language.ogLocale}" />
    ${ogAlternates}
    <meta property="og:title" content="${escapeHtml(t.seo.title)}" />
    <meta property="og:description" content="${escapeHtml(t.seo.ogDescription)}" />
    <meta property="og:image" content="${siteUrl}/assets/social-preview.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(t.seo.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(t.seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(t.seo.ogDescription)}" />
    <meta name="twitter:image" content="${siteUrl}/assets/social-preview.jpg" />
    <title>${escapeHtml(t.seo.title)}</title>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="preload" as="image" href="/assets/studio-hero.png" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">${escapeHtml(t.accessibility.skip)}</a>

    <header class="site-header" aria-label="${escapeHtml(t.accessibility.header)}">
      <a class="brand" href="${language.path}#top" aria-label="${escapeHtml(t.accessibility.brand)}">
        <img src="/assets/limbo-paper-logo.svg" alt="Limbo Paper" />
      </a>
      <div class="nav-group">
        <nav class="nav-links" aria-label="${escapeHtml(t.accessibility.sections)}">
          ${navLinks}
        </nav>
        ${languageSwitcher(locale)}
      </div>
    </header>

    <main id="main">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-media" aria-hidden="true">
          <img src="/assets/studio-hero.png" alt="" />
        </div>
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content reveal">
          <p class="eyebrow">${escapeHtml(t.hero.eyebrow)}</p>
          <h1 id="hero-title">${escapeHtml(t.hero.title)}</h1>
          <div class="hero-copy">
            ${heroCopy}
          </div>
          <a class="primary-cta" href="mailto:info@limbopaper.it">${escapeHtml(t.hero.cta)}</a>
        </div>

        <aside class="floating-spec spec-one reveal" aria-label="${escapeHtml(t.accessibility.materialSpecs)}">
          <span>${escapeHtml(t.hero.specs[0].label)}</span>
          <strong>${escapeHtml(t.hero.specs[0].value)}</strong>
        </aside>
        <aside class="floating-spec spec-two reveal" aria-label="${escapeHtml(t.accessibility.surfaceDetail)}">
          <span>${escapeHtml(t.hero.specs[1].label)}</span>
          <strong>${escapeHtml(t.hero.specs[1].value)}</strong>
        </aside>
      </section>

      <section class="editorial-section light-section" id="filosofia" aria-labelledby="filosofia-title">
        <div class="editorial-grid">
          <div class="editorial-heading reveal">
            <p class="section-kicker">${escapeHtml(t.philosophy.kicker)}</p>
            <h2 id="filosofia-title">${escapeHtml(t.philosophy.title)}</h2>
          </div>
          <div class="rich-copy reveal">
            ${philosophy}
          </div>
        </div>
      </section>

      <section class="material-section dark-section" id="materiali" aria-labelledby="materiali-title">
        <div class="split-layout">
          <div class="image-stage reveal">
            <img src="/assets/paper-roll-close.jpg" alt="${escapeHtml(t.materials.imageAlt)}" />
            <div class="annotation annotation-top">${escapeHtml(t.materials.annotations[0])}</div>
            <div class="annotation annotation-bottom">${escapeHtml(t.materials.annotations[1])}</div>
          </div>
          <div class="section-copy reveal">
            <p class="eyebrow">${escapeHtml(t.materials.eyebrow)}</p>
            <h2 id="materiali-title">${escapeHtml(t.materials.title)}</h2>
            <ul class="feature-list">
              ${features}
            </ul>
          </div>
        </div>
      </section>

      <section class="product-section" aria-labelledby="product-title">
        <div class="product-media reveal">
          <img src="/assets/paper-roll-edge.jpg" alt="${escapeHtml(t.product.imageAlt)}" />
        </div>
        <div class="product-copy reveal">
          <p class="eyebrow">${escapeHtml(t.product.eyebrow)}</p>
          <h2 id="product-title">${escapeHtml(t.product.title)}</h2>
          <p>${escapeHtml(t.product.copy)}</p>
        </div>
      </section>

      <section class="production-section light-section" id="produzione" aria-labelledby="produzione-title">
        <div class="production-copy reveal">
          <p class="eyebrow">${escapeHtml(t.production.eyebrow)}</p>
          <h2 id="produzione-title">${escapeHtml(t.production.title)}</h2>
          <p>${escapeHtml(t.production.copy)}</p>
        </div>
        <div class="process-panel reveal" aria-label="${escapeHtml(t.accessibility.productionProcess)}">
          ${productionSteps}
        </div>
      </section>

      <section class="contact-section dark-section" id="contatti" aria-labelledby="contact-title">
        <div class="contact-inner reveal">
          <p class="eyebrow">${escapeHtml(t.contact.eyebrow)}</p>
          <h2 id="contact-title">${escapeHtml(t.contact.title)}</h2>
          <p>${escapeHtml(t.contact.copy)}</p>
          <address>
            <strong>Daniele Pasotti</strong>
            <a href="mailto:info@limbopaper.it">info@limbopaper.it</a>
            <a href="tel:+393662161991">+39 366 216 1991</a>
          </address>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <img src="/assets/limbo-paper-logo.svg" alt="Limbo Paper" />
        <p>${escapeHtml(t.footer.copyright)}</p>
        <span>${escapeHtml(t.footer.origin)}</span>
      </div>
    </footer>

    <script src="/script.js"></script>
  </body>
</html>
`;
}

function renderSitemap() {
  const urls = Object.values(languages).map((language) => language.path);
  const alternates = Object.values(languages)
    .map(
      (language) =>
        `    <xhtml:link rel="alternate" hreflang="${language.hreflang}" href="${absoluteUrl(language.path)}" />`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (urlPath) => `  <url>
    <loc>${absoluteUrl(urlPath)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(languages.it.path)}" />
    <lastmod>2026-06-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${urlPath === "/" ? "1.0" : "0.9"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

function writeFile(relativePath, content) {
  const filePath = path.join(rootDir, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

writeFile("index.html", renderPage("it", "/"));
for (const [locale, language] of Object.entries(languages)) {
  writeFile(path.join(language.path, "index.html").replace(/^\//, ""), renderPage(locale, language.path));
}
writeFile("sitemap.xml", renderSitemap());
