// Todo el contenido del sitio vive aqui. Las paginas y los componentes solo lo pintan.
// Cambiar el telefono, el correo o una direccion es cambiar una linea de este archivo.
//
// Reglas de contenido que este archivo respeta y que NO hay que romper al editarlo:
//   - sin precios ni promesas de tarifa (nada de "free estimate" ni "flat pricing")
//   - sin resenas, testimonios ni estrellas
//   - sin "licensed & insured" ni numeros de licencia
//   - la oficina es punto de despacho, nunca mostrador: "we come to you"

export const site = {
  brand: 'Onyx Garage Door Repair',
  brandFirst: 'Onyx',
  brandRest: 'Garage Door Repair',
  domain: 'onyxgaragedoorrepair.site',
  url: 'https://onyxgaragedoorrepair.site',
  // OJO: telefono provisional. Owen pidio prefijo +1 561 y dijo que se cambia mas adelante.
  phone: {
    href: 'tel:+15613720148',
    display: '(561) 372-0148',
    long: '1 (561) 372-0148',
    schema: '+1-561-372-0148',
  },
  email: 'service@onyxgaragedoorrepair.site',
  // OJO: correo de privacidad provisional, sustituir por el real antes de publicar
  privacyEmail: 'privacy@onyxgaragedoorrepair.site',
  hoursLong: 'Mon – Sat: 7:00 AM – 9:00 PM',
  hoursSunday: 'Sun & holidays: emergency dispatch 24/7',
  brandline: 'Same-Day Garage Door Repair Across South Florida',
  // Solo se usa como imagen de Open Graph / Twitter y en el JSON-LD:
  // es la miniatura al compartir el enlace, no sale pintada en ninguna pagina.
  heroImage: '/img/hero-garage.jpg',
  // El bloque horizontal de la marca, desfondado. Tampoco sale pintado en
  // ninguna pagina: es el logo del JSON-LD, o sea lo que Google usa en la ficha.
  logo: '/img/logo-onyx.png',
  legalUpdated: 'August 31, 2026',
  founded: 2011,
  year: 2026,
  themeColor: '#121212',
};

/* ==========================================================================
   Despacho principal (la home) y los cuatro puntos de despacho con pagina
   ========================================================================== */

export const mainOffice = {
  name: 'Miami',
  addr1: '7950 NW 53rd St, Ste 495',
  zip: '33166',
  county: 'Miami-Dade County',
  mapQuery: '7950 NW 53rd St Ste 495 Miami FL 33166',
  tag: 'Main Dispatch',
  coverageMeta: 'Where the trucks start the day · Dispatch line open 24/7',
  dispatchedFrom: 'Miami dispatch point',
};

