import Link from 'next/link';
import { Icon } from './Icons';
import { Logo } from './Header';
import { site, cities, mainOffice, homeServices } from '../data/site';

const SOCIAL = ['facebook', 'instagram', 'x'];

function Social() {
  return (
    <div className="footer__social">
      {SOCIAL.map((n) => (
        <a key={n} href="#" aria-label={n === 'x' ? 'X' : n[0].toUpperCase() + n.slice(1)}>
          <Icon name={n} />
        </a>
      ))}
    </div>
  );
}

// `city` es el punto de despacho de la pagina actual, si la pagina es de una ciudad.
// El despacho principal sale en el pie de TODAS las paginas.
export default function Footer({ city = null, bottomPath = '' }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo href="/" />
            <p className="footer__brandline">{site.brandline}</p>
            <Social />
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {homeServices.map((s) => (
                <li key={s.title}>
                  <Link href="/#services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Coverage</h4>
            <ul>
              <li>
                <Link href="/">{mainOffice.name}</Link>
              </li>
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <address>
              <a href={site.phone.href}>{site.phone.long}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <br />
              {city && (
                <>
                  <strong className="footer__addr-label">{city.name} dispatch</strong>
                  <br />
                  {city.addr1}
                  <br />
                  {city.name}, FL {city.zip}
                  <br />
                  <br />
                </>
              )}
              <strong className="footer__addr-label">Main dispatch</strong>
              <br />
              {mainOffice.addr1}
              <br />
              {mainOffice.name}, FL {mainOffice.zip}
              <br />
              <br />
              {site.hoursLong}
              <br />
              Sun &amp; holidays: emergency 24/7
            </address>
            <Link className="btn btn--primary btn--sm" href="/contact-us">
              Book a Visit
            </Link>
          </div>
        </div>

        <div className="footer__legalblock">
          <p>
            {site.brand} is a mobile garage door repair and installation service. The addresses on
            this site are dispatch points, not retail locations: they are where the trucks start the
            day, and every repair, installation and estimate takes place at the customer&rsquo;s
            property. Service availability and arrival times depend on the address, the hour and the
            work already booked that day.
          </p>
          <p>
            Warranty terms vary by component and are written on the invoice before signing. Wind-load
            and impact ratings apply only to doors specified and installed as rated assemblies, and
            permitting requirements differ by county and municipality.
          </p>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {site.year} {site.brand}. All rights reserved.
          </span>
          <span className="footer__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact-us">Contact</Link>
            <span>
              {site.domain}
              {bottomPath}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function CallBar({ secondHref = '/contact-us', secondLabel = 'Book a Visit' }) {
  return (
    <div className="callbar">
      <a className="btn btn--primary" href={site.phone.href}>
        <Icon name="phone" />
        Call Now
      </a>
      <a className="btn btn--ghost" href={secondHref}>
        {secondLabel}
      </a>
    </div>
  );
}
