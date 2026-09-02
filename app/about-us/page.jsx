import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  mainOffice,
  aboutStory,
  aboutValues,
  aboutTimeline,
  stats,
  steps,
} from '../../data/site';

const title = `About ${site.brand} | South Florida Garage Door Company`;
const description =
  'Who we are: a South Florida garage door company dispatching from five points between Miami and North Palm Beach, with our own technicians, written estimates and 24/7 emergency cover.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/about-us/' },
  openGraph: {
    title,
    description,
    url: '/about-us/',
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: `${site.brand} technicians working in South Florida`,
      },
    ],
  },
  twitter: { title, description, images: [site.heroImage] },
  other: { 'geo.region': 'US-FL', 'geo.placename': mainOffice.name },
};

const aboutLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: title,
  description,
  url: `${site.url}/about-us/`,
  mainEntity: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.brand,
    url: `${site.url}/`,
    telephone: site.phone.schema,
    email: site.email,
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: mainOffice.addr1,
      addressLocality: mainOffice.name,
      addressRegion: 'FL',
      postalCode: mainOffice.zip,
      addressCountry: 'US',
    },
  },
};

// El mosaico de About se rompe en otro sitio que el de la home
const TILE_MOD = ['', 'tile--wide tile--dark', '', 'tile--gold', '', 'tile--wide'];

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/about-us" />

      <main id="main">

      {/* ============ CABECERA ============ */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="page-hero__copy">
              <p className="crumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                About Us
              </p>
              <span className="eyebrow">Working South Florida since {site.founded}</span>
              <h1>
                A local garage door crew, <span>not a call centre</span>
              </h1>
              <p className="page-hero__lead">
                {site.brand} is a South Florida company with its own technicians, its own trucks and
                its own dispatch desk. We repair and install garage doors across Miami-Dade, Broward
                and Palm Beach County, and the work always happens at your door.
              </p>
              <div className="page-hero__actions">
                <a className="btn btn--primary btn--lg" href={site.phone.href}>
                  <Icon name="phone" />
                  Call {site.phone.display}
                </a>
                <Link className="btn btn--ghost btn--lg" href="/contact-us">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CIFRAS ============ */}
      <section className="stats" style={{ marginTop: 26 }}>
        <div className="container stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HISTORIA ============ */}
      <section className="section" id="story">
        <div className="container split">
          <div className="split__media">
            <img
              src="/img/why-garage.jpg"
              width="1200"
              height="960"
              loading="lazy"
              decoding="async"
              alt="Onyx technician servicing the torsion spring assembly of a residential garage door"
            />
            <div className="split__stat">
              <strong>38,000+</strong>
              <span>Garage doors serviced across South Florida</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2>Fifteen years on the same three counties</h2>
            {aboutStory.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="btn btn--outline" href={site.phone.href}>
              <Icon name="phone" />
              Speak with a technician
            </a>
          </div>
        </div>
      </section>

      {/* ============ COMO TRABAJAMOS ============ */}
      <section className="section section--soft" id="values">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">How we work</span>
              <h2>Six rules we do not bend</h2>
              <p>
                Every one of these started as a complaint somebody made about another company in this
                trade. They are the reason customers call us back instead of starting over online.
              </p>
            </div>
          </div>
          <div className="bento">
            {aboutValues.map((v, i) => (
              <article className={`tile ${TILE_MOD[i] || ''}`.trim()} key={v.title}>
                <span className="numeral">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p style={{ marginBottom: 0 }}>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HISTORIA EN FECHAS ============ */}
      <section className="section section--dark" id="history">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Our history</span>
              <h2>From one truck to five dispatch points</h2>
              <p>
                We grew by adding points where our own customers already were, not by buying leads in
                cities we had never worked.
              </p>
            </div>
          </div>
          <div className="steps">
            {aboutTimeline.map((t) => (
              <div className="step" key={t.year}>
                <span className="step__num">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUE ESPERAR ============ */}
      <section className="section" id="process">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">What to expect</span>
              <h2>What a visit from us looks like</h2>
              <p>The same four steps on every job, at every hour, in every city we cover.</p>
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

      {/* ============ DONDE TRABAJAMOS ============ */}
      <section className="section section--soft" id="coverage">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Where we work</span>
              <h2>Five dispatch points, one number</h2>
              <p>
                The trucks start the day at these addresses. There is no counter and no showroom
                &mdash; wherever you are, the technician drives to your door.
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

      {/* ============ BANDA FINAL ============ */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div>
              <h2>Ready when you are. Even at 3 AM.</h2>
              <p>
                Tell us what the door is doing and we will tell you what the repair involves before
                anyone picks up a tool.
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

      <Footer bottomPath="/about-us" />
      <CallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
    </>
  );
}