export const cities = [
  {
    slug: 'FortLauderdale',
    name: 'Fort Lauderdale',
    zip: '33304',
    addr1: '1520 E Sunrise Blvd, Ste 200',
    county: 'Broward County',
    mapQuery: '1520 E Sunrise Blvd Ste 200 Fort Lauderdale FL 33304',
    tag: 'Broward County',
    coverageMeta: 'Covering Fort Lauderdale, Wilton Manors, Oakland Park & the beaches',
    dispatchedFrom: 'Sunrise Boulevard dispatch point',
    localNote:
      'East of Federal Highway the salt air does the damage long before the door does. Springs, cables, hinges and rollers corrode years earlier within a mile of the beach, and a door that binds on a humid morning is usually rust on the track, not a broken opener. On coastal jobs we fit galvanized springs, stainless fasteners and sealed rollers so the repair survives the next summer.',
    services:
      'Fort Lauderdale runs from 1920s bungalows off Las Olas to new townhouse rows near Sunrise, so we carry both the short-header hardware old detached garages need and the standard sectional parts the newer builds use.',
    neighborhoods: [
      'Fort Lauderdale',
      'Las Olas',
      'Victoria Park',
      'Wilton Manors',
      'Oakland Park',
      'Lauderdale-by-the-Sea',
      'Coral Ridge',
      'Rio Vista',
      'Sunrise',
      'Plantation',
    ],
  },
  {
    slug: 'Weston',
    name: 'Weston',
    zip: '33326',
    addr1: '2141 N Commerce Pkwy, Unit 133',
    county: 'Broward County',
    mapQuery: '2141 N Commerce Pkwy Unit 133 Weston FL 33326',
    tag: 'Broward County',
    coverageMeta: 'Covering Weston, Davie, Southwest Ranches & Pembroke Pines',
    dispatchedFrom: 'Commerce Parkway dispatch point',
    localNote:
      'Almost every street in Weston sits inside an association, and the association usually has a say in panel style, colour and hardware. We work to those guidelines every week, so a replacement door matches what the community already approved instead of turning into a letter from the board three months later.',
    services:
      'Weston is a young city by Florida standards, which means most of the doors we see here are original to the house and hitting the end of their spring cycle at the same time. On a door that age we check the cycle rating before anything else.',
    neighborhoods: [
      'Weston',
      'Bonaventure',
      'Indian Trace',
      'Savanna',
      'Davie',
      'Southwest Ranches',
      'Pembroke Pines',
      'Cooper City',
      'Miramar',
      'Sunrise',
    ],
  },
  {
    slug: 'BocaRaton',
    name: 'Boca Raton',
    zip: '33498',
    addr1: '20283 FL-7, Unit 337',
    county: 'Palm Beach County',
    mapQuery: '20283 State Road 7 Unit 337 Boca Raton FL 33498',
    tag: 'Palm Beach County',
    coverageMeta: 'Covering west Boca, Parkland, Coconut Creek & Delray Beach',
    dispatchedFrom: 'State Road 7 dispatch point',
    localNote:
      'West Boca is gated community after gated community, each with its own rules on door style, glass inserts and finish. We can match a panel design and colour to what the association already approved, and on the older communities off Glades and Yamato we usually rebuild the hardware rather than sell a door that does not need replacing.',
    services:
      'The 1980s and 1990s housing stock out here still runs a lot of original tracks and undersized springs. Replacing worn hardware while the door is still on its rails costs a fraction of what it costs after it comes off them.',
    neighborhoods: [
      'Boca Raton',
      'West Boca',
      'Boca Falls',
      'Loggers Run',
      'Parkland',
      'Coconut Creek',
      'Coral Springs',
      'Delray Beach',
      'Boynton Beach',
      'Deerfield Beach',
    ],
  },
  {
    slug: 'NorthPalmBeach',
    name: 'North Palm Beach',
    zip: '33408',
    addr1: '2000 PGA Blvd, Ste 35212',
    county: 'Palm Beach County',
    mapQuery: '2000 PGA Blvd Ste 35212 North Palm Beach FL 33408',
    tag: 'Palm Beach County',
    coverageMeta: 'Covering North Palm Beach, Palm Beach Gardens, Juno Beach & Jupiter',
    dispatchedFrom: 'PGA Boulevard dispatch point',
    localNote:
      'This is the northern coastal strip, where the wind zone is unforgiving and a replacement door has to carry the right wind-load rating and permit before anyone bolts it up. Between the ocean and the Intracoastal, standard hardware corrodes fast, so coastal jobs here get galvanized springs and sealed bearings as a matter of course.',
    services:
      'Waterfront properties from Juno Beach up to Jupiter Inlet see the worst of it: cables fray, drums pit and the door starts pulling to one side. Caught early that is a morning of work rather than a new door.',
    neighborhoods: [
      'North Palm Beach',
      'Palm Beach Gardens',
      'Juno Beach',
      'Jupiter',
      'Tequesta',
      'Lake Park',
      'Singer Island',
      'Riviera Beach',
      'Palm Beach Shores',
      'West Palm Beach',
    ],
  },
];

export const getCity = (slug) => cities.find((c) => c.slug === slug);

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

export const topbarNotes = ['24/7 emergency service', 'Same-day repairs', 'We come to you'];

// La franja de cuatro apoyos bajo el hero. Son hechos de servicio, no credenciales.
export const heroFeatures = [
  { icon: 'clock', title: '24/7 Emergency', text: 'Someone answers at 3 AM' },
  { icon: 'bolt', title: 'Same-Day Service', text: 'Most calls booked today' },
  { icon: 'shieldCheck', title: 'Workmanship Warranty', text: 'In writing, parts and labour' },
  { icon: 'pin', title: 'All of Miami-Dade', text: 'And Broward and Palm Beach' },
];

export const heroBadges = [
  { icon: 'timer', strong: '30–60 min', text: 'Average arrival across Miami' },
  { icon: 'truck', strong: 'We come to you', text: 'Every repair happens at your door' },
];

