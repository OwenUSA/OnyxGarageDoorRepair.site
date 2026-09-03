import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { site, cities, mainOffice } from '../../data/site';

/* ⚠️ PENDIENTE ANTES DE PUBLICAR: site.privacyEmail sigue siendo un correo
   provisional. Se usa en los apartados 7 y 12.
   El recuadro del apartado 3 es la redaccion literal que los operadores moviles
   verifican al aprobar una campana de SMS A2P 10DLC. No reescribirla sin
   comprobar antes que sigue cumpliendo. */

const title = 'Privacy Policy';
const description = `Privacy policy for ${site.brand}: what we collect when you call, text or book a visit in South Florida, how we use it & how to request deletion.`;

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${site.brand}`,
    description,
    url: '/privacy-policy/',
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 630,
        alt: `${site.brand} — garage door repair across South Florida`,
      },
    ],
  },
  twitter: {
    title: `${title} | ${site.brand}`,
    description,
    images: [site.heroImage],
  },
};

const toc = [
  ['s1', '1. Who we are'],
  ['s2', '2. Information we collect'],
  ['s3', '3. Text messaging & mobile data'],
  ['s4', '4. How we use your information'],
  ['s5', '5. Cookies and tracking'],
  ['s6', '6. Service providers'],
  ['s7', '7. Your privacy rights'],
  ['s8', '8. How long we keep data'],
  ['s9', '9. Security'],
  ['s10', "10. Children's privacy"],
  ['s11', '11. Third-party links'],
  ['s12', '12. Changes & contact'],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/privacy-policy" />

      <main className="legal" id="main">
        <div className="container legal__inner">
          <p className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            Privacy Policy
          </p>

          <div className="legal__head">
            <h1>Privacy Policy</h1>
            <p className="legal__meta">
              {site.brand} &middot; {site.domain} &middot; Last updated: {site.legalUpdated}
            </p>
          </div>

          <div className="legal__toc">
            <ul>
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This policy explains what {site.brand} collects when you call us, text us, or ask for a
            garage door visit through this website, what we do with it, and how you can ask us to
            delete it. It applies to {site.domain} and to every location page on this domain.
          </p>

          <h2 id="s1">1. Who we are</h2>
          <p>
            {site.brand} is a garage door repair and installation company working across Miami-Dade,
            Broward and Palm Beach County, Florida. We dispatch from {mainOffice.addr1},{' '}
            {mainOffice.name}, FL {mainOffice.zip}, and our phone number is{' '}
            <a href={site.phone.href}>{site.phone.long}</a>. In this policy, &ldquo;we&rdquo;,
            &ldquo;us&rdquo; and &ldquo;our&rdquo; mean {site.brand}.
          </p>
          <p>Our other dispatch points are:</p>
          <ul>
            {cities.map((c) => (
              <li key={c.slug}>
                {c.addr1}, {c.name}, FL {c.zip}
              </li>
            ))}
          </ul>

          <h2 id="s2">2. Information we collect</h2>
          <p>We only collect what we need to schedule and complete a service visit:</p>
          <ul>
            <li>
              <strong>Contact details</strong> you give us: name, phone number, email address and
              the service address where the door is.
            </li>
            <li>
              <strong>Service details</strong>: what the door is doing, the door and opener type,
              photos you choose to send us, and notes the technician takes on site.
            </li>
            <li>
              <strong>Transaction records</strong>: the work performed, the invoice and the warranty
              term. Card payments are processed by our payment provider; we do not store full card
              numbers.
            </li>
            <li>
              <strong>Website data</strong>: pages viewed, approximate location, device and browser
              type, and how you reached the site. This is collected through cookies and similar
              technologies (see section 5).
            </li>
          </ul>
          <p>
            We do not buy contact lists and we do not collect sensitive categories of personal
            information.
          </p>

          <h2 id="s3">3. Text messaging &amp; mobile data</h2>
          <p>
            If you give us your mobile number, we may text you about your appointment:
            confirmations, the technician&rsquo;s arrival window, and follow-up about the work.
            Message and data rates may apply. Reply <strong>STOP</strong> to any message to opt out
            and <strong>HELP</strong> for help. Consent to receive text messages is never a
            condition of getting service.
          </p>

          <div className="legal__box">
            <p>
              No mobile information will be sold, rented, or shared with third parties or affiliates
              for marketing or promotional purposes.
            </p>
            <p>
              Text messaging originator opt-in data and consent will not be shared with any third
              parties.
            </p>
          </div>

          <p>
            The only parties that ever see your mobile number are the messaging platform that
            delivers our texts on our behalf and, where required, your own mobile carrier.
          </p>

          <h2 id="s4">4. How we use your information</h2>
          <ul>
            <li>To schedule, dispatch and complete your garage door service visit.</li>
            <li>To contact you about that visit by phone, text or email.</li>
            <li>To prepare estimates, invoices and warranty records.</li>
            <li>To answer questions and handle warranty callbacks.</li>
            <li>To keep the website working and to understand which pages people find useful.</li>
            <li>To meet legal, tax and permitting obligations.</li>
          </ul>

          <h2 id="s5">5. Cookies and tracking</h2>
          <p>
            This site may use cookies and similar technologies, including analytics and advertising
            tools such as Google Analytics, Google Ads and the Meta (Facebook) Pixel, to measure
            traffic and to show our ads to people who have visited the site. Under laws such as the
            California Privacy Rights Act, the use of advertising cookies can count as
            &ldquo;sharing&rdquo; personal information for cross-context behavioral advertising.
          </p>
          <p>
            You can refuse or delete cookies in your browser settings, use the Google Analytics
            opt-out browser add-on, or adjust your ad settings with Google and Meta. Blocking
            cookies does not affect your ability to call us or book a visit. This is separate from,
            and does not change, the commitment in section 3: your phone number and mobile opt-in
            data are never sold or shared for marketing.
          </p>

          <h2 id="s6">6. Service providers</h2>
          <p>
            We share personal information only with the companies that help us run the business, and
            only for that purpose: our scheduling and dispatch software, the messaging platform that
            sends appointment texts, our payment processor, our website host and analytics or
            advertising platforms as described above. They are required to protect the information
            and may not use it for their own purposes.
          </p>
          <p>
            We may also disclose information if the law requires it, to comply with a subpoena or
            court order, or to protect the safety, rights or property of a person or of our company.
            If the business is ever sold or merged, customer records may transfer as part of that
            transaction.
          </p>
          <p>
            <strong>We do not sell your personal information.</strong>
          </p>

          <h2 id="s7">7. Your privacy rights</h2>
          <p>
            Depending on where you live, you may have the right to ask us for a copy of the personal
            information we hold about you, to correct it, to delete it, or to opt out of targeted
            advertising. Florida residents, and residents of states with comprehensive privacy laws,
            may exercise these rights free of charge.
          </p>
          <p>
            To make a request, email{' '}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> or call{' '}
            <a href={site.phone.href}>{site.phone.long}</a>. We may need to verify your identity
            before acting, and we will respond within the time the applicable law allows. We will
            not discriminate against you for exercising any of these rights.
          </p>

          <h2 id="s8">8. How long we keep data</h2>
          <p>
            We keep service and invoice records for as long as needed to honour the workmanship
            warranty and to satisfy tax and legal requirements, and then we delete or anonymise
            them. Marketing contact details are kept until you opt out. Website analytics data is
            retained according to the settings of the analytics platform.
          </p>

          <h2 id="s9">9. Security</h2>
          <p>
            We use reasonable administrative and technical safeguards to protect the information we
            hold, including access controls and encrypted connections to this website. No method of
            transmission or storage is perfectly secure, so we cannot guarantee absolute security.
          </p>

          <h2 id="s10">10. Children&rsquo;s privacy</h2>
          <p>
            This site and our services are intended for adults. We do not knowingly collect personal
            information from children under 13. If you believe a child has given us information,
            contact us and we will delete it.
          </p>

          <h2 id="s11">11. Third-party links</h2>
          <p>
            Our pages link to third-party services such as Google Maps. Those companies have their
            own privacy policies, and this policy does not cover what they collect.
          </p>

          <h2 id="s12">12. Changes &amp; contact</h2>
          <p>
            If we change this policy we will post the new version here and update the &ldquo;Last
            updated&rdquo; date at the top. Material changes will be noted clearly on this page.
          </p>
          <p>Questions about this policy or about the information we hold:</p>
          <ul>
            <li>
              Email: <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
            </li>
            <li>
              Phone: <a href={site.phone.href}>{site.phone.long}</a>
            </li>
            <li>
              Mail: {site.brand}, {mainOffice.addr1}, {mainOffice.name}, FL {mainOffice.zip}
            </li>
          </ul>

          <p className="legal__back">
            <Link href="/contact-us">Contact us</Link> if you would rather speak to someone about
            your information, or <Link href="/">go back to the home page</Link>.
          </p>
        </div>
      </main>

      <Footer bottomPath="/privacy-policy" />
      <CallBar />
    </>
  );
}
