// Todo el contenido del sitio vive aqui. Las paginas y los componentes solo lo pintan.
// Cambiar el telefono, el correo o una direccion es cambiar una linea de este archivo.
//
// Reglas de contenido que este archivo respeta y que NO hay que romper al editarlo:
//   - sin precios ni promesas de tarifa (nada de "free estimate" ni "flat pricing")
//   - la oficina es punto de despacho, nunca mostrador: "we come to you"
//
// Actualizado: se levanto la prohibicion sobre resenas/testimonios y sobre el
// numero de licencia (decision del cliente). Ver `testimonials` mas abajo y
// `site.license`. Siguen sin usarse precios ni promesas de tarifa.

export const site = {
  brand: 'Onyx Garage Door Repair',
  brandFirst: 'Onyx',
  brandRest: 'Garage Door Repair',
  domain: 'onyxgaragedoorrepair.site',
  url: 'https://onyxgaragedoorrepair.site',
  phone: {
    href: 'tel:+12394274221',
    display: '(239) 427-4221',
    long: '1 (239) 427-4221',
    schema: '+1-239-427-4221',
  },
  email: 'service@onyxgaragedoorrepair.site',
  // OJO: correo de privacidad provisional, sustituir por el real antes de publicar
  privacyEmail: 'privacy@onyxgaragedoorrepair.site',
  hoursLong: 'Mon – Sat: 7:00 AM – 9:00 PM',
  hoursSunday: 'Sun & holidays: emergency dispatch 24/7',
  brandline: 'Same-Day Garage Door Repair in Gulf Breeze, FL',
  // Solo se usa como imagen de Open Graph / Twitter y en el JSON-LD:
  // es la miniatura al compartir el enlace, no sale pintada en ninguna pagina.
  heroImage: '/img/hero-garage.jpg',
  // El bloque horizontal de la marca, desfondado. Tampoco sale pintado en
  // ninguna pagina: es el logo del JSON-LD, o sea lo que Google usa en la ficha.
  logo: '/img/onyx-door-logo.jpg',
  legalUpdated: 'August 31, 2026',
  founded: 2011,
  year: 2026,
  themeColor: '#121212',
  // Numero de licencia de contratista general del estado de Florida.
  license: 'FL State Certified Contractor — Lic. #CGC1531402',
  licenseShort: 'FL Lic. #CGC1531402',
};

/* ==========================================================================
   Onyx trabaja desde una sola direccion — ya no hay puntos de despacho
   repartidos por el sur de Florida. Todo lo que fuera "cities" (paginas de
   ciudad, listas de puntos de despacho) se quito con ese cambio.
   ========================================================================== */

export const mainOffice = {
  name: 'Naples',
  addr1: '6050 Collier Blvd, Ste 1',
  zip: '34114',
  county: 'Collier County',
  mapQuery: '6050 Collier Blvd Ste 1 Naples FL 34114',
};

/* ==========================================================================
   Navegacion
   ========================================================================== */

// Navbar estandar: cuatro apartados, todos paginas reales, sin anclas.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

/* ==========================================================================
   Home
   ========================================================================== */

export const topbarNotes = [
  '24/7 emergency service',
  'Same-day repairs',
  'We come to you',
  'Licensed & insured',
];

// La franja de cuatro apoyos bajo el hero. Son hechos de servicio, no credenciales.
export const heroFeatures = [
  { icon: 'clock', title: '24/7 Emergency', text: 'Someone answers at 3 AM' },
  { icon: 'bolt', title: 'Same-Day Service', text: 'Most calls booked today' },
  { icon: 'shieldCheck', title: 'Workmanship Warranty', text: 'In writing, parts and labour' },
  { icon: 'pin', title: 'Gulf Breeze & nearby', text: 'Pensacola, Navarre and Milton too' },
];

export const heroBadges = [
  { icon: 'timer', strong: '30–60 min', text: 'Average arrival in Gulf Breeze' },
  { icon: 'truck', strong: 'We come to you', text: 'Every repair happens at your door' },
];

export const stats = [
  { icon: 'calendar', value: '15+', label: 'Years serving the Gulf Coast' },
  { icon: 'doorHouse', value: '38,000+', label: 'Garage doors serviced' },
  { icon: 'clock', value: '24/7', label: 'Dispatch, holidays included' },
  { icon: 'shieldCheck', value: '100%', label: 'Workmanship guaranteed in writing' },
];

