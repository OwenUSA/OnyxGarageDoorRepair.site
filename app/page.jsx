import Link from 'next/link';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer, { CallBar } from '../components/Footer';
import { Icon } from '../components/Icons';
import {
  site,
  cities,
  mainOffice,
  heroFeatures,
  promoRail,
  stats,
  homeServices,
  whyChecklist,
  steps,
  areaTags,
  faq,
  officeHours,
  mapEmbed,
  testimonials,
} from '../data/site';

const title = `Garage Door Repair Miami & South Florida | ${site.brandFirst}`;
const description =
  'Same-day garage door repair across Miami-Dade, Broward & Palm Beach County. Springs, openers, off-track doors, new installs. 24/7 emergency dispatch.';

export const metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'garage door repair Miami',
    'garage door spring replacement',
    'garage door opener repair',
    'emergency garage door repair',
    'Fort Lauderdale garage door repair',
    'South Florida garage door service',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: `Residential garage door serviced by ${site.brand} in Miami`,
      },
    ],
  },
  twitter: { title, description, images: [site.heroImage] },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': mainOffice.name,
  },
};

// JSON-LD. No lleva aggregateRating ni review a proposito: aunque la pagina
// ahora muestra testimonios en texto, no hay un sistema de resenas real
// detras, asi que marcarlas en schema seria inventar una senal que Google
// trata como verificable. Tampoco priceRange.
const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${site.url}/#business`,
  name: site.brand,
  url: `${site.url}/`,
  telephone: site.phone.schema,
  email: site.email,
  foundingDate: String(site.founded),
  description:
    '24/7 garage door repair, spring replacement, opener service and new door installation across Miami and South Florida.',
  image: `${site.url}${site.heroImage}`,
  logo: `${site.url}${site.logo}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: mainOffice.addr1,
    addressLocality: mainOffice.name,
    addressRegion: 'FL',
    postalCode: mainOffice.zip,
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
  areaServed: [
    { '@type': 'City', name: 'Miami' },
    ...cities.map((c) => ({ '@type': 'City', name: c.name })),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garage door services',
    itemListElement: homeServices.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
  department: cities.map((c) => ({
    '@type': 'HomeAndConstructionBusiness',
    name: `${site.brand} - ${c.name}`,
    telephone: site.phone.schema,
    url: `${site.url}/${c.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.addr1,
      addressLocality: c.name,
      addressRegion: 'FL',
      postalCode: c.zip,
      addressCountry: 'US',
    },
  })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

