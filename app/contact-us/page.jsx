import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  mainOffice,
  contactChannels,
  contactBeforeYouCall,
  officeHours,
  faq,
  mapEmbed,
} from '../../data/site';

const title = `Contact ${site.brandFirst} | Garage Door Repair South Florida`;
const description =
  'Call or email us and a technician drives to your door. One dispatch line for all five points across Miami-Dade, Broward and Palm Beach County, answered 24 hours a day.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/contact-us/' },
  openGraph: {
    title,
    description,
    url: '/contact-us/',
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: `Contact ${site.brand} in South Florida`,
      },
    ],
  },
  twitter: { title, description, images: [site.heroImage] },
  other: { 'geo.region': 'US-FL', 'geo.placename': mainOffice.name },
};

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: title,
  description,
  url: `${site.url}/contact-us/`,
  mainEntity: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.brand,
    url: `${site.url}/`,
    telephone: site.phone.schema,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mainOffice.addr1,
      addressLocality: mainOffice.name,
      addressRegion: 'FL',
      postalCode: mainOffice.zip,
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone.schema,
      contactType: 'customer service',
      areaServed: 'US-FL',
      availableLanguage: ['English', 'Spanish'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/contact-us" />

      <main id="main">

      {/* ============ CABECERA ============ */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="page-hero__copy">
              <p className="crumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                Contact Us
              </p>
              <span className="eyebrow">Dispatch answered 24 hours a day</span>
              <h1>
                Talk to a technician, <span>not a phone tree</span>
              </h1>
              <p className="page-hero__lead">
                One number covers all five dispatch points. Tell us the city and what the door is
                doing, and we send the closest available technician &mdash; usually the same day, and
                at any hour if it is an emergency.
              </p>
              <div className="page-hero__actions">
                <a className="btn btn--primary btn--lg" href={site.phone.href}>
                  <Icon name="phone" />
                  Call {site.phone.long}
                </a>
                <a className="btn btn--ghost btn--lg" href={`mailto:${site.email}`}>
                  <Icon name="mail" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIAS DE CONTACTO ============ */}
      <section className="section" id="ways">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Ways to reach us</span>
              <h2>Three ways to get a technician moving</h2>
              <p>
                Phone is fastest for anything urgent. Email is better for quotes, invoices and
                warranty paperwork.
              </p>
            </div>
          </div>

          <div className="grid grid--3">
            {contactChannels.map((ch) => (
              <article className="tile" key={ch.title}>
                <Icon name={ch.icon} className="lineicon" />
                <h3 style={{ marginTop: 18 }}>{ch.title}</h3>
                <ul className="tile__list" style={{ borderTop: 0, paddingTop: 0, marginBottom: 22 }}>
                  {ch.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {ch.cta === 'phone' && (
                  <a className="btn btn--primary btn--block" href={site.phone.href} style={{ marginTop: 'auto' }}>
                    <Icon name="phone" />
                    {site.phone.display}
                  </a>
                )}
                {ch.cta === 'email' && (
                  <a className="btn btn--outline btn--block" href={`mailto:${site.email}`} style={{ marginTop: 'auto' }}>
                    Email us
                  </a>
                )}
                {ch.cta === 'coverage' && (
                  <a className="btn btn--outline btn--block" href="#coverage" style={{ marginTop: 'auto' }}>
                    See the coverage map
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAPA + DETALLES ============ */}
      <section className="section section--soft" id="details">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Coverage</span>
              <h2>Where the trucks start the day</h2>
              <p>
                Our main dispatch point is in {mainOffice.name}. It is not a shop and there is
                nothing to drop off &mdash; every repair happens at your property.
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
            {mainOffice.addr1}, {mainOffice.name}, FL {mainOffice.zip}
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
                  <strong>Main dispatch point</strong>
                  <span>
                    {mainOffice.addr1}, {mainOffice.name}, FL {mainOffice.zip}
                  </span>
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

              <a className="btn btn--primary btn--block" href={site.phone.href} style={{ marginTop: 26 }}>
                <Icon name="phone" />
                Call now &mdash; {site.phone.display}
              </a>
            </div>

            <div className="panel panel--dark">
              <h3>Before you call</h3>
              <p>
                None of this is required, but if you have it to hand it usually saves a second trip:
              </p>
              <ul className="checklist">
                {contactBeforeYouCall.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PUNTOS DE DESPACHO ============ */}
      <section className="section" id="coverage">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">The map</span>
              <h2>Five dispatch points across South Florida</h2>
              <p>
                Every point answers the same number. Pick the one closest to you to see what we
                handle in that area.
              </p>
            </div>
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
              <Link className="linkarrow office-row__go" href="/">
                Miami coverage
                <Icon name="arrowRight" />
              </Link>
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
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section section--soft" id="faq">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Before you book</span>
              <h2>Questions we get on the phone</h2>
              <p>The ones our dispatchers answer most often. Anything else, just ask.</p>
            </div>
            <Link className="sec-head__link linkarrow" href="/#faq">
              All questions
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="faq">
            {faq.slice(0, 4).map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
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

      <Footer bottomPath="/contact-us" />
      <CallBar secondHref="#coverage" secondLabel="Coverage" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
    </>
  );
}