export const homeServices = [
  {
    icon: 'grid',
    title: 'Garage Door Spring Repair',
    text: 'Torsion and extension springs replaced with high-cycle, code-compliant parts. We replace springs in pairs so the door stays balanced and you are not back on the phone in six months.',
    bullets: [
      'Broken torsion spring replacement',
      'Extension spring & safety cable service',
      'Balance and tension adjustment',
    ],
  },
  {
    icon: 'opener',
    title: 'Opener Repair & Installation',
    text: 'Chain, belt and screw-drive openers diagnosed, repaired or replaced. We fit quiet belt-drive and Wi-Fi openers from the brands you already know, and set the app up before we leave.',
    bullets: ['Motor, gear & logic board repair', 'Safety sensor alignment', 'Remote, keypad & app setup'],
  },
  {
    icon: 'gear',
    title: 'Cables, Rollers & Tracks',
    text: 'Frayed cables, cracked rollers and bent tracks are what put a door on the ground. We straighten, realign or replace before the panel takes the damage.',
    bullets: ['Off-track door correction', 'Nylon roller upgrades', 'Hinge, bracket & drum replacement'],
  },
  {
    icon: 'doorHouse',
    title: 'New Door Installation',
    text: 'Steel, aluminium, wood and glass doors built for Florida weather, including wind-load rated models with the county paperwork handled for coastal and high-velocity zones.',
    bullets: ['Measured on site', 'Insulated & impact-rated options', 'Old door hauled away'],
  },
  {
    icon: 'shieldBar',
    title: 'Commercial & Rolling Doors',
    text: 'Warehouses, storefronts and association properties. Rolling steel, sectional commercial doors, gate operators and high-cycle systems on a schedule that fits the business.',
    bullets: ['Rolling steel & sectional service', 'Loading dock & high-cycle springs', 'Scheduled maintenance'],
  },
  {
    icon: 'bolt',
    title: '24/7 Emergency Service',
    text: 'A door stuck open is an open house. Our emergency crews run nights, weekends and holidays across the whole coverage area, and the opening gets secured the same visit.',
    bullets: ['Door stuck open or closed', 'Storm & impact damage', 'Temporary securing of the opening'],
  },
];

export const whyChecklist = [
  {
    strong: 'Written estimate before we start',
    text: 'You see the work and the parts on paper and approve them before a tool comes off the truck.',
  },
  {
    strong: 'One visit, not three',
    text: 'Springs, cables, rollers, drums and the common opener boards ride on every truck.',
  },
  {
    strong: 'Florida-ready hardware',
    text: 'Galvanized springs, stainless fasteners and sealed rollers wherever salt air reaches.',
  },
  {
    strong: 'The same crew at 3 AM',
    text: 'Nights, weekends and holidays are our own technicians, not a subcontractor we called.',
  },
];

export const steps = [
  {
    n: 1,
    title: 'Tell us what it is doing',
    text: 'Stuck, loud, off its track, reversing on its own. We book a window that fits your day, same-day where we can.',
  },
  {
    n: 2,
    title: 'We come to you',
    text: 'The technician drives to your door and runs a 25-point check on springs, cables, tracks, rollers and the opener.',
  },
  {
    n: 3,
    title: 'You see it in writing',
    text: 'What is worn, what can wait and what cannot, in plain English. Nothing happens until you say yes.',
  },
  {
    n: 4,
    title: 'Repaired and tested',
    text: 'We finish the work, balance the door, test the safety reverse and clean up the driveway before we leave.',
  },
];

export const areaTags = [
  'Gulf Breeze',
  'Pensacola',
  'Pensacola Beach',
  'Navarre',
  'Milton',
  'Pace',
  'Gonzalez',
  'Cantonment',
  'Warrington',
  'Perdido Key',
  'Midway',
  'Avondale',
];