// El mosaico: el primer bloque ocupa dos columnas, y hay uno negro y uno
// amarillo para romper la rejilla. Es lo que evita la parrilla de tarjetas
// iguales que tienen las otras landings.
const TILE_MOD = ['tile--wide tile--dark', '', '', 'tile--gold', '', 'tile--wide'];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/" />

      <main id="main">

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-tile">
            <div className="hero-tile__copy">
              <span className="eyebrow">24/7 emergency service</span>
              <h1>
                Garage doors fixed <span>the same day</span>, anywhere in Miami
              </h1>
              <p className="hero-tile__lead">
                Broken spring, jammed door or an opener that quit at the worst possible moment. Tell
                us what it is doing and a technician drives to your property with the parts on the
                truck.
              </p>

              <div className="hero-tile__actions">
                <a className="btn btn--primary btn--lg" href={site.phone.href}>
                  <Icon name="phone" />
                  Call {site.phone.display}
                </a>
                <Link className="btn btn--ghost btn--lg" href="/contact-us">
                  Book a visit
                </Link>
              </div>

              <p className="fineprint">
                Dispatch answered 24 hours a day, holidays included. Service across Miami-Dade,
                Broward and Palm Beach County. Every repair happens at your property &mdash; there is
                nothing to drop off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CARRUSEL ============ */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="rail-head">
            <h2>What is the door doing?</h2>
            <p>Scroll for more &rarr;</p>
          </div>
          <div className="rail">
            {promoRail.map((r) => (
              <article className="rail__item" key={r.title}>
                <Icon name={r.icon} className="lineicon" />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <Link className="linkarrow" href={r.href}>
                  {r.cta}
                  <Icon name="arrowRight" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CIFRAS ============ */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section className="section" id="services">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">What we do</span>
              <h2>Everything that goes wrong with a garage door</h2>
              <p>
                From a snapped torsion spring at 2 AM to a new wind-load rated door, our technicians
                handle every residential and commercial job across South Florida.
              </p>
            </div>
            <Link className="sec-head__link linkarrow" href="/contact-us">
              Book a visit
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="bento">
            {homeServices.map((s, i) => (
              <article className={`tile ${TILE_MOD[i] || ''}`.trim()} key={s.title}>
                <span className="numeral">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tile__list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POR QUE NOSOTROS ============ */}
      <section className="section section--soft" id="why">
        <div className="container split">
          <div className="split__media">
            <img
              src="/img/why-garage.jpg"
              width="1200"
              height="960"
              loading="lazy"
              decoding="async"
              alt="Garage door technician winding a torsion spring on the header bar above a residential door"
            />
            <div className="split__stat">
              <strong>38,000+</strong>
              <span>Garage doors serviced across South Florida</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why {site.brandFirst}</span>
            <h2>A local crew that actually turns up</h2>
            <p>
              {site.brand} is a South Florida company staffed by technicians who live in the
              neighbourhoods they cover. No subcontractors, no lead-selling, and nothing added to the
              invoice that you did not see first.
            </p>
            <ul className="arglist">
              {whyChecklist.map((c) => (
                <li key={c.strong}>
                  <strong>{c.strong}</strong>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn--outline" href={site.phone.href}>
              <Icon name="phone" />
              Speak with a technician
            </a>
          </div>
        </div>
      </section>

      {/* ============ APOYOS ============ */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="grid grid--4">
            {heroFeatures.map((f) => (
              <div key={f.title}>
                <Icon name={f.icon} className="lineicon" />
                <h3 style={{ fontSize: '1.06rem', margin: '16px 0 .3em' }}>{f.title}</h3>
                <p style={{ fontSize: '.94rem', marginBottom: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="section" id="process">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">How it works</span>
              <h2>Four steps to a working door</h2>
              <p>From the first call to the final safety test, you always know what happens next.</p>
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

      {/* ============ COVERAGE ============ */}
      <section className="section section--soft" id="coverage">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Coverage</span>
              <h2>Five dispatch points, one number</h2>
              <p>
                The trucks start the day at these addresses and finish it at customers&rsquo; doors.
                There is no counter to visit &mdash; pick the point closest to you to see what we
                handle in that area.
              </p>
            </div>
            <a className="sec-head__link linkarrow" href={site.phone.href}>
              {site.phone.display}
              <Icon name="arrowRight" />
            </a>
          </div>

          <div className="office-list">
            <div className="office-row office-row--main">
              <div className="office-row__city">
                <span className="office-row__tag">{mainOffice.tag}</span>
                <strong>{mainOffice.name}, FL</strong>
              </div>
              <address>
                {mainOffice.addr1}
                <br />
                {mainOffice.name}, FL {mainOffice.zip}
              </address>
              <p className="office-row__meta">{mainOffice.coverageMeta}</p>
              <a className="linkarrow office-row__go" href="#contact">
                Miami coverage
                <Icon name="arrowRight" />
              </a>
            </div>

            {cities.map((c) => (
              <div className="office-row" key={c.slug}>
                <div className="office-row__city">
                  <span className="office-row__tag">{c.county}</span>
                  <strong>{c.name}, FL</strong>
                </div>
                <address>
                  {c.addr1}
                  <br />
                  {c.name}, FL {c.zip}
                </address>
                <p className="office-row__meta">{c.coverageMeta}</p>
                <Link className="linkarrow office-row__go" href={`/${c.slug}`}>
                  {c.name} page
                  <Icon name="arrowRight" />
                </Link>
              </div>
            ))}
          </div>

          <div className="area-tags">
            {areaTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIOS ============ */}
      <section className="section section--soft" id="testimonials">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">What customers say</span>
              <h2>Recent calls, in their words</h2>
              <p>A few notes customers sent back after a repair or install across the coverage area.</p>
            </div>
          </div>

          <div className="grid grid--3">
            {testimonials.map((t) => (
              <article className="panel" key={t.name}>
                <div className="testimonial__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {'★'.repeat(t.rating)}
                  {'☆'.repeat(5 - t.rating)}
                </div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <strong>{t.name}</strong>
                <span> &mdash; {t.city}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">FAQ</span>
              <h2>Garage door questions, answered</h2>
              <p>The questions our dispatchers hear most often from South Florida homes.</p>
            </div>
          </div>

          <div className="faq">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAPA + CONTACTO ============ */}
      <section className="section section--soft" id="contact">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Contact</span>
              <h2>Get a technician moving</h2>
              <p>
                Call or write and tell us what the door is doing. The dispatch line is answered 24
                hours a day, every day of the year.
              </p>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title={`${site.brand} - ${mainOffice.name} dispatch point`}
              src={mapEmbed(mainOffice.mapQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="map-note">
            {mainOffice.addr1}, {mainOffice.name}, FL {mainOffice.zip} &mdash; this is where the
            trucks start the day. Every repair happens at your door.
          </p>

          <div className="contact-grid" style={{ marginTop: 36 }}>
            <div className="panel">
              <ul className="info-list">
                <li>
                  <strong>Phone &mdash; 24/7 dispatch</strong>
                  <a href={site.phone.href}>{site.phone.long}</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <strong>Where the work happens</strong>
                  <span>At your property, across all of South Florida</span>
                </li>
              </ul>

              <h3 style={{ marginTop: 30 }}>Dispatch hours</h3>
              <ul className="hours">
                {officeHours.map((h) => (
                  <li key={h.label}>
                    <strong>{h.label}</strong> <span>{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel panel--dark">
              <h3>What happens when you call</h3>
              <p>
                You reach our own dispatch desk, not a call centre. Tell us the city, the ZIP and
                what the door is doing, and we book the closest technician into the first window
                that suits you.
              </p>
              <p>
                Before anyone starts work you get a written breakdown of what is worn and what the
                repair involves, and nothing is touched until you have approved it.
              </p>
              <p style={{ marginBottom: 0 }}>
                If a repair we carried out fails inside the warranty period, we come back and put it
                right at no charge. That is the whole policy.
              </p>
              <Link className="btn btn--primary btn--block" href="/contact-us" style={{ marginTop: 26 }}>
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANDA FINAL ============ */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div>
              <h2>Garage door emergency? We&rsquo;re awake.</h2>
              <p>Nights, weekends and holidays included. One call and a technician is on the way.</p>
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

      <Footer />
      <CallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
