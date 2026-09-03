import Link from 'next/link';
import { notFound } from 'next/navigation';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  getCity,
  mainOffice,
  cityServices,
  steps,
  mapEmbed,
  directionsUrl,
} from '../../data/site';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Garage Door Repair in ${c.name}, FL ${c.zip} | ${site.brandFirst}`;
  const description = `Same-day garage door repair in ${c.name}, FL: springs, openers, off-track doors & new installs. 24/7 emergency dispatch — we come to you.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `garage door repair ${c.name}`,
      `garage door spring replacement ${c.name}`,
      `emergency garage door repair ${c.name} FL`,
    ],
    alternates: { canonical: `/${c.slug}/` },
    openGraph: {
      title,
      description,
      url: `/${c.slug}/`,
      images: [
        {
          url: site.heroImage,
          width: 1200,
          height: 630,
          alt: `Residential garage door serviced by ${site.brand} in ${c.name}, FL`,
        },
      ],
    },
    twitter: { title, description, images: [site.heroImage] },
    other: { 'geo.region': 'US-FL', 'geo.placename': c.name },
  };
}

// Sin aggregateRating ni review: la landing no publica resenas.
function jsonLd(c) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/${c.slug}/#business`,
    name: `${site.brand} - ${c.name}`,
    url: `${site.url}/${c.slug}/`,
    telephone: site.phone.schema,
    email: site.email,
    parentOrganization: { '@id': `${site.url}/#business` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.addr1,
      addressLocality: c.name,
      addressRegion: 'FL',
      postalCode: c.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    areaServed: c.neighborhoods.map((n) => ({ '@type': 'City', name: n })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Garage door services in ${c.name}`,
      itemListElement: cityServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
  };
}

const facts = [
  { title: '24/7 dispatch', text: 'Nights, weekends and holidays, answered by a person.' },
  { title: 'Same day where we can', text: 'Emergencies usually covered in two to four hours.' },
  { title: 'We come to you', text: 'The technician drives out. Nothing to drop off.' },
  { title: 'Written warranty', text: 'Workmanship covered on parts and labour.' },
];

// En las paginas de ciudad el mosaico se rompe distinto que en la home,
// para que las dos no se lean iguales.
const TILE_MOD = ['tile--wide tile--gold', '', '', '', 'tile--wide tile--dark', ''];

export default async function CityPage({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();
  const others = cities.filter((o) => o.slug !== c.slug);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header />

      <main id="main">

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-tile">
            <div className="hero-tile__copy" style={{ maxWidth: '100%' }}>
              <p className="crumbs">
                <Link href="/#coverage">Coverage</Link>
                <span>/</span>
                {c.name}
              </p>
              <span className="eyebrow">
                {c.county} &middot; FL {c.zip}
              </span>
              <h1>
                Garage door repair in <span>{c.name}</span>
              </h1>
              <p className="hero-tile__lead">
                Snapped springs, frayed cables, noisy openers, off-track panels and full door
                replacement across {c.name} and the streets around it. Our {c.name} technicians work
                nights and weekends, and every repair happens at your property.
              </p>

              <div className="hero-tile__actions">
                <a className="btn btn--primary btn--lg" href={site.phone.href}>
                  <Icon name="phone" />
                  Call {site.phone.long}
                </a>
                <Link className="btn btn--ghost btn--lg" href="/contact-us">
                  Book a visit
                </Link>
              </div>

              <div className="loc-facts">
                {facts.map((f) => (
                  <div className="loc-fact" key={f.title}>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAPA + PUNTO DE DESPACHO ============ */}
      <section className="section" id="dispatch">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">{c.name} dispatch point</span>
              <h2>Where the {c.name} trucks start the day</h2>
              <p>
                We dispatch out of {c.addr1}, {c.name}. It is not a shop and there is nothing to drop
                off &mdash; every repair happens at your door.
              </p>
            </div>
            <a
              className="sec-head__link linkarrow"
              href={directionsUrl(c.mapQuery)}
              target="_blank"
              rel="noopener"
            >
              See it on the map
              <Icon name="externalLink" />
            </a>
          </div>

          <div className="loc-grid">
            <div className="map-embed">
              <iframe
                title={`${site.brand} - ${c.name} dispatch point`}
                src={mapEmbed(c.mapQuery)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="panel">
              <ul className="info-list">
                <li>
                  <strong>Dispatch address</strong>
                  <span>
                    {c.addr1}
                    <br />
                    {c.name}, FL {c.zip}
                  </span>
                </li>
                <li>
                  <strong>Dispatch line</strong>
                  <a href={site.phone.href}>{site.phone.long}</a>
                </li>
                <li>
                  <strong>Hours</strong>
                  <span>
                    {site.hoursLong}
                    <br />
                    {site.hoursSunday}
                  </span>
                </li>
              </ul>
              <a className="btn btn--primary btn--block" href={site.phone.href} style={{ marginTop: 26 }}>
                <Icon name="phone" />
                Call {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section className="section section--soft" id="services">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Services in {c.name}</span>
              <h2>What we handle in {c.name}</h2>
              <p>{c.services}</p>
            </div>
            <Link className="sec-head__link linkarrow" href="/contact-us">
              Book a visit
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="bento">
            {cityServices.map((s, i) => (
              <article className={`tile ${TILE_MOD[i] || ''}`.trim()} key={s.title}>
                <span className="numeral">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.sub}</p>
                <ul className="tile__list">
                  {s.checks.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONOCIMIENTO LOCAL ============ */}
      <section className="section" id="local">
        <div className="container split">
          <div>
            <span className="eyebrow">Local knowledge</span>
            <h2>What doors do in {c.name}</h2>
            <p>{c.localNote}</p>
            <a className="btn btn--outline" href={site.phone.href}>
              <Icon name="phone" />
              Talk to a {c.name} technician
            </a>
          </div>
          <div className="split__media">
            <img
              src="/img/local-garage.jpg"
              width="1200"
              height="960"
              loading="lazy"
              decoding="async"
              alt={`Onyx technician loading cable and rollers from the service van on a ${c.name} driveway`}
            />
            <div className="split__stat">
              <strong>{c.zip}</strong>
              <span>
                {c.name}, {c.county}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BARRIOS ============ */}
      <section className="section section--soft" id="neighborhoods">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Coverage</span>
              <h2>Where we go from {c.name}</h2>
              <p>
                These are the areas the {c.name} crew reaches first. If you are just outside the
                list, call anyway &mdash; another dispatch point is usually closer than you think.
              </p>
            </div>
          </div>
          <ul className="neighborhoods">
            {c.neighborhoods.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="section section--dark" id="process">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">How it works</span>
              <h2>Four steps to a working door</h2>
              <p>The same process on every job, in {c.name} and everywhere else we cover.</p>
            </div>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__num">Step {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTROS PUNTOS ============ */}
      <section className="section" id="nearby">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Other dispatch points</span>
              <h2>The rest of the map</h2>
              <p>
                {site.brand} covers Miami-Dade, Broward and Palm Beach County from five dispatch
                points.
              </p>
            </div>
          </div>

          <div className="nearby-grid">
            <article className="nearby-card">
              <h3>{mainOffice.name}, FL</h3>
              <p>
                {mainOffice.addr1}
                <br />
                {mainOffice.name}, FL {mainOffice.zip}
              </p>
              <Link className="linkarrow" href="/">
                Main dispatch
                <Icon name="arrowRight" />
              </Link>
            </article>

            {others.map((o) => (
              <article className="nearby-card" key={o.slug}>
                <h3>{o.name}, FL</h3>
                <p>
                  {o.addr1}
                  <br />
                  {o.name}, FL {o.zip}
                </p>
                <Link className="linkarrow" href={`/${o.slug}`}>
                  {o.name} page
                  <Icon name="arrowRight" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BANDA FINAL ============ */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div>
              <h2>Door stuck in {c.name}? We&rsquo;re awake.</h2>
              <p>
                The dispatch line runs nights, weekends and holidays. One call and a technician is on
                the way.
              </p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--dark btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer city={c} bottomPath={`/${c.slug}`} />
      <CallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(c)) }}
      />
    </>
  );
}