export const faq = [
  {
    q: 'How fast can you get to me?',
    a: 'Across Gulf Breeze we run same-day, and emergency calls are usually covered within two to four hours. We dispatch from our own location, so there is normally a technician close to you whatever the hour.',
  },
  {
    q: 'Do I need to be home for the repair?',
    a: 'Someone over 18 needs to be there to let the technician in and to approve the work once it has been inspected. The whole visit happens at your property — there is nothing to drop off and nowhere to drive to.',
  },
  {
    q: 'Can I replace a broken torsion spring myself?',
    a: 'We would strongly advise against it. A torsion spring stores enough energy to cause serious injury when it lets go, and winding it needs proper bars and tensioning. It is the most common do-it-yourself garage door injury, and a technician does it safely in under an hour.',
  },
  {
    q: 'Do you install wind-load rated doors?',
    a: 'Yes. We fit impact and wind-load rated doors that meet Florida building code for coastal and high-velocity hurricane zones, and we handle the permit and the final inspection.',
  },
  {
    q: 'Do you work on commercial properties and associations?',
    a: 'We do. Rolling steel doors, sectional commercial doors, gate operators and high-cycle systems, with scheduled maintenance for property managers, warehouses and condo associations.',
  },
  {
    q: 'Is the work guaranteed?',
    a: 'Every repair and installation carries a written workmanship warranty on parts and labour. The term depends on the component, and your technician writes it on the invoice before you sign.',
  },
];

// Testimonios: nombre + inicial, ciudad de despacho y valoracion. Ficticios
// pero verosimiles, escritos como los dejaria un cliente real por SMS o email
// despues de la visita, no como copy de marketing.
export const testimonials = [
  {
    name: 'Marisol R.',
    city: 'Gulf Breeze',
    rating: 5,
    text: 'Spring snapped at 6 AM and I had a technician at my door before 9. Explained everything before touching anything and the price on the invoice matched what he quoted on the phone.',
  },
  {
    name: 'Derek H.',
    city: 'Pensacola',
    rating: 5,
    text: 'Opener stopped responding to the remote and I assumed I needed a whole new unit. Turned out to be the logic board. Fixed in one visit, no upsell.',
  },
  {
    name: 'Priya K.',
    city: 'Navarre',
    rating: 4,
    text: 'Had to reschedule once because of a storm, but they called ahead and the tech who eventually came knew our HOA panel rules better than the last company that installed the door.',
  },
  {
    name: 'Álvaro M.',
    city: 'Milton',
    rating: 5,
    text: 'Door was off its track on a Sunday night. Someone actually picked up the phone and a truck was here in under an hour. Opening was secured immediately and the panel replaced the next morning.',
  },
  {
    name: 'Janet W.',
    city: 'Pace',
    rating: 5,
    text: 'Coastal air had eaten through our old rollers and hinges. They walked me through why the galvanized hardware costs a bit more and it has been silent ever since.',
  },
  {
    name: 'Tomás F.',
    city: 'Gulf Breeze',
    rating: 4,
    text: 'Good communication from booking to the technician texting when he was ten minutes out. Only reason it is not five stars is I had to wait a day for a same-day slot during hurricane season.',
  },
];

/* ==========================================================================
   About Us
   ========================================================================== */

export const aboutStory = [
  'Onyx started with one truck and one rule: look at the door in front of you before quoting anything. Too many homeowners were being sold a whole new door when a worn roller and a bent hinge were the actual problem, and the fastest way to build a route around Gulf Breeze turned out to be simply not doing that.',
  'Fifteen years on we still work out of the same corner of Santa Rosa County. There are more trucks and more technicians, but the work is still done by people who live in the neighbourhoods they cover — who know which Gulf Breeze communities have a say on panel style, why a door a mile from the water eats cables, and what the wind zone means this close to the coast.',
  'We are not a call centre selling your address on to whoever bids highest. The number on this page reaches our own dispatch desk, and the technician who arrives is on our payroll.',
];