export const stats = [
  { icon: 'calendar', value: '15+', label: 'Years working South Florida' },
  { icon: 'doorHouse', value: '38,000+', label: 'Garage doors serviced' },
  { icon: 'clock', value: '24/7', label: 'Dispatch, holidays included' },
  { icon: 'pin', value: '5', label: 'Dispatch points, Miami to Jupiter' },
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
  'Miami',
  'Doral',
  'Hialeah',
  'Miami Springs',
  'Coral Gables',
  'Kendall',
  'Pinecrest',
  'Miami Beach',
  'Aventura',
  'North Miami',
  'Fort Lauderdale',
  'Plantation',
  'Sunrise',
  'Davie',
  'Weston',
  'Pembroke Pines',
  'Coral Springs',
  'Boca Raton',
  'Delray Beach',
  'Boynton Beach',
  'West Palm Beach',
  'Palm Beach Gardens',
  'Juno Beach',
  'Jupiter',
];

export const faq = [
  {
    q: 'How fast can you get to me?',
    a: 'Across most of Miami-Dade we run same-day, and emergency calls are usually covered within two to four hours. We dispatch from five points between Miami and North Palm Beach, so there is normally a technician close to you whatever the hour.',
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
    a: 'Yes. We fit impact and wind-load rated doors that meet Florida building code, including Miami-Dade County approved products for coastal and high-velocity hurricane zones, and we handle the permit and the final inspection.',
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

/* ==========================================================================
   Paginas de ciudad
   ========================================================================== */

export const cityServices = [
  {
    icon: 'wrench',
    title: 'Garage Door Repair',
    sub: 'Springs, cables, rollers, tracks and panels.',
    checks: ['Same-day where we can', 'All major brands', 'Written workmanship warranty'],
  },
  {
    icon: 'doorHouse',
    title: 'Garage Door Installation',
    sub: 'New doors measured and fitted on site.',
    checks: ['Measured at your door', 'Wind-load rated options', 'Old door hauled away'],
  },
  {
    icon: 'bolt',
    title: 'Emergency Service',
    sub: 'Nights, weekends and holidays.',
    checks: ['24/7 dispatch', 'Opening secured same visit', 'Storm damage'],
  },
  {
    icon: 'shieldCheck',
    title: 'Maintenance & Tune-Ups',
    sub: 'The service that stops the 3 AM call.',
    checks: ['25-point inspection', 'Lubrication & balancing', 'Safety reverse tested'],
  },
  {
    icon: 'opener',
    title: 'Opener Repair & Install',
    sub: 'Quiet belt drives and Wi-Fi openers.',
    checks: ['All major opener brands', 'Sensor alignment', 'App and keypad setup'],
  },
  {
    icon: 'grid',
    title: 'Spring Replacement',
    sub: 'Torsion and extension, replaced in pairs.',
    checks: ['High-cycle springs', 'Balanced installs', 'Safety cables checked'],
  },
];

/* ==========================================================================
   About Us
   ========================================================================== */

export const aboutStory = [
  'Onyx started with one truck and one rule: look at the door in front of you before quoting anything. Too many homeowners were being sold a whole new door when a worn roller and a bent hinge were the actual problem, and the fastest way to build a route in South Florida turned out to be simply not doing that.',
  'Fifteen years on we dispatch from five points between Miami and North Palm Beach. There are more trucks and more technicians, but the work is still done by people who live in the neighbourhoods they cover — who know which west Boca communities have to approve a panel style, why a Fort Lauderdale door a mile from the beach eats cables, and what the wind zone means north of PGA Boulevard.',
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
    text: 'There is no counter and no showroom to drive to. The addresses on this site are dispatch points where the trucks start the day; every repair happens at your property.',
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
    title: 'One truck in Miami',
    text: 'Founded as a single-technician residential repair service working Miami-Dade.',
  },
  {
    year: '2015',
    title: 'Into Broward',
    text: 'The Fort Lauderdale point opened and we started taking on rolling steel, loading docks and association work.',
  },
  {
    year: '2019',
    title: 'West to Weston, north to Boca',
    text: 'Two more dispatch points closed the gap across Broward and into southern Palm Beach County.',
  },
  {
    year: '2023',
    title: 'North Palm Beach',
    text: 'PGA Boulevard finished the map. Every address from Miami to Jupiter now sits inside a single dispatch radius.',
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
    lines: ['Tell us the city and what the door is doing', 'The technician drives to your door'],
    cta: 'coverage',
  },
];

export const contactBeforeYouCall = [
  'The city and ZIP where the door is, so we know which dispatch point is closest.',
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

export const directionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

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