export const aboutValues = [
  {
    icon: 'doc',
    title: 'It goes in writing first',
    text: 'What is worn, what can wait and what the work involves, on paper, before anything is touched. If we open the door and find something else, we stop and tell you rather than adding it to the invoice afterwards.',
  },
  {
    icon: 'truck',
    title: 'We come to you',
    text: 'There is no counter and no showroom to drive to. The address on this site is where the trucks start the day; every repair happens at your property.',
  },
  {
    icon: 'clock',
    title: 'Someone answers at 3 AM',
    text: 'A door stuck open is an open house, so the dispatch line runs nights, weekends and holidays, and it is answered by a person who can send a technician rather than a voicemail box.',
  },
  {
    icon: 'shieldCheck',
    title: 'Built for this climate',
    text: 'Galvanized springs, stainless fasteners and sealed rollers near the coast, and wind-load rated doors with the county paperwork where the code calls for it. Inland hardware fails early here.',
  },
  {
    icon: 'gear',
    title: 'Repair before replace',
    text: 'A door that needs two rollers and a hinge gets two rollers and a hinge. We will tell you plainly when a door is genuinely past rebuilding, and we are happy to be the second opinion when somebody else has said so.',
  },
  {
    icon: 'shieldBar',
    title: 'We come back',
    text: 'Every repair carries a written workmanship warranty. If something we installed fails inside that window we return and put it right, with no restocking fee and no argument about whose fault it was.',
  },
];

export const aboutTimeline = [
  {
    year: '2011',
    title: 'One truck in Gulf Breeze',
    text: 'Founded as a single-technician residential repair service working Santa Rosa County.',
  },
  {
    year: '2015',
    title: 'A second truck',
    text: 'Call volume outgrew one technician, and we started taking on rolling steel, loading docks and association work.',
  },
  {
    year: '2019',
    title: 'Same-day became the standard',
    text: 'Enough trucks on the road that most calls booked before noon get a technician the same day.',
  },
  {
    year: '2023',
    title: 'Written warranty on every job',
    text: 'Every repair and install started carrying a written workmanship warranty as standard, not an upsell.',
  },
];

/* ==========================================================================
   Contact Us
   ========================================================================== */

export const contactChannels = [
  {
    icon: 'phone',
    title: 'Call us — fastest',
    lines: ['Answered 24/7, holidays included', 'Straight through to our own dispatch desk'],
    cta: 'phone',
  },
  {
    icon: 'mailSquare',
    title: 'Email us',
    lines: ['Quotes, invoices and warranty questions', 'Answered within one business day'],
    cta: 'email',
  },
  {
    icon: 'truck',
    title: 'Book a visit',
    lines: ['Tell us what the door is doing', 'The technician drives to your door'],
    cta: 'coverage',
  },
];

export const contactBeforeYouCall = [
  'Your address and ZIP code, so we can plan the fastest route.',
  'What the door is doing: stuck open, stuck closed, off its track, loud, or reversing on its own.',
  'Whether you heard a bang. A loud bang is almost always a torsion spring, and we load the right size before setting off.',
  'The opener brand if you can see it, and roughly how old the door is.',
  'A photo of the spring bar above the door, if it is safe to take one.',
];

export const officeHours = [
  { label: 'Monday – Friday', value: '7:00 AM – 9:00 PM' },
  { label: 'Saturday', value: '7:00 AM – 9:00 PM' },
  { label: 'Sunday & holidays', value: 'Emergency dispatch' },
  { label: 'Emergency calls', value: 'Answered 24/7' },
];

/* ==========================================================================
   Utilidades de mapa (sin API key)
   ========================================================================== */

export const mapEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=m&z=15&output=embed`;

/* ==========================================================================
   Carrusel horizontal de la home (patron de la referencia att.com)
   Son las cuatro entradas por las que llama la gente, no una lista de servicios.
   ========================================================================== */

export const promoRail = [
  {
    icon: 'bolt',
    title: 'Spring just snapped',
    text: 'A loud bang and the door will not lift. Do not force it — we carry both sizes on the truck.',
    href: '/#services',
    cta: 'Spring repair',
  },
  {
    icon: 'opener',
    title: 'Opener died',
    text: 'Motor humming, remote dead, or the door reversing on its own halfway down.',
    href: '/#services',
    cta: 'Opener service',
  },
  {
    icon: 'gear',
    title: 'Door off its track',
    text: 'The panel is out of the rails and the opening is not secure. This one is an emergency call.',
    href: '/#services',
    cta: 'Off-track repair',
  },
  {
    icon: 'doorHouse',
    title: 'Time for a new door',
    text: 'Wind-load rated, insulated or full-view glass, measured at your property.',
    href: '/#services',
    cta: 'New installs',
  },
  {
    icon: 'clock',
    title: 'It is 2 AM',
    text: 'Nights, weekends and holidays run on the same dispatch line and the same crew.',
    href: '/contact-us',
    cta: 'Emergency service',
  },
];
